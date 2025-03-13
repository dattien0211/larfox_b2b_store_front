import { notFound } from "next/navigation"
import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import PaginatedProducts from "@modules/store/templates/paginated-products"
import { HttpTypes } from "@medusajs/types"
import { SortOptions } from "@modules/categories/components/sort-category"
import FilterMenu from "@modules/categories/components/filter-menu"
import { ProductTag } from "types/global"
import SortHeader from "@modules/layout/components/sort-header"

export default function CategoryTemplate({
  categories,
  sortBy,
  minPrice,
  maxPrice,
  page,
  countryCode,
  allCategories,
  paramsCategory,
  productTags,
  tagId,
}: {
  categories: HttpTypes.StoreProductCategory[]
  allCategories: HttpTypes.StoreProductCategory[]
  sortBy?: SortOptions
  minPrice?: string
  maxPrice?: string
  page?: string
  countryCode: string
  paramsCategory: string[]
  productTags?: ProductTag[]
  tagId?: string[]
}) {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "moi_nhat"

  const category = categories[categories.length - 1]

  if (!category || !countryCode) notFound()

  return (
    <div className="pb-16 sm:pb-24 bg-primary-bg">
      <div
        className="flex flex-col small:flex-row small:items-start py-4 gap-4 content-container relative z-20"
        data-testid="category-container"
      >
        <FilterMenu
          allCategories={allCategories}
          paramsCategory={paramsCategory}
          data-testid="product-filter"
          productTags={productTags}
        />

        <section className="flex-1">
          <SortHeader
            allCategories={allCategories}
            path={["danh-muc-san-pham", ...paramsCategory]}
            sortBy={sort}
          />
          {category.description && (
            <div className="mb-8 text-base-regular">
              <p>{category.description}</p>
            </div>
          )}
          <Suspense fallback={<SkeletonProductGrid />}>
            <PaginatedProducts
              sortBy={sort}
              page={pageNumber}
              minPrice={minPrice}
              maxPrice={maxPrice}
              tagId={tagId}
              categoryId={categories.map((category) => category.id)}
              countryCode={countryCode}
            />
          </Suspense>
        </section>
      </div>
    </div>
  )
}
