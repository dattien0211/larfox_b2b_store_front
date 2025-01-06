import { Suspense } from "react"
import { HttpTypes } from "@medusajs/types"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import PaginatedProducts from "@modules/store/templates/paginated-products"
import CategoryHeader from "@modules/categories/components/category-header"
import { SortOptions } from "@modules/categories/components/sort-category"
import FilterMenu from "@modules/categories/components/filter-menu"
import ProductBanner from "@modules/layout/components/product-banner"

const StoreTemplate = ({
  sortBy,
  minPrice,
  maxPrice,
  page,
  countryCode,
  allCategories,
}: {
  allCategories: HttpTypes.StoreProductCategory[]
  sortBy?: SortOptions
  minPrice?: string
  maxPrice?: string
  page?: string
  countryCode: string
}) => {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "moi_nhat"

  return (
    <div className="mb-24">
      <ProductBanner />
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
              minPrice={minPrice}
              maxPrice={maxPrice}
              page={pageNumber}
              countryCode={countryCode}
            />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default StoreTemplate
