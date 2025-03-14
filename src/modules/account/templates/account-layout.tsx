import React from "react"

import UnderlineLink from "@modules/common/components/interactive-link"

import AccountNav from "../components/account-nav"
import { HttpTypes } from "@medusajs/types"
import Divider from "@modules/common/components/divider"

interface AccountLayoutProps {
  customer: HttpTypes.StoreCustomer | null
  children: React.ReactNode
}

const AccountLayout: React.FC<AccountLayoutProps> = ({
  customer,
  children,
}) => {
  return (
    <div
      className="bg-primary-bg pt-3 pb-8 sm:pt-6 sm:pb-16"
      data-testid="account-page"
    >
      <div className="flex-1 flex flex-col content-container h-full mx-auto">
        <div className="py-4 flex flex-col md:flex-row-reverse gap-x-4">
          <div className="flex-1">{children}</div>
          <div className="block sm:hidden mt-8">
            <Divider />
          </div>
          {customer && (
            <div className="w-full sm:w-72">
              <AccountNav customer={customer} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AccountLayout
