"use client"

import { useOS } from "@lib/hooks/OSContext"
import Banner from "../banner"
interface CollectionBannerProps {
  imageSrc?: string // Optional prop for custom image source
  href?: string
}

export default function CollectionBanner({
  imageSrc,
  href,
}: CollectionBannerProps) {
  const { os } = useOS()

  return (
    imageSrc && (
      <Banner
        imageSrc={imageSrc}
        buttonClass={
          os !== "mobile"
            ? "bottom-[22%] left-[22%]"
            : "top-[30%] left-1/2 -translate-x-1/2"
        }
        href={href}
      />
    )
  )
}
