"use client"

import { HttpTypes } from "@medusajs/types"
import Image from "next/image"
import { isEqual } from "lodash"
import { useParams } from "next/navigation"
import { useEffect, useMemo, useState } from "react"

import { addToCart } from "@lib/data/cart"
import Icons from "@modules/common/icons"
import { toast } from "@medusajs/ui"
import formatNumber from "@lib/util/formatNumber"
import { getProductPrice } from "@lib/util/get-product-price"
import IMGS from "@constants/IMGS"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const optionsAsKeymap = (
  variantOptions: HttpTypes.StoreProductVariant["options"]
) => {
  return variantOptions?.reduce((acc: Record<string, string>, varopt: any) => {
    acc[varopt.option_id] = varopt.value
    return acc
  }, {})
}

export default function ProductItem({
  product,
  isSale = false,
}: {
  product: HttpTypes.StoreProduct
  isSale?: boolean
}) {
  const { Star, StarHalf, Thunder, Cart, Flame } = Icons

  const { cheapestPrice } = getProductPrice({
    product: product,
  })

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
    if (!selectedVariant?.id) return

    setIsAdding(true)
    try {
      await addToCart({
        variantId: selectedVariant.id,
        quantity: 1,
        countryCode,
      })
      toast.success("Thêm Sản Phẩm Vào Giỏ Hàng Thành Công !")
    } catch (error) {
      console.error("Failed to add to cart", error)
    } finally {
      setIsAdding(false)
    }
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
    <div
      // href={product?.handle ? `/san-pham/${product?.handle}` : "/"}
      className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow"
    >
      <div className="flex gap-4">
        {(product?.thumbnail || product?.images?.[0]?.url) && (
          <Image
            // @ts-ignore
            src={product.thumbnail ?? product.images[0].url}
            alt="banner"
            width={20}
            height={20}
            loading="lazy"
            className="w-20 h-20 rounded-lg object-cover"
          />
        )}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <h3 className="font-semibold text-lg capitalize">
                {product?.title.toLowerCase()}
              </h3>
              <span className="text-sm text-gray-500 ml-2">
                Active 5 mins ago
              </span>
            </div>
          </div>
          <p className="text-gray-600 mb-2">Singapore, Asia Pacific</p>
          <div className="mb-3">
            <span className="text-sm font-medium text-gray-700">
              Capabilities:
            </span>
            <div className="flex flex-wrap gap-1 mt-1">
              <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                Software Development
              </span>
              <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                Software Development
              </span>
            </div>
          </div>
          <div className="mb-4">
            <span className="text-sm font-medium text-gray-700">
              Certifications:
            </span>
            <div className="flex flex-wrap gap-1 mt-1">
              <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">
                ISO 27001
              </span>
              <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">
                ISO 27002
              </span>
            </div>
          </div>

          {/*Price*/}

          {/*<div className="mt-1">*/}
          {/*  <span className="text-green-600 text-sm sm:text-lg font-bold">*/}
          {/*    {cheapestPrice?.calculated_price}*/}
          {/*  </span>*/}
          {/*  /!*{cheapestPrice?.percentage_diff &&*!/*/}
          {/*  /!*  parseFloat(cheapestPrice?.percentage_diff) > 0 && (*!/*/}
          {/*  /!*    <span className="text-grey-40 ml-2 text-xs sm:text-sm line-through">*!/*/}
          {/*  /!*      {cheapestPrice?.original_price}*!/*/}
          {/*  /!*    </span>*!/*/}
          {/*  /!*  )}*!/*/}
          {/*</div>*/}

          {/*<div className="flex flex-row justify-between items-center">*/}
          {/*  <p className="hidden sm:flex text-xs sm:text-sm f items-center gap-x-1">*/}
          {/*    <span className="flex items-center gap-x-[2px]">*/}
          {/*      {[...Array(5)].map((_, index) =>*/}
          {/*        index < fullStars ? (*/}
          {/*          <Star key={index} color="#EA9934" />*/}
          {/*        ) : index === fullStars && hasHalfStar ? (*/}
          {/*          <StarHalf key={index} color="#EA9934" />*/}
          {/*        ) : (*/}
          {/*          <Star key={index} color="#D1D5DB" />*/}
          {/*        )*/}
          {/*      )}*/}
          {/*    </span>*/}

          {/*    <span>*/}
          {/*      (<span className="text-gray-600">{reviews.length}</span>)*/}
          {/*    </span>*/}
          {/*  </p>*/}

          {/*  <p className="flex sm:hidden items-center justify-center gap-x-1 text-xs">*/}
          {/*    {averageRating}*/}
          {/*    <Star color="#EA9934" size={12} />*/}
          {/*  </p>*/}

          {/*  <p className="text-grey-30 text-xs sm:text-sm">*/}
          {/*    Đã bán:{" "}*/}
          {/*    <span className="text-gray-600 font-semibold">{soldCount}</span>*/}
          {/*  </p>*/}
          {/*</div>*/}

          <div className="flex gap-3">
            <button className="gradient-bg text-white px-4 py-2 rounded-lg text-sm hover:opacity-90">
              Contact Supplier
            </button>
            <LocalizedClientLink
              className="border border-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-gray-50"
              href={`/san-pham/${product.handle}`}
            >
              <Image
                src={IMGS.Eyes}
                alt={"See detail"}
                width={20}
                height={20}
              />
            </LocalizedClientLink>
          </div>

          {/*<button*/}
          {/*  onClick={(e) => {*/}
          {/*    e.stopPropagation()*/}
          {/*    e.preventDefault()*/}
          {/*    handleAddToCart()*/}
          {/*  }}*/}
          {/*  disabled={!inStock || !selectedVariant || isAdding}*/}
          {/*  className="w-full py-1 text-xs mt-2 rounded-md bg-primary/85 capitalize flex items-center justify-center gap-x-1 text-white duration-300 transition-all text-nowrap hover:shadow-sm hover:bg-primary/100 disabled:opacity-65 disabled:hover:bg-primary/80 disabled:hover:shadow-none disabled:cursor-not-allowed"*/}
          {/*>*/}
          {/*  {isAdding ? (*/}
          {/*    <Spinner className="animate-spin"></Spinner>*/}
          {/*  ) : (*/}
          {/*    <>*/}
          {/*      <span className="hidden sm:inline-block">*/}
          {/*        <Cart />*/}
          {/*      </span>*/}
          {/*      {inStock && selectedVariant ? "Thêm vào giỏ hàng" : "Hết hàng"}*/}
          {/*    </>*/}
          {/*  )}*/}
          {/*</button>*/}

          {/*{isSale && (*/}
          {/*  <div className="mt-[4px] rounded-full bg-[#FFDBB7] w-full h-5 relative">*/}
          {/*    <div className="absolute bg-gradient-to-r from-[#EA541E] to-[#FBD316] top-0 left-0 w-[20%] h-full rounded-full"></div>*/}
          {/*    <div className="absolute capitalize inset-0 text-primary text-xxs sm:text-xs h-full w-full flex items-center justify-center gap-x-1">*/}
          {/*      <Flame /> Đang bán chạy*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*)}*/}
        </div>

        {/*{cheapestPrice?.percentage_diff &&*/}
        {/*  parseFloat(cheapestPrice?.percentage_diff) > 0 && (*/}
        {/*    <>*/}
        {/*      <div className="absolute top-2 right-10 z-20">*/}
        {/*        <Thunder size={24} />*/}
        {/*      </div>*/}
        {/*      <div className="text-red-500 bg-orang-15 flex absolute top-[10px] right-2 text-xs pl-3 pr-1 py-[1px] rounded-r-sm font-semibold">*/}
        {/*        -{cheapestPrice?.percentage_diff}%*/}
        {/*      </div>*/}
        {/*    </>*/}
        {/*  )}*/}
      </div>
    </div>
  )
}
