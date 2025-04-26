"use client"

import { HttpTypes } from "@medusajs/types"
import ProductActions from "@modules/products/components/product-actions"

export default function ProductActionsWrapper({
  product,
}: {
  product: HttpTypes.StoreProduct
}) {
  if (!product) {
    return null
  }

  return <ProductActions product={product} />
}
