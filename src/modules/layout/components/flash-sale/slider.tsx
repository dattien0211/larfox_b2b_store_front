"use client"
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

import { useOS } from "@lib/hooks/OSContext"
import Icons from "@modules/common/icons"
import ProductItem from "../product-item"

const FlashSaleProductsSlider = ({ products }: { products: any }) => {
  const { LeftArrow, RightArrow } = Icons
  const { os } = useOS()
  const sliderRef = useRef<any>(null)

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
    <div className="mt-4 flex flex-col items-center justify-center">
      <div className="w-full sm:w-full cursor-pointer">
        <Swiper
          modules={[Navigation, Thumbs, Controller, Autoplay, Pagination]}
          loop
          slidesPerView={os !== "desktop" ? (os !== "tablet" ? 2 : 3) : 5}
          spaceBetween={os !== "desktop" ? (os !== "tablet" ? 16 : 24) : 16}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => {
            sliderRef.current = swiper
          }}
        >
          {products.length > 0 &&
            products.map((product: any, index: number) => (
              <SwiperSlide key={index}>
                <ProductItem productItem={product} isSale={true} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      <div className="mt-4 sm:mt-6 flex items-center justify-center gap-x-4 sm:gap-x-8 ">
        <button
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-primary "
          onClick={handlePrev}
        >
          <LeftArrow color="white" />
        </button>
        <button
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-primary "
          onClick={handleNext}
        >
          <RightArrow color="white" />
        </button>
      </div>
    </div>
  )
}

export default FlashSaleProductsSlider
