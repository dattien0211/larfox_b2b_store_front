"use client"

import { HttpTypes } from "@medusajs/types"
import { useState, Dispatch, SetStateAction } from "react"
import Image from "next/image"

import ICons from "@modules/common/icons"
import ReviewModal from "./review-modal"
import uploadFile, { UploadedFile } from "@lib/data/upload-file"
import { toast } from "@medusajs/ui"
import { reviewProduct } from "@lib/data/products"
import { Review } from "./review-list"
import { useOS } from "@lib/hooks/OSContext"

export default function ReviewProduct({
  customer,
  product,
  token,
  reviews,
  setReviews,
}: {
  customer: HttpTypes.StoreCustomer | null
  product: HttpTypes.StoreProduct
  token?: string
  reviews: Review[]
  setReviews: Dispatch<SetStateAction<any[]>>
}) {
  const { os } = useOS()
  const { Star, Camera, XMark } = ICons

  const [rating, setRating] = useState<number>(5)
  const [review, setReview] = useState<string>("")
  const [imageFiles, setImageFiles] = useState<File[]>([])
  const [imagePreviews, setImagePreviews] = useState<string[]>([])
  const [showModal, setShowModal] = useState(false)
  const [errors, setErrors] = useState({
    rating: "",
    review: "",
    image: "",
    upload: "",
  })

  const averageRating =
    reviews?.length > 0
      ? (reviews?.reduce((sum, r) => sum + r.star, 0) / reviews.length).toFixed(
          1
        )
      : "5"

  // Calculate total number of reviews
  const totalReviews = reviews?.length || 0

  // Count reviews per star rating (1 to 5)
  const starCounts = [5, 4, 3, 2, 1].map((star) => {
    const count = reviews?.filter((review) => review.star === star).length
    return { star, count, percentage: (count / totalReviews) * 100 }
  })

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      const newFiles = Array.from(files)

      const invalidFiles = newFiles.filter(
        (file) => file.size > 2 * 1024 * 1024
      )
      // Max 2MB
      if (invalidFiles.length > 0) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          image: "Một hoặc nhiều ảnh lớn hơn 2MB. Vui lòng chọn lại!",
        }))
        return
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, image: "" })) // Clear image error
      }

      const newImagePreviews = newFiles.map((file) => URL.createObjectURL(file))

      // Combine with existing files and ensure it's max 2 images
      const updatedFiles = [...imageFiles, ...newFiles].slice(0, 2)
      const updatedPreviews = [...imagePreviews, ...newImagePreviews].slice(
        0,
        2
      )

      setImageFiles(updatedFiles)
      setImagePreviews(updatedPreviews)
    }
  }

  const handleRemoveImage = (index: number) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      image: "",
      upload: "",
    }))

    const updatedFiles = [...imageFiles]
    const updatedPreviews = [...imagePreviews]

    updatedFiles.splice(index, 1) // Remove the file from the array
    updatedPreviews.splice(index, 1) // Remove the preview from the array

    setImageFiles(updatedFiles)
    setImagePreviews(updatedPreviews)
  }

  const handleOnclickReview = async () => {
    // Validation
    if (!token || !customer) {
      setShowModal(true)
      return
    }

    const isHasReviewed = reviews.some(
      (review: { user_id: string }) => review.user_id === customer.id
    )

    if (isHasReviewed) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        upload: "Bạn đã đánh giá sản phẩm này!",
      }))
      return
    }

    if (rating < 1 || rating > 5) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        rating: "Số sao sản phẩm phải từ 1 đến 5!",
      }))
      return
    }

    if (!review) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        review: "Vui lòng nhập đánh giá sản phẩm!",
      }))
      return
    }

    // Check if there are any active errors before proceeding
    const hasErrors = Object.values(errors).some((error) => error !== "")

    if (hasErrors) {
      // If there are any errors, don't proceed with the review submission
      return
    }

    // Handle Image Upload
    let imgUrl: UploadedFile[] = []
    if (imageFiles?.length) {
      try {
        const formData = new FormData()
        imageFiles.forEach((file) => formData.append("files", file))
        const imgResponse = await uploadFile(token, formData)
        imgUrl = imgResponse?.files || []
      } catch (uploadError) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          image: String(uploadError),
        }))
        return
      }
    }

    // Submit Review
    const reviewData: {
      star: number
      description: string
      images?: UploadedFile[]
    } = {
      star: Number(rating),
      description: review,
    }

    if (imgUrl.length) {
      reviewData.images = imgUrl
    }

    try {
      const response = await reviewProduct(token, product.id, reviewData)

      if (response) {
        setReviews((preReviews) =>
          response?.data?.metadata?.reviews
            ? response?.data.metadata.reviews
            : preReviews
        )
        toast.success("Thành công", {
          description: "Đánh giá sản phẩm thành công",
        })
        setReview("")
        setRating(5)
        setImageFiles([])
        setImagePreviews([])
        setErrors({
          rating: "",
          review: "",
          image: "",
          upload: "",
        })
      }
    } catch (error) {
      const errMessage =
        error instanceof Error && "response" in error
          ? (error as any).response?.data?.message
          : "Lỗi khi đánh giá sản phẩm"

      toast.error("Lỗi", {
        description: errMessage,
      })
    }
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <>
      <div className="flex flex-col md:flex-row gap-y-6 sm:gap-y-4 md:gap-x-24 items-center transition-all duration-300 ease-in-out">
        <div className="w-full sm:w-fit flex flex-row-reverse gap-4 sm:flex-col justify-between sm:justify-center items-center text-center md:text-left">
          <div className="text-xl sm:text-4xl md:text-5xl font-bold text-yellow-500 flex items-center gap-x-1 sm:gap-x-2 ">
            {averageRating}
            <span className="text-yellow-500">
              <Star size={os !== "mobile" ? 34 : 20} />
            </span>
          </div>
          {reviews?.length > 0 && (
            <p className="text-[#404040] font-semibold">
              Dựa trên {reviews?.length || 0} đánh giá
            </p>
          )}
        </div>

        <div className="hidden md:block w-[2px] h-[110px] bg-grey-15"></div>

        <div className="hidden sm:flex flex-col gap-y-2">
          {starCounts.map(({ star, count, percentage }) => (
            <div key={star} className="flex items-center">
              <div className="text-yellow-500 mr-4 flex gap-x-2">
                {/* Render stars */}
                {Array.from({ length: 5 }, (_, i) => (
                  <span
                    key={i}
                    className={`${
                      i < star ? "text-yellow-500" : "text-gray-200"
                    }`}
                  >
                    <Star size={18} />
                  </span>
                ))}
              </div>
              <div className="w-[275px] h-4 bg-gray-200 rounded-sm relative">
                <div
                  className="absolute inset-0 z-[1] h-full rounded-sm bg-primary"
                  style={{
                    width: `${!isNaN(Number(percentage)) ? percentage : 0}%`,
                  }}
                ></div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[2] text-grey-40 text-xs">
                  {!isNaN(Number(percentage.toFixed(0)))
                    ? percentage.toFixed(0)
                    : 0}
                  %
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-4 justify-center md:justify-normal">
        <button className="flex px-4 py-1 items-center border border-grey-20 justify-center">
          <Camera color="#3E3E3E" />
          <p className="text-sm ml-2">
            Có ảnh ({reviews?.filter((item) => "images" in item).length || 0})
          </p>
        </button>

        <button className="flex px-4 py-1 items-center bg-primary text-white">
          <p className="text-sm ml-2">Tổng đánh giá ({reviews?.length || 0})</p>
        </button>
      </div>

      {/* Review Form */}
      <div className="mt-6 sm:mt-8">
        {totalReviews === 0 && (
          <>
            <h1 className="font-manrope-semibold mb-4 text-base sm:text-lg">
              Hãy là người đầu tiên đánh giá
            </h1>
            {/* <div className="my-2 sm:my-4">
              <p className="text-gray-500 text-sm sm:text-base">
                Đánh giá ngay để nhận phiếu giảm giá!
              </p>
            </div> */}
          </>
        )}

        {/* Star Rating */}
        <div className="my-4 flex flex-row items-center justify-between sm:justify-normal gap-x-8">
          <h1 className="text-gray-700  md:mb-0 text-base sm:text-lg ">
            Đánh giá của bạn*
          </h1>
          <div className="flex items-center gap-x-1">
            {Array.from({ length: 5 }, (_, i) => (
              <span
                key={i}
                onClick={() => {
                  setRating(i + 1),
                    setErrors((prevErrors) => ({ ...prevErrors, rating: "" }))
                }}
                className={`cursor-pointer text-2xl ${
                  rating > i ? "text-yellow-500" : "text-gray-300"
                }`}
              >
                <Star size={os !== "mobile" ? 24 : 18} />
              </span>
            ))}
          </div>
          {errors.rating && (
            <p className="mt-2 text-xs sm:text-sm lg:text-base text-red-500">
              {errors.rating}
            </p>
          )}
        </div>
        {/* Image Upload */}
        <div className="mb-4">
          <p className="text-gray-700 mb-4 text-sm sm:text-base">
            Chọn hình ảnh (kích thước tối đa: 2MB, số tệp tối đa: 2):
          </p>
          <div className="flex items-center">
            <label
              htmlFor="fileInput"
              className="cursor-pointer bg-grey-15 py-2 px-6 rounded hover:bg-primary hover:text-white transition text-sm sm:text-base"
            >
              Chọn file ảnh
            </label>
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
              multiple // Allow multiple files
            />
          </div>
        </div>
        {/* Show Image Previews */}
        <div className="flex gap-4">
          {imagePreviews.map((preview, index) => (
            <div
              key={index}
              className="w-[120px] h-[140px] sm:w-[200px] sm:h-[220px] relative mb-4"
            >
              <Image
                src={preview}
                alt={`Image Preview ${index + 1}`}
                className="w-full h-full rounded-sm z-10 object-cover"
                width={200}
                height={220}
              />
              <span
                className="absolute top-2 right-2 z-20 text-primary cursor-pointer hover:text-grey-40"
                onClick={() => handleRemoveImage(index)}
              >
                <XMark size={22} />
              </span>
            </div>
          ))}
        </div>
        {errors.image && (
          <p className="mb-2 text-xs sm:text-sm text-red-500">{errors.image}</p>
        )}
        {/* Review Text */}
        <textarea
          placeholder="Vui lòng nhập đánh giá của bạn"
          className="w-full p-3 bg-grey-15 rounded focus:outline-none"
          rows={5}
          value={review}
          onChange={(e) => {
            setReview(e.target.value)
            setErrors((prevErrors) => ({
              ...prevErrors,
              review: "",
              upload: "",
            }))
          }}
        />
        {errors.review && (
          <p className="mt-2 text-xs sm:text-sm lg:text-base text-red-500">
            {errors.review}
          </p>
        )}
        {/* Submit Button */}

        <button
          className="block w-full max-w-[150px] p-2 sm:p-3 mt-4 bg-primary text-white font-semibold rounded hover:bg-orang-30"
          onClick={handleOnclickReview}
        >
          Đánh giá
        </button>
        {errors.upload && (
          <p className="mt-2 text-xs sm:text-sm lg:text-base text-red-500">
            {errors.upload}
          </p>
        )}
      </div>

      {/* Modal */}
      <ReviewModal showModal={showModal} closeModal={closeModal} />
    </>
  )
}
