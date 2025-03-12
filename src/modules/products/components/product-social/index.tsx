"use client"

import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import IMGS from "@constants/IMGS"

export default function ProductSocial() {
  return (
    <div className="mb-4 sm:mb-6 flex gap-x-4">
      <LocalizedClientLink href="">
        <Image src={IMGS.FBIcon} alt="icon" width={24} height={24} />
      </LocalizedClientLink>
    </div>
  )
}
