"use client"

export default function FilterMenuSkeleton() {
  return (
    <div className="w-80 bg-white p-6 rounded-xl shadow-sm h-fit animate-pulse">
      {/* Tiêu đề */}
      <div className="h-6 bg-gray-300 rounded w-2/3 mb-4" />

      {/* Danh sách loading item */}
      <div className="space-y-4 mt-6">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div key={idx} className="flex items-center space-x-2">
            {/* ô checkbox giả */}
            <div className="w-5 h-5 rounded border-2 border-gray-300 bg-gray-200" />
            {/* chữ loading */}
            <div className="h-4 bg-gray-200 rounded w-3/4" />
          </div>
        ))}
      </div>
    </div>
  )
}
