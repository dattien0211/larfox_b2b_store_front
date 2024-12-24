import Image from "next/image"
import clsx from "clsx"
import { StaticImageData } from "next/image"

import Icons from "@modules/common/icons"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type BannerProductProps = {
  imageSrc: string | StaticImageData
  altText?: string
  title: string
  containerClass?: string
  buttonClass?: string
  titleClass?: string
}

export default function BannerProduct({
  imageSrc,
  altText = "banner",
  title,
  containerClass,
  buttonClass,
  titleClass,
}: BannerProductProps) {
  const { RightArrow } = Icons

  return (
    <div className="relative">
      <Image
        src={imageSrc}
        alt={altText}
        width={2000}
        height={456}
        priority={true}
        className="w-full"
      />
      <div
        className={clsx("content-container absolute inset-0", containerClass)}
      >
        <LocalizedClientLink href="/">
          <button
            className={clsx(
              "text-orang-35 absolute bottom-[24%] left-[22%] bg-white rounded-full flex items-center justify-center px-8 py-2 hover:bg-orang-35 hover:text-white transition-all",
              buttonClass
            )}
          >
            <p className={clsx("mr-2 text-lg", titleClass)}>{title}</p>
            <RightArrow size={12} />
          </button>
        </LocalizedClientLink>
      </div>
    </div>
  )
}
