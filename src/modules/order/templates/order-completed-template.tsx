import { Heading } from "@medusajs/ui"
import { cookies } from "next/headers"

import CartTotals from "@modules/common/components/cart-totals"
import Help from "@modules/order/components/help"
import Items from "@modules/order/components/items"
import OnboardingCta from "@modules/order/components/onboarding-cta"
import OrderDetails from "@modules/order/components/order-details"
import ShippingDetails from "@modules/order/components/shipping-details"
import PaymentDetails from "@modules/order/components/payment-details"
import { HttpTypes } from "@medusajs/types"
import RiceSpike from "@modules/common/components/rice-spike"

type OrderCompletedTemplateProps = {
  order: HttpTypes.StoreOrder
}

export default function OrderCompletedTemplate({
  order,
}: OrderCompletedTemplateProps) {
  const isOnboarding = cookies().get("_medusa_onboarding")?.value === "true"

  return (
    <div className="min-h-[calc(100vh-64px)] pb-16 sm:pb-24 pt-4 sm:pt-6 bg-primary-bg">
      <div className="content-container flex flex-col justify-center items-center gap-y-10 max-w-4xl h-full w-full">
        {isOnboarding && <OnboardingCta orderId={order.id} />}
        <div
          className="flex flex-col gap-4 max-w-4xl h-full bg-white w-full py-3  px-2 sm:p-6 rounded-lg shadow-lg gap-y-6 relative"
          data-testid="order-complete-container"
        >
          <RiceSpike />
          <Heading
            level="h1"
            className="flex flex-col gap-y-3 text-primary sm:text-28 text-xl font-times font-bold items-center capitalize text-center"
          >
            {/* <span className="caption-bottom">Cảm ơn!</span> */}
            <span>Đơn hàng của bạn đã được đặt thành công.</span>
          </Heading>
          <OrderDetails order={order} />
          <Heading
            level="h2"
            className="flex flex-row sm:text-28 text-xl text-primary font-times font-bold capitalize"
          >
            Tổng quan
          </Heading>
          <Items items={order.items} />
          <CartTotals totals={order} />
          <ShippingDetails order={order} />
          <PaymentDetails order={order} />
          <Help />
        </div>
      </div>
    </div>
  )
}
