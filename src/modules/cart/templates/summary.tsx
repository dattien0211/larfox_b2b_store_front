"use client"

import { Button, Heading } from "@medusajs/ui"

import CartTotals from "@modules/common/components/cart-totals"
import Divider from "@modules/common/components/divider"
import DiscountCode from "@modules/checkout/components/discount-code"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { convertToLocale } from "@lib/util/money"
import { HttpTypes } from "@medusajs/types"

type SummaryProps = {
  cart: HttpTypes.StoreCart & {
    promotions: HttpTypes.StorePromotion[]
  }
}

function getCheckoutStep(cart: HttpTypes.StoreCart) {
  if (!cart?.shipping_address?.address_1 || !cart.email) {
    return "dia-chi"
  } else if (cart?.shipping_methods?.length === 0) {
    return "giao-hang"
  } else {
    return "thanh-toan"
  }
}

const Summary = ({ cart }: SummaryProps) => {
  const step = getCheckoutStep(cart)

  return (
    <div className="flex flex-col gap-y-4">
      <Heading
        level="h2"
        className="text-xl capitalize font-semibold sm:text-[2rem] leading-[2.75rem] text-primary font-times"
      >
        Tổng quan
      </Heading>
      <DiscountCode cart={cart} />
      <Divider />
      <CartTotals totals={cart} />
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h2>Thành tiền</h2>
          <h1 className="text-xl font-semibold text-primary">
            {convertToLocale({
              amount: cart.total ?? 0,
              currency_code: cart.currency_code,
            })}
          </h1>
        </div>
        <LocalizedClientLink
          href={"/dat-hang?step=" + step}
          data-testid="checkout-button"
        >
          <button className=" bg-primary/90 text-white px-4 w-full h-10 cursor-pointer hover:bg-primary">
            Thanh toán
          </button>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default Summary
