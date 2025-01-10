"use client"

import { HttpTypes } from "@medusajs/types"
import { useState } from "react"
import ReviewProduct from "./review-product"
import ReviewsList from "./review-list"
import clsx from "clsx"

export default function ProductReview({
  customer,
  product,
  token,
}: {
  customer: HttpTypes.StoreCustomer | null
  product: HttpTypes.StoreProduct
  token?: string
}) {
  const [isReview, setIsReview] = useState(true)

  console.log(product)
  const [reviews, setReviews] = useState(
    Array.isArray(product?.metadata?.reviews) ? product.metadata.reviews : []
  )

  return (
    <div className="border border-grey-20mt-6 sm:mt-10">
      <div className="flex gap-x-2 sm:gap-x-4 mt-4 px-4 sm:px-8 md:px-10 text-sm sm:text-lg">
        <button
          onClick={() => setIsReview(!isReview)}
          className={clsx("py-2 px-2 sm:px-4 border ", {
            "border-primary text-primary transition-all duration-300 ease-in-out":
              isReview,
          })}
        >
          Đánh giá sản phẩm
        </button>
        <button
          onClick={() => setIsReview(!isReview)}
          className={clsx("py-2 px-2 sm:px-4 border ", {
            "border-primary text-primary transition-all duration-300 ease-in-out":
              !isReview,
          })}
        >
          Xem đánh giá về sản phẩm
        </button>
      </div>
      <div className="px-4 pt-4 pb-8 sm:pt-4 md:pt-6 sm:pb-8 md:pb-12 sm:px-8 md:px-10 ">
        {isReview ? (
          <ReviewProduct
            customer={customer}
            product={product}
            token={token}
            reviews={reviews}
            setReviews={setReviews}
          />
        ) : (
          <ReviewsList reviews={reviews} />
        )}
      </div>
    </div>
  )
}
