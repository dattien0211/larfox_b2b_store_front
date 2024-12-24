import Image from "next/image"
import Icons from "@modules/common/icons"
import IMGS from "@constants/IMGS"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Suspense } from "react"
import CartButton from "@modules/layout/components/cart-button"
import { useRouter, useParams } from "next/navigation"
import SearchNav from "./searchNav"

export default function MiddleNav() {
  const { Search, UserAnco, Heart, Bag } = Icons

  return (
    <div className="flex items-center justify-between my-4">
      <div className="w-[120px] h-auto">
        <LocalizedClientLink href="/">
          <Image
            src={IMGS.Logo}
            alt="Logo"
            width={120}
            height={56}
            className="w-auto h-auto"
          />
        </LocalizedClientLink>
      </div>
      <SearchNav />
      <div className="flex items-center gap-x-2">
        <span className="cursor-pointer hover:text-primary p-2">
          <UserAnco />
        </span>
        <span className="cursor-pointer hover:text-primary p-2">
          <Heart />
        </span>
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
