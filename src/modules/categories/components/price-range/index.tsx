"use client"

import { useState } from "react"
import { useRouter, usePathname, useSearchParams } from "next/navigation"
// @ts-ignore
import RangeSlider from "react-range-slider-input"
import "react-range-slider-input/dist/style.css"
import "./styles.css"

const PriceRange = () => {
  const [value, setValue] = useState([100000, 2500000])
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Format number with commas using Intl.NumberFormat
  const formatNumber = (num: number) =>
    new Intl.NumberFormat("vi-VN").format(num)

  const setQueryParams = (name: string, value: string) =>
    router.push(
      `${pathname}?${new URLSearchParams(searchParams).set(name, value)}`
    )

  return (
    <>
      <h2 className="text-lg sm:text-xl font-semibold border-b border-gray-200 pb-4 sm:py-4 mt-6 sm:mt-8">
        Giá
      </h2>
      <div className="my-6 sm:my-12">
        <RangeSlider
          id="range-slider-yellow"
          min={10000}
          max={10000000}
          value={value}
          step={10000}
          onInput={setValue}
        />
      </div>
      <p className="">
        <span className="text-sm sm:text-base">Giá:</span>
        <span className="font-manrope-semibold ml-2 sm:text-lg">
          {formatNumber(value[0])}
        </span>
        <span className="mx-2">-</span>
        <span className="font-manrope-semibold  sm:text-lg">
          {formatNumber(value[1])}
        </span>
      </p>
      <div className="mt-4 sm:mt-6">
        <button className="px-8 py-2 bg-primary text-white rounded-md hover:bg-orang-10 text-sm sm:text-base">
          Áp dụng
        </button>
      </div>
    </>
  )
}

export default PriceRange
