import { HttpTypes } from "@medusajs/types"
import Image from "next/image"

import IMGS from "@constants/IMGS"
import Icons from "@modules/common/icons"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default function ProductItem({
  productItem,
  isSale = false,
}: {
  productItem: any
  isSale?: boolean
}) {
  const { Star, StarHalf, Thunder } = Icons
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

  const reviews = Array.isArray(product?.metadata?.reviews)
    ? product.metadata.reviews
    : []

  const averageRating =
    reviews.length > 0
      ? (reviews.reduce((sum, r) => sum + r.star, 0) / reviews.length).toFixed(
          1
        )
      : "5"

  const fullStars = Math.floor(Number(averageRating))
  const hasHalfStar = Number(averageRating) % 1 !== 0

  // const soldCount = Number(product?.metadata?.sold) || 0

  return (
    <div className="w-full flex flex-col group cursor-pointer border-primary border rounded-md ">
      <div className="p-2">
        <div className="bg-grey-15 relative w-full shadow-md overflow-hidden">
          <Image
            src={
              product?.thumbnail ?? product?.images?.[0]?.url ?? IMGS.Product
            }
            alt="banner"
            width={245}
            height={245}
            className="w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110 object-cover"
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

          <div className="w-full absolute bottom-[10%] left-0 opacity-0 invisible transition-all duration-300  flex items-center justify-center group-hover:opacity-100 group-hover:visible">
            <button
              className="px-4 sm:px-12 h-7 sm:h-9 text-sm sm:text-base rounded-md bg-primary text-white duration-300 transition-all text-nowrap
                        hover:scale-105 hover:shadow-sm "
            >
              <LocalizedClientLink
                href={product?.handle ? `/san-pham/${product?.handle}` : "/"}
              >
                Xem chi tiết
              </LocalizedClientLink>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-primary h-[1px] w-full"></div>
      <div className="p-2">
        <div className="mb-1">
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
        <div className="line-clamp-2 text-sm sm:text-base h-10 sm:h-14">
          {product?.title}
        </div>
        <div>
          <span className="text-green-600 text-sm sm:text-xl font-bold">
            {cheapestPrice?.calculated_price}
          </span>
          <span className="text-grey-40 sm:ml-4 ml-2 text-xs sm:text-base line-through">
            {cheapestPrice?.original_price}
          </span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between">
          <p className="text-xs sm:text-sm flex items-center gap-x-2">
            <span className="flex items-center gap-x-1">
              {Array.from({ length: 5 }).map((_, index) => {
                if (index < fullStars) {
                  return <Star key={index} color="#EA9934" />
                } else if (index === fullStars && hasHalfStar) {
                  return <StarHalf key={index} color="#EA9934" />
                } else {
                  return <Star key={index} color="#D1D5DB" /> // Grey for empty stars
                }
              })}
            </span>
            <span className="h-3 bg-grey-30 w-[1px]"></span>
            <span>
              (<span className="text-gray-600">{reviews.length}</span>)
            </span>
          </p>
        </div>
        {isSale && (
          <div className="mt-2 sm:mt-4 rounded-full bg-[#FFDBB7] w-full h-5 relative">
            <div className="absolute bg-gradient-to-r from-[#EA541E] to-[#FBD316] top-0 left-0 w-[20%] h-full rounded-full"></div>
            <div className="absolute uppercase inset-0 text-orang-30 text-xxs  sm:text-xs h-full w-full flex items-center justify-center">
              Đang bán chạy
            </div>
          </div>
        )}

        {/* <div className="h-2 bg-grey-30 w-[1px]"></div>
        <p className="text-xs sm:text-sm">
          <span className="text-grey-30 mr-1">Đã bán:</span>
          <span className="text-grey-5">{soldCount}</span>
        </p> */}
      </div>
    </div>
  )
}
