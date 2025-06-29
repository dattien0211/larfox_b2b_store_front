import { RadioGroup } from "@headlessui/react"
import { InformationCircleSolid } from "@medusajs/icons"
import { Text, Tooltip, clx } from "@medusajs/ui"
import React from "react"

import Radio from "@modules/common/components/radio"

import PaymentTest from "../payment-test"
import { isManual } from "@lib/constants"

type PaymentContainerProps = {
  paymentProviderId: string
  selectedPaymentOptionId: string | null
  disabled?: boolean
  paymentInfoMap: Record<string, { title: string; icon: JSX.Element }>
}

const PaymentContainer: React.FC<PaymentContainerProps> = ({
  paymentProviderId,
  selectedPaymentOptionId,
  paymentInfoMap,
  disabled = false,
}) => {
  return (
    <>
      <RadioGroup.Option
        key={paymentProviderId}
        value={paymentProviderId}
        disabled={disabled}
        className={clx(
          "flex flex-col gap-y-2 text-small-regular cursor-pointer py-4 border rounded-rounded px-8 mb-2 hover:shadow-borders-interactive-with-active",
          {
            "border-ui-border-interactive":
              selectedPaymentOptionId === paymentProviderId,
          }
        )}
      >
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-x-4">
            <Radio checked={selectedPaymentOptionId === paymentProviderId} />
            <Text className="text-sm sm:text-base !font-manrope">
              {paymentInfoMap[paymentProviderId]?.title || paymentProviderId}
            </Text>
          </div>
          {!isManual(paymentProviderId) && (
            <span className="justify-self-end text-ui-fg-base">
              {paymentInfoMap[paymentProviderId]?.icon}
            </span>
          )}
        </div>
      </RadioGroup.Option>
    </>
  )
}

export default PaymentContainer
