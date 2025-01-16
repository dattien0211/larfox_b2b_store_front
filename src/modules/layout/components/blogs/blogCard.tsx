"use client"

import clsx from "clsx"
import React from "react"
import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Blog, BlogType } from "types/global"
import { useOS } from "@lib/hooks/OSContext"
interface BlogCardProps {
  blog: Blog
  blogTypes?: BlogType[]
  isRow?: boolean
}

const BlogCard: React.FC<BlogCardProps> = ({
  blog,
  blogTypes,
  isRow = false,
}) => {
  const { os } = useOS()

  return (
    <div
      className={clsx("shadow-lg rounded-sm flex flex-col", {
        "!flex-row": isRow,
        "!flex-col": os === "mobile",
      })}
    >
      <div
        className={clsx("relative w-full h-[260px]", {
          "!w-1/2  !h-[290px]": isRow,
          "!w-full": os === "mobile",
        })}
      >
        <Image
          src={blog?.thumbnail}
          alt={blog?.title}
          width={370}
          height={290}
          className="w-full h-full  object-cover"
        />
      </div>

      <div
        className={clsx("bg-grey-15 flex flex-col gap-y-2 sm:gap-y-4", {
          "justify-center w-1/2 p-4 sm:p-8 lg:p-12": isRow,
          "py-6 px-4 sm:px-8 sm:pb-12 ": !isRow,
          "!py-6 !px-4 !sm:px-8 !sm:pb-12 w-full": os === "mobile",
        })}
      >
        {blog?.type && blogTypes && blogTypes?.length > 0 && (
          <h3 className="text-primary font-semibold text-sm">
            {blogTypes?.find((blogType) => blogType?.value === blog?.type)
              ?.name || ""}
          </h3>
        )}
        <h1 className="text-lg sm:text-2xl font-bold font-times">
          {blog?.title}
        </h1>
        <p className="text-sm sm:text-base line-clamp-4 text-justify">
          {blog?.short_description}
        </p>
        <button className="hover:bg-primary hover:text-white text-nowrap border border-primary text-primary px-2 sm:text-base text-sm sm:px-4 py-1 rounded-full w-[40%]">
          <LocalizedClientLink href={`/bai-viet/${blog?.handle}`}>
            Xem Thêm
          </LocalizedClientLink>
        </button>
      </div>
    </div>
  )
}

export default BlogCard
