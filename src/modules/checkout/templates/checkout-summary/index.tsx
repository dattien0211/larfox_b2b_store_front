import { Heading } from "@medusajs/ui"

import ItemsPreviewTemplate from "@modules/cart/templates/preview"
import DiscountCode from "@modules/checkout/components/discount-code"
import CartTotals from "@modules/common/components/cart-totals"
import Divider from "@modules/common/components/divider"

const CheckoutSummary = ({ cart }: { cart: any }) => {
  return (
    <div className="sticky top-0 flex flex-col-reverse small:flex-col gap-y-8 sm:py-8 small:py-0 ">
      <div className="w-full bg-white flex flex-col">
        <h1 className="flex flex-row text-2xl sm:text-3xl font-semibold items-baseline text-primary font-times">
          Giỏ hàng
        </h1>
        <Divider className="mt-4 mb-2" />
        <div className="mb-4">
          <ItemsPreviewTemplate items={cart?.items} />
        </div>
        <CartTotals totals={cart} />
        <div className="my-4">
          <DiscountCode cart={cart} />
        </div>
      </div>
    </div>
  )
}

export default CheckoutSummary
