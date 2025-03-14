import ItemsTemplate from "./items"
import Summary from "./summary"
import EmptyCartMessage from "../components/empty-cart-message"
import SignInPrompt from "../components/sign-in-prompt"
import Divider from "@modules/common/components/divider"
import { HttpTypes } from "@medusajs/types"
import RiceSpike from "@modules/common/components/rice-spike"

const CartTemplate = ({
  cart,
  customer,
}: {
  cart: HttpTypes.StoreCart | null
  customer: HttpTypes.StoreCustomer | null
}) => {
  const totalItems =
    cart?.items?.reduce((acc, item) => {
      return acc + item.quantity
    }, 0) || 0

  return (
    <div
      className="pb-16 sm:pb-24 pt-4 bg-primary-bg"
      data-testid="cart-container"
    >
      <div className="content-container ">
        {cart?.items?.length ? (
          <div className="grid grid-cols-1 small:grid-cols-[1fr_360px] gap-y-6 gap-x-8">
            <div className="flex flex-col bg-white py-3 px-2 sm:px-4 rounded-lg shadow-lg gap-y-6 relative">
              <RiceSpike />

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
                    <div className="bg-white pt-3 pb-6 px-2 lg:px-4 rounded-lg shadow-lg gap-y-6 relative">
                      <RiceSpike />
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
    </div>
  )
}

export default CartTemplate
