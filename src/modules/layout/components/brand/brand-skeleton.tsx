"use client"

import repeat from "@lib/util/repeat"
import React from "react"

const BrandsSkeleton: React.FC = () => {
  return (
    <div className="relative content-container py-4 sm:py-6 my-6 sm:my-10 rounded-lg shadow-lg bg-white">
      <div className="w-32 h-6 bg-gray-300 rounded mb-4 animate-pulse"></div>

      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4">
        {repeat(12).map((_, index) => (
          <div
            key={index}
            className="animate-pulse flex justify-center items-center border border-primary/35 p-2 sm:p-4 rounded-lg bg-gray-200"
          >
            <div className="w-24 h-24 bg-gray-300 rounded-md"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BrandsSkeleton
