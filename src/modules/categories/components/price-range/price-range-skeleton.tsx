import React from "react"

export default function PriceRangeSkeleton() {
  return (
    <div className="bg-white mt-8 lg:mt-4 lg:px-4 lg:py-6 lg:rounded-lg lg:shadow-lg">
      {/* Skeleton Title */}
      <div className="h-6 w-20 bg-gray-300 rounded-md animate-pulse mb-4"></div>

      {/* Skeleton Slider */}
      <div className="my-6 lg:my-7 w-[98%] h-6 bg-gray-300 rounded-md animate-pulse"></div>

      {/* Skeleton Price Text */}
      <div className="flex items-center space-x-3">
        <div className="h-4 w-10 bg-gray-300 rounded-md animate-pulse"></div>
        <div className="h-4 w-6 bg-gray-300 rounded-md animate-pulse"></div>
        <div className="h-4 w-10 bg-gray-300 rounded-md animate-pulse"></div>
      </div>

      {/* Skeleton Button */}
      <div className="mt-4">
        <div className="px-8 py-2 bg-gray-300 rounded-md animate-pulse w-24"></div>
      </div>
    </div>
  )
}
