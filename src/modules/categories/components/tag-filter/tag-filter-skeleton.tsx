import React from "react"

export default function TagFilterSkeleton() {
  return (
    <div className="bg-white mt-8 lg:mt-4 lg:px-4 lg:py-6 lg:rounded-lg lg:shadow-lg">
      {/* Skeleton Title */}
      <div className="h-6 w-16 bg-gray-300 rounded-md animate-pulse mb-4"></div>

      {/* Skeleton Tags */}
      <div className="flex flex-wrap mt-4 gap-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="px-4 py-2 bg-gray-300 rounded-md animate-pulse w-16 h-6"
          ></div>
        ))}
      </div>
    </div>
  )
}
