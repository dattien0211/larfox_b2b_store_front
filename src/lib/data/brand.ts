import { Brand, BlogQueryParams } from "types/global"
import { cache } from "react"
import client from "@lib/util/client"

type PaginatedBlogList = {
  brands: Brand[]
  count: number
}

export const getBrandByHandle = cache(async function (
  handle: string
): Promise<Brand> {
  const res = await client.get("/store/brands", { params: { handle } })

  return res.data?.brands[0]
})

export const getBrandList = cache(async function (
  pageParam: number = 1,
  queryParams?: BlogQueryParams
): Promise<PaginatedBlogList> {
  const limit = queryParams?.limit || 12
  const offset = (pageParam - 1) * limit

  const res = await client.get("/store/brands", {
    params: { limit, offset, ...queryParams },
  })

  return {
    brands: res.data?.brands || [],
    count: res.data?.count || 0,
  }
})
