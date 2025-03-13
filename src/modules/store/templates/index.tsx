import { Suspense } from "react"
import { HttpTypes } from "@medusajs/types"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import PaginatedProducts from "@modules/store/templates/paginated-products"
import SortHeader from "@modules/layout/components/sort-header"
import { SortOptions } from "@modules/categories/components/sort-category"
import FilterMenu from "@modules/categories/components/filter-menu"
import ProductBanner from "@modules/layout/components/collection-banner"
import { ProductTag } from "types/global"
import RiceSpike from "@modules/common/components/rice-spike"

const StoreTemplate = ({
  sortBy,
  minPrice,
  maxPrice,
  page,
  countryCode,
  allCategories,
  productTags,
  tagId,
}: {
  allCategories: HttpTypes.StoreProductCategory[]
  sortBy?: SortOptions
  minPrice?: string
  maxPrice?: string
  page?: string
  countryCode: string
  productTags?: ProductTag[]
  tagId?: string[]
}) => {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "moi_nhat"

  return (
    <div className="pb-16 sm:pb-24 bg-primary-bg">
      <ProductBanner />
      <div
        className="flex flex-col small:flex-row small:items-start py-4 gap-x-4 gap-y-4 content-container relative z-20 "
        data-testid="all-category-container"
      >
        <FilterMenu
          allCategories={allCategories}
          paramsCategory={[]}
          data-testid="product-filter"
          productTags={productTags}
        />

        <div className="flex-1">
          <SortHeader
            allCategories={allCategories}
            path={["danh-muc-san-pham"]}
            sortBy={sort}
          />

          <Suspense fallback={<SkeletonProductGrid />}>
            <PaginatedProducts
              sortBy={sort}
              minPrice={minPrice}
              maxPrice={maxPrice}
              tagId={tagId}
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
