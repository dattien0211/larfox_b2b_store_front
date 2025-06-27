"use client"

export default function SkeletonProductPreview() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border animate-pulse">
      <div className="flex gap-4">
        {/* Ảnh sản phẩm */}
        <div className="w-20 h-20 rounded-lg bg-gray-200" />

        <div className="flex-1 space-y-3">
          {/* Tiêu đề + thời gian */}
          <div className="flex items-center justify-between">
            <div className="w-2/3 h-5 bg-gray-300 rounded" />
            <div className="w-20 h-4 bg-gray-200 rounded" />
          </div>

          {/* Địa điểm */}
          <div className="w-1/3 h-4 bg-gray-200 rounded" />

          {/* Capabilities */}
          <div>
            <div className="w-24 h-4 bg-gray-300 rounded mb-2" />
            <div className="flex gap-2 flex-wrap">
              <div className="h-5 w-24 bg-gray-200 rounded-full" />
              <div className="h-5 w-28 bg-gray-200 rounded-full" />
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="w-24 h-4 bg-gray-300 rounded mb-2" />
            <div className="flex gap-2 flex-wrap">
              <div className="h-5 w-20 bg-gray-200 rounded-full" />
              <div className="h-5 w-24 bg-gray-200 rounded-full" />
            </div>
          </div>

          {/* Nút action */}
          <div className="flex gap-3 mt-4">
            <div className="w-36 h-9 rounded-lg bg-gray-300" />
            <div className="w-10 h-9 rounded-lg bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  )
}
