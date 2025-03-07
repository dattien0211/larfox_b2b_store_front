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
      className={clsx(
        "shadow-lg  flex flex-col border border-primary rounded-md",
        {
          "!flex-row": isRow,
          "!flex-col": os === "mobile",
        }
      )}
    >
      <div
        className={clsx("relative w-full h-[340px] p-2 ", {
          "!w-1/2  !h-[340px]": isRow,
          "!w-full": os === "mobile",
        })}
      >
        {blog?.thumbnail && (
          <Image
            //@ts-ignore
            src={blog?.thumbnail?.url}
            alt={blog?.title}
            width={370}
            height={290}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <div
        className={clsx(
          "bg-grey-15 flex flex-col gap-y-2 sm:gap-y-3 rounded-b rounded-md  border-b border-primary",
          {
            "justify-center w-1/2 p-4 sm:p-8 ": isRow,
            "py-6 px-4 sm:pb-8 ": !isRow,
            "!py-6 !px-4 !sm:px-8 !sm:pb-12 w-full": os === "mobile",
          }
        )}
      >
        {blog?.type && blogTypes && blogTypes?.length > 0 && (
          <LocalizedClientLink
            href={`/loai-bai-viet/${blog.type}`}
            className="text-primary font-semibold text-sm cursor-pointer hover:text-orang-30"
          >
            {blogTypes?.find((blogType) => blogType?.value === blog?.type)
              ?.name || ""}
          </LocalizedClientLink>
        )}
        <h1 className="text-lg sm:text-xl font-bold font-times">
          {blog?.title}
        </h1>
        <p className="text-sm line-clamp-4 text-justify h-20">
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
