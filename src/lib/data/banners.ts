import { Banner, BannerQueryParams } from "types/global"
import { cache } from "react"
import client from "@lib/util/client"

type PaginatedBannersList = {
  banners: Banner[]
  count: number
}

export const getBannersList = cache(async function (
  pageParam: number = 1,
  queryParams?: BannerQueryParams
): Promise<PaginatedBannersList> {
  const limit = queryParams?.limit || 20
  const offset = (pageParam - 1) * limit

  const res = await client.get("/store/banners", {
    params: { ...queryParams, limit, offset },
  })

  return {
    banners: res.data?.banners || [],
    count: res.data?.count || 0,
  }
})
