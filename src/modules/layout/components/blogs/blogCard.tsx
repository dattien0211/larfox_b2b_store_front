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
  isSmall?: boolean
  classBlog?: string
}

const BlogCard: React.FC<BlogCardProps> = ({
  blog,
  isRow = false,
  isSmall = false,
  classBlog,
}) => {
  const { os } = useOS()

  return (
    <div
      className={clsx(
        "w-full shadow-lg relative h-[220px] md:h-[380px] rounded-lg overflow-hidden",
        isRow ? "!flex-row" : "",
        os === "mobile" ? "!flex-col" : "",
        classBlog
      )}
    >
      <section className="absolute inset-0  ">
        <div className={"relative w-full h-full "}>
          {blog?.thumbnail && (
            <Image
              //@ts-ignore
              src={blog?.thumbnail?.url}
              alt={blog?.title}
              width={1200}
              height={340}
              className="w-full h-full object-cover rounded-lg"
            />
          )}
        </div>
      </section>

      <section
        className={clsx("absolute bottom-0 left-0 z-10 w-full rounded-lg")}
      >
        <div
          className={clsx(
            "px-4 shadow-inner  opacity-[45] flex items-center justify-center -rotate-180",
            isSmall ? "items-center h-16 md-20" : "items-end h-20 md:h-24"
          )}
          style={{
            background:
              "linear-gradient(180deg, #000000 30.46%, rgba(0, 0, 0, 0) 100%)",
          }}
        >
          <LocalizedClientLink
            href={`/bai-viet/${blog?.handle}`}
            className={clsx(
              "-rotate-180 text-white font-semibold opacity-100 flex-1 line-clamp-2 text-sm",
              isSmall ? "sm:text-base" : "sm:text-lg"
            )}
          >
            {blog?.title}
          </LocalizedClientLink>
        </div>
      </section>
    </div>
  )
}

export default BlogCard
