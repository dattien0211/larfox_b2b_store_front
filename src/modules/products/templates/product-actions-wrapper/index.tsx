"use client"

import { HttpTypes } from "@medusajs/types"
import ProductActions from "@modules/products/components/product-actions"

export default function ProductActionsWrapper({
  region,
  product,
}: {
  region: HttpTypes.StoreRegion
  product: HttpTypes.StoreProduct
}) {
  if (!product) {
    return null
  }

  return <ProductActions product={product} region={region} />
}
