import { sdk } from "@lib/config"
import { cache } from "react"
import { HttpTypes } from "@medusajs/types"
import fetchWithCache from "@lib/util/fetch-with-cache"

export const getCollectionsList = cache(async function (
  offset: number = 0,
  limit: number = 20
): Promise<{ collections: HttpTypes.StoreCollection[]; count: number }> {
  const data = await fetchWithCache<{
    collections: HttpTypes.StoreCollection[]
  }>(
    "/store/collections",
    { offset, limit, fields: "*metadata" },
    ["collections"],
    300
  )

  return {
    collections: data?.collections || [],
    count: data?.collections?.length || 0,
  }
})

export const getCollectionByHandle = cache(async function (
  handle: string
): Promise<HttpTypes.StoreCollection> {
  return sdk.store.collection
    .list({ handle, fields: "*metadata" }, { next: { tags: ["collections"] } })
    .then(({ collections }) => collections[0])
})

export const getCollectionsWithProducts = cache(
  async (countryCode: string): Promise<HttpTypes.StoreCollection[] | null> => {
    const { collections } = await getCollectionsList()

    if (!collections) {
      return null
    }

    return collections
  }
)
