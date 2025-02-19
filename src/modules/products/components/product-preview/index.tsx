import { HttpTypes } from "@medusajs/types"

import { getProductPrice } from "@lib/util/get-product-price"
import { getProductsById } from "@lib/data/products"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"
import Icons from "@modules/common/icons"

export default async function ProductPreview({
  product,
  isFeatured,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
}) {
  const { Star, Thunder } = Icons

  const { cheapestPrice } = getProductPrice({
    product: product,
  })

  const reviews = Array.isArray(product?.metadata?.reviews)
    ? product.metadata.reviews
    : []

  const averageRating =
    reviews.length > 0
      ? (reviews.reduce((sum, r) => sum + r.star, 0) / reviews.length).toFixed(
          1
        )
      : "5"

  const soldCount = Number(product?.metadata?.sold) || 0

  return (
    <div className="group">
      <div
        data-testid="product-wrapper"
        className="overflow-hidden flex flex-col gap-y-1"
      >
        <div className="relative shadow-md bg-grey-15 ">
          <Thumbnail
            thumbnail={product.thumbnail}
            images={product.images}
            size="full"
            isFeatured={isFeatured}
            className="!aspect-square !rounded-none"
          />
          <div className="absolute top-4 left-0 px-4 w-full flex items-center justify-between">
            {/* <div className="cursor-pointer text-grey-40 hover:bg-primary hover:text-white w-7 h-7 rounded-full bg-white flex items-center justify-center z-10">
              <Heart size={18} />
            </div> */}
            {cheapestPrice?.percentage_diff &&
              parseFloat(cheapestPrice?.percentage_diff) > 0 && (
                <>
                  <div className="absolute top-2 right-10 z-10">
                    <Thunder size={24} />
                  </div>
                  <div className="text-red-500 bg-orang-15 flex  absolute top-[10px] right-2 text-xs pl-3 pr-1 py-[1px] rounded-r-sm font-semibold">
                    -{cheapestPrice?.percentage_diff}%
                  </div>
                </>
              )}
          </div>

          <div className="px-8 sm:px-4 w-full absolute bottom-4 left-0 opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible">
            <LocalizedClientLink href={`/san-pham/${product.handle}`}>
              <button className="w-full h-7 sm:h-9 rounded-md bg-primary text-white hover:bg-orang-30 text-sm sm:text-base">
                Xem chi tiết
              </button>
            </LocalizedClientLink>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-2 gap-y-1 mt-2">
          {product?.categories &&
            product?.categories.length > 0 &&
            product.categories
              .slice() // Create a shallow copy to avoid mutating the original array
              .sort((a, b) => a.name.length - b.name.length) // Sort by length of name
              .map((category) => (
                <span key={category.id} className="flex items-center">
                  <LocalizedClientLink
                    href={`/danh-muc-san-pham/${category.handle}`}
                    className="text-white bg-primary py-[2px] rounded-sm font-manrope-semibold text-xxs sm:text-xs px-1 text-nowrap"
                  >
                    {category.name}
                  </LocalizedClientLink>
                </span>
              ))}
        </div>

        <div className="line-clamp-2 text-black-30 text-sm sm:text-lg h-10 sm:h-14">
          {product?.title || "Sản phẩm Bông Lúa phiên bản mới 2025"}
        </div>

        <div className="flex items-center">
          {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-1">
            <Star color="#EA9934" size={16} />
            <p className="text-xs sm:text-base">
              <span className="mr-1">{averageRating}</span>
              <span className="mr-1">({reviews.length})</span>
            </p>
          </div>
          <p className="text-xs sm:text-base">
            <span className="text-grey-30 mr-1">Đã bán:</span>
            <span className="text-black-30">{soldCount}</span>
          </p>
        </div>

        {cheapestPrice && cheapestPrice.price_type === "sale" && (
          <div className="mt-1 rounded-full bg-[#FFDBB7] w-full h-5 relative">
            <div className="absolute bg-gradient-to-r from-[#EA541E] to-[#FBD316] top-0 left-0 w-[28%] h-full rounded-full"></div>
            <div className="absolute uppercase inset-0 text-orang-30 text-xxs  sm:text-xs h-full w-full flex items-center justify-center">
              Đang bán chạy
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
