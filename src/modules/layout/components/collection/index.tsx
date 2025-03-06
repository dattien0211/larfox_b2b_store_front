// @ts-nocheck
"use client"
import { HttpTypes } from "@medusajs/types"
import Image from "next/image"

import IMGS from "@constants/IMGS"
import ProductItem from "../product-item"
import CollectionBanner from "../collection-banner"
import { useOS } from "@lib/hooks/OSContext"
import ProductPreview from "@modules/products/components/product-preview"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

interface CollectionProps {
  collection?: HttpTypes.StoreCollection
}

const Collection: React.FC<CollectionProps> = ({ collection }) => {
  const { os } = useOS()

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
    <div className="relative content-container py-4 sm:py-6 my-4 sm:my-8 rounded-md shadow-md bg-white">
      <div className="absolute -top-[2%] left-0 w-9 h-9 sm:w-16 sm:h-16  ">
        <Image
          src={IMGS.RiceSpike}
          alt="banner"
          width={64}
          height={64}
          className="w-full h-full object-contain rotate-45"
        />
      </div>

      <div className="absolute -bottom-[2%] right-0 w-9 h-9 sm:w-16 sm:h-16 ">
        <Image
          src={IMGS.RiceSpike}
          alt="banner"
          width={64}
          height={64}
          className="w-full h-full object-contain scale-x-[-1] rotate-[-35deg]"
        />
      </div>
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
          <button className="text-sm sm:text-base rounded-full px-6 sm:px-8 py-1 mx-auto border border-primary text-primary hover:bg-primary hover:text-white">
            Xem tất cả
          </button>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default Collection
