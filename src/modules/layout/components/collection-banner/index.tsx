"use client"

import Banner from "../banner"
interface CollectionBannerProps {
  imageSrc?: string // Optional prop for custom image source
  href?: string
}

export default function CollectionBanner({
  imageSrc,
  href,
}: CollectionBannerProps) {
  return imageSrc && <Banner imageSrc={imageSrc} href={href} />
}
