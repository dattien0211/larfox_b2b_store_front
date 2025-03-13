"use client"

import repeat from "@lib/util/repeat"
import React from "react"

const SkeletonBox = ({ className }: { className: string }) => (
  <div className={`bg-gray-300 w-full animate-pulse ${className}`} />
)

const FlashSaleSkeleton = () => {
  return (
    <div className="relative py-3 sm:py-6 my-6 sm:my-10 content-container bg-white rounded-lg shadow-lg">
      <SkeletonBox className="h-6 w-40 mb-4" />
      <div className="mt-4 flex flex-col md:flex-row items-center justify-center gap-4">
        <SkeletonBox className="w-full md:w-1/2 h-32 md:h-56 rounded-lg" />
        <SkeletonBox className="w-full md:w-1/2 h-32 md:h-56 rounded-lg" />
      </div>
      <div className="mt-2 sm:mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {repeat(5).map((_, index) => (
          <SkeletonBox key={index} className="h-52 sm:h-72 rounded-lg" />
        ))}
      </div>
    </div>
  )
}

export default FlashSaleSkeleton
