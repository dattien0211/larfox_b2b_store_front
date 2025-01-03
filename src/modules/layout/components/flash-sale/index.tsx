import Image from "next/image"
import { HttpTypes } from "@medusajs/types"

import IMGS from "@constants/IMGS"
import FlashSaleProductsSlider from "./slider"
interface FlashSaleProps {
  products?: any
  collectionHandle?: string
}

const FlashSale: React.FC<FlashSaleProps> = ({
  products,
  collectionHandle,
}) => {
  return (
    <>
      <div className="content-container mt-4 sm:mt-20">
        <div className="flex gap-x-4 items-center justify-center ">
          <p className="sm:text-lg">Còn lại:</p>
          <div className="flex items-center gap-x-1 sm:gap-x-2">
            <div className="w-8 h-8 sm:w-11 sm:h-11 bg-[#404040] rounded-md font-bold text-2xl sm:text-3xl text-white flex items-center justify-center">
              01
            </div>
            <p className="sm:text-3xl text-2xl  font-bold">:</p>
            <div className="w-8 h-8 sm:w-11 sm:h-11 bg-[#404040] rounded-md font-bold text-2xl sm:text-3xl text-white flex items-center justify-center">
              02
            </div>
            <p className="sm:text-3xl text-2xl  font-bold">:</p>
            <div className="w-8 h-8 sm:w-11 sm:h-11 bg-[#404040] rounded-md font-bold text-2xl sm:text-3xl text-white flex items-center justify-center">
              16
            </div>
          </div>
          <p className="sm:text-lg">Ngày</p>
        </div>
        <div className="mt-6 sm:mt-14 flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-full md:w-1/2">
            <Image
              src={IMGS.Banner2}
              alt="banner"
              width={500}
              height={282}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src={IMGS.Banner3}
              alt="banner"
              width={500}
              height={282}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        {products && products.length > 0 && (
          <FlashSaleProductsSlider products={products} />
        )}
      </div>
    </>
  )
}

export default FlashSale
