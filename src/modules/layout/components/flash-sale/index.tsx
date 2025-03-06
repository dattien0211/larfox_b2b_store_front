import Image from "next/image"

import IMGS from "@constants/IMGS"
import FlashSaleProductsSlider from "./slider"
import CountdownTimer from "./count-down"
interface FlashSaleProps {
  products?: any
  collectionHandle?: string
}

const FlashSale: React.FC<FlashSaleProps> = ({ products }) => {
  return (
    <div className="relative py-3 sm:py-6 my-3 sm:my-8 content-container bg-white rounded-md shadow-md">
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
