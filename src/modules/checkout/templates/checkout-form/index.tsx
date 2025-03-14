import { listCartShippingMethods } from "@lib/data/fulfillment"
import { listCartPaymentMethods } from "@lib/data/payment"
import { HttpTypes } from "@medusajs/types"
import Addresses from "@modules/checkout/components/addresses"
import Payment from "@modules/checkout/components/payment"
import Review from "@modules/checkout/components/review"
import Shipping from "@modules/checkout/components/shipping"
import RiceSpike from "@modules/common/components/rice-spike"

export default async function CheckoutForm({
  cart,
  customer,
  countryCode,
}: {
  cart: HttpTypes.StoreCart | null
  customer: HttpTypes.StoreCustomer | null
  countryCode: string
}) {
  if (!cart) {
    return null
  }

  const shippingMethods = await listCartShippingMethods(cart.id)
  const paymentMethods = await listCartPaymentMethods(cart.region?.id ?? "")

  if (!shippingMethods || !paymentMethods) {
    return null
  }

  return (
    <div>
      <div className="w-full grid grid-cols-1 gap-y-4 sm:gap-y-8 mb-16 sm:mb-24 z-20 rounded-lg shadow-lg bg-white p-3 sm:p-6 relative">
        <RiceSpike />
        <section>
          <Addresses cart={cart} customer={customer} />
        </section>

        <section>
          <Shipping cart={cart} availableShippingMethods={shippingMethods} />
        </section>

        <section>
          <Payment cart={cart} availablePaymentMethods={paymentMethods} />
        </section>

        <section>
          <Review cart={cart} />
        </section>
      </div>
    </div>
  )
}
