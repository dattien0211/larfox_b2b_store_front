"use client"

import repeat from "@lib/util/repeat"
import React from "react"

const BrandsSkeleton: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="w-52 h-8 bg-gray-200 rounded mb-10 mx-auto animate-pulse"></div>
        <div className="relative">
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 pl-14 pr-14">
            {repeat(12).map((_, index) => (
              <div
                key={index}
                className="bg-white py-5 px-3 rounded-xl text-center border border-gray-200 flex flex-col items-center animate-pulse"
              >
                <div className="w-14 h-14 rounded-full bg-gray-300 mb-3"></div>
                <div className="w-20 h-4 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrandsSkeleton
