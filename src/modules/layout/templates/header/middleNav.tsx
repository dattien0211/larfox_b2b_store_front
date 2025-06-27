import { getCustomer } from "@lib/data/customer"
import Icons from "@modules/common/icons"
import Link from "next/link"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import UserDropDown from "@modules/layout/components/user-dropdown"

export default async function MiddleNav() {
  const { Bag } = Icons
  const customer = await getCustomer().catch(() => null)

  return (
    <header id="header" className="bg-white shadow-sm sticky top-0 z-50">
      <div className="">
        <div className="flex items-center justify-between py-4">
          <LocalizedClientLink href="/" className="flex items-center">
            <div className="text-3xl font-bold gradient-text mr-2">
              LARFOX.COM
            </div>
            {/*<span className="text-lg font-medium text-gray-700">.COM</span>*/}
          </LocalizedClientLink>
          {/*<div className="mx-8 flex flex-grow items-center px-6 rounded-full border border-gray-200 focus-within:ring-2 focus-within:ring-primary">*/}
          {/*  <input*/}
          {/*    className="w-full py-3 pr-4 focus:outline-none"*/}
          {/*    placeholder="Search box"*/}
          {/*  />*/}
          {/*  <Image*/}
          {/*    src={IMGS.Search}*/}
          {/*    alt="Search"*/}
          {/*    width={20}*/}
          {/*    height={20}*/}
          {/*    className="cursor-pointer"*/}
          {/*  />*/}
          {/*</div>*/}
          <div className="hidden lg:flex items-center space-x-8 text-sm font-medium">
            <span className="text-gray-700 hover:text-primary cursor-pointer">
              Language
            </span>
            {customer ? (
              <UserDropDown customer={customer} />
            ) : (
              <>
                <Link href="/account/sign-in">
                  <span className="text-gray-700 hover:text-primary cursor-pointer">
                    Sign in
                  </span>
                </Link>
                <Link href="/account/sign-up">
                  <button className="cursor-pointer gradient-bg text-white px-6 py-2 rounded-full hover:opacity-90 font-semibold">
                    Sign up
                  </button>
                </Link>
              </>
            )}
            <button className="border border-primary text-primary px-6 py-2 rounded-full hover:bg-primary hover:text-white">
              Get the app
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
