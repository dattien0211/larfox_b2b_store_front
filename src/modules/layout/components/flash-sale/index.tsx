import Image from "next/image"
import { HttpTypes } from "@medusajs/types"

import IMGS from "@constants/IMGS"
import FlashSaleProductsSlider from "./slider"
import CountdownTimer from "./count-down"
import RiceSpike from "@modules/common/components/rice-spike"
interface FlashSaleProps {
  collection?: HttpTypes.StoreCollection
}

const FlashSale: React.FC<FlashSaleProps> = ({ collection }) => {
  const products = collection?.products

  return (
    <div className="relative py-3 sm:py-6 my-5 sm:my-9 content-container bg-white rounded-lg shadow-lg">
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
        <FlashSaleProductsSlider products={products} />
      )}
    </div>
  )
}

export default FlashSale
