import React from "react"
import RiceSpike from "@modules/common/components/rice-spike"
import BreadcrumbSkeleton from "../bread-crumb/bread-crumb-skeleton"

export default function SortHeaderSkeleton() {
  return (
    <div className="flex px-2 py-1 lg:py-2 items-center justify-between sm:p-4 sm:min-h-[60px] bg-white rounded-lg shadow-lg mb-4 relative gap-x-4">
      <RiceSpike classIMG2="!-bottom-5 sm:!-bottom-8 -right-5" />

      {/* Breadcrumb Skeleton (Hidden on Mobile) */}
      <BreadcrumbSkeleton />

      {/* Title Skeleton (Visible on Mobile) */}
      <div className="lg:hidden h-5 w-24 bg-gray-300 rounded-md animate-pulse"></div>

      {/* Sort Dropdown Skeleton */}
      <div className="h-8 sm:w-32 lg:w-44 bg-gray-300 rounded-md animate-pulse"></div>
    </div>
  )
}
