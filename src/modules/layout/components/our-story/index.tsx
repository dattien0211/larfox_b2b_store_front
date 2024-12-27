import Image from "next/image"

import Icons from "@modules/common/icons"
import IMGS from "@constants/IMGS"
import TextAnco from "@modules/layout/components/text-anco"

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
          className="w-full h-full object-cover  absolute inset-0 z-0"
        />
        <Image
          src={IMGS.LeafBG}
          alt="banner"
          width={2000}
          height={575}
          className="absolute -top-12 left-0 w-full"
        />
        <div className="w-full h-full absolute inset-0 z-50   !text-white flex flex-col items-center justify-center ">
          <TextAnco
            backgroundText=" About us"
            subTitle="Sứ mệnh của chúng tôi"
            title="Câu chuyện của Anco"
            description="Tôi bắt đầu Ước mơ Xanh của mình, nghiên cứu những sản phẩm thuần
              tuý, tối giản, chỉ tập trung vào mục đính sử dụng của chính nó."
            classBGText="!text-[#DCEAC5]/30"
            classDesText="sm:w-[50%]"
          />
          <button className="mt-12 hover:text-orange-600 hover:bg-white shadow-md rounded-full flex items-center justify-center px-4 py-[6px] sm:px-8 sm:py-2 bg-gradient-to-r from-[#EE9C23] to-[#FFBB56] text-white transition-all duration-300 ease-in-out mx-auto">
            <p className="mr-2 text-base sm:text-lg">Xem chi tiết</p>
            <RightArrow size={12} />
          </button>
        </div>
      </div>

      <div className="h-[94px] md:h-[224px] bg-grey-15 flex items-center justify-center">
        <Image src={IMGS.Vendor} alt="banner" width={1200} height={575} />
      </div>
    </>
  )
}
