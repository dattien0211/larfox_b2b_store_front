import { getCustomer } from "@lib/data/customer"
import Image from "next/image"
import Icons from "@modules/common/icons"
import IMGS from "@constants/IMGS"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Suspense } from "react"
import CartButton from "@modules/layout/components/cart-button"
import SearchNav from "./searchNav"
import UserDropDown from "@modules/layout/components/user-dropdown"
import SearchIconMobile from "@modules/layout/components/search-icon"

export default async function MiddleNav() {
  const { Bag } = Icons
  const customer = await getCustomer().catch(() => null)

  return (
    <div className="flex items-center justify-between py-2 md:py-4">
      <div className="w-[40px] md:w-[60px] h-auto">
        <LocalizedClientLink href="/">
          <Image
            src={IMGS.Logo}
            alt="Logo"
            width={120}
            height={56}
            className="w-auto h-auto"
            priority={true}
          />
        </LocalizedClientLink>
      </div>

      <SearchNav />
      <div className="flex items-center gap-x-1 ">
        <SearchIconMobile />
        <UserDropDown customer={customer} />
        <Suspense
          fallback={
            <LocalizedClientLink                     
              className="cursor-pointer hover:text-primary"
              href="/gio-hang"
              data-testid="nav-cart-link"
            >
              <Bag />
            </LocalizedClientLink>
          }
        >
          <CartButton />
        </Suspense>
      </div>
    </div>
  )
}
