import React from "react"
import repeat from "@lib/util/repeat"

const BreadcrumbSkeleton: React.FC = () => {
  return (
    <nav aria-label="breadcrumb" className="px-2 sm:px-4  rounded-lg">
      <ul className="list-none p-0 flex flex-wrap gap-y-1 items-center text-sm sm:text-base">
        {repeat(4).map((_, index) => (
          <BreadcrumbItem key={index} isLast={index === 3} />
        ))}
      </ul>
    </nav>
  )
}

const BreadcrumbItem: React.FC<{ isLast?: boolean }> = ({ isLast = false }) => (
  <li className="flex items-center text-nowrap">
    <span className="inline-block w-16 h-5 bg-gray-200 animate-pulse rounded-md"></span>
    {!isLast && <span className="mx-2 text-gray-400">&gt;</span>}
  </li>
)

export default BreadcrumbSkeleton
