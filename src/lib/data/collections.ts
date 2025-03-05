import { sdk } from "@lib/config"
import { cache } from "react"
import { getProductsList } from "./products"
import { HttpTypes } from "@medusajs/types"
import { getProductPrice } from "@lib/util/get-product-price"

export const getCollectionsList = cache(async function (
  offset: number = 0,
  limit: number = 100
): Promise<{ collections: HttpTypes.StoreCollection[]; count: number }> {
  console.log("Fetching collections")

  return sdk.store.collection
    .list(
      {
        offset,
        limit,
        fields: "*metadata",
      },
      { cache: "no-store" }
    )
    .then(({ collections }) => ({ collections, count: collections.length }))
})

export const getCollectionByHandle = cache(async function (
  handle: string
): Promise<HttpTypes.StoreCollection> {
  return sdk.store.collection
    .list({ handle, fields: "*metadata" }, { cache: "no-store" })
    .then(({ collections }) => collections[0])
})

export const getCollectionsWithProducts = cache(
  async (countryCode: string): Promise<HttpTypes.StoreCollection[] | null> => {
    const { collections } = await getCollectionsList(0, 20)

    if (!collections) {
      return null
    }

    const collectionIds = collections
      .map((collection) => collection.id)
      .filter(Boolean) as string[]

    const { response } = await getProductsList({
      pageParam: 0,
      queryParams: { limit: 12, collection_id: collectionIds },
      countryCode,
    })

    response.products.map((product) => {
      const collection = collections.find(
        (collection) => collection.id === product.collection_id
      )

      if (collection) {
        if (!collection.products) {
          collection.products = []
        }

        const cheapestPrice = getProductPrice({
          product: product,
        })

        collection.products.push(cheapestPrice as any)
      }
    })

    return collections as unknown as HttpTypes.StoreCollection[]
  }
)
