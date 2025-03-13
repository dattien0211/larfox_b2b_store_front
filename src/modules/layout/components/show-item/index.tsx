// @ts-nocheck
"use client"
import { HttpTypes } from "@medusajs/types"

import { useOS } from "@lib/hooks/OSContext"
import ProductItem from "../product-item"

interface CollectionProps {
  products?: HttpTypes.StoreProduct[]
}

const ShowItem: React.FC<CollectionProps> = ({ products }) => {
  const { os } = useOS()

  if (!products) return null

  const displayedProducts =
    os === "desktop"
      ? products.slice(0, 10)
      : os === "tablet"
      ? products.slice(0, 6)
      : products.slice(0, 4)

  return (
    <div className="mt-2 sm:mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      {displayedProducts?.map((product, index) => (
        <ProductItem key={index} product={product} />
      ))}
    </div>
  )
}

export default ShowItem
