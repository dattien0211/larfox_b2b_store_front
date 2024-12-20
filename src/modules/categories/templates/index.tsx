import { notFound } from "next/navigation"
import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import PaginatedProducts from "@modules/store/templates/paginated-products"
import { HttpTypes } from "@medusajs/types"
import BannerProduct from "@modules/layout/components/banner-product"
import IMGS from "@constants/IMGS"
import CategoryFilter from "@modules/categories/components/category-filter"
import PriceRange from "@modules/categories/components/price-range"
import SizeFilter from "@modules/categories/components/size-filter"
import TagFilter from "@modules/categories/components/tag-filter"
import CategoryHeader from "@modules/categories/components/category-header"
import { SortOptions } from "@modules/categories/components/sort-category"

export default function CategoryTemplate({
  categories,
  sortBy,
  page,
  countryCode,
  allCategories,
  paramsCategory,
}: {
  categories: HttpTypes.StoreProductCategory[]
  allCategories: HttpTypes.StoreProductCategory[]
  sortBy?: SortOptions
  page?: string
  countryCode: string
  paramsCategory: string[]
}) {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "moi_nhat"

  const category = categories[categories.length - 1]

  if (!category || !countryCode) notFound()

  return (
    <div className="mb-24">
      <BannerProduct imageSrc={IMGS.Banner4} title="Sắp ra mắt" />

      <div
        className="flex flex-col small:flex-row small:items-start py-6 gap-x-10 content-container small:!mb-24 relative z-20"
        data-testid="category-container"
      >
        {/* <RefinementList sortBy={sort} data-testid="sort-by-container" /> */}
        <div className="w-[280px]">
          {allCategories && allCategories.length > 0 && (
            <CategoryFilter
              allCategories={allCategories}
              paramsCategory={paramsCategory}
            />
          )}
          <PriceRange />
          <SizeFilter />
          <TagFilter />
        </div>

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
              categoryId={categories.map((category) => category.id)}
              countryCode={countryCode}
            />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
