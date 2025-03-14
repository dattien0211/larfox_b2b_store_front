import React from "react"
import { HttpTypes } from "@medusajs/types"
import { Heading } from "@medusajs/ui"

import Icons from "@modules/common/icons"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import RiceSpike from "@modules/common/components/rice-spike"
import { PaginatedProductsCollectionParams } from "types/global"
import ShowItem from "../show-item"
import { getProductsList } from "@lib/data/products"

const PRODUCT_LIMIT = 20

interface FeaturedProductProps {
  collection?: HttpTypes.StoreCollection
  countryCode: string
}

const FeaturedProduct: React.FC<FeaturedProductProps> = async ({
  collection,
  countryCode,
}) => {
  if (!collection) return null

  const { RightArrow } = Icons

  const queryParams: PaginatedProductsCollectionParams = {
    limit: PRODUCT_LIMIT,
  }

  queryParams["collection_id"] = [collection.id]

  const {
    response: { products },
  } = await getProductsList({
    pageParam: 1,
    queryParams,
    countryCode,
  })

  return (
    <div className="relative content-container py-6 sm:py-8 my-6 sm:my-10 rounded-lg shadow-lg bg-white">
      <RiceSpike />

      {/* Tiêu đề */}
      <Heading
        level="h1"
        className="mb-4 sm:mb-6 font-semibold capitalize font-times text-primary text-xl sm:text-28 text-left"
      >
        Sản Phẩm Nổi Bật
      </Heading>

      <ShowItem products={products} />

      <div className="flex justify-center mt-4 sm:mt-6">
        <LocalizedClientLink
          href={collection?.handle ? `/bo-suu-tap/${collection?.handle}` : "/"}
        >
          <button className="text-sm sm:text-base capitalize rounded-full px-6 sm:px-8 py-1 mx-auto border border-primary text-primary hover:bg-primary hover:text-white flex gap-x-2 items-center justify-center">
            Xem thêm
            <RightArrow size={12} />
          </button>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default FeaturedProduct
