import { sdk } from "@lib/config"
import { cache } from "react"

export const listCategories = cache(async function () {
  return sdk.store.category
    .list({ fields: "+category_children" }, { next: { tags: ["categories"] } })
    .then(({ product_categories }) => product_categories)
})

export const getTagsList = cache(async function (
  offset: number = 0,
  limit: number = 100
) {
  return sdk.admin.productTag.list(
    // TODO: Look into fixing the type
    // @ts-ignore
    { limit, offset },
    { next: { tags: ["tags"] } }
  )
})

export const getTagByHandle = cache(async function (tagHandle: string[]) {
  return sdk.admin.productTag.list(
    // TODO: Look into fixing the type
    // @ts-ignore
    { handle: tagHandle },
    { next: { tags: ["tags"] } }
  )
})
