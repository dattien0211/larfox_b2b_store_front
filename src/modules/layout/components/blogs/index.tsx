"use client"

import React from "react"
import Icons from "@modules/common/icons"
import Text from "@modules/layout/components/text"
import BlogSlider from "./slider"
import { Blog, BlogType } from "types/global"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
interface BlogsProps {
  blogs: Blog[]
  blogTypes: BlogType[]
}

const Blogs: React.FC<BlogsProps> = ({ blogs, blogTypes }) => {
  if (!blogs || !blogTypes) return null

  const { RightArrow } = Icons

  console.log("Blogs", blogs)

  return (
    <div className="relative py-12 sm:py-20">
      <Text
        backgroundText="Blogs"
        subTitle="Thật thú vị"
        title="Tin tức mới"
        classBGText="!text-[#FFF6E8]"
      />

      {/* Blog Cards */}
      <div className="content-container mt-4 sm:mt-20">
        <BlogSlider blogs={blogs} blogTypes={blogTypes} />
      </div>

      {/* Navigation Button */}
      <LocalizedClientLink
        href={`/tat-ca-bai-viet`}
        className="mt-12 flex items-center justify-center gap-x-4 relative z-20"
      >
        <button className="hover:text-orange-600 hover:bg-white shadow-md rounded-full flex items-center justify-center px-4 py-[6px] sm:px-8 sm:py-2 bg-gradient-to-r from-[#EE9C23] to-[#FFBB56] text-white transition-all duration-300 ease-in-out">
          <p className="mr-2 text-base sm:text-lg text-nowrap">Xem thêm</p>
          <RightArrow size={12} />
        </button>
      </LocalizedClientLink>
    </div>
  )
}

export default Blogs
