import FilterMenuSkeleton from "@modules/categories/components/filter-menu/filter-menu-skeleton"
import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"

export default function Loading() {
  return (
    <div className="bg-primary-bg pb-16 sm:pb-24 pt-4">
      <section className="content-container">
        <div className="w-full h-[80px] sm:h-[260px] bg-white rounded-md shadow-lg animate-pulse"></div>
      </section>
      <div
        className="flex flex-col small:flex-row small:items-start py-4 gap-4 container relative z-20"
        data-testid="category-container"
      >
        <FilterMenuSkeleton />
        <section className="flex-1">
          <SkeletonProductGrid />
        </section>
      </div>
    </div>
  )
}
