import { Heading } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import React from "react"

const Help = () => {
  return (
    <div className="mt-6">
      <Heading className="text-regular-semi !font-manrope-bold">
        Cần giúp đỡ?
      </Heading>
      <div className="text-base-regular my-2">
        <ul className="gap-y-2 flex flex-col">
          <li>
            <LocalizedClientLink href="/gioi-thieu">
              Về chúng tôi
            </LocalizedClientLink>
          </li>
          <li>
            <LocalizedClientLink href="/chinh-sach-doi-tra-va-hoan-tien">
              Đổi trả và hoàn tiền
            </LocalizedClientLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Help
