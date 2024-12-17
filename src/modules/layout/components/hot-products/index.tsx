import Image from "next/image"
import IMGS from "@constants/IMGS"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ProductItem from "../product-item"

export default function HotProducts() {
  return (
    <div className="relative pb-20">
      <div className="content-container  relative z-20">
        <div className="absolute text-grey-15 font-bold font-times text-[140px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10">
          Products
        </div>
        <div className="flex flex-col items-center  relative z-20">
          <h2 className="italic text-primary font-times font-bold text-2xl">
            Sản phẩm
          </h2>
          <h1 className="text-[44px] font-bold font-times">
            Sản phẩm bán chạy
          </h1>
        </div>
      </div>
      <h1 className="text-xl mx-auto mt-4 w-[50%] text-center">
        Luôn đứng đầu trong danh sách bán chạy nhờ vào tính năng ưu việt và khả
        năng đáp ứng nhu cầu của khách hàng một cách hoàn hảo.
      </h1>
      <div className="content-container mt-10">
        <div className="grid grid-cols-4 gap-x-8 gap-y-12">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
        <div className="flex justify-center">
          <LocalizedClientLink href="#">
            <button className="mt-10 rounded-full py-2 px-12 mx-auto border border-primary text-primary hover:bg-primary hover:text-white">
              Xem tất cả
            </button>
          </LocalizedClientLink>
        </div>
      </div>
      <Image
        src={IMGS.Banner5}
        alt="banner"
        width={1440}
        height={555}
        className="w-full absolute top-[-40%] left-0 -z-10"
      />
    </div>
  )
}
