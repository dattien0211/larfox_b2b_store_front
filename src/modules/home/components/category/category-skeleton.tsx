import repeat from "@lib/util/repeat"
import React from "react"

const CategorySkeleton: React.FC = () => {
  return (
    <div className="relative content-container py-4 sm:pt-6 sm:pb-8 mb-6 sm:mb-10 bg-white rounded-lg shadow-lg">
      <div className="w-32 h-6 bg-gray-300 rounded mb-4 animate-pulse"></div>

      <div className="grid grid-cols-3 sm:grid-cols-4 small:grid-cols-6 w-full border-t border-l border-primary/35">
        {repeat(12).map((_, index) => (
          <div
            key={index}
            className="group cursor-pointer border-b border-r border-primary/35 hover:z-[1] hover:shadow-lg transition-all duration-150 ease-in-out"
          >
            <div className="w-full flex flex-col items-center justify-center p-2 sm:p-3 sm:gap-y-4 gap-y-2 overflow-hidden">
              <div className="w-[95%] sm:w-[85%] aspect-square bg-gray-300 rounded-md animate-pulse"></div>
              <div className="w-24 h-4 bg-gray-300 rounded animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategorySkeleton
