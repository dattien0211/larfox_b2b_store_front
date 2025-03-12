import Image from "next/image"
import { HttpTypes } from "@medusajs/types"

import IMGS from "@constants/IMGS"
import FlashSaleProductsSlider from "../slider"
import CountdownTimer from "./count-down"
import RiceSpike from "@modules/common/components/rice-spike"
import ProductsSlider from "../slider"
interface FlashSaleProps {
  collection?: HttpTypes.StoreCollection
}

const FlashSale: React.FC<FlashSaleProps> = ({ collection }) => {
  const products = collection?.products

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
