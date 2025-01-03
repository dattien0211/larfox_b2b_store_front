import { HttpTypes } from "@medusajs/types"
import Image from "next/image"

import Icons from "@modules/common/icons"
import IMGS from "@constants/IMGS"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default function ProductItem({ productItem }: { productItem: any }) {
  const { Star, Thunder } = Icons
  const {
    product,
    cheapestPrice,
  }: {
    product: HttpTypes.StoreProduct
    cheapestPrice: {
      calculated_price_number: any
      calculated_price: string
      original_price_number: any
      original_price: string
      currency_code: any
      price_type: any
      percentage_diff: string
    } | null
  } = productItem

  return (
    <div className="w-full flex flex-col gap-y-1 sm:gap-y-2 group cursor-pointer">
      <div className="bg-grey-15 relative w-full shadow-md">
        <Image
          src={IMGS.Product}
          alt="banner"
          width={245}
          height={255}
          className="w-full h-full"
        />
        {cheapestPrice?.percentage_diff &&
          parseFloat(cheapestPrice?.percentage_diff) > 0 && (
            <>
              <div className="absolute top-2 right-10 z-20">
                <Thunder size={24} />
              </div>
              <div className="text-red-500 bg-orang-15 flex  absolute top-[10px] right-2 text-xs pl-3 pr-1 py-[1px] rounded-r-sm font-semibold">
                -{cheapestPrice?.percentage_diff}%
              </div>
            </>
          )}

        <div className="px-4 w-full absolute bottom-4 left-0 opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible">
          <LocalizedClientLink
            href={product?.handle ? `/san-pham/${product?.handle}` : "/"}
          >
            <button className="w-full h-7 sm:h-9 text-sm sm:text-base rounded-md bg-primary text-white hover:bg-orang-30 transition-all">
              Xem chi tiết
            </button>
          </LocalizedClientLink>
        </div>
      </div>
      <div>
        {product?.categories && product?.categories.length > 0 && (
          <LocalizedClientLink
            href={
              product?.categories[0].handle
                ? `/danh-muc-san-pham/${product?.categories[0].handle}`
                : "/"
            }
            className="bg-primary py-[2px] px-1 rounded-sm text-white font-manrope-bold text-xxs"
          >
            {product?.categories[0].name}
          </LocalizedClientLink>
        )}
      </div>
      <div className="h-10 sm:h-fit line-clamp-2  text-sm sm:text-lg">
        {product?.title}
      </div>
      <div>
        <span className="text-primary text-sm sm:text-xl font-bold">
          {cheapestPrice?.calculated_price}
        </span>
        <span className="text-grey-40 sm:ml-4 ml-2 text-xs sm:text-base line-through">
          {cheapestPrice?.original_price}
        </span>
      </div>
      <div className="flex items-center gap-x-2">
        <Star color="#EA9934" />
        <p className="text-xs sm:text-sm">
          <span>4.8</span>
          <span className="text-grey-5">(120K)</span>
        </p>
        <div className="h-2 bg-grey-30 w-[1px]"></div>
        <p className="text-xs sm:text-sm">
          <span className="text-grey-30">Đã bán:</span>
          <span className="text-grey-5">130</span>
        </p>
      </div>
    </div>
  )
}
