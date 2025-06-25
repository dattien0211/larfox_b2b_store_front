import { getProductsListWithSort } from "@lib/data/products"
import { getRegion } from "@lib/data/regions"
import { Pagination } from "@modules/store/components/pagination"
import { SortOptions } from "@modules/categories/components/sort-category"
import clsx from "clsx"
import ProductItem from "@modules/layout/components/product-item"

const PRODUCT_LIMIT = 16

type PaginatedProductsParams = {
  limit: number
  collection_id?: string[]
  category_id?: string[]
  id?: string[]
  order?: string
  min_price?: number
  max_price?: number
  tag_id?: string[]
}

export default async function PaginatedProducts({
  sortBy,
  minPrice,
  maxPrice,
  page,
  collectionId,
  categoryId,
  productsIds,
  countryCode,
  tagId,
  isSearch,
}: {
  sortBy?: SortOptions
  minPrice?: string
  maxPrice?: string
  page: number
  collectionId?: string
  categoryId?: string[]
  productsIds?: string[]
  countryCode: string
  tagId?: string[]
  isSearch?: boolean
}) {
  const queryParams: PaginatedProductsParams = {
    limit: PRODUCT_LIMIT,
  }

  if (collectionId) {
    queryParams["collection_id"] = [collectionId]
  }

  if (tagId && tagId.length > 0) queryParams["tag_id"] = [...tagId]

  if (categoryId) queryParams["category_id"] = [...categoryId]

  if (productsIds) {
    queryParams["id"] = productsIds
  }

  if (sortBy === "moi_nhat") {
    queryParams["order"] = "created_at"
  }

  if (minPrice) {
    queryParams["min_price"] = Number(minPrice)
  }

  if (maxPrice) {
    queryParams["max_price"] = Number(maxPrice)
  }

  const sortOrder =
    sortBy === "giam_dan"
      ? "price_desc"
      : sortBy === "tang_dan"
      ? "price_asc"
      : undefined

  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }

  let {
    response: { products, count },
  } = await getProductsListWithSort({
    page,
    queryParams,
    sortBy: sortOrder,
    countryCode,
  })

  const totalPages = Math.ceil(count / PRODUCT_LIMIT)

  if (products.length <= 0) return <></>

  return (
    <>
      <ul
        className={clsx("grid gap-4", {
          "grid-cols-3 md:grid-cols-4": isSearch,
        })}
        data-testid="products-list"
      >
        {products.map((p) => {
          return (
            <div key={p.id}>
              {/* <ProductPreview product={p}/> */}
              <ProductItem product={p} />
            </div>
          )
        })}
      </ul>
      {totalPages > 1 && (
        <Pagination
          data-testid="product-pagination"
          page={page}
          totalPages={totalPages}
        />
      )}
    </>
  )
}
