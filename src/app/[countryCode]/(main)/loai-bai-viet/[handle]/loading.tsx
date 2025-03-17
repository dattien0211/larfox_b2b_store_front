import RiceSpike from "@modules/common/components/rice-spike"
import BlogCardSkeleton from "@modules/layout/components/blogs/blog-card-skeleton"

export default function Loading() {
  return (
    <div className="bg-primary-bg py-3 sm:py-6 ">
      <div className="content-container">
        <section className="relative content-container py-4 sm:py-6 mb-6 sm:mb-10 rounded-lg shadow-lg bg-white">
          <RiceSpike />
          <div className="h-7 w-48 bg-gray-200 rounded animate-pulse mx-auto mb-4"></div>

          {/* Grid Skeleton */}
          <div className="mt-3 sm:mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {[...Array(12)].map((_, index) => (
              <BlogCardSkeleton key={index} />
            ))}
          </div>

          {/* Pagination Skeleton */}
          <div className="mt-6 flex justify-center space-x-2">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="h-8 w-8 bg-gray-300 rounded animate-pulse"
              ></div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
