"use client" // For Next.js 13+ to ensure Swiper runs on the client side

import React, { useRef, useState, useCallback, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Thumbs, Autoplay, Controller } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/thumbs"
import "swiper/css/free-mode"
import Image from "next/image"
import { HttpTypes } from "@medusajs/types"
import Icons from "@modules/common/icons"
import clsx from "clsx"

interface ImageSliderProps {
  images: HttpTypes.StoreProductImage[]
  showThumbnails?: boolean
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  showThumbnails = false,
}) => {
  const mainSliderRef = useRef<any>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const { RightArrow, LeftArrow } = Icons

  const handlePrev = useCallback(() => {
    if (mainSliderRef.current) {
      mainSliderRef.current?.slidePrev() // Move the main slider
    }
  }, [])

  const handleNext = useCallback(() => {
    if (mainSliderRef.current) {
      mainSliderRef.current?.slideNext() // Move the main slider
    }
  }, [])

  return (
    <div className="w-full max-w-[800px] mx-auto">
      <Swiper
        ref={mainSliderRef}
        modules={[Navigation, Thumbs, Controller, Autoplay]}
        loop={true}
        slidesPerView={1}
        autoplay={{
          delay: 3000, // Slide change interval (in ms)
          disableOnInteraction: false, // Allow autoplay even when interacting
        }}
        onSwiper={(swiper) => {
          mainSliderRef.current = swiper
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="mb-4"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[520px] w-full cursor-pointer">
              <Image
                src={image.url}
                alt={`Slide ${index + 1}`}
                fill
                priority
                sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
                className="object-cover "
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {showThumbnails && (
        <div className=" flex items-center justify-center gap-x-4 mt-8 overflow-hidden">
          <button
            disabled={activeIndex === 0}
            className={clsx(
              "p-2 cursor-pointer text-black-20",
              activeIndex === 0 ? "opacity-20" : "opacity-100"
            )}
            onClick={handlePrev}
          >
            <LeftArrow size={20} />
          </button>
          {images.map((image, index) => (
            <div
              key={index}
              className={clsx(
                "p-2 w-[120px] h-[120px] border transition-all duration-300 ease-in-out cursor-pointer",
                activeIndex === index
                  ? "opacity-100 border-yellow-400"
                  : "opacity-50 border-[#AEAEAE]"
              )}
              onClick={() => {
                setActiveIndex(index)
                if (mainSliderRef.current) {
                  mainSliderRef.current.slideTo(index) // Sync main slider with thumbnail click
                }
              }}
            >
              <Image
                src={image.url}
                width={120}
                height={120}
                alt="thumbnail"
                className="w-full h-full"
              />
            </div>
          ))}
          <button
            disabled={activeIndex === images.length - 1}
            className={clsx(
              "p-2 cursor-pointer text-black-20",
              activeIndex === images.length - 1 ? "opacity-20" : "opacity-100"
            )}
            onClick={handleNext}
          >
            <RightArrow size={20} />
          </button>
        </div>
      )}
    </div>
  )
}

export default ImageSlider
