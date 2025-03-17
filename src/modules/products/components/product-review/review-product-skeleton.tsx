import React from "react"

const ReviewProductSkeleton: React.FC = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg animate-pulse">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-gray-300 rounded-full" />
        <div className="flex-1">
          <div className="w-1/3 h-4 bg-gray-300 rounded mb-2" />
          <div className="w-1/2 h-3 bg-gray-200 rounded" />
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <div className="w-full h-3 bg-gray-200 rounded" />
        <div className="w-5/6 h-3 bg-gray-200 rounded" />
        <div className="w-4/6 h-3 bg-gray-200 rounded" />
      </div>
    </div>
  )
}

export default ReviewProductSkeleton
