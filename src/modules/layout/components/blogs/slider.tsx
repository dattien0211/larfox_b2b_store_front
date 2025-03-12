"use client"

import React, { useMemo } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import {
  Navigation,
  Thumbs,
  Controller,
  Autoplay,
  Pagination,
} from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/thumbs"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import BlogCard from "./blogCard"
import { Blog, BlogType } from "types/global"
interface BlogSliderProps {
  blogs: Blog[]
  blogTypes?: BlogType[]
}

const BlogSlider: React.FC<BlogSliderProps> = ({ blogs, blogTypes }) => {
  const slides = useMemo(
    () =>
      blogs.map((blog, index) => (
        <SwiperSlide key={blog.id || index}>
          <BlogCard blog={blog} blogTypes={blogTypes} />
        </SwiperSlide>
      )),
    [blogs, blogTypes]
  )

  return (
    <div className="w-full rounded-lg overflow-hidden h-full">
      <Swiper
        modules={[Navigation, Thumbs, Controller, Autoplay, Pagination]}
        loop
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{
          clickable: true,
          type: "bullets",
          renderBullet: (index, className) => {
            return `<span class="${className} custom-dot" ><span class="custom-dot-child"></span></span>`
          },
        }}
      >
        {slides}
      </Swiper>
    </div>
  )
}

export default BlogSlider
