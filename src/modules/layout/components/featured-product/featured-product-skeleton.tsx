"use client"

import repeat from "@lib/util/repeat"
import React from "react"
import { useOS } from "@lib/hooks/OSContext"
import ProductItemSkeleton from "../product-item/product-item-skeleton"

const FeaturedProductSkeleton: React.FC = () => {
  const { os } = useOS()

  return (
    <div className="relative content-container py-4 sm:py-6 my-6 sm:my-10 rounded-lg shadow-lg bg-white animate-pulse">
      <div className="w-32 h-6 bg-gray-300 rounded mb-4 animate-pulse"></div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {repeat(os === "desktop" ? 15 : os === "tablet" ? 9 : 6).map(
          (_, index) => (
            <ProductItemSkeleton key={index} />
          )
        )}
      </div>

      <div className="mt-2 sm:mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="w-full h-8 bg-gray-300 rounded"></div>
      </div>
    </div>
  )
}

export default FeaturedProductSkeleton
