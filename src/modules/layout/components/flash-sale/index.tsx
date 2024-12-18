import Icons from "@modules/common/icons"
import Image from "next/image"
import IMGS from "@constants/IMGS"
import ProductItem from "../sale-product-item"

export default function FlashSale() {
  const { LeftArrow, RightArrow } = Icons

  return (
    <div className="bg-beige-10 relative pt-20">
      <div className="content-container relative z-20">
        <div className="absolute text-[#FFF6E8] font-bold font-times text-[140px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10">
          Big sale
        </div>
        <div className="flex flex-col items-center  relative z-20">
          <h2 className="italic text-primary font-times font-bold text-2xl">
            Ưu đãi
          </h2>
          <h1 className="text-44px font-bold font-times">FLash Sale</h1>
        </div>
        <div className="absolute bottom-0 left-0">
          <Image
            src={IMGS.Leaf2}
            alt="banner"
            width={100}
            height={282}
            className="w-full"
          />
        </div>
      </div>
      <div className="content-container mt-8">
        <div className="flex gap-x-4 items-center justify-center ">
          <p className="text-lg">Còn lại:</p>
          <div className="flex items-center gap-x-2">
            <div className="w-11 h-11 bg-[#404040] rounded-md font-bold text-3xl text-white flex items-center justify-center">
              01
            </div>
            <p className="text-3xl font-bold">:</p>
            <div className="w-11 h-11 bg-[#404040] rounded-md font-bold text-3xl text-white flex items-center justify-center">
              02
            </div>
            <p className="text-3xl font-bold">:</p>
            <div className="w-11 h-11 bg-[#404040] rounded-md font-bold text-3xl text-white flex items-center justify-center">
              16
            </div>
          </div>
          <p className="text-lg">Ngày</p>
        </div>
        <div className="mt-14 flex items-center justify-center gap-x-8">
          <div className="w-1/2">
            <Image
              src={IMGS.Banner2}
              alt="banner"
              width={500}
              height={282}
              className="w-full"
            />
          </div>
          <div className="w-1/2">
            <Image
              src={IMGS.Banner3}
              alt="banner"
              width={500}
              height={282}
              className="w-full"
            />
          </div>
        </div>
        <div className="mt-10 grid grid-cols-4 gap-x-8">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
        <div className="mt-10 flex items-center justify-center gap-x-4">
          <button className="w-12 h-12 rounded-full flex items-center justify-center bg-orang-25 opacity-50">
            <LeftArrow color="white" />
          </button>
          <button className="w-12 h-12 rounded-full flex items-center justify-center bg-orang-25">
            <RightArrow color="white" />
          </button>
        </div>
      </div>
    </div>
  )
}
