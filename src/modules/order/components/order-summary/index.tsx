import { convertToLocale } from "@lib/util/money"
import { HttpTypes } from "@medusajs/types"

type OrderSummaryProps = {
  order: HttpTypes.StoreOrder
}

const OrderSummary = ({ order }: OrderSummaryProps) => {
  const getAmount = (amount?: number | null) => {
    if (amount !== 0 && !amount) {
      return
    }

    return convertToLocale({
      amount,
      currency_code: order.currency_code,
    })
  }

  console.log(order)

  return (
    <div>
      <h2 className="h2-core flex flex-row text-2xl text-primary my-4">
        Tổng quan đơn hàng
      </h2>
      <div className="my-2">
        <div className="flex items-center justify-between t mb-2">
          <span>Tổng giá</span>
          <span>{getAmount(order.item_total)}</span>
        </div>
        <div className="flex flex-col gap-y-1">
          {order.discount_total > 0 && (
            <div className="flex items-center justify-between">
              <span>Giảm giá</span>
              <span>- {getAmount(order.discount_total)}</span>
            </div>
          )}
          {order.gift_card_total > 0 && (
            <div className="flex items-center justify-between">
              <span>Giảm giá bằng thẻ tặng: </span>
              <span>- {getAmount(order.gift_card_total)}</span>
            </div>
          )}
          <div className="flex items-center justify-between">
            <span>Phí vận chuyển</span>
            <span>{getAmount(order.shipping_total)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Thuế</span>
            <span>{getAmount(order.tax_total || 0)}</span>
          </div>
        </div>
        <div className="h-px w-full border-b border-gray-200 border-dashed my-6" />
        <div className="flex items-center justify-between mb-2">
          <h2 className="h2-core flex flex-row text-2xl text-primary">
            Thành tiền
          </h2>
          <span className="text-xl">{getAmount(order.total)}</span>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary
