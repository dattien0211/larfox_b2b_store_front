"use client"

import { Popover, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"
import { HttpTypes } from "@medusajs/types"

import { useParams } from "next/navigation"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import icons from "@modules/common/icons"
import { signout } from "@lib/data/customer"

const UserDropDown = ({
  customer,
}: {
  customer?: HttpTypes.StoreCustomer | null
}) => {
  const { UserBongLua } = icons
  const [userDropdownOpen, setUserDropdownOpen] = useState(false)
  const { countryCode } = useParams() as { countryCode: string }
  const open = () => setUserDropdownOpen(true)
  const close = () => setUserDropdownOpen(false)

  const handleLogout = async () => {
    try {
      await signout(countryCode)
    } catch (error) {
      console
    }
  }
  return (
    <div
      className="hidden sm:block h-full relative lg:z-30 mt-1"
      onMouseEnter={open}
      onMouseLeave={close}
    >
      <Popover className="relative h-full flex items-center lg:z-30">
        <Popover.Button className="h-full py-2 px-1 lg:py-4 lg:px-2  cursor-pointer hover:text-primary">
          <UserBongLua />
        </Popover.Button>
        <Transition
          show={userDropdownOpen}
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel
            static
            className="hidden small:block absolute top-[100%] right-0 bg-white border border-grey-20 shadow-lg w-[180px] p-4 text-base-regular font-manrope-semibold"
            data-testid="nav-cart-dropdown"
          >
            <div className="bg-white  capitalize">
              <div>
                <LocalizedClientLink
                  href="/account"
                  className="hover:text-primary py-2"
                >
                  User Profile
                </LocalizedClientLink>
                <p
                  onClick={handleLogout}
                  className="hover:text-primary py-2 mt-2 border-t border-grey-10 cursor-pointer"
                >
                  Log Out
                </p>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  )
}

export default UserDropDown
