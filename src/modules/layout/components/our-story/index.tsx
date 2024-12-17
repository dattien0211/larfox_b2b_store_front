import Image from "next/image"
import clsx from "clsx"
import { StaticImageData } from "next/image"

import Icons from "@modules/common/icons"
import IMGS from "@constants/IMGS"

export default function OurStory() {
  const { RightArrow } = Icons

  return (
    <>
      <div className="relative h-[575px]">
        <Image
          src={IMGS.Banner7}
          alt="banner"
          width={2000}
          height={575}
          className="w-full h-[575px] absolute inset-0 z-0"
        />
        <Image
          src={IMGS.LeafBG}
          alt="banner"
          width={2000}
          height={575}
          className="absolute -top-12 left-0 w-full"
        />
        <div className="content-container absolute inset-0 z-50 h-full  ">
          <div className="h-full  flex flex-col items-center justify-center">
            <div className="relative">
              <div className="absolute text-nowrap text-[#DCEAC5] opacity-30 font-bold font-times text-[140px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10">
                About us
              </div>
              <div className="flex flex-col items-center relative z-20">
                <h2 className="italic text-white font-times font-bold text-2xl">
                  Câu chuyện của Anco
                </h2>
                <h1 className="text-[44px] text-shadow-custom font-bold font-times text-white">
                  Sứ mệnh của chúng tôi
                </h1>
              </div>
            </div>

            {/* Section Description */}
            <h1 className="mt-4 text-xl text-center text-white w-[65%]">
              Tôi bắt đầu Ước mơ Xanh của mình, nghiên cứu những sản phẩm thuần
              tuý, tối giản, chỉ tập trung vào mục đính sử dụng của chính nó.
            </h1>
            <button className="mt-8 hover:text-orang-35 hover:bg-white shadow-md rounded-full flex items-center justify-center px-8 py-[10px] bg-gradient-to-r from-[#EE9C23] to-[#FFBB56] text-white transition-all">
              <p className="mr-2 text-lg">Xem chi tiết</p>
              <RightArrow size={12} />
            </button>
          </div>
        </div>
      </div>
      <div className="h-[224px] bg-grey-15 flex items-center justify-center">
        <Image
          src={IMGS.Vendor}
          alt="banner"
          width={1200}
          height={575}

        />
      </div>
    </>
  )
}
