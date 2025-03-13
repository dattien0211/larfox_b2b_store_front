// @ts-nocheck

import { HttpTypes } from "@medusajs/types"
import Image from "next/image"

import Icons from "@modules/common/icons"
import IMGS from "@constants/IMGS"
import ProductItem from "../product-item"
import CollectionBanner from "../collection-banner"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import RiceSpike from "@modules/common/components/rice-spike"
import { getCollectionsList } from "@lib/data/collections"
import { getProductsList } from "@lib/data/products"
import ShowItem from "../show-item"
import { PaginatedProductsCollectionParams } from "types/global"

const PRODUCT_LIMIT = 10

interface CollectionProps {
  countryCode: string
  collection?: HttpTypes.StoreCollection
}

const Collection: React.FC<CollectionProps> = async ({
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
    <div className="relative content-container py-4 sm:py-6 my-6 sm:my-10 rounded-lg shadow-lg bg-white">
      <RiceSpike />
      <CollectionBanner
        imageSrc={collection?.metadata?.thumbnail?.url}
        href={collection?.handle ? `/bo-suu-tap/${collection?.handle}` : "/"}
      />

      <ShowItem products={products} />

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
