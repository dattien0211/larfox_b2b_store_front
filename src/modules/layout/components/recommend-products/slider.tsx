"use client"

import { useOS } from "@lib/hooks/OSContext"
import Icons from "@modules/common/icons"
import Image from "next/image"
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

const RecommendProductsSlider = () => {
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
    <div className="flex flex-col items-center justify-center">
      <div className="w-[90%] sm:w-full cursor-pointer">
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
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[280px]  2xsmall:h-[430px] sm:h-[280px] md:h-[330px]">
                <Image
                  src={product.imgSrc}
                  alt="hot product"
                  width={380}
                  height={280}
                  className="w-full object-contain"
                />
                <div className="absolute w-[60%] md:w-[90%] bg-white left-1/2 -translate-x-1/2 bottom-4 sm:bottom-2 z-20 cursor-pointer rounded-md p-2 lg:p-4 shadow-lg flex flex-col items-center justify-center">
                  <h2 className="font-times italic text-primary">
                    {product.brand}
                  </h2>
                  <h1 className=" sm:text-base lg:text-2xl font-manrope-extrabold line-clamp-1">
                    {product.name}
                  </h1>
                  <h3 className="sm:text-sm md:text-base text-primary">
                    {product.price}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-8 md:mt-20 flex items-center justify-center gap-x-4 sm:gap-x-8">
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

export default RecommendProductsSlider
