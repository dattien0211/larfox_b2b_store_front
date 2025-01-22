import { DEFAULT_EMAIL } from "@constants/defaultEmail"
import { convertToLocale } from "@lib/util/money"
import { HttpTypes } from "@medusajs/types"
import { Heading, Text } from "@medusajs/ui"

import Divider from "@modules/common/components/divider"

type ShippingDetailsProps = {
  order: HttpTypes.StoreOrder
}

const ShippingDetails = ({ order }: ShippingDetailsProps) => {
  return (
    <div>
      <h1 className="flex flex-row text-2xl sm:text-3xl font-semibold text-primary font-times my-4 ">
        Thông tin nhận hàng
      </h1>
      <div className="flex flex-col items-start gap-y-1">
        <div className="flex flex-wrap" data-testid="shipping-address-name">
          <Text className="text-base text-ui-fg-base mr-2 text-nowrap !font-manrope">
            Tên khách hàng:
          </Text>
          <Text className="text-base text-ui-fg-subtle mr-1 text-nowrap !font-manrope">
            Khách hàng
          </Text>
          <Text className="text-base text-ui-fg-subtle mr-1 text-nowrap !font-manrope">
            {order.shipping_address?.first_name}
          </Text>
        </div>
        <div className="flex flex-wrap" data-testid="shipping-address-summary">
          <Text className="text-base text-ui-fg-base mr-2 text-nowrap !font-manrope">
            Địa chỉ:
          </Text>
          <Text className="text-base text-ui-fg-subtle mr-1 text-nowrap !font-manrope">
            {order.shipping_address?.address_1},
          </Text>
          <Text className="text-base text-ui-fg-subtle mx-1 text-nowrap !font-manrope">
            {order.shipping_address?.province},
          </Text>
          <Text className="text-base text-ui-fg-subtle mx-1 text-nowrap !font-manrope">
            {order.shipping_address?.city}.
          </Text>
          {/* <Text className="text-base text-ui-fg-subtle">
            {order.shipping_address?.country_code?.toUpperCase() || "VN"}.
          </Text> */}
        </div>

        <div className="flex flex-col" data-testid="shipping-contact-summary">
          <div className="flex items-center ">
            <Text className="text-base text-ui-fg-base mr-2 !font-manrope">
              Số điện thoại:
            </Text>
            <Text className="text-base text-ui-fg-subtle !font-manrope">
              {order.shipping_address?.phone}
            </Text>
          </div>
          {order.email && order.email !== DEFAULT_EMAIL && (
            <div className="flex items-center ">
              <Text className="text-base text-ui-fg-base mr-2 !font-manrope">
                Email:
              </Text>
              <Text className="text-base text-ui-fg-subtle !font-manrope">
                {order.email}
              </Text>
            </div>
          )}
        </div>

        <div
          className="flex flex-row flex-wrap"
          data-testid="shipping-method-summary"
        >
          <Text className="text-base text-ui-fg-base mr-2 !font-manrope">
            Phương thức giao hàng:
          </Text>
          <Text className="text-base text-ui-fg-subtle !font-manrope">
            {(order as any).shipping_methods[0]?.name} (
            {convertToLocale({
              amount: order.shipping_methods?.[0].total ?? 0,
              currency_code: order.currency_code,
            })
              .replace(/,/g, "")
              .replace(/\./g, ",")}
            )
          </Text>
        </div>
      </div>
      <Divider className="mt-8" />
    </div>
  )
}

export default ShippingDetails
