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
    <div className="w-full" data-testid="product-review">
      <Heading
        level="h1"
        className="text-primary text-xl sm:text-2xl capitalize"
      >
        Đánh giá sản phẩm
      </Heading>
      <div className="border border-grey-20 mt-2 sm:mt-4">
        <div className="flex gap-x-2 sm:gap-x-8 px-2 pt-2 sm:px-4 sm:pt-4 text-sm sm:text-lg">
          <button
            onClick={() => setIsReview(!isReview)}
            className={clsx("py-2 px-2 sm:px-4 border ", {
              "border-primary text-primary transition-all duration-300 capitalize ease-in-out":
                isReview,
            })}
          >
            Đánh giá sản phẩm
          </button>
          <button
            onClick={() => setIsReview(!isReview)}
            className={clsx("py-2 px-2 sm:px-4 border ", {
              "border-primary text-primary transition-all duration-300 capitalize ease-in-out":
                !isReview,
            })}
          >
            Xem đánh giá về sản phẩm
          </button>
        </div>
        <div className="px-2 pt-4 pb-8 sm:pt-4 sm:pb-8 sm:px-4 ">
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
