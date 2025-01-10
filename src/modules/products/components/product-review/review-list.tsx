import React from "react"
import Image from "next/image"
import moment from "moment-timezone"

import ICons from "@modules/common/icons"

type ImageType = {
  id: string
  url: string
}

export type Review = {
  star: number
  user_id: string
  user_name: string
  created_at: string
  description: string
  images?: ImageType[]
}

type ReviewsItemProps = {
  reviews: Review[]
}

const ReviewsList: React.FC<ReviewsItemProps> = ({ reviews }) => {
  const { Star } = ICons

  console.log(reviews)

  return (
    <div className="space-y-4 sm:space-y-6 transition-all duration-300 ease-in-out">
      {reviews.map((review, index) => (
        <div
          key={index}
          className="p-4 border rounded-lg shadow-md bg-white space-y-2"
        >
          <div className="flex gap-x-2 md:gap-x-8 items-center">
            <h4 className="text-base sm:text-lg font-semibold">
              {review.user_name}
            </h4>
            <div className="font-bold text-sm sm:text-base flex items-center">
              <p className="flex gap-x-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <span
                    key={i}
                    className={`flex items-center justify-center ${
                      i < review.star ? "text-primary" : "text-gray-200"
                    }`}
                  >
                    <Star size={18} />
                  </span>
                ))}
                <span className="text-primary">({review.star})</span>
              </p>
            </div>
          </div>

          {review.images && review.images.length > 0 && (
            <div className="flex gap-4 mt-2">
              {review.images.map((image) => (
                <div
                  key={image.id}
                  className="relative w-[100px] h-[120px] sm:w-[140px] sm:h-[160px]"
                >
                  <Image
                    src={image.url}
                    alt={`Image review`}
                    className="rounded w-full h-full object-cover"
                    width={140}
                    height={160}
                  />
                </div>
              ))}
            </div>
          )}
          <p className="text-gray-700 text-sm sm:text-base">
            <span className="text-primary font-semibold">Đánh giá:</span>{" "}
            {review.description}
          </p>
          <p className="text-xs sm:text-sm text-gray-500">
            {moment(review.created_at)
              .tz("Asia/Ho_Chi_Minh") // Set the desired time zone
              .format("HH:mm:ss - DD/MM/YYYY")}
          </p>
        </div>
      ))}
    </div>
  )
}

export default ReviewsList
