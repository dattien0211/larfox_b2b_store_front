"use client"
import dynamic from "next/dynamic"
import React, { useRef, useState, useCallback, useMemo } from "react"
import { SwiperSlide } from "swiper/react"
import { Navigation, Controller, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/thumbs"
import "swiper/css/free-mode"
import Image from "next/image"
import { HttpTypes } from "@medusajs/types"
import Icons from "@modules/common/icons"
import clsx from "clsx"
import { useOS } from "@lib/hooks/OSContext"

// Dynamically import Swiper with a loading fallback and forward ref
const Swiper = dynamic(() => import("swiper/react").then((mod) => mod.Swiper), {
  ssr: false,
  loading: () => (
    <div className="h-[300px] md:h-[440px] lg:h-[520px] w-full animate-pulse bg-gray-200" />
  ),
})

interface ImageSliderProps {
  images: HttpTypes.StoreProductImage[]
  showThumbnails?: boolean
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  showThumbnails = false,
}) => {
  const { os } = useOS()
  const mainSliderRef = useRef<any>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const { RightArrow, LeftArrow } = Icons

  const handlePrev = useCallback(() => mainSliderRef.current?.slidePrev(), [])
  const handleNext = useCallback(() => mainSliderRef.current?.slideNext(), [])
  const handleSlideChange = useCallback(
    (swiper: any) => setActiveIndex(swiper.realIndex),
    []
  )

  const thumbnailElements = useMemo(
    () =>
      images.slice(0, 5).map((image, index) => {
        const isActive = activeIndex === index
        return (
          <div
            key={index}
            className={clsx(
              "p-2 aspect-square border transition-all duration-300 ease-in-out cursor-pointer relative",
              isActive
                ? "opacity-100 border-yellow-400"
                : "opacity-50 border-[#AEAEAE]"
            )}
            onClick={() => mainSliderRef.current?.slideTo(index)}
          >
            <Image
              src={image.url}
              width={120}
              height={120}
              alt={`Thumbnail ${index + 1}`}
              loading="lazy"
              className="w-full aspect-square object-contain"
            />
          </div>
        )
      }),
    [images, activeIndex]
  )

  return (
    <div className="w-full max-w-[800px] mx-auto">
      <Swiper
        modules={[Navigation, Controller, Autoplay]}
        loop={true}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        onBeforeInit={(swiper) => {
          mainSliderRef.current = swiper
        }}
        onSwiper={(swiper) => (mainSliderRef.current = swiper)}
        onSlideChange={handleSlideChange}
        className="mb-4"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[300px] sm:h-[360px] md:h-[440px] lg:h-[520px] w-full cursor-pointer">
              <Image
                src={image.url}
                alt={`Slide ${index + 1}`}
                fill
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
                className="object-cover object-center w-full h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {showThumbnails && (
        <div className="flex items-center justify-center gap-x-2 sm:gap-x-4 mt-3 md:mt-6 overflow-hidden">
          <button
            className="p-2 cursor-pointer text-black-20"
            onClick={handlePrev}
          >
            <LeftArrow size={os === "mobile" ? 12 : 20} />
          </button>
          {thumbnailElements}
          <button
            className="p-2 cursor-pointer text-black-20"
            onClick={handleNext}
          >
            <RightArrow size={os === "mobile" ? 12 : 20} />
          </button>
        </div>
      )}
    </div>
  )
}

export default React.memo(ImageSlider)
