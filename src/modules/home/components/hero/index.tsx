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
import { Banner } from "types/global"

interface HeroProps {
  banners: Banner[]
}

const Hero: React.FC<HeroProps> = ({ banners }) => {
  const { os } = useOS()

  if (!banners) return null

  return (
    <div className="w-full cursor-pointer mt-4">
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
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <BannerProduct
              imageSrc={banner.image}
              title={banner.button_text}
              buttonClass={
                os !== "mobile"
                  ? "bottom-[25%] left-[25%]"
                  : "bottom-[25%] left-[12%]"
              }
              href={banner.link}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Hero
