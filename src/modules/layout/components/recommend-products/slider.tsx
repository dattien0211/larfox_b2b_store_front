"use client"

import { HttpTypes } from "@medusajs/types"
import Image from "next/image"
import React, { useCallback, useRef } from "react"
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

import Icons from "@modules/common/icons"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { useOS } from "@lib/hooks/OSContext"
import IMGS from "@constants/IMGS"
interface RecommendProductsSliderProps {
  products?: any
  collectionHandle?: string
}

const RecommendProductsSlider: React.FC<RecommendProductsSliderProps> = ({
  products,
  collectionHandle,
}) => {
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
    <div className="flex flex-col items-center justify-center">
      <div className="w-[90%] sm:w-full ">
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
          {products &&
            products.length > 0 &&
            products.map(
              (
                {
                  product,
                  cheapestPrice,
                }: {
                  product: HttpTypes.StoreProduct
                  cheapestPrice: {
                    calculated_price_number: any
                    calculated_price: string
                    original_price_number: any
                    original_price: string
                    currency_code: any
                    price_type: any
                    percentage_diff: string
                  } | null
                },
                index: number
              ) => (
                <SwiperSlide key={index}>
                  <div className="relative h-[330px] sm:h-[360px]">
                    <LocalizedClientLink
                      href={
                        product?.categories && product?.categories.length > 0
                          ? `/danh-muc-san-pham/${product?.categories[0].handle}`
                          : "/"
                      }
                      className="relative "
                    >
                      <Image
                        src={
                          product?.thumbnail ||
                          (product?.images && product?.images.length > 0
                            ? product.images[0].url
                            : IMGS.Product)
                        }
                        alt="hot product"
                        width={380}
                        height={280}
                        className="w-full h-[85%] object-contain bg-white"
                      />
                    </LocalizedClientLink>

                    <div className="absolute w-[60%] sm:w-[70%] bg-white left-1/2 -translate-x-1/2 bottom-2  z-20 rounded-md p-2 lg:p-4 shadow-md flex flex-col items-center justify-center">
                      <LocalizedClientLink
                        href={
                          product?.categories && product?.categories.length > 0
                            ? `/danh-muc-san-pham/${product?.categories[0].handle}`
                            : "/"
                        }
                        className="font-times italic text-primary"
                      >
                        {product?.categories &&
                          product?.categories.length > 0 &&
                          product?.categories[0].name}
                      </LocalizedClientLink>
                      <LocalizedClientLink
                        href={
                          product?.handle ? `/san-pham/${product?.handle}` : "/"
                        }
                        className="text-lg md:text-xl line-clamp-1"
                      >
                        {product?.title}
                      </LocalizedClientLink>
                      <h3 className="text-base text-primary font-bold ">
                        {cheapestPrice?.calculated_price}
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
              )
            )}
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
