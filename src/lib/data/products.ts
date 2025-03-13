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
import fetchWithCache from "@lib/util/fetch-with-cache"

export const getProductsById = async function ({
  ids,
  regionId,
}: {
  ids: string[]
  regionId: string
}) {
  return sdk.store.product
    .list({
      id: ids,
      region_id: regionId,
      fields:
        "*variants.calculated_price,+variants.inventory_quantity,*categories,*metadata",
    })
    .then(({ products }) => products)
}

export const getProductByHandle = async function (
  handle: string,
  regionId: string
) {
  return sdk.store.product
    .list({
      handle,
      region_id: regionId,
      fields:
        "*variants.calculated_price,+variants.inventory_quantity,*categories,*metadata",
    })
    .then(({ products }) => products[0])
}

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
  const limit = queryParams?.limit || 16
  const offset = queryParams?.offset || (pageParam - 1) * limit
  const region = await getRegion(countryCode)

  if (!region) {
    return {
      response: { products: [], count: 0 },
      nextPage: null,
    }
  }

  const result = await fetchWithCache<{
    products: HttpTypes.StoreProduct[]
    count: number
  }>(
    "/store/products",
    {
      limit,
      offset,
      region_id: region.id,
      fields:
        "*variants.calculated_price,+variants.inventory_quantity,*categories,*metadata",
      ...queryParams,
    },
    ["products"], // Cache tag for invalidation
    30 // Cache expiration in seconds
  )

  if (!result) {
    return {
      response: { products: [], count: 0 },
      nextPage: null,
    }
  }

  const { products, count } = result
  const nextPage = count > offset + limit ? pageParam + 1 : null

  return {
    response: {
      products,
      count,
    },
    nextPage,
    queryParams,
  }
})

export const getProductsListWithSort = cache(async function ({
  page = 1,
  queryParams,
  sortBy = "created_at",
  countryCode,
  defaultFetchLimit = 160,
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
  const limit = queryParams?.limit || 16
  const { min_price, max_price, ...restQueryParams } = queryParams || {}

  // Calculate correct batch offset
  const batchIndex = Math.floor((page - 1) / 10) // 0 for page 1-10, 1 for 11-20, 2 for 21-30
  const offset = batchIndex * defaultFetchLimit // Offset shifts every 160 records

  const {
    response: { products, count },
  } = await getProductsList({
    pageParam: 1,
    queryParams: {
      ...restQueryParams,
      limit: defaultFetchLimit,
      offset, // Dynamically apply offset
    },
    countryCode,
  })

  let filteredProductsByPrice: HttpTypes.StoreProduct[] = []

  if (min_price && max_price) {
    const mappedProducts = products.map((product) => {
      const { cheapestPrice } = getProductPrice({ product })
      return { ...product, ...cheapestPrice }
    })

    filteredProductsByPrice = mappedProducts.filter((product) => {
      const productPrice = product.calculated_price_number || 0
      return (
        (min_price !== undefined ? productPrice >= min_price : true) &&
        (max_price !== undefined ? productPrice <= max_price : true)
      )
    })
  }

  // Sort products
  const sortedProducts = sortProducts(
    min_price && max_price ? filteredProductsByPrice : products,
    sortBy
  )

  // Paginate correctly within the fetched batch
  const pageParam = (page - 1) * limit - offset
  const nextPage = count > pageParam + limit ? page + 1 : null
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

export const getProductTagsList = async function (
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
}
