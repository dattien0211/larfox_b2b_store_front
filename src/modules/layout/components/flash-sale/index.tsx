import Image from "next/image"
import { HttpTypes } from "@medusajs/types"

import IMGS from "@constants/IMGS"
import CountdownTimer from "./count-down"
import RiceSpike from "@modules/common/components/rice-spike"
import ProductsSlider from "../slider"
import { getProductsList } from "@lib/data/products"

const PRODUCT_LIMIT = 20

type PaginatedProductsParams = {
  limit: number
  collection_id?: string[]
}

interface FlashSaleProps {
  collection?: HttpTypes.StoreCollection
  countryCode: string
}

const FlashSale: React.FC<FlashSaleProps> = async ({
  collection,
  countryCode,
}) => {
  if (!collection) return null

  const queryParams: PaginatedProductsParams = {
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
    <div className="relative py-3 sm:py-6 my-6 sm:my-10 content-container bg-white rounded-lg shadow-lg">
      <RiceSpike />
      <CountdownTimer />
      <div className="mt-4 flex flex-col md:flex-row items-center justify-center gap-4 ">
        <div className="w-full md:w-1/2 shadow-lg">
          <Image
            src={IMGS.Banner2}
            alt="banner"
            width={700}
            height={282}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-full md:w-1/2 shadow-lg">
          <Image
            src={IMGS.Banner3}
            alt="banner"
            width={700}
            height={282}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      {products && products.length > 0 && (
        <ProductsSlider products={products} isSale={true} />
      )}
    </div>
  )
}

export default FlashSale
