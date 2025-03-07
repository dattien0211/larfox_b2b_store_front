import { clx } from "@medusajs/ui"

import { getPercentageDiff } from "@lib/util/get-precentage-diff"
import { getPricesForVariant } from "@lib/util/get-product-price"
import { convertToLocale } from "@lib/util/money"
import { HttpTypes } from "@medusajs/types"

type LineItemPriceProps = {
  item: HttpTypes.StoreCartLineItem | HttpTypes.StoreOrderLineItem
  style?: "default" | "tight"
}

const LineItemPrice = ({ item, style = "default" }: LineItemPriceProps) => {
  const { currency_code, calculated_price_number, original_price_number } =
    getPricesForVariant(item.variant) ?? {}

  const adjustmentsSum = (item.adjustments || []).reduce(
    (acc, adjustment) => adjustment.amount + acc,
    0
  )

  const originalPrice = original_price_number * item.quantity
  const currentPrice = calculated_price_number * item.quantity - adjustmentsSum
  const hasReducedPrice = currentPrice < originalPrice

  return (
    <div className="flex flex-col gap-x-2 items-end !font-manrope">
      <span
        className={clx(
          "text-primary text-sm sm:text-base font-semibold text-left",
          {}
        )}
        data-testid="product-price"
      >
        {convertToLocale({
          amount: currentPrice,
          currency_code,
        })}
      </span>
    </div>
  )
}

export default LineItemPrice
