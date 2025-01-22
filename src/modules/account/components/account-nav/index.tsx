"use client"

import { clx } from "@medusajs/ui"
import { ArrowRightOnRectangle } from "@medusajs/icons"
import { useParams, usePathname } from "next/navigation"

import ChevronDown from "@modules/common/icons/chevron-down"
import User from "@modules/common/icons/user"
import Package from "@modules/common/icons/package"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { HttpTypes } from "@medusajs/types"
import { signout } from "@lib/data/customer"

const AccountNav = ({
  customer,
}: {
  customer: HttpTypes.StoreCustomer | null
}) => {
  const route = usePathname()
  const { countryCode } = useParams() as { countryCode: string }

  const handleLogout = async () => {
    try {
      await signout(countryCode)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      {/* AccountNavMobile */}
      <div
        className="sm:hidden w-full mt-8 relative z-20"
        data-testid="mobile-account-nav"
      >
        {route !== `/${countryCode}/tai-khoan` ? (
          <LocalizedClientLink
            href="/tai-khoan"
            className="flex items-center gap-x-2 text-base py-2 cursor-pointer"
            data-testid="account-main-link"
          >
            <>
              <ChevronDown className="transform rotate-90" />
              <span>Tài khoản</span>
            </>
          </LocalizedClientLink>
        ) : (
          <>
            <div className="text-base-regular">
              <ul>
                <li>
                  <LocalizedClientLink
                    href="/tai-khoan/thong-tin"
                    className="flex items-center justify-between py-4 cursor-pointer"
                    data-testid="profile-link"
                  >
                    <>
                      <div className="flex items-center gap-x-2">
                        <User size={20} />
                        <span>Chỉnh sửa thông tin</span>
                      </div>
                      <ChevronDown className="transform -rotate-90" />
                    </>
                  </LocalizedClientLink>
                </li>
                {/* <li>
                  <LocalizedClientLink
                    href="/tai-khoan/dia-chi"
                    className="flex items-center justify-between py-4"
                    data-testid="addresses-link"
                  >
                    <>
                      <div className="flex items-center gap-x-2">
                        <MapPin size={20} />
                        <span>Địa chỉ</span>
                      </div>
                      <ChevronDown className="transform -rotate-90" />
                    </>
                  </LocalizedClientLink>
                </li> */}
                <li>
                  <LocalizedClientLink
                    href="/tai-khoan/don-hang"
                    className="flex items-center justify-between py-4 cursor-pointer"
                    data-testid="orders-link"
                  >
                    <div className="flex items-center gap-x-2">
                      <Package size={20} />
                      <span>Đơn hàng</span>
                    </div>
                    <ChevronDown className="transform -rotate-90" />
                  </LocalizedClientLink>
                </li>
                <li>
                  <button
                    type="button"
                    className="flex items-center justify-between py-4 w-full"
                    onClick={handleLogout}
                    data-testid="logout-button"
                  >
                    <div className="flex items-center gap-x-2 cursor-pointer">
                      <ArrowRightOnRectangle />
                      <span>Đăng xuất</span>
                    </div>
                    <ChevronDown className="transform -rotate-90" />
                  </button>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>

      {/* AccountNavDesktop */}
      <div className="hidden sm:block mb-16 sm:mb-24" data-testid="account-nav">
        <div>
          <div className="text-base">
            <ul className="flex mb-0 justify-start items-start flex-col gap-y-6">
              <li>
                <AccountNavLink
                  href="/tai-khoan"
                  route={route!}
                  data-testid="profile-link"
                >
                  Tài khoản
                </AccountNavLink>
              </li>
              <li>
                <AccountNavLink
                  href="/tai-khoan/thong-tin"
                  route={route!}
                  data-testid="profile-link"
                >
                  Chỉnh sửa thông tin
                </AccountNavLink>
              </li>
              {/* <li>
                <AccountNavLink
                  href="/tai-khoan/dia-chi"
                  route={route!}
                  data-testid="addresses-link"
                >
                  Địa chỉ
                </AccountNavLink>
              </li> */}
              <li>
                <AccountNavLink
                  href="/tai-khoan/don-hang"
                  route={route!}
                  data-testid="orders-link"
                >
                  Đơn hàng
                </AccountNavLink>
              </li>
              <li className="text-grey-700 hover:text-primary">
                <button
                  type="button"
                  onClick={handleLogout}
                  data-testid="logout-button"
                >
                  Đăng xuất
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

type AccountNavLinkProps = {
  href: string
  route: string
  children: React.ReactNode
  "data-testid"?: string
}

const AccountNavLink = ({
  href,
  route,
  children,
  "data-testid": dataTestId,
}: AccountNavLinkProps) => {
  const { countryCode }: { countryCode: string } = useParams()

  const active = route.split(countryCode)[1] === href
  return (
    <LocalizedClientLink
      href={href}
      className={clx("text-base hover:text-primary", {
        "font-semibold text-primary": active,
      })}
      data-testid={dataTestId}
    >
      {children}
    </LocalizedClientLink>
  )
}

export default AccountNav
