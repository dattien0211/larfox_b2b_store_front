"use client"

import IMGS from "@constants/IMGS"
import React, { useCallback, useRef, useState } from "react"
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
import { Blog } from "types/global"
interface BlogSliderProps {
  blogs: Blog[]
}

const BlogSlider: React.FC<BlogSliderProps> = ({ blogs }) => {
  const sliderRef = useRef<any>(null)

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[90%] sm:w-full cursor-pointer">
        <Swiper
          modules={[Navigation, Thumbs, Controller, Autoplay, Pagination]}
          loop
          slidesPerView={1}
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
                <BlogCard blog={blog} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  )
}

export default BlogSlider
