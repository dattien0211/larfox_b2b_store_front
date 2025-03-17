import React from "react"

export default function CategoryFilterSkeleton() {
  return (
    <div className="lg:py-6 lg:px-4 lg:rounded-md lg:shadow-lg lg:bg-white">
      {/* Skeleton Title */}
      <div className="h-6 w-48 bg-gray-300 rounded-md animate-pulse mb-4"></div>

      {/* Skeleton Categories */}
      <div className="space-y-6 mt-6">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="flex items-center space-x-2">
            {/* Checkbox Skeleton */}
            <div className="w-5 h-5 bg-gray-300 rounded-md animate-pulse"></div>

            {/* Text Skeleton */}
            <div className="h-4 w-32 bg-gray-300 rounded-md animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>
  )
}
