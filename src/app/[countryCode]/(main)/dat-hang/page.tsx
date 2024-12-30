import { Metadata } from "next"
import { notFound } from "next/navigation"

import Wrapper from "@modules/checkout/components/payment-wrapper"
import CheckoutForm from "@modules/checkout/templates/checkout-form"
import CheckoutSummary from "@modules/checkout/templates/checkout-summary"
import { enrichLineItems, retrieveCart } from "@lib/data/cart"
import { HttpTypes } from "@medusajs/types"
import { getCustomer } from "@lib/data/customer"
import Divider from "@modules/common/components/divider"

export const metadata: Metadata = {
  title: "Đặt hàng | Anco",
}

const fetchCart = async () => {
  const cart = await retrieveCart()
  if (!cart) {
    return notFound()
  }

  if (cart?.items?.length) {
    const enrichedItems = await enrichLineItems(cart?.items, cart?.region_id!)
    cart.items = enrichedItems as HttpTypes.StoreCartLineItem[]
  }

  return cart
}

export default async function Checkout() {
  const cart = await fetchCart()
  const customer = await getCustomer()

  return (
    <div className="flex flex-col-reverse small:flex-row content-container gap-y-8 gap-x-12 py-4 sm:py-12">
      <div className="flex-1">
        <Wrapper cart={cart}>
          <CheckoutForm cart={cart} customer={customer} />
        </Wrapper>
      </div>
      <Divider className="small:hidden" />
      <div className="sm:w-[416px]">
        <CheckoutSummary cart={cart} />
      </div>
    </div>
  )
}
