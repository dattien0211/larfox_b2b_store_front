"use client"

import React, { useCallback, useRef, useMemo } from "react"
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

const ProductsSlider = ({
  products,
  isSale = false,
}: {
  products: any[]
  isSale?: boolean
}) => {
  const { LeftArrow, RightArrow } = Icons
  const { os } = useOS()
  const sliderRef = useRef<any>(null)

  const handlePrev = useCallback(() => sliderRef.current?.slidePrev(), [])
  const handleNext = useCallback(() => sliderRef.current?.slideNext(), [])

  // Determine number of slides per view based on OS
  const slidesPerView = os === "desktop" ? 5 : os === "tablet" ? 3 : 2
  const spaceBetween = os === "desktop" ? 16 : os === "tablet" ? 24 : 16

  // Memoized Swiper slides
  const slides = useMemo(
    () =>
      products.map((product, index) => (
        <SwiperSlide key={index}>
          <ProductItem product={product} isSale={isSale} />
        </SwiperSlide>
      )),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [products]
  )

  return (
    <div className="mt-4 flex flex-col items-center justify-center">
      <div className="w-full ">
        <Swiper
          ref={sliderRef}
          modules={[Navigation, Thumbs, Controller, Autoplay, Pagination]}
          loop
          slidesPerView={slidesPerView}
          spaceBetween={spaceBetween}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          onSwiper={(swiper) => (sliderRef.current = swiper)}
        >
          {slides}
        </Swiper>
      </div>

      <div className="mt-4 sm:mt-6 flex items-center justify-center gap-x-4 sm:gap-x-8">
        <button
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-primary"
          onClick={handlePrev}
          aria-label="Previous Slide"
        >
          <LeftArrow color="white" />
        </button>
        <button
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-primary"
          onClick={handleNext}
          aria-label="Next Slide"
        >
          <RightArrow color="white" />
        </button>
      </div>
    </div>
  )
}

export default ProductsSlider
