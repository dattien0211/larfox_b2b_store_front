import { sdk } from "@lib/config"
import { BlogType, BlogTypeQueryParams } from "types/global"
import { cache } from "react"
import client from "@lib/util/client"

type PaginatedBlogList = {
  blogTypes: BlogType[]
  count: number
}

export const getBlogTypeByValue = cache(async function (
  value: string
): Promise<BlogType> {
  const res = await client.get("/store/blog-types", { params: { value } })
  return res.data?.blogTypes[0]
})

export const getBlogTypesList = cache(async function (
  pageParam: number = 1,
  queryParams?: BlogTypeQueryParams
): Promise<PaginatedBlogList> {
  const limit = queryParams?.limit || 20
  const offset = (pageParam - 1) * limit

  const res = await client.get("/store/blog-types", {
    params: { ...queryParams, limit, offset },
  })

  return {
    blogTypes: res.data?.blogTypes || [],
    count: res.data?.count || 0,
  }
})
