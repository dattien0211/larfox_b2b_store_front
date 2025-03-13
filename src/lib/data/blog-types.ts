import { BlogType, BlogTypeQueryParams } from "types/global"
import { cache } from "react"
import fetchWithCache from "@lib/util/fetch-with-cache"

type PaginatedBlogList = {
  blogTypes: BlogType[]
  count: number
}

export const getBlogTypeByValue = cache(async function (
  value: string
): Promise<BlogType | null> {
  const data = await fetchWithCache<{ blogTypes: BlogType[] }>(
    "/store/blog-types",
    { value },
    ["blog-types"],
    1200
  )
  return data?.blogTypes?.[0] || null
})

export const getBlogTypesList = cache(async function (
  pageParam: number = 1,
  queryParams?: BlogTypeQueryParams
): Promise<PaginatedBlogList> {
  const limit = queryParams?.limit || 20
  const offset = (pageParam - 1) * limit

  const data = await fetchWithCache<PaginatedBlogList>(
    "/store/blog-types",
    { ...queryParams, limit, offset },
    ["blog-types"],
    1200
  )

  return {
    blogTypes: data?.blogTypes || [],
    count: data?.count || 0,
  }
})
