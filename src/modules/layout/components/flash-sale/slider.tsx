"use client"

import { useOS } from "@lib/hooks/OSContext"
import Icons from "@modules/common/icons"
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
import SaleProductItem from "../sale-product-item"

const FlashSaleProductsSlider = () => {
  const { LeftArrow, RightArrow } = Icons
  const { os } = useOS()
  const sliderRef = useRef<any>(null)

  const products = [
    {
      imgSrc: IMGS.HotProduct1,
      brand: "Anco Care",
      name: "Xịt xao vàng",
      price: "285.000 đ",
    },
    {
      imgSrc: IMGS.HotProduct2,
      brand: "Anco Home",
      name: "Lược chải sức khỏe",
      price: "150.000 đ",
    },
    {
      imgSrc: IMGS.HotProduct3,
      brand: "Anco Foods",
      name: "Trà thảo mộc",
      price: "325.000 đ",
    },
    {
      imgSrc: IMGS.HotProduct1,
      brand: "Anco Care",
      name: "Xịt xao vàng",
      price: "285.000 đ",
    },
    {
      imgSrc: IMGS.HotProduct2,
      brand: "Anco Home",
      name: "Lược chải sức khỏe",
      price: "150.000 đ",
    },
    {
      imgSrc: IMGS.HotProduct3,
      brand: "Anco Foods",
      name: "Trà thảo mộc",
      price: "325.000 đ",
    },
  ]

  const handlePrev = useCallback(() => {
    if (sliderRef.current) {
      sliderRef.current?.slidePrev() // Move the main slider
    }
  }, [])

  const handleNext = useCallback(() => {
    if (sliderRef.current) {
      sliderRef.current?.slideNext() // Move the main slider
    }
  }, [])

  return (
    <div className="mt-10 flex flex-col items-center justify-center">
      <div className="w-full sm:w-full cursor-pointer">
        <Swiper
          modules={[Navigation, Thumbs, Controller, Autoplay, Pagination]}
          loop
          slidesPerView={os !== "desktop" ? 2 : 4}
          spaceBetween={os !== "desktop" ? 16 : 32}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => {
            sliderRef.current = swiper
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <SaleProductItem />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-12 md:mt-20 flex items-center justify-center gap-x-4 sm:gap-x-8 ">
        <button
          className="w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-orang-25 disabled:opacity-50"
          onClick={handlePrev}
        >
          <LeftArrow color="white" />
        </button>
        <button
          className="w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-orang-25 "
          onClick={handleNext}
        >
          <RightArrow color="white" />
        </button>
      </div>
    </div>
  )
}

export default FlashSaleProductsSlider
