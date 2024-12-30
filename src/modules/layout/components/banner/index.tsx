import Image from "next/image"
import clsx from "clsx"
import { StaticImageData } from "next/image"

import Icons from "@modules/common/icons"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type BannerProps = {
  imageSrc: string | StaticImageData
  altText?: string
  title: string
  containerClass?: string
  buttonClass?: string
  titleClass?: string
  href?: string
}

export default function Banner({
  imageSrc,
  altText = "banner",
  title,
  containerClass,
  buttonClass = "bottom-[24%] left-[22%]",
  titleClass,
  href = "/",
}: BannerProps) {
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
        <LocalizedClientLink href={href}>
          <button
            className={clsx(
              "text-orang-35 absolute bg-white rounded-full flex items-center justify-center px-4 lg:px-8 py-2 hover:bg-orang-35 hover:text-white transition-all",
              buttonClass
            )}
          >
            <p
              className={clsx(
                "mr-2 text-sm md:text-base lg:text-lg",
                titleClass
              )}
            >
              {title}
            </p>

            <RightArrow size={10} />
          </button>
        </LocalizedClientLink>
      </div>
    </div>
  )
}
