"use client"

import { HttpTypes } from "@medusajs/types"
import Image from "next/image"
import { isEqual } from "lodash"
import { useParams } from "next/navigation"
import { useMemo, useState, useEffect } from "react"

import { addToCart } from "@lib/data/cart"
import IMGS from "@constants/IMGS"
import Icons from "@modules/common/icons"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Button } from "@medusajs/ui"
import formatNumber from "@lib/util/formatNumber"

const optionsAsKeymap = (
  variantOptions: HttpTypes.StoreProductVariant["options"]
) => {
  return variantOptions?.reduce((acc: Record<string, string>, varopt: any) => {
    acc[varopt.option_id] = varopt.value
    return acc
  }, {})
}

export default function ProductItem({
  productItem,
  isSale = false,
}: {
  productItem: any
  isSale?: boolean
}) {
  const { Star, StarHalf, Thunder, Cart, Flame } = Icons
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

  const countryCode = useParams().countryCode as string
  const [options, setOptions] = useState<Record<string, string | undefined>>({})
  const [isAdding, setIsAdding] = useState(false)

  // If there is only 1 variant, preselect the options
  useEffect(() => {
    if (product.variants?.length === 1) {
      const variantOptions = optionsAsKeymap(product.variants[0].options)
      setOptions(variantOptions ?? {})
    } else if (product.variants?.length && product.variants?.length > 0) {
      // Preselect the first variant if there are multiple variants
      const variantOptions = optionsAsKeymap(product.variants[0].options)
      setOptions(variantOptions ?? {})
    }
  }, [product.variants])

  const selectedVariant = useMemo(() => {
    if (!product.variants || product.variants.length === 0) {
      return
    }

    return product.variants.find((v) => {
      const variantOptions = optionsAsKeymap(v.options)
      return isEqual(variantOptions, options)
    })
  }, [product.variants, options])

  const inStock = useMemo(() => {
    if (!selectedVariant) {
      return true
    }

    // If we don't manage inventory, we can always add to cart
    if (selectedVariant && !selectedVariant.manage_inventory) {
      return true
    }

    // If we allow back orders on the variant, we can add to cart
    if (selectedVariant?.allow_backorder) {
      return true
    }

    // If there is inventory available, we can add to cart
    if (
      selectedVariant?.manage_inventory &&
      (selectedVariant?.inventory_quantity || 0) > 0
    ) {
      return true
    }

    // Otherwise, we can't add to cart
    return false
  }, [selectedVariant])

  const handleAddToCart = async () => {
    if (!selectedVariant?.id) return null

    setIsAdding(true)

    await addToCart({
      variantId: selectedVariant.id,
      quantity: 1,
      countryCode,
    })

    setIsAdding(false)
  }

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

  const soldCount = formatNumber(Number(product?.metadata?.sold) || 0)

  return (
    <div className="w-full flex flex-col group cursor-pointer border-primary border rounded-md ">
      <div className="p-2 relative">
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
        </div>

        <div className="w-full absolute bottom-[10%] left-0 opacity-0 invisible transition-all duration-300  flex flex-col gap-2 items-center justify-center group-hover:opacity-100 group-hover:visible ">
          <button
            className="w-36 h-7 sm:h-8 text-sm sm:text-base rounded-md bg-primary/85  text-white duration-300 transition-all text-nowrap
                        hover:scale-105 hover:shadow-sm hover:bg-primary/95"
          >
            <LocalizedClientLink
              href={product?.handle ? `/san-pham/${product?.handle}` : "/"}
            >
              Xem chi tiết
            </LocalizedClientLink>
          </button>
        </div>
      </div>
      <div className="bg-primary h-[1px] w-full relative"></div>
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
        <div className="line-clamp-2 text-sm sm:text-[15px] h-9 sm:h-[42px]">
          {product?.title}
        </div>
        <div className="mt-1 sm:mt-[2px]">
          <span className="text-green-600 text-sm sm:text-lg font-bold">
            {cheapestPrice?.calculated_price}
          </span>
          <span className="text-grey-40 ml-2 text-xs sm:text-sm line-through">
            {cheapestPrice?.original_price}
          </span>
        </div>

        <div className="flex flex-row justify-between items-center ">
          <p className="hidden sm:flex text-xs sm:text-sm f items-center gap-x-1">
            <span className="flex items-center gap-x-[2px]">
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
            <span>
              (<span className="text-gray-600">{reviews.length}</span>)
            </span>
          </p>

          <p className="flex items-center sm:hidden gap-x-1  text-xs sm:text-sm">
            <span className="text-gray-600">{reviews.length}</span>
            <Star color="#EA9934" width={10} height={10} />
          </p>

          <p className="text-grey-30 text-xs sm:text-sm ">
            Đã bán:{" "}
            <span className="text-gray-600 font-semibold">{soldCount}</span>
          </p>
        </div>

        <button
          onClick={handleAddToCart}
          disabled={!inStock || !selectedVariant || isAdding}
          className="w-full py-1 text-xs mt-2 rounded-md bg-primary/80 capitalize flex items-center justify-center gap-x-1 text-white duration-300 transition-all text-nowrap hover:shadow-sm hover:bg-primary/100"
        >
          <Cart /> {inStock ? "Thêm vào giỏ hàng" : "Hết hàng"}
        </button>

        {isSale && (
          <div className="mt-[4px] rounded-full bg-[#FFDBB7] w-full h-5 relative">
            <div className="absolute bg-gradient-to-r from-[#EA541E] to-[#FBD316] top-0 left-0 w-[20%] h-full rounded-full"></div>
            <div className="absolute capitalize inset-0 text-primary text-xxs  sm:text-xs h-full w-full flex items-center justify-center gap-x-1">
              <Flame /> Đang bán chạy
            </div>
          </div>
        )}
      </div>

      {/* <div className="h-2 bg-grey-30 w-[1px]"></div>
        <p className="text-xs sm:text-sm">
          <span className="text-grey-30 mr-1">Đã bán:</span>
          <span className="text-grey-5">{soldCount}</span>
        </p> */}
    </div>
  )
}
