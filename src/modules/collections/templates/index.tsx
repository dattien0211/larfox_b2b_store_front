//@ts-nocheck
import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import PaginatedProducts from "@modules/store/templates/paginated-products"
import { HttpTypes } from "@medusajs/types"
import { SortOptions } from "@modules/categories/components/sort-category"
import FilterMenu from "@modules/categories/components/filter-menu"
import CategoryHeader from "@modules/categories/components/category-header"
import Image from "next/image"

export default function CollectionTemplate({
  sortBy,
  minPrice,
  maxPrice,
  collection,
  page,
  countryCode,
  allCategories,
}: {
  allCategories: HttpTypes.StoreProductCategory[]
  sortBy?: SortOptions
  minPrice?: string
  maxPrice?: string
  collection: HttpTypes.StoreCollection
  page?: string
  countryCode: string
}) {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "moi_nhat"

  return (
    <div className="mb-16 sm:mb-24">
      <div className="content-container mt-4">
        {collection?.metadata?.thumbnail?.url && (
          <Image
            src={collection?.metadata?.thumbnail?.url}
            width={1200}
            height={400}
            className="w-full shadow-lg"
            alt="thumbnail collection"
          />
        )}
      </div>
      <div
        className="flex flex-col small:flex-row small:items-start py-6 gap-x-10 gap-y-4 content-container small:!mb-24 relative z-20 "
        data-testid="collection-container"
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
              minPrice={minPrice}
              maxPrice={maxPrice}
              collectionId={collection.id}
              countryCode={countryCode}
            />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
