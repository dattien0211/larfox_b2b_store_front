import Icons from "@modules/common/icons"
import Image from "next/image"
import IMGS from "@constants/IMGS"

export default function SaleProductItem() {
  const { Thunder, Star } = Icons

  return (
    <div className="p-2 sm:p-4 rounded-md bg-white">
      <div className="bg-grey-15 relative">
        <Image
          src={IMGS.Product}
          alt="banner"
          width={245}
          height={255}
          className="w-full h-full"
        />
        <div className="absolute top-2 right-10 z-20">
          <Thunder size={24} />
        </div>
        <div className="text-red-500 bg-orang-15 flex  absolute top-[10px] right-2 text-xs pl-3 pr-1 py-[1px] rounded-r-sm">
          -52%
        </div>
      </div>
      <div className="mt-4 ">
        <div className="flex items-center justify-between">
          <p className="text-sm text-primary font-bold">Anco Care</p>
          <div className="flex items-center">
            <Star color="#EA9934" />
            <p className="text-xxs sm:text-sm ml-1">4.8</p>
            <p className="text-black-20 text-xxs sm:text-sm">(120K)</p>
          </div>
        </div>
        <h1 className="font-manrope-extrabold text-sm sm:text-lg line-clamp-2 h-10 mt-1">
          Dầu massga trị liệu 100ml
        </h1>
        <div className="flex items-center justify-between text-sm sm:text-lg">
          <p className="text-primary font-bold font-manrope-bold">299.000 đ</p>
          <p className="text-black-20 line-through">299.000 đ</p>
        </div>
        <div className="mt-2 sm:mt-4 rounded-full bg-[#FFDBB7] w-full h-5 relative">
          <div className="absolute bg-gradient-to-r from-[#EA541E] to-[#FBD316] top-0 left-0 w-[20%] h-full rounded-full"></div>
          <div className="absolute uppercase inset-0 text-orang-30 text-xxs  sm:text-xs h-full w-full flex items-center justify-center">
            Đang bán chạy
          </div>
        </div>
      </div>
    </div>
  )
}
