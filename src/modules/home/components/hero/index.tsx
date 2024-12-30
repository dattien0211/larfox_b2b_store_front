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
import BannerProduct from "@modules/layout/components/banner"
import { useOS } from "@lib/hooks/OSContext"

const Hero = () => {
  const { os } = useOS()

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
            imageSrc={os !== "mobile" ? IMGS.Banner6 : IMGS.MobileBanner}
            title="Xem thêm"
            buttonClass={
              os !== "mobile"
                ? "bottom-[25%] left-[25%]"
                : "top-[35%] left-[12%]   "
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerProduct
            imageSrc={os !== "mobile" ? IMGS.Banner4 : IMGS.MobileBanner}
            title="Xem thêm"
            buttonClass={
              os !== "mobile"
                ? "bottom-[25%] left-[25%]"
                : "top-[35%] left-[12%]   "
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerProduct
            imageSrc={os !== "mobile" ? IMGS.Banner6 : IMGS.MobileBanner}
            title="Xem thêm"
            buttonClass={
              os !== "mobile"
                ? "bottom-[25%] left-[25%]"
                : "top-[35%] left-[12%]   "
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerProduct
            imageSrc={os !== "mobile" ? IMGS.Banner4 : IMGS.MobileBanner}
            title="Xem thêm"
            buttonClass={
              os !== "mobile"
                ? "bottom-[25%] left-[25%]"
                : "top-[35%] left-[12%]   "
            }
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Hero
