import { Brand, BlogQueryParams } from "types/global"
import { cache } from "react"
import fetchWithCache from "@lib/util/fetch-with-cache"
import { getProductsById } from "./products"

type PaginatedBrandList = {
  brands: Brand[]
  count: number
}

export const getBrandByHandle = cache(async function (
  handle: string,
  regionId: string
): Promise<Brand | null> {
  const data = await fetchWithCache<{ brands: Brand[] }>(
    "/store/brands",
    {
      handle,
      fields: "*products",
    },
    ["brands"]
  )

  const brand = data?.brands?.[0]

  if (!brand) return null

  const ids = brand.products?.map((product) => product.id) || []
  if (ids && ids.length > 0) {
    const products = await getProductsById({ ids, regionId })
    brand.products = products
  }
  return brand
})

export const getBrandList = cache(async function (
  pageParam: number = 1,
  queryParams?: BlogQueryParams
): Promise<PaginatedBrandList> {
  const limit = queryParams?.limit || 12
  const offset = (pageParam - 1) * limit

  const data = await fetchWithCache<PaginatedBrandList>(
    "/store/brands",
    { ...queryParams, limit, offset },
    ["brands"]
  )

  return {
    brands: data?.brands || [],
    count: data?.count || 0,
  }
})
