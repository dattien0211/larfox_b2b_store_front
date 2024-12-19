import { Text } from "@medusajs/ui"

import { getProductPrice } from "@lib/util/get-product-price"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"
import { getProductsById } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"
import Icons from "@modules/common/icons"

export default async function ProductPreview({
  product,
  isFeatured,
  region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  const { Star, Heart } = Icons

  const [pricedProduct] = await getProductsById({
    ids: [product.id!],
    regionId: region.id,
  })

  if (!pricedProduct) {
    return null
  }

  const { cheapestPrice } = getProductPrice({
    product: pricedProduct,
  })

  return (
    <div className="group">
      <div
        data-testid="product-wrapper"
        className="overflow-hidden flex flex-col gap-y-2"
      >
        <div className="relative">
          <Thumbnail
            thumbnail={product.thumbnail}
            images={product.images}
            size="full"
            isFeatured={isFeatured}
            className="!aspect-square !rounded-none"
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
            <LocalizedClientLink href={`/san-pham/${product.handle}`}>
              <button className="w-full h-9 rounded-md bg-primary text-white hover:bg-white hover:text-primary">
                Xem chi tiết
              </button>
            </LocalizedClientLink>
          </div>
        </div>

        <div>
          <div className="max-w-full flex items-center flex-wrap gap-y-1">
            {product?.categories &&
              product?.categories?.length > 0 &&
              product?.categories?.map((category) => (
                <span key={category.id} className="flex items-center">
                  <LocalizedClientLink
                    href={`/loai-san-pham/${category.handle}`}
                    className="bg-primary py-[2px] px-1 rounded-sm text-white font-manrope-bold text-xs mr-2 text-nowrap"
                  >
                    {category.name}
                  </LocalizedClientLink>
                </span>
              ))}
            <span className="line-clamp-2">
              {product?.title || "Sản phẩm AnCo phiên bản mới 2025"}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-primary text-lg font-semibold">
              {cheapestPrice?.calculated_price}
            </span>
            <span className="text-grey-40 ml-2 line-through text-sm">
              {cheapestPrice?.original_price}
            </span>
          </div>
          <div className="flex items-center ml-2">
            <Star color="#EA9934" size={18} />
            <p className="flex items-center">
              <span className="ml-[2px]">4.8</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
