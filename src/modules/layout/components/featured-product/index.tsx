"use client"

import React from "react"
import { HttpTypes } from "@medusajs/types"
import { Heading } from "@medusajs/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Icons from "@modules/common/icons"
import RiceSpike from "@modules/common/components/rice-spike"
import ProductItem from "../product-item"
import { useOS } from "@lib/hooks/OSContext"

interface FeaturedProductProps {
  collection?: HttpTypes.StoreCollection
}

const FeaturedProduct: React.FC<FeaturedProductProps> = ({ collection }) => {
  const products = collection?.products

  const { RightArrow } = Icons

  const { os } = useOS()

  const displayedProducts =
    products && products.length > 0
      ? os === "desktop"
        ? products.slice(0, 15)
        : os === "tablet"
        ? products.slice(0, 9)
        : products.slice(0, 8)
      : []

  if (!collection) return null

  return (
    <div className="relative content-container py-6 sm:py-8 my-6 sm:my-10 rounded-lg shadow-lg bg-white">
      <RiceSpike />

      {/* Tiêu đề */}
      <Heading
        level="h1"
        className="mb-4 sm:mb-6 font-semibold capitalize font-times text-primary text-xl sm:text-2xl text-left"
      >
        Sản Phẩm Nổi Bật
      </Heading>

      <div className="mt-2 sm:mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {displayedProducts &&
          displayedProducts?.map((product, index) => (
            <ProductItem key={index} product={product} />
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

export default FeaturedProduct
