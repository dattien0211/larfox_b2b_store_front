import FilterMenuSkeleton from "@modules/categories/components/filter-menu/filter-menu-skeleton"
import SortHeaderSkeleton from "@modules/layout/components/sort-header/sort-hedaer-skeleton"
import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"

export default function Loading() {
  return (
    <div className="bg-primary-bg py-3 sm:py-6 ">
      <div
        className="flex flex-col small:flex-row small:items-start py-4 gap-4 content-container relative z-20"
        data-testid="category-container"
      >
        <FilterMenuSkeleton />
        <section className="flex-1">
          <SortHeaderSkeleton />
          <SkeletonProductGrid />
        </section>
      </div>
    </div>
  )
}
