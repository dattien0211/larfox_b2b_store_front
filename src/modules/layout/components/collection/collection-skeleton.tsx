"use client"

import React from "react"

import repeat from "@lib/util/repeat"
import { useOS } from "@lib/hooks/OSContext"
import ProductItemSkeleton from "../product-item/product-item-skeleton"

const CollectionSkeleton: React.FC = () => {
  const { os } = useOS()

  return (
    <div className="relative content-container py-4 sm:py-6 my-6 sm:my-10 rounded-lg shadow-lg bg-white animate-pulse">
      <div className="w-full h-40 bg-gray-300 rounded mb-4"></div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {repeat(os === "desktop" ? 10 : os === "tablet" ? 6 : 4).map(
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

export default CollectionSkeleton
