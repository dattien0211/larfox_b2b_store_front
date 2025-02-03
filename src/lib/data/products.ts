import { sdk } from "@lib/config"
import { HttpTypes } from "@medusajs/types"
import { cache } from "react"
import { getRegion } from "./regions"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import { sortProducts } from "@lib/util/sort-products"
import { getProductPrice } from "@lib/util/get-product-price"
import client from "@lib/util/client"
import { UploadedFile } from "./upload-file"
import { PaginatedProductTagList } from "types/global"

export const getProductsById = cache(async function ({
  ids,
  regionId,
}: {
  ids: string[]
  regionId: string
}) {
  return sdk.store.product
    .list(
      {
        id: ids,
        region_id: regionId,
        fields:
          "*variants.calculated_price,+variants.inventory_quantity,*categories,*metadata",
      },
      { next: { tags: ["products"] } }
    )
    .then(({ products }) => products)
})

export const getProductByHandle = cache(async function (
  handle: string,
  regionId: string
) {
  return sdk.store.product
    .list(
      {
        handle,
        region_id: regionId,
        fields:
          "*variants.calculated_price,+variants.inventory_quantity,*categories,*metadata",
      },
      { next: { tags: ["products"] } }
    )
    .then(({ products }) => products[0])
})

export const getProductsList = cache(async function ({
  pageParam = 1,
  queryParams,
  countryCode,
}: {
  pageParam?: number
  queryParams?: HttpTypes.FindParams & HttpTypes.StoreProductParams
  countryCode: string
}): Promise<{
  response: { products: HttpTypes.StoreProduct[]; count: number }
  nextPage: number | null
  queryParams?: HttpTypes.FindParams & HttpTypes.StoreProductParams
}> {
  const limit = queryParams?.limit || 12
  const offset = pageParam * limit
  const region = await getRegion(countryCode)

  if (!region) {
    return {
      response: { products: [], count: 0 },
      nextPage: null,
    }
  }

  return sdk.store.product
    .list(
      {
        limit,
        offset,
        region_id: region.id,
        fields:
          "*variants.calculated_price,+variants.inventory_quantity,*categories,*metadata",
        ...queryParams,
      },
      { next: { tags: ["products"] } }
    )
    .then(({ products, count }) => {
      const nextPage = count > offset + limit ? pageParam + 1 : null
      return {
        response: {
          products,
          count,
        },
        nextPage: nextPage,
        queryParams,
      }
    })
})

/**
 * This will fetch 100 products to the Next.js cache and sort them based on the sortBy parameter.
 * It will then return the paginated products based on the page and limit parameters.
 */
export const getProductsListWithSort = cache(async function ({
  page = 0,
  queryParams,
  sortBy = "created_at",
  countryCode,
  defaultFetchLimit = 100,
}: {
  page?: number
  queryParams?: HttpTypes.FindParams &
    HttpTypes.StoreProductParams & { min_price?: number; max_price?: number }
  sortBy?: SortOptions
  countryCode: string
  defaultFetchLimit?: number
}): Promise<{
  response: { products: HttpTypes.StoreProduct[]; count: number }
  nextPage: number | null
  queryParams?: HttpTypes.FindParams & HttpTypes.StoreProductParams
}> {
  const limit = queryParams?.limit || 12

  // Destructure min_price and max_price from queryParams
  const { min_price, max_price, ...restQueryParams } = queryParams || {}
  const offset = page * limit > defaultFetchLimit ? (page - 1) * limit : 0

  const {
    response: { products, count },
  } = await getProductsList({
    pageParam: offset,
    queryParams: {
      ...restQueryParams,
      limit: defaultFetchLimit,
    },
    countryCode,
  })

  let filteredProductsByPrice: HttpTypes.StoreProduct[] = []

  if (min_price && max_price) {
    // Map through products and calculate the price for each
    const mappedProducts = products.map((product) => {
      const { cheapestPrice } = getProductPrice({ product }) // Assuming getProductPrice returns a price object
      return { ...product, ...cheapestPrice } // Merge product with price details
    })

    // Apply price filtering based on min_price and max_price
    filteredProductsByPrice = mappedProducts.filter((product) => {
      const productPrice = product.calculated_price_number || 0 // Use the price field populated by getProductPrice
      const meetsMinPrice =
        min_price !== undefined ? productPrice >= min_price : true
      const meetsMaxPrice =
        max_price !== undefined ? productPrice <= max_price : true
      return meetsMinPrice && meetsMaxPrice
    })
  }

  // Sort products
  const sortedProducts = sortProducts(
    min_price && max_price ? filteredProductsByPrice : products,
    sortBy
  )

  // Paginate products
  const pageParam = (page - 1) * limit

  const nextPage = count > pageParam + limit ? pageParam + limit : null

  const paginatedProducts = sortedProducts.slice(pageParam, pageParam + limit)

  return {
    response: {
      products: paginatedProducts,
      count,
    },
    nextPage,
    queryParams,
  }
})

export const reviewProduct = async (
  token: string,
  productID: string,
  data: {
    star: number
    description: string
    images?: UploadedFile[]
  }
) => {
  try {
    const res = await client.put(`/store/review/${productID}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return res.data
  } catch (error) {
    throw error
  }
}

export const getProductTagsList = cache(async function (
  pageParam: number = 1,
  queryParams?: HttpTypes.FindParams
): Promise<PaginatedProductTagList> {
  const limit = queryParams?.limit || 30
  const offset = (pageParam - 1) * limit

  const res = await client.get("/store/product-tags", {
    params: { limit, offset },
  })

  return {
    product_tags: res.data?.product_tags || [],
    count: res.data?.count || 0,
  }
})
