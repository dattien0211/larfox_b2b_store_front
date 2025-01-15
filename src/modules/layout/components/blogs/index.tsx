"use client"

import React from "react"
import Icons from "@modules/common/icons"
import IMGS from "@constants/IMGS"
import TextAnco from "@modules/layout/components/text-anco"
import { useOS } from "@lib/hooks/OSContext"
import { StaticImageData } from "next/image"
import BlogCard from "./blogCard"
import BlogSlider from "./slider"
import { Blog } from "types/global"
interface BlogsProps {
  blogs: Blog[]
}

const Blogs: React.FC<BlogsProps> = ({ blogs }) => {
  const { RightArrow } = Icons
  const { os } = useOS()

  const displayedBlogs = os !== "mobile" ? blogs.slice(0, 3) : blogs.slice(0, 1)

  return (
    <div className="relative py-12 sm:py-20">
      <TextAnco
        backgroundText="Blogs"
        subTitle="Thật thú vị"
        title="Tin tức mới"
        classBGText="!text-[#FFF6E8]"
      />

      {/* Blog Cards */}
      <div className="content-container mt-4 sm:mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 px-0">
          {os !== "mobile" ? (
            displayedBlogs.map((blog, index) => (
              <BlogCard key={blog.id + index} blog={blog} />
            ))
          ) : (
            <BlogSlider blogs={blogs} />
          )}
        </div>
      </div>

      {/* Navigation Button */}
      <div className="mt-12 flex items-center justify-center gap-x-4 relative z-20">
        <button className="hover:text-orange-600 hover:bg-white shadow-md rounded-full flex items-center justify-center px-4 py-[6px] sm:px-8 sm:py-2 bg-gradient-to-r from-[#EE9C23] to-[#FFBB56] text-white transition-all duration-300 ease-in-out">
          <p className="mr-2 text-base sm:text-lg text-nowrap">Xem thêm</p>
          <RightArrow size={12} />
        </button>
      </div>
    </div>
  )
}

export default Blogs
