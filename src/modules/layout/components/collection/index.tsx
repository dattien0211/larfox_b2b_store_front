// @ts-nocheck
"use client"
import { HttpTypes } from "@medusajs/types"
import Image from "next/image"

import Icons from "@modules/common/icons"
import IMGS from "@constants/IMGS"
import ProductItem from "../product-item"
import CollectionBanner from "../collection-banner"
import { useOS } from "@lib/hooks/OSContext"
import ProductPreview from "@modules/products/components/product-preview"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import RiceSpike from "@modules/common/components/rice-spike"

interface CollectionProps {
  collection?: HttpTypes.StoreCollection
}

const Collection: React.FC<CollectionProps> = ({ collection }) => {
  const { os } = useOS()

  const { RightArrow } = Icons

  const products = collection?.products

  const displayedProducts =
    products && products.length > 0
      ? os === "desktop"
        ? products.slice(0, 8)
        : os === "tablet"
        ? products.slice(0, 6)
        : products.slice(0, 4)
      : []

  return (
    <div className="relative content-container py-4 sm:py-6 my-4 sm:my-8 rounded-lg shadow-lg bg-white">
      <RiceSpike />
      <CollectionBanner
        imageSrc={collection?.metadata?.thumbnail?.url}
        href={collection?.handle ? `/bo-suu-tap/${collection?.handle}` : "/"}
      />
      <div className="mt-2 sm:mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-y-12">
        {displayedProducts?.map((product, index) => (
          <ProductItem key={index} productItem={product} />
        ))}
      </div>
      <div className="flex justify-center mt-4 sm:mt-6">
        <LocalizedClientLink
          href={collection?.handle ? `/bo-suu-tap/${collection?.handle}` : "/"}
        >
          <button className="text-sm sm:text-base capitalize rounded-full px-6 sm:px-8 py-1 mx-auto border border-primary text-primary hover:bg-primary hover:text-white flex gap-x-2 items-center justify-center">
            Xem tất cả
            <RightArrow size={12} />
          </button>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default Collection
