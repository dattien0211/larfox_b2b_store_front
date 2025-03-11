"use client"

import { HttpTypes } from "@medusajs/types"
import React, { useState, useEffect } from "react"
import ReviewProduct from "./review-product"
import ReviewsList, { Review } from "./review-list"
import clsx from "clsx"
import { Heading } from "@medusajs/ui"

const ProductReview = ({
  customer,
  product,
  token,
}: {
  customer: HttpTypes.StoreCustomer | null
  product: HttpTypes.StoreProduct
  token?: string
}) => {
  const [isReview, setIsReview] = useState(true)

  const [reviews, setReviews] = useState<Review[]>([])

  useEffect(() => {
    // @ts-ignore
    setReviews(product.metadata?.reviews || [])
  }, [product])

  return (
    <div className="mt-6 sm:mt-10 w-full">
      <Heading level="h1" className="text-primary text-xl sm:text-2xl ">
        Đánh giá sản phẩm
      </Heading>
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
    </div>
  )
}

export default React.memo(ProductReview)
