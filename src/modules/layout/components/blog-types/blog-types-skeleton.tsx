"use client"

import React from "react"

import repeat from "@lib/util/repeat"
import { useOS } from "@lib/hooks/OSContext"

const BlogTypeSkeleton: React.FC = () => {
  const { os } = useOS()

  return (
    <div className="relative content-container py-6 sm:py-8 my-6 sm:my-10 rounded-lg shadow-lg bg-white">
      <div className="w-32 h-6 bg-gray-300 rounded mb-4 animate-pulse"></div>

      <div className="mt-4 sm:mt-6 grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {repeat(os === "mobile" ? 6 : 8).map((_, index) => (
          <div
            key={index}
            className="group bg-gray-100 rounded-lg shadow-md overflow-hidden flex flex-col sm:flex-row items-center justify-normal sm:justify-between gap-x-4 animate-pulse"
          >
            <div className="relative w-2/3 sm:w-1/2 h-[80px] sm:h-24 bg-gray-300"></div>
            <div className="p-2 w-full sm:w-32">
              <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogTypeSkeleton
