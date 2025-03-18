"use client"

import { Button } from "@medusajs/ui"
import { isEqual } from "lodash"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useMemo, useState } from "react"
import { Loader } from "@medusajs/icons"

import { addToCart } from "@lib/data/cart"
import { HttpTypes } from "@medusajs/types"
import ProductInfo from "@modules/products/templates/product-info"
import Divider from "@modules/common/components/divider"
import OptionSelect from "@modules/products/components/product-actions/option-select"
import ProductPolicy from "../product-policy"
import ProductMoreInfo from "../product-more-info"
import ProductPrice from "../product-price"

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
  disabled,
}: ProductActionsProps) {
  const router = useRouter()

  const [options, setOptions] = useState<Record<string, string | undefined>>({})
  const [isAdding, setIsAdding] = useState(false)
  const countryCode = useParams().countryCode as string
  const [quantity, setQuantity] = useState<number>(1) // State for the quantity

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

  // add the selected variant to the cart
  const handleAddToCart = async (isBuyNow = false) => {
    if (!selectedVariant?.id) return null

    try {
      setIsAdding(true)
      await addToCart({
        variantId: selectedVariant.id,
        quantity,
        countryCode,
      })
      isBuyNow && router.push(`/${countryCode}/gio-hang`)
    } catch (error) {
      console.error(error)
    } finally {
      setIsAdding(false)
    }
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
      <ProductPrice product={product} variant={selectedVariant} />

      <ProductInfo product={product} />

      <div>
        {(product.variants?.length ?? 0) > 1 && (
          <div className="flex flex-col gap-y-4">
            <Divider />

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
          </div>
        )}
      </div>

      <div className="flex flex-col">
        <div className="border-y border-grey-50 py-4 my-4 sm:my-6">
          <div className="flex items-center justify-normal h-11 gap-x-2 lg:gap-x-4">
            <div className="rounded-sm h-full bg-grey-50 flex items-center justify-center">
              <button
                className="w-11 h-full disabled:opacity-50 text-xl"
                onClick={handleDecrease}
                aria-label="Decrease quantity"
                disabled={
                  quantity <= 1 ||
                  !inStock ||
                  !selectedVariant ||
                  !!disabled ||
                  isAdding
                }
              >
                -
              </button>
              <input
                value={quantity}
                onChange={handleInputChange}
                type="text"
                min="1"
                className="text-center w-10 font-semibold bg-grey-50 h-full focus:outline-none disabled:opacity-50"
                disabled={
                  !inStock || !selectedVariant || !!disabled || isAdding
                }
              />
              <button
                className="w-11 h-full text-xl disabled:opacity-50"
                onClick={handleIncrease}
                aria-label="Increase quantity"
                disabled={
                  !inStock || !selectedVariant || !!disabled || isAdding
                }
              >
                +
              </button>
            </div>
            <Button
              onClick={() => handleAddToCart()}
              disabled={!inStock || !selectedVariant || !!disabled || isAdding}
              variant="primary"
              className="text-sm h-full rounded-sm px-2 sm:px-4 lg:px-6 border-none shadow-none bg-primary font-medium sm:text-base hover:bg-primary/90 hover:shadow-md capitalize"
              isLoading={isAdding}
              data-testid="add-product-button"
            >
              {inStock ? "Thêm vào giỏ hàng" : "Hết hàng"}
            </Button>
            <button
              className="bg-primary/90 hover:bg-primary px-2 sm:px-4 lg:px-6 h-full flex items-center justify-center rounded-sm text-white sm:text-base text-sm hover:shadow-md transition-all txt-compact-small-plus capitalize"
              onClick={() => handleAddToCart(true)}
            >
              {isAdding ? (
                <Loader className="animate-spin"></Loader>
              ) : (
                <>Mua ngay</>
              )}
            </button>
          </div>
        </div>

        <ProductMoreInfo product={product} variant={selectedVariant} />

        <ProductPolicy />
      </div>
    </>
  )
}
