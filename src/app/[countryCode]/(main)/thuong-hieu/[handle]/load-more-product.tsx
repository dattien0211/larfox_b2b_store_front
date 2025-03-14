"use client"

import { useState } from "react"
import ShowItem from "@modules/layout/components/show-item"
import { HttpTypes } from "@medusajs/types"

type Props = {
  products: HttpTypes.StoreProduct[]
}

export default function LoadMoreProducts({ products }: Props) {
  const [visibleCount, setVisibleCount] = useState(20)

  const loadMore = () => {
    setVisibleCount((prev) => prev + 20)
  }

  return (
    <>
      <ShowItem products={products.slice(0, visibleCount)} />
      {visibleCount < products.length && (
        <div className="text-center mt-4">
          <button
            onClick={loadMore}
            className="text-sm sm:text-base capitalize rounded-full px-6 sm:px-8 py-1 mx-auto border border-primary text-primary hover:bg-primary hover:text-white"
          >
            Xem thêm
          </button>
        </div>
      )}
    </>
  )
}
