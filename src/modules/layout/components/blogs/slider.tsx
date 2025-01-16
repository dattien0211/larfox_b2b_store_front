"use client"

import { useOS } from "@lib/hooks/OSContext"
import React, { useRef } from "react"
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
  const sliderRef = useRef<any>(null)
  const { os } = useOS()

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[90%] sm:w-full">
        <Swiper
          modules={[Navigation, Thumbs, Controller, Autoplay, Pagination]}
          loop
          slidesPerView={os === "desktop" ? 3 : os === "tablet" ? 2 : 1}
          spaceBetween={32}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => {
            sliderRef.current = swiper
          }}
        >
          {blogs &&
            blogs.length > 0 &&
            blogs.map((blog, index) => (
              <SwiperSlide key={index}>
                <BlogCard blog={blog} blogTypes={blogTypes} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  )
}

export default BlogSlider
