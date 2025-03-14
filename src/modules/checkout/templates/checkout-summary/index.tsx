import { Heading } from "@medusajs/ui"

import ItemsPreviewTemplate from "@modules/cart/templates/preview"
import DiscountCode from "@modules/checkout/components/discount-code"
import CartTotals from "@modules/common/components/cart-totals"
import Divider from "@modules/common/components/divider"
import RiceSpike from "@modules/common/components/rice-spike"

const CheckoutSummary = ({ cart }: { cart: any }) => {
  return (
    <div className="sticky top-0 flex flex-col-reverse small:flex-col gap-y-8 rounded-lg shadow-lg bg-white p-3 sm:p-6 ">
      <RiceSpike />
      <div className="w-full flex flex-col">
        <h1 className="flex flex-row sm:text-28 text-xl font-semibold items-baseline text-primary font-times capitalize">
          Giỏ hàng
        </h1>
        <Divider className="mt-4 mb-2" />
        <div className="mb-4">
          <ItemsPreviewTemplate items={cart?.items} />
        </div>
        <CartTotals totals={cart} />
        <div className="mt-4 sm:my-4">
          <DiscountCode cart={cart} />
        </div>
      </div>
    </div>
  )
}

export default CheckoutSummary
