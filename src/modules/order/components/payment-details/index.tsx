import { Container, Heading, Text } from "@medusajs/ui"

import { isStripe, paymentInfoMap } from "@lib/constants"
import Divider from "@modules/common/components/divider"
import { convertToLocale } from "@lib/util/money"
import { HttpTypes } from "@medusajs/types"

type PaymentDetailsProps = {
  order: HttpTypes.StoreOrder
}

const PaymentDetails = ({ order }: PaymentDetailsProps) => {
  const payment = order.payment_collections?.[0].payments?.[0]

  return (
    <div>
      <Heading
        level="h2"
        className="flex flex-row sm:text-28 text-xl text-primary my-6 font-times font-bold capitalize"
      >
        Phương thức thanh toán
      </Heading>
      <div>
        {payment && (
          <div className="flex items-start gap-x-1 w-full">
            <div className="flex flex-col w-full sm:w-1/3">
              {/* <Text className="text-base text-ui-fg-base mb-1">
                Phương thức thanh toán
              </Text> */}
              <Text
                className=" text-ui-fg-subtle text-sm sm:text-base !font-manrope text-nowrap"
                data-testid="payment-method"
              >
                {paymentInfoMap[payment.provider_id].title}
              </Text>
            </div>
            {/* <div className="flex flex-col w-2/3">
              <Text className="text-base text-ui-fg-base mb-1">
                Chi tiết thanh toán
              </Text>
              <div className="flex gap-2 text-ui-fg-subtle items-center">
                <Container className="flex items-center h-7 w-fit p-2 bg-ui-button-neutral-hover">
                  {paymentInfoMap[payment.provider_id].icon}
                </Container>
                <Text data-testid="payment-amount">
                  {isStripe(payment.provider_id) && payment.data?.card_last4
                    ? `**** **** **** ${payment.data.card_last4}`
                    : `${convertToLocale({
                        amount: payment.amount,
                        currency_code: order.currency_code,
                      })} được thanh toán lúc ${new Date(
                        payment.created_at ?? ""
                      ).toLocaleString("vi-VN")}`}
                </Text>
              </div>
            </div> */}
          </div>
        )}
      </div>

      <Divider className="mt-8" />
    </div>
  )
}

export default PaymentDetails
