import FilterMenuSkeleton from "@modules/categories/components/filter-menu/filter-menu-skeleton"
import BreadcrumbSkeleton from "@modules/layout/components/bread-crumb/bread-crumb-skeleton"
import SortHeaderSkeleton from "@modules/layout/components/sort-header/sort-hedaer-skeleton"
import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"

export default function Loading() {
  return (
    <div className="bg-primary-bg py-3 sm:py-6 ">
      {/* Breadcrumb Skeleton */}
      <section className="relative content-container py-4 sm:py-6 mb-3 sm:mb-6 rounded-lg shadow-lg bg-white">
        <BreadcrumbSkeleton />
      </section>

      {/* Blog Content Skeleton */}
      <section className="relative content-container py-4 sm:py-6 mb-6 sm:mb-10 rounded-lg shadow-lg bg-white">
        <div className="space-y-4">
          <div className="h-6 w-3/4 bg-gray-300 rounded animate-pulse"></div>
          <div className="h-4 w-2/3 bg-gray-300 rounded animate-pulse"></div>
          <div className="h-4 w-1/2 bg-gray-300 rounded animate-pulse"></div>
          <div className="h-40 bg-gray-300 rounded animate-pulse"></div>
          <div className="h-4 w-full bg-gray-300 rounded animate-pulse"></div>
          <div className="h-4 w-full bg-gray-300 rounded animate-pulse"></div>
          <div className="h-4 w-5/6 bg-gray-300 rounded animate-pulse"></div>
        </div>
      </section>

      {/* Related Blogs Skeleton */}
      <section className="relative content-container py-4 sm:py-6 my-6 sm:my-10 rounded-lg shadow-lg bg-white">
        <div className="h-6 w-48 bg-gray-300 rounded animate-pulse mb-4"></div>
        <div className="flex space-x-4 overflow-hidden">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="w-1/3 h-48 bg-gray-300 rounded-lg animate-pulse"
            ></div>
          ))}
        </div>
      </section>
    </div>
  )
}
