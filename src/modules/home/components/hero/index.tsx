"use client"

import IMGS from "@constants/IMGS"
import React from "react"
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
import "swiper/css/pagination" // Import pagination styles
import BannerProduct from "@modules/layout/components/banner-product"

const Hero = () => {
  return (
    <div className="w-full cursor-pointer mb-4">
      <Swiper
        modules={[Navigation, Thumbs, Controller, Autoplay, Pagination]}
        loop={true}
        slidesPerView={1}
        autoplay={{
          delay: 3000, // Slide change interval (in ms)
          disableOnInteraction: false, // Allow autoplay even when interacting
        }}
        pagination={{
          clickable: true,
          type: "bullets",
          renderBullet: (index, className) => {
            // Only add a custom class, no inline styles here
            return `<span class="${className} custom-dot"><span class="custom-dot-child"></span></span>`
          },
        }}
      >
        <SwiperSlide>
          <BannerProduct
            imageSrc={IMGS.Banner6}
            title="Xem thêm"
            buttonClass="!left-[21%]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerProduct
            imageSrc={IMGS.Banner4}
            title="Xem thêm"
            buttonClass="!left-[21%]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerProduct
            imageSrc={IMGS.Banner6}
            title="Xem thêm"
            buttonClass="!left-[21%]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerProduct
            imageSrc={IMGS.Banner4}
            title="Xem thêm"
            buttonClass="!left-[21%]"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Hero
