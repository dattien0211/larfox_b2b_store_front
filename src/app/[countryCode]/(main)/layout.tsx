import { Metadata } from "next"

import { retrieveCart } from "@lib/data/cart"
import { getCustomer } from "@lib/data/customer"
import { getBaseURL } from "@lib/util/env"
import CartMismatchBanner from "@modules/layout/components/cart-mismatch-banner"
import Footer from "@modules/layout/templates/footer"
import Header from "@modules/layout/templates/header"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default async function PageLayout(props: { children: React.ReactNode }) {
  const customer = await getCustomer()
  const cart = await retrieveCart()

  return (
    <>
      <Header />
      <div className="relative z-20 border-t border-grey-15">
        {customer && cart && (
          <CartMismatchBanner customer={customer} cart={cart} />
        )}
        {props.children}
      </div>
      <Footer />
    </>
  )
}
