import { Suspense } from "react"
import { HttpTypes } from "@medusajs/types"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import PaginatedProducts from "@modules/store/templates/paginated-products"
import { SortOptions } from "@modules/categories/components/sort-category"
import FilterMenu from "@modules/categories/components/filter-menu"
import { ProductTag } from "types/global"

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
    <section className="pb-16 sm:pb-24 bg-primary-bg pt-6">
      <div
        className="container mx-auto px-4"
        data-testid="all-category-container"
      >
        <div className="flex gap-8">
          <FilterMenu
            allCategories={allCategories}
            paramsCategory={[]}
            data-testid="product-filter"
            productTags={productTags}
          />

          <div className="flex-1">
            {/*<SortHeader*/}
            {/*  allCategories={allCategories}*/}
            {/*  path={["danh-muc-san-pham"]}*/}
            {/*  sortBy={sort}*/}
            {/*/>*/}

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
    </section>
  )
}

export default StoreTemplate
