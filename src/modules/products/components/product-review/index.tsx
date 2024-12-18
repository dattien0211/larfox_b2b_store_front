"use client"

import { useState } from "react"
import ICons from "@modules/common/icons"

export default function ProductReview() {
  const [rating, setRating] = useState<number>(0)
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [review, setReview] = useState<string>("")
  const [image, setImage] = useState<File | null>(null)
  const { Star, Camera, Verified } = ICons

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  return (
    <>
      <div className="flex gap-x-24 items-center">
        <div className="flex flex-col justify-center">
          <div className="text-5xl font-bold text-primary">0.00</div>
          <p className="text-[#404040] mt-3 font-semibold">
            Dựa trên 0 đánh giá
          </p>
        </div>

        <div className="w-[2px] h-[110px] bg-grey-15"></div>

        <div className="flex flex-col gap-y-1">
          {[5, 4, 3, 2, 1].map((star) => (
            <div key={star} className="flex items-center">
              <div className="text-primary mr-4 flex">
                {Array.from({ length: 5 }, (_, i) => (
                  <span
                    key={i}
                    className={`${i < star ? "text-primary" : "text-gray-200"}`}
                  >
                    <Star size={16} />
                  </span>
                ))}
              </div>
              <div className="w-[275px] h-3 bg-gray-200 rounded-sm">
                <div
                  className="h-3 bg-primary rounded-sm"
                  style={{ width: "0%" }}
                ></div>
              </div>
              <span className="ml-2 text-black-10 text-sm">0%</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-x-4">
        <button className="flex px-4 py-1 items-center border border-grey-20">
          <Camera color="#3E3E3E" />
          <p className="text-sm ml-2">Có ảnh (0)</p>
        </button>
        <button className="flex px-4 py-1 items-center border border-grey-20">
          <Verified color="#3E3E3E" />
          <p className="text-sm ml-2">Đã xác thực (0)</p>
        </button>
        <button className="flex px-4 py-1 items-center bg-primary text-white">
          <p className="text-sm ml-2">Tổng đánh giá (0)</p>
        </button>
      </div>

      {/* Review Form */}
      <div className="mt-12">
        <h2 className="font-manrope-extrabold mb-4 text-lg">
          Hãy là người đầu tiên đánh giá
        </h2>
        <div className="my-4">
          <p className="text-gray-500">Đánh giá ngay để nhận phiếu giảm giá!</p>
          <p className="text-gray-500">
            Địa chỉ email của bạn sẽ không được công bố. Các trường bắt buộc
            được đánh dấu *
          </p>
        </div>

        {/* Star Rating */}
        <div className="my-4 flex items-center gap-x-8">
          <p className="text-gray-700">Đánh giá của bạn*</p>
          <div className="flex items-center">
            {Array.from({ length: 5 }, (_, i) => (
              <span
                key={i}
                onClick={() => setRating(i + 1)}
                className={`cursor-pointer text-2xl ${
                  rating > i ? "text-primary" : "text-gray-300"
                }`}
              >
                <Star size={24} />
              </span>
            ))}
          </div>
        </div>

        {/* Review Text */}
        <textarea
          placeholder="Vui lòng nhập đánh giá của bạn"
          className="w-full p-3 bg-grey-15 rounded mb-4 focus:outline-none"
          rows={5}
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />

        {/* Image Upload */}
        <div className="mb-4">
          <p className="text-gray-700 mb-4">
            Chọn hình ảnh (kích thước tối đa: 2MB, số tệp tối đa: 2):
          </p>
          <div className="flex items-center">
            <label
              htmlFor="fileInput"
              className="cursor-pointer text-sm bg-grey-15 py-2 px-6 rounded hover:bg-primary hover:text-white transition"
            >
              Chọn file ảnh
            </label>
            <input
              id="fileInput"
              type="file"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>
        </div>

        {/* Name and Email Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="flex flex-col gap-y-2">
            <label htmlFor="name">Họ và tên</label>
            <input
              type="text"
              id="name"
              placeholder="Nhập họ và tên"
              className="p-3 bg-grey-15 focus:outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Nhập email"
              className="p-3 bg-grey-15 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        {/* Save Preferences Checkbox */}
        <label className="inline-flex items-center mb-4">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-primary"
          />
          <span className="ml-2 text-gray-600">
            Lưu tên, email và trang web của tôi trong trình duyệt này cho lần
            bình luận tiếp theo của tôi.
          </span>
        </label>

        {/* Submit Button */}
        <button className="block w-[150px] p-3 bg-primary text-white font-semibold rounded hover:bg-yellow-500">
          Lưu lại
        </button>
      </div>
    </>
  )
}
