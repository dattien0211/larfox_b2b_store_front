"use client"

import { Button } from "@medusajs/ui"
import { isEqual } from "lodash"
import { useParams } from "next/navigation"
import { useEffect, useMemo, useRef, useState } from "react"

import { useIntersection } from "@lib/hooks/use-in-view"
import Divider from "@modules/common/components/divider"
import OptionSelect from "@modules/products/components/product-actions/option-select"

import MobileActions from "./mobile-actions"
import ProductPrice from "../product-price"
import { addToCart } from "@lib/data/cart"
import { HttpTypes } from "@medusajs/types"
import ProductInfo from "@modules/products/templates/product-info"
import Icons from "@modules/common/icons"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ProductPolicy from "../product-policy"
import ProductSocial from "../product-social"
import ProductMoreInfo from "../product-more-info"

type ProductActionsProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  disabled?: boolean
}

const optionsAsKeymap = (
  variantOptions: HttpTypes.StoreProductVariant["options"]
) => {
  return variantOptions?.reduce((acc: Record<string, string>, varopt: any) => {
    acc[varopt.option_id] = varopt.value
    return acc
  }, {})
}

export default function ProductActions({
  product,
  region,
  disabled,
}: ProductActionsProps) {
  const { Heart } = Icons

  const [options, setOptions] = useState<Record<string, string | undefined>>({})
  const [isAdding, setIsAdding] = useState(false)
  const countryCode = useParams().countryCode as string
  const [quantity, setQuantity] = useState<number>(1) // State for the quantity

  // If there is only 1 variant, preselect the options
  useEffect(() => {
    if (product.variants?.length === 1) {
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

  // update the options when a variant is selected
  const setOptionValue = (optionId: string, value: string) => {
    setOptions((prev) => ({
      ...prev,
      [optionId]: value,
    }))
  }

  // check if the selected variant is in stock
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

  const actionsRef = useRef<HTMLDivElement>(null)

  const inView = useIntersection(actionsRef, "0px")

  // add the selected variant to the cart
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

  // Decrease quantity but ensure it doesn't go below 1
  const handleDecrease = () => {
    setQuantity((prev) => Math.max(prev - 1, 1))
  }

  // Increase quantity
  const handleIncrease = () => {
    setQuantity((prev) => prev + 1)
  }

  // Manually update quantity from input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (/^\d*$/.test(value)) {
      // Ensures only numbers are allowed
      setQuantity(value === "" ? 1 : parseInt(value, 10)) // Default to 1 if empty
    }
  }

  return (
    <>
      <div className="flex flex-col" ref={actionsRef}>
        <div>
          {(product.variants?.length ?? 0) > 1 && (
            <div className="flex flex-col gap-y-4">
              {(product.options || []).map((option) => {
                return (
                  <div key={option.id}>
                    <OptionSelect
                      option={option}
                      current={options[option.id]}
                      updateOption={setOptionValue}
                      title={option.title ?? ""}
                      data-testid="product-options"
                      disabled={!!disabled || isAdding}
                    />
                  </div>
                )
              })}
              <Divider />
            </div>
          )}
        </div>

        <ProductPrice product={product} variant={selectedVariant} />

        <ProductInfo product={product} />

        <div className="border-y border-grey-50 py-4 my-6">
          <div className="flex items-center h-11 gap-x-4">
            <div className="rounded-sm h-full bg-grey-50 flex items-center justify-center">
              <button
                className="w-11 h-full"
                onClick={handleDecrease}
                aria-label="Decrease quantity"
              >
                -
              </button>
              <input
                value={quantity}
                onChange={handleInputChange}
                type="text"
                min="1"
                className="text-center w-10 font-semibold bg-grey-50 h-full focus:outline-none"
              />
              <button
                className="w-11 h-full"
                onClick={handleIncrease}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
            <Button
              onClick={handleAddToCart}
              disabled={!inStock || !selectedVariant || !!disabled || isAdding}
              variant="primary"
              className="text-[16px] h-full rounded-sm px-6 border-none shadow-none bg-black-30 font-medium"
              isLoading={isAdding}
              data-testid="add-product-button"
            >
              {inStock ? "Thêm giỏ hàng" : "Hết hàng"}
            </Button>
            <button className="bg-primary px-6 h-full rounded-sm text-white">
              Mua ngay
            </button>
          </div>
          <div className="mt-4 flex gap-x-2 items-center">
            <span className="cursor-pointer">
              <Heart />
            </span>
            <p>Thêm sản phẩm yêu thích</p>
          </div>
        </div>

        <ProductMoreInfo product={product} />

        <ProductSocial />

        <ProductPolicy />

        {/* <MobileActions
          product={product}
          variant={selectedVariant}
          options={options}
          updateOptions={setOptionValue}
          inStock={inStock}
          handleAddToCart={handleAddToCart}
          isAdding={isAdding}
          show={!inView}
          optionsDisabled={!!disabled || isAdding}
        /> */}
      </div>
    </>
  )
}
