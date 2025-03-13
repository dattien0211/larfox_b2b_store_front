import React from "react"
import "react-quill/dist/quill.snow.css"

const ProductDescriptionSkeleton = () => {
  return (
    <div
      className="w-full animate-pulse"
      data-testid="product-description-skeleton"
    >
      <div className="h-6 w-48 bg-gray-300 rounded mb-4"></div>
      <div className="border border-grey-20 px-2 pt-2 pb-6 sm:px-4 sm:pt-4 sm:pb-12 sm:mt-3 mt-6">
        <div className="h-32 bg-gray-200 rounded"></div>
      </div>
    </div>
  )
}

export default ProductDescriptionSkeleton
