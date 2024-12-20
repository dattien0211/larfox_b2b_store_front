import Icons from "@modules/common/icons"
import Image from "next/image"
import IMGS from "@constants/IMGS"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default function ProductItem() {
  const { Star, Heart } = Icons

  return (
    <div className="w-full flex flex-col gap-y-2 group cursor-pointer">
      <div className="bg-grey-15 relative w-full shadow-md">
        <Image
          src={IMGS.Product}
          alt="banner"
          width={245}
          height={255}
          className="w-full h-full"
        />
        <div className="absolute top-4 left-0 px-4 w-full flex items-center justify-between">
          <div className="cursor-pointer text-grey-40 hover:bg-primary hover:text-white w-7 h-7 rounded-full bg-white flex items-center justify-center z-10">
            <Heart size={18} />
          </div>
          <div className="text-white bg-primary flex text-xs px-2 py-1 rounded-sm">
            -12%
          </div>
        </div>

        <div className="px-4 w-full absolute bottom-4 left-0 opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible">
          <LocalizedClientLink href="/">
            <button className="w-full h-9 rounded-md bg-primary text-white hover:bg-white hover:text-primary">
              Xem chi tiết
            </button>
          </LocalizedClientLink>
        </div>
      </div>
      <div>
        <span className="bg-primary py-[2px] px-1 rounded-sm text-white font-manrope-bold text-xs">
          Anco Care
        </span>
        <span className="ml-2">
          Bịt mắt thảo dược AnCo Eyes phiên bản mới 2025
        </span>
      </div>
      <div>
        <span className="text-primary text-xl font-semibold">299.000đ</span>
        <span className="text-grey-40 ml-6 line-through text-xl ">
          299.000đ
        </span>
      </div>
      <div className="flex items-center gap-x-2">
        <Star color="#EA9934" />
        <p className="text-sm">
          <span>4.8</span>
          <span className="text-grey-5">(120K)</span>
        </p>
        <div className="h-2 bg-grey-30 w-[1px]"></div>
        <p className="text-sm">
          <span className="text-grey-30">Đã bán:</span>
          <span className="text-grey-5">130</span>
        </p>
      </div>
    </div>
  )
}
