import { notFound } from "next/navigation"
import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import PaginatedProducts from "@modules/store/templates/paginated-products"
import { HttpTypes } from "@medusajs/types"
import CategoryHeader from "@modules/categories/components/category-header"
import { SortOptions } from "@modules/categories/components/sort-category"
import FilterMenu from "@modules/categories/components/filter-menu"
import ProductBanner from "@modules/layout/components/product-banner"
import { ProductTag } from "types/global"

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
    <div className="mb-16 sm:mb-24">
      <ProductBanner />

      <div
        className="flex flex-col small:flex-row small:items-start py-6 gap-x-10 gap-y-4 content-container small:!mb-24 relative z-20"
        data-testid="category-container"
      >
        <FilterMenu
          allCategories={allCategories}
          paramsCategory={paramsCategory}
          data-testid="product-filter"
          productTags={productTags}
        />

        <div className="flex-1">
          <CategoryHeader
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
        </div>
      </div>
    </div>
  )
}
