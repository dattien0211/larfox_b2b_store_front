"use client"

import React from "react"

const BlogSkeleton: React.FC = () => {
  return (
    <div className="relative content-container py-4 sm:py-6 my-6 sm:my-10 rounded-lg shadow-lg bg-white">
      <div className="w-32 h-6 bg-gray-300 rounded mb-4 animate-pulse"></div>

      <div className="mt-4 sm:mt-6 flex flex-col-reverse sm:flex-row gap-4 items-center justify-center">
        <div className="w-full md:w-3/5 ">
          <div className="w-full h-[220px] md:h-[380px] bg-gray-300 rounded-lg animate-pulse"></div>
        </div>

        <div className="w-full hidden sm:flex flex-col gap-4 justify-between items-center h-full">
          <div className="w-full h-[182px] bg-gray-300 rounded-lg animate-pulse"></div>
          <div className="w-full h-[182px] bg-gray-300 rounded-lg animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}

export default BlogSkeleton
