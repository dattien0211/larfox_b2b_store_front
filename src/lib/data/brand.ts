import { Brand, BlogQueryParams } from "types/global"
import { cache } from "react"
import fetchWithCache from "@lib/util/fetch-with-cache"

type PaginatedBrandList = {
  brands: Brand[]
  count: number
}

export const getBrandByHandle = cache(async function (
  handle: string
): Promise<Brand | null> {
  const data = await fetchWithCache<{ brands: Brand[] }>(
    "/store/brands",
    {
      handle,
      fields: "*products",
    },
    ["brands"]
  )
  return data?.brands?.[0] || null
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
