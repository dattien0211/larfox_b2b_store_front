import { Blog, BlogQueryParams } from "types/global"
import { cache } from "react"
import client from "@lib/util/client"

type PaginatedBlogList = {
  blogs: Blog[]
  count: number
}

export const getBlogByHandle = cache(async function (
  handle: string
): Promise<Blog> {
  const res = await client.get("/store/blogs", { params: { handle } })

  return res.data?.blogs[0]
})

export const getBlogList = cache(async function (
  pageParam: number = 1,
  queryParams?: BlogQueryParams
): Promise<PaginatedBlogList> {
  const limit = queryParams?.limit || 12
  const offset = (pageParam - 1) * limit

  const res = await client.get("/store/blogs", {
    params: { limit, offset, ...queryParams },
  })

  return {
    blogs: res.data?.blogs || [],
    count: res.data?.count || 0,
  }
})
