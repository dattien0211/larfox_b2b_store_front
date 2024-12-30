import ItemsTemplate from "./items"
import Summary from "./summary"
import EmptyCartMessage from "../components/empty-cart-message"
import SignInPrompt from "../components/sign-in-prompt"
import Divider from "@modules/common/components/divider"
import { HttpTypes } from "@medusajs/types"

const CartTemplate = ({
  cart,
  customer,
}: {
  cart: HttpTypes.StoreCart | null
  customer: HttpTypes.StoreCustomer | null
}) => {
  return (
    <div
      className="content-container mb-16 sm:mb-24"
      data-testid="cart-container"
    >
      {cart?.items?.length ? (
        <div className="grid grid-cols-1 small:grid-cols-[1fr_360px] gap-x-20">
          <div className="flex flex-col bg-white py-6 gap-y-6">
            {/* {!customer && (
                <>
                  <SignInPrompt />
                  <Divider />
                </>
              )} */}
            <ItemsTemplate items={cart?.items} />
          </div>
          <div className="relative">
            <div className="flex flex-col gap-y-8 sticky top-12">
              {cart && cart.region && (
                <>
                  <div className="bg-white py-6">
                    <Summary cart={cart as any} />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <EmptyCartMessage />
        </div>
      )}
    </div>
  )
}

export default CartTemplate
