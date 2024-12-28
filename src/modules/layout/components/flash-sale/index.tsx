import Icons from "@modules/common/icons"
import Image from "next/image"
import IMGS from "@constants/IMGS"
import SaleProductItem from "../sale-product-item"
import FlashSaleProductsSlider from "./slider"

export default function FlashSale() {
  const { LeftArrow, RightArrow } = Icons

  return (
    <>
      <div className="content-container mt-4 sm:mt-20">
        <div className="flex gap-x-4 items-center justify-center ">
          <p className="sm:text-lg">Còn lại:</p>
          <div className="flex items-center gap-x-1 sm:gap-x-2">
            <div className="w-8 h-8 sm:w-11 sm:h-11 bg-[#404040] rounded-md font-bold text-xl sm:text-3xl text-2xl   text-white flex items-center justify-center">
              01
            </div>
            <p className="sm:text-3xl text-2xl  font-bold">:</p>
            <div className="w-8 h-8 sm:w-11 sm:h-11 bg-[#404040] rounded-md font-bold text-xl sm:text-3xl text-2xl   text-white flex items-center justify-center">
              02
            </div>
            <p className="sm:text-3xl text-2xl  font-bold">:</p>
            <div className="w-8 h-8 sm:w-11 sm:h-11 bg-[#404040] rounded-md font-bold text-xl sm:text-3xl text-2xl   text-white flex items-center justify-center">
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
        <FlashSaleProductsSlider />
      </div>
    </>
  )
}
