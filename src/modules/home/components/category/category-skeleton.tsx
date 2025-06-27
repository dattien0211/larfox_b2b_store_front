import repeat from "@lib/util/repeat"
import React from "react"

const CategorySkeleton: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="w-52 h-8 bg-gray-200 rounded mb-10 mx-auto animate-pulse"></div>
        <div className="relative">
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 pl-14 pr-14">
            {repeat(12).map((_, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl text-center border border-gray-200 min-w-[200px] w-full max-w-sm flex flex-col items-center"
              >
                <div className="w-20 h-20 bg-gray-200 rounded-lg mb-5 animate-pulse"></div>
                <div className="w-28 h-5 bg-gray-200 rounded mb-2 animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategorySkeleton
