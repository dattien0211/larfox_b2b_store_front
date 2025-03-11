import { Blog, BlogQueryParams } from "types/global"
import { cache } from "react"
import fetchWithCache from "@lib/util/fetch-with-cache"

type PaginatedBlogList = {
  blogs: Blog[]
  count: number
}

export const getBlogByHandle = cache(async function (
  handle: string
): Promise<Blog | null> {
  const data = await fetchWithCache<{ blogs: Blog[] }>(
    "/store/blogs",
    { handle },
    ["blogs"]
  )
  return data?.blogs?.[0] || null
})

export const getBlogList = cache(async function (
  pageParam: number = 1,
  queryParams?: BlogQueryParams
): Promise<PaginatedBlogList> {
  const limit = queryParams?.limit || 8
  const offset = (pageParam - 1) * limit

  const data = await fetchWithCache<PaginatedBlogList>(
    "/store/blogs",
    { ...queryParams, limit, offset },
    ["blogs"]
  )

  return {
    blogs: data?.blogs || [],
    count: data?.count || 0,
  }
})
