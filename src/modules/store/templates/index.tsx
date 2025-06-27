import { Suspense } from "react"
import { HttpTypes } from "@medusajs/types"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import PaginatedProducts from "@modules/store/templates/paginated-products"
import { SortOptions } from "@modules/categories/components/sort-category"
import FilterMenu from "@modules/categories/components/filter-menu"
import { ProductTag } from "types/global"
import { notFound } from "next/navigation"

const StoreTemplate = ({
  categories,
  sortBy,
  minPrice,
  maxPrice,
  page,
  countryCode,
  allCategories,
  productTags,
  paramsCategory,
  tagId,
}: {
  categories: HttpTypes.StoreProductCategory[]
  allCategories: HttpTypes.StoreProductCategory[]
  sortBy?: SortOptions
  minPrice?: string
  maxPrice?: string
  page?: string
  countryCode: string
  productTags?: ProductTag[]
  paramsCategory: string[]
  tagId?: string[]
}) => {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "moi_nhat"

  const category = categories[categories.length - 1]

  if (!category || !countryCode) notFound()

  return (
    <>
      <section className="pb-16 sm:pb-24 bg-primary-bg pt-6">
        <div className="container mx-auto" data-testid="all-category-container">
          <div className="flex gap-8">
            <FilterMenu
              allCategories={allCategories}
              paramsCategory={paramsCategory}
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
                  categoryId={categories.map((category) => category.id)}
                />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/*News*/}

      <section id="news" className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-light text-center mb-4">
            Customized{" "}
            <span className="gradient-text font-medium">Business News</span>
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Quick start everyday with news summary from our AI agent
          </p>
          <div className="grid md:grid-cols-5 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <i className="fas fa-university text-3xl text-blue-600 mb-4"></i>
              <h3 className="font-semibold mb-3">
                Government Policy Highlights
              </h3>
              <p className="text-sm text-gray-700 mb-4">
                New trade regulations affecting B2B commerce in Southeast
                Asia...
              </p>
              <span className="text-xs text-blue-600 font-medium">
                Policy Update
              </span>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
              <i className="fas fa-chart-line text-3xl text-green-600 mb-4"></i>
              <h3 className="font-semibold mb-3">Financial News Highlights</h3>
              <p className="text-sm text-gray-700 mb-4">
                Interest rates impact on supply chain financing options...
              </p>
              <span className="text-xs text-green-600 font-medium">
                Financial Times
              </span>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl">
              <i className="fas fa-lightbulb text-3xl text-yellow-600 mb-4"></i>
              <h3 className="font-semibold mb-3">Business Opportunities</h3>
              <p className="text-sm text-gray-700 mb-4">
                Emerging markets showing increased demand for tech services...
              </p>
              <span className="text-xs text-yellow-600 font-medium">
                Market Research
              </span>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
              <i className="fas fa-trending-up text-3xl text-purple-600 mb-4"></i>
              <h3 className="font-semibold mb-3">Social Trends</h3>
              <p className="text-sm text-gray-700 mb-4">
                Sustainability requirements driving supplier selection...
              </p>
              <span className="text-xs text-purple-600 font-medium">
                Trend Analysis
              </span>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl">
              <i className="fas fa-handshake text-3xl text-red-600 mb-4"></i>
              <h3 className="font-semibold mb-3">M&amp;A News</h3>
              <p className="text-sm text-gray-700 mb-4">
                Major logistics companies announce strategic partnerships...
              </p>
              <span className="text-xs text-red-600 font-medium">
                Business Wire
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default StoreTemplate
