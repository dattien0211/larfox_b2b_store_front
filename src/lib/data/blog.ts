import { sdk } from "@lib/config"
import { Blog } from "types/global"
import { cache } from "react"

export const getBlogByHandle = cache(async function (handle: string) {
  const res = (await sdk.client.fetch(`/store/blogs?handle=${handle}`, {
    method: "GET",
  })) as { blogs: Blog[]; count: number; limit: number; offset: number }
  return res.blogs[0]
})

export const getListBlog = cache(async function () {
  const res = (await sdk.client.fetch(`/store/blogs`, {
    method: "GET",
  })) as { blogs: Blog[]; count: number; limit: number; offset: number }

  return res
})
