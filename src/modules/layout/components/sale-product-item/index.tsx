import { HttpTypes } from "@medusajs/types"
import Image from "next/image"

import Icons from "@modules/common/icons"
import IMGS from "@constants/IMGS"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default function SaleProductItem({ productItem }: { productItem: any }) {
  const { Thunder, Star } = Icons
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
    <div className="p-2 sm:p-4 rounded-md bg-white group">
      <div className="bg-grey-15 relative">
        <Image
          src={
            product?.thumbnail ||
            (product?.images && product?.images.length > 0
              ? product.images[0].url
              : IMGS.Product)
          }
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
      <div className="mt-4 ">
        <div className="flex items-center justify-between">
          <div>
            {product?.categories && product?.categories.length > 0 && (
              <LocalizedClientLink
                href={
                  product?.categories[0].handle
                    ? `/danh-muc-san-pham/${product?.categories[0].handle}`
                    : "/"
                }
                className="bg-primary py-[2px] px-1 rounded-sm text-white font-manrope-semibold text-xxs"
              >
                {product?.categories[0].name}
              </LocalizedClientLink>
            )}
          </div>

          <div className="flex items-center">
            <Star color="#EA9934" />
            <p className="text-xs sm:text-sm ml-1">4.8</p>
            <p className="text-black-20 text-xs sm:text-sm">(120K)</p>
          </div>
        </div>
        <h1 className="text-sm sm:text-lg  line-clamp-1 mt-1">
          {product?.title}
        </h1>
        <div className="flex items-center justify-between mt-2">
          <p className="text-primary font-bold text-sm sm:text-xl">
            {cheapestPrice?.calculated_price}
          </p>
          <p className="text-black-20 line-through text-xs sm:text-base">
            {cheapestPrice?.original_price}
          </p>
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
