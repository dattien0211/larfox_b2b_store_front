import Image from "next/image"
import clsx from "clsx"
import { StaticImageData } from "next/image"

import Icons from "@modules/common/icons"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type BannerProps = {
  imageSrc: string | StaticImageData
  altText?: string
  title?: string
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
    <LocalizedClientLink href={href ? "/" + href.replace(/^\/+/, "") : "/"}>
      <div className=" w-full">
        <Image
          src={imageSrc}
          alt={altText}
          width={2000} // Set only width
          height={0} // Allow automatic height calculation
          priority
          className="h-auto max-h-[440px] object-contain shadow-lg"
        />

        {title && (
          <div
            className={clsx(
              "content-container absolute inset-0",
              containerClass
            )}
          >
            <button
              className={clsx(
                "text-primary absolute bg-white rounded-full flex items-center justify-center px-4 lg:px-8 py-1 md:py-2 hover:border hover:border-primary hover:scale-105 transition-all shadow-md",
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
          </div>
        )}
      </div>
    </LocalizedClientLink>
  )
}
