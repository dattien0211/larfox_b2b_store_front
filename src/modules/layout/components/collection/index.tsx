// @ts-nocheck

"use client"

import { HttpTypes } from "@medusajs/types"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { useOS } from "@lib/hooks/OSContext"
import ProductPreview from "@modules/products/components/product-preview"
import ProductItem from "../product-item"
import CollectionBanner from "../collection-banner"

interface CollectionProps {
  collection?: HttpTypes.StoreCollection
}

const Collection: React.FC<CollectionProps> = ({ collection }) => {
  const { os } = useOS()

  const products = collection?.products

  console.log(collection)

  const displayedProducts =
    products && products.length > 0
      ? os === "desktop"
        ? products.slice(0, 8)
        : os === "tablet"
        ? products.slice(0, 6)
        : products.slice(0, 4)
      : []

  return (
    <div className="relative content-container py-12">
      <CollectionBanner
        imageSrc={collection?.metadata?.thumbnail?.url}
        href={collection?.handle ? `/bo-suu-tap/${collection?.handle}` : "/"}
      />
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-8 sm:gap-y-12">
        {displayedProducts?.map((product, index) => (
          <ProductItem key={index} productItem={product} />
        ))}
      </div>
      <div className="flex justify-center mt-10 sm:mt-14">
        <LocalizedClientLink
          href={collection?.handle ? `/bo-suu-tap/${collection?.handle}` : "/"}
        >
          <button className=" rounded-full px-4 py-[6px] sm:px-8 sm:py-2 mx-auto border border-primary text-primary hover:bg-primary hover:text-white">
            Xem tất cả
          </button>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default Collection
