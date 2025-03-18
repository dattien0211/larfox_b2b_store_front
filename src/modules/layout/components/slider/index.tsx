"use client"

import dynamic from "next/dynamic"
import React, { useCallback, useRef, useMemo } from "react"
import { SwiperSlide } from "swiper/react"
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
import repeat from "@lib/util/repeat"
import ProductItemSkeleton from "../product-item/product-item-skeleton"
import { HttpTypes } from "@medusajs/types"

const ProductsSlider = ({
  products,
  isSale = false,
}: {
  products: HttpTypes.StoreProduct[]
  isSale?: boolean
}) => {
  const { LeftArrow, RightArrow } = Icons
  const { os } = useOS()
  const sliderRef = useRef<any>(null)

  const slidesPerView = os === "desktop" ? 5 : os === "tablet" ? 3 : 2
  const spaceBetween = os === "desktop" ? 16 : os === "tablet" ? 24 : 16

  const Swiper = dynamic(
    () => import("swiper/react").then((mod) => mod.Swiper),
    {
      loading: () => (
        <div className="mt-2 sm:mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {repeat(slidesPerView).map((_, index) => (
            <ProductItemSkeleton key={index} />
          ))}
        </div>
      ),
      ssr: false,
    }
  )

  return (
    <div className="mt-4 flex flex-col items-center justify-center">
      <div className="w-full">
        <Swiper
          ref={sliderRef}
          modules={[Navigation, Thumbs, Controller, Autoplay, Pagination]}
          loop
          slidesPerView={slidesPerView}
          spaceBetween={spaceBetween}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          onBeforeInit={(swiper) => {
            sliderRef.current = swiper
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <ProductItem product={product} isSale={isSale} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-4 sm:mt-6 flex items-center justify-center gap-x-4 sm:gap-x-8">
        <button
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-primary"
          onClick={() => sliderRef.current?.slidePrev()}
        >
          <LeftArrow color="white" />
        </button>
        <button
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-primary"
          onClick={() => sliderRef.current?.slideNext()}
        >
          <RightArrow color="white" />
        </button>
      </div>
    </div>
  )
}

export default ProductsSlider
