import { DEFAULT_EMAIL } from "@constants/defaultEmail"
import { HttpTypes } from "@medusajs/types"
import { Text } from "@medusajs/ui"

type OrderDetailsProps = {
  order: HttpTypes.StoreOrder
  showStatus?: boolean
}

const OrderDetails = ({ order, showStatus }: OrderDetailsProps) => {
  const formatStatus = (str: string) => {
    const formatted = str.split("_").join(" ")

    return formatted.slice(0, 1).toUpperCase() + formatted.slice(1)
  }

  const fulfillmentStatusTranslations = {
    not_fulfilled: "Chưa hoàn thành",
    partially_fulfilled: "Hoàn thành một phần",
    fulfilled: "Đã hoàn thành",
    partially_shipped: "Đã vận chuyển một phần",
    shipped: "Đã vận chuyển",
    partially_delivered: "Đã giao một phần",
    delivered: "Đã giao hàng",
    canceled: "Đã hủy",
  }

  const paymentStatusTranslations = {
    not_paid: "Chưa thanh toán",
    awaiting: "Đang chờ xử lý",
    authorized: "Đang chờ xác nhận",
    partially_authorized: "Đã ủy quyền một phần",
    captured: "Đã thu tiền",
    partially_captured: "Đã thu tiền một phần",
    partially_refunded: "Đã hoàn tiền một phần",
    refunded: "Đã hoàn tiền",
    canceled: "Đã hủy",
    requires_action: "Yêu cầu hành động",
  }

  return (
    <div className="flex flex-col gap-y-1 mb-2 ">
      {/* {order.email && order.email !== DEFAULT_EMAIL && (
        <Text className="text-base">
          Chúng tôi đã gửi chi tiết xác nhận đơn hàng đến{" "}
          <span
            className="text-ui-fg-medium-plus font-semibold"
            data-testid="order-email"
          >
            {order.email}
          </span>
          .
        </Text>
      )} */}
      <Text className="text-sm sm:text-base text-ui-fg-subtle !font-manrope ">
        Ngày đặt hàng:{" "}
        <span data-testid="order-date " className="text-ui-fg-base">
          {new Date(order.created_at).toLocaleDateString("vi-VN")}
        </span>
      </Text>
      <Text className="text-sm sm:text-base text-ui-fg-subtle !font-manrope ">
        Mã đơn hàng:{" "}
        <span data-testid="order-id" className="uppercase  text-ui-fg-base">
          {order?.id}
        </span>
      </Text>

      {showStatus && (
        <div className="flex items-center text-base gap-x-8 ">
          <Text className="text-base !font-manrope">
            Trạng thái đơn hàng:{" "}
            <span className="text-ui-fg-subtle " data-testid="order-status">
              {/* TODO: Check where the statuses should come from */}
              {formatStatus(
                fulfillmentStatusTranslations[order.fulfillment_status]
              )}
            </span>
          </Text>
          <Text className="text-base !font-manrope">
            Trạng thái thanh toán:{" "}
            <span
              className="text-ui-fg-subtle "
              sata-testid="order-payment-status"
            >
              {formatStatus(paymentStatusTranslations[order.payment_status])}
            </span>
          </Text>
        </div>
      )}
    </div>
  )
}

export default OrderDetails
