"use client"

import { Popover, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"
import { HttpTypes } from "@medusajs/types"

import { useParams, usePathname } from "next/navigation"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import icons from "@modules/common/icons"
import { signout } from "@lib/data/customer"

const UserDropDown = ({
  customer,
}: {
  customer?: HttpTypes.StoreCustomer | null
}) => {
  const { UserAnco } = icons
  const [userDropdownOpen, setUserDropdownOpen] = useState(false)
  const { countryCode } = useParams() as { countryCode: string }
  const open = () => setUserDropdownOpen(true)
  const close = () => setUserDropdownOpen(false)

  const handleLogout = async () => {
    await signout(countryCode)
  }
  return (
    <div
      className="h-full relative z-50"
      onMouseEnter={open}
      onMouseLeave={close}
    >
      <Popover className="relative h-full flex items-center z-50">
        <Popover.Button className="h-full py-4 px-2 cursor-pointer hover:text-primary">
          <UserAnco />
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
            className="hidden small:block absolute top-[100%] right-0 bg-white border border-grey-20 shadow-lg w-[180px] p-4 text-ui-fg-base"
            data-testid="nav-cart-dropdown"
          >
            <div className="bg-white">
              {customer ? (
                <div>
                  <LocalizedClientLink
                    href="/tai-khoan"
                    className="hover:text-orang-10 text-sm py-2"
                  >
                    Thông tin tài khoản
                  </LocalizedClientLink>
                  <p
                    onClick={handleLogout}
                    className="hover:text-orang-10 text-sm py-2 mt-2 border-t border-grey-10 cursor-pointer"
                  >
                    Đăng xuất
                  </p>
                </div>
              ) : (
                <LocalizedClientLink
                  href="/tai-khoan"
                  className="hover:text-orang-10 text-sm"
                >
                  Đăng nhập / Đăng ký
                </LocalizedClientLink>
              )}
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  )
}

export default UserDropDown
