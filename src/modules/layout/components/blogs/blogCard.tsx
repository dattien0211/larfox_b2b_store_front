"use client"

import React from "react"
import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Blog } from "types/global"

interface BlogCardProps {
  blog: Blog
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className="shadow-lg rounded-sm">
      <div className="relative w-full h-[280px] ">
        <Image
          src={blog?.thumbnail}
          alt={blog?.title}
          width={370}
          height={280}
          className="w-full h-full  object-cover"
        />
      </div>

      <div className="bg-grey-15 pt-4 px-4 pb-6 sm:px-8 sm:pb-12 flex flex-col gap-y-2 sm:gap-y-4">
        {blog?.type && (
          <h3 className="text-primary font-semibold text-sm">{blog?.type}</h3>
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
