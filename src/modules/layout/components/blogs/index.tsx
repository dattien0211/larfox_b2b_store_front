"use client"

import React from "react"
import Image from "next/image"

import Icons from "@modules/common/icons"
import IMGS from "@constants/IMGS"
import BlogSlider from "./slider"
import { Blog, BlogType } from "types/global"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Heading } from "@medusajs/ui"
import RiceSpike from "@modules/common/components/rice-spike"
interface BlogsProps {
  blogs: Blog[]
  blogTypes: BlogType[]
}

const Blogs: React.FC<BlogsProps> = ({ blogs, blogTypes }) => {
  if (!blogs || !blogTypes) return null

  const { RightArrow } = Icons

  return (
    <div className="relative content-container py-4 sm:py-6 my-4 sm:my-8 rounded-lg shadow-lg bg-white">
      <RiceSpike />

      <Heading
        level="h1"
        className="mb-2 sm:mb-4 font-semibold capitalize font-times text-primary text-lg sm:text-2xl"
      >
        Bài viết
      </Heading>

      {/* Blog Cards */}
      <div className="mt-4 sm:mt-6">
        <BlogSlider blogs={blogs} blogTypes={blogTypes} />
      </div>

      {/* Navigation Button */}
      <LocalizedClientLink
        href={`/tat-ca-bai-viet`}
        className="mt-12 flex items-center justify-center gap-x-4 relative z-20"
      >
        <button className="text-sm sm:text-base capitalize rounded-full px-6 sm:px-8 py-1 mx-auto border border-primary text-primary hover:bg-primary hover:text-white flex gap-x-2 items-center justify-center">
          Xem tất cả
          <RightArrow size={12} />
        </button>
      </LocalizedClientLink>
    </div>
  )
}

export default Blogs
