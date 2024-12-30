"use client"

import { useOS } from "@lib/hooks/OSContext"
import BannerProduct from "../banner"
import IMGS from "@constants/IMGS"

export default function ProductBanner() {
  const { os } = useOS()

  return (
    <BannerProduct
      imageSrc={os !== "mobile" ? IMGS.Banner4 : IMGS.MobileBanner2}
      title="Sắp ra mắt"
      buttonClass={
        os !== "mobile"
          ? "bottom-[22%] left-[22%]"
          : "top-[30%] left-1/2 -translate-x-1/2"
      }
    />
  )
}
