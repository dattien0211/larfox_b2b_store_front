import { cache } from "react"
import { HttpTypes } from "@medusajs/types"

import { sdk } from "@lib/config"
import fetchWithCache from "@lib/util/fetch-with-cache"

export const listCategories = cache(async function () {
  return sdk.store.category
    .list({ fields: "+category_children" }, { next: { tags: ["categories"] } })
    .then(({ product_categories }) => product_categories)
})

export const getCategoriesList = cache(async function (
  offset: number = 0,
  limit: number = 100
) {
  const data = await fetchWithCache<{
    product_categories: HttpTypes.StoreProductCategory[]
    count: number
  }>("/store/product-categories", { limit, offset }, ["categories"], 300)

  return {
    product_categories: data?.product_categories || [],
    count: data?.count || 0,
  }
})

export const getCategoryByHandle = cache(async function (
  categoryHandle: string[]
) {
  return sdk.store.category.list(
    // TODO: Look into fixing the type
    // @ts-ignore
    { handle: categoryHandle },
    { next: { tags: ["categories"] } }
  )
})
