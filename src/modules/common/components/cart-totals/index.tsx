"use client"

import { convertToLocale } from "@lib/util/money"
import { InformationCircleSolid } from "@medusajs/icons"
import { Tooltip } from "@medusajs/ui"
import React from "react"

type CartTotalsProps = {
  totals: {
    total?: number | null
    subtotal?: number | null
    tax_total?: number | null
    shipping_total?: number | null
    discount_total?: number | null
    gift_card_total?: number | null
    item_total?: number | null
    currency_code: string
  }
}

const CartTotals: React.FC<CartTotalsProps> = ({ totals }) => {
  const {
    currency_code,
    total,
    subtotal,
    tax_total,
    shipping_total,
    discount_total,
    gift_card_total,
    item_total,
  } = totals
  return (
    <div>
      <div className="flex flex-col gap-y-2 text-ui-fg-subtle">
        <div className="flex items-center justify-between">
          <span className="flex gap-x-1 items-center">Tổng tạm tính</span>
          <span data-testid="cart-subtotal" data-value={item_total || 0}>
            {convertToLocale({ amount: item_total ?? 0, currency_code })}
          </span>
        </div>
        {!!discount_total && (
          <div className="flex items-center justify-between">
            <span>Giảm giá</span>
            <span
              className="text-ui-fg-interactive"
              data-testid="cart-discount"
              data-value={discount_total || 0}
            >
              -{" "}
              {convertToLocale({ amount: discount_total ?? 0, currency_code })}
            </span>
          </div>
        )}
        <div className="flex items-center justify-between">
          <span>Phí Ship</span>
          <span
            data-testid="cart-shipping"
            data-value={shipping_total || 0}
            className="text-sm sm:text-base"
          >
            {convertToLocale({ amount: shipping_total ?? 0, currency_code })}
          </span>
        </div>
        {/* <div className="flex justify-between">
          <span className="flex gap-x-1 items-center ">Thuế</span>
          <span data-testid="cart-taxes" data-value={tax_total || 0}>
            {convertToLocale({ amount: tax_total ?? 0, currency_code })}
          </span>
        </div>
        {!!gift_card_total && (
          <div className="flex items-center justify-between">
            <span>Thẻ quả tặng</span>
            <span
              className="text-ui-fg-interactive"
              data-testid="cart-gift-card-amount"
              data-value={gift_card_total || 0}
            >
              -{" "}
              {convertToLocale({ amount: gift_card_total ?? 0, currency_code })}
            </span>
          </div>
        )} */}
      </div>
      {/* <div className="h-px w-full border-b border-gray-200 my-4" /> */}
      <div className="flex items-center justify-between  mb-2 mt-2">
        <h1 className="text-ui-fg-subtle">Thành tiền</h1>
        <span
          className="txt-xlarge-plus text-primary font-semibold !font-manrope"
          data-testid="cart-total"
          data-value={total || 0}
        >
          {convertToLocale({ amount: total ?? 0, currency_code })}
        </span>
      </div>
      <div className="h-px w-full border-b border-gray-200 mt-4" />
    </div>
  )
}

export default CartTotals
