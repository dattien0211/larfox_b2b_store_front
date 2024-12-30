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
import { StaticImageData } from "next/image"
import BlogCard from "./blogCard"

interface BlogData {
  imageSrc: StaticImageData
  title: string
  description: string
}

const BlogSlider = () => {
  const sliderRef = useRef<any>(null)
  const blogData: BlogData[] = [
    {
      imageSrc: IMGS.Blog,
      title: "Làm thế nào để lựa chọn sống vui khoẻ",
      description:
        "Hơn một thập niên gắn bó với trà, rồi lập thương hiệu Trà bà Vân (Bavantea), câu chuyện làm trà của Xuân Hiến không thể bắt đầu nói về kinh doanh, mà đó chỉ...",
    },
    {
      imageSrc: IMGS.Blog,
      title: "Làm thế nào để lựa chọn sống vui khoẻ",
      description:
        "Hơn một thập niên gắn bó với trà, rồi lập thương hiệu Trà bà Vân (Bavantea), câu chuyện làm trà của Xuân Hiến không thể bắt đầu nói về kinh doanh, mà đó chỉ...",
    },
    {
      imageSrc: IMGS.Blog,
      title: "Làm thế nào để lựa chọn sống vui khoẻ",
      description:
        "Hơn một thập niên gắn bó với trà, rồi lập thương hiệu Trà bà Vân (Bavantea), câu chuyện làm trà của Xuân Hiến không thể bắt đầu nói về kinh doanh, mà đó chỉ...",
    },
  ]

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
          {blogData.map((blog, index) => (
            <SwiperSlide key={index}>
              <BlogCard
                key={index}
                imageSrc={blog.imageSrc}
                title={blog.title}
                description={blog.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default BlogSlider
