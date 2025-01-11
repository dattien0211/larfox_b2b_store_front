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
    <div className="flex-1 mb-16 sm:mb-24" data-testid="account-page">
      <div className="flex-1 flex flex-col content-container h-full mx-auto bg-white  ">
        <div className="py-4 sm:py-8 flex  flex-col md:flex-row-reverse ">
          <div className="flex-1">{children}</div>
          <div className="block sm:hidden mt-8">
            <Divider />
          </div>
          {customer && (
            <div className="w-full sm:w-[240px]">
              <AccountNav customer={customer} />
            </div>
          )}
        </div>
        {/* <div className="flex flex-col small:flex-row items-end justify-between small:border-t border-gray-200 py-12 gap-8">
          <div>
            <h3 className=" text-xl -semi mb-4">Got questions?</h3>
            <span className="txt-medium">
              You can find frequently asked questions and answers on our
              customer service page.
            </span>
          </div>
          <div>
            <UnderlineLink href="/customer-service">
              Customer Service
            </UnderlineLink>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default AccountLayout
