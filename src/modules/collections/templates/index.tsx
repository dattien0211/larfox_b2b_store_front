import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import PaginatedProducts from "@modules/store/templates/paginated-products"
import { HttpTypes } from "@medusajs/types"
import { SortOptions } from "@modules/categories/components/sort-category"
import FilterMenu from "@modules/categories/components/filter-menu"
import CategoryHeader from "@modules/categories/components/category-header"

export default function CollectionTemplate({
  sortBy,
  collection,
  page,
  countryCode,
  allCategories,
}: {
  allCategories: HttpTypes.StoreProductCategory[]
  sortBy?: SortOptions
  collection: HttpTypes.StoreCollection
  page?: string
  countryCode: string
}) {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "moi_nhat"

  return (
    <div className="mb-24">
      <div className="flex items-center gap-x-2 mt-6  content-container">
        <h1 className="text-xl-semi md:text-2xl-semi text-primary font-times">
          {collection.title}
        </h1>
      </div>
      <div
        className="flex flex-col small:flex-row small:items-start py-6 gap-x-10 gap-y-4 content-container small:!mb-24 relative z-20 "
        data-testid="category-container"
      >
        <FilterMenu
          allCategories={allCategories}
          paramsCategory={[]}
          data-testid="product-filter"
        />

        <div className="flex-1">
          <CategoryHeader
            allCategories={allCategories}
            path={["danh-muc-san-pham"]}
            sortBy={sort}
          />

          <Suspense fallback={<SkeletonProductGrid />}>
            <PaginatedProducts
              sortBy={sort}
              page={pageNumber}
              collectionId={collection.id}
              countryCode={countryCode}
            />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
