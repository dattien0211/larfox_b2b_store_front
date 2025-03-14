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
import repeat from "@lib/util/repeat"
import ProductItemSkeleton from "../product-item/product-item-skeleton"

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

  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    if (os) setLoading(false)
  }, [os])

  const handlePrev = useCallback(() => sliderRef.current?.slidePrev(), [])
  const handleNext = useCallback(() => sliderRef.current?.slideNext(), [])

  const slidesPerView = useMemo(() => {
    if (!os) return 2 // Default value
    return os === "desktop" ? 5 : os === "tablet" ? 3 : 2
  }, [os])

  const spaceBetween = useMemo(() => {
    if (!os) return 16 // Default spacing
    return os === "desktop" ? 16 : os === "tablet" ? 24 : 16
  }, [os])

  const slides = useMemo(
    () =>
      products.map((product, index) => (
        <SwiperSlide key={index}>
          <ProductItem product={product} isSale={isSale} />
        </SwiperSlide>
      )),
    [products, isSale]
  )

  if (loading)
    return (
      <div className="mt-2 sm:mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {repeat(5).map((_, index) => (
          <ProductItemSkeleton key={index} />
        ))}
      </div>
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
