import {
  BlogQueryParams,
  Brand,
  CertificateQueryParams,
  PaginatedSellerCertificateList,
  Seller,
} from "types/global"
import { cache } from "react"
import fetchWithCache from "@lib/util/fetch-with-cache"
import { getProductsById } from "./products"

type PaginatedBrandList = {
  sellers: Seller[]
  count: number
  offset: number
  limit: number
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
    "/store/seller",
    { ...queryParams, limit, offset }
    // ["brands"]
  )

  return {
    sellers: data?.sellers || [],
    count: data?.count || 0,
    offset: data?.offset || 0,
    limit: data?.limit || 0,
  }
})

export const getSellerCertificateList = cache(async function (
  pageParam: number = 1,
  queryParams?: CertificateQueryParams
): Promise<PaginatedSellerCertificateList> {
  const limit = queryParams?.limit || 20
  const offset = (pageParam - 1) * limit

  const data = await fetchWithCache<PaginatedSellerCertificateList>(
    "/store/seller-certificates",
    { ...queryParams, limit, offset },
    ["seller-certificates"],
    1200
  )

  return {
    sellerCertificates: data?.sellerCertificates || [],
    count: data?.count || 0,
  }
})
