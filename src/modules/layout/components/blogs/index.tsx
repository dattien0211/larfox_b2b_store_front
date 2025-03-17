"use client"

import React from "react"

import BlogSlider from "./slider"
import { Blog, BlogType } from "types/global"
import { Heading } from "@medusajs/ui"
import RiceSpike from "@modules/common/components/rice-spike"
import BlogCard from "./blogCard"
interface BlogsProps {
  blogs: Blog[]
  blogTypes: BlogType[]
}

const Blogs: React.FC<BlogsProps> = ({ blogs, blogTypes }) => {
  if (!blogs || !blogTypes) return null

  const leftBlogs = blogs.slice(0, 6)
  const rightBlogs = blogs.slice(-2)

  return (
    <div className="relative content-container py-4 sm:py-6 my-6 sm:my-10 rounded-lg shadow-lg bg-white">
      <RiceSpike />

      <Heading
        level="h1"
        className="mb-2 sm:mb-4 font-semibold capitalize font-times text-primary text-xl sm:text-28"
      >
        Bài viết
      </Heading>

      {/* Blog Cards */}
      <div className="mt-4 sm:mt-6 flex flex-col-reverse sm:flex-row gap-4 items-center justify-center">
        <div className="w-full md:w-3/5 ">
          <BlogSlider blogs={leftBlogs} />
        </div>

        <div className="w-full hidden sm:flex flex-col gap-4 justify-between items-center h-full">
          <div className="w-full rounded-lg overflow-hidden">
            <BlogCard
              blog={rightBlogs[0]}
              classBlog="md:!h-[182px]"
              isSmall={true}
            />
          </div>

          <div className="w-full rounded-lg overflow-hidden">
            <BlogCard
              blog={rightBlogs[1]}
              classBlog="md:!h-[182px]"
              isSmall={true}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs
