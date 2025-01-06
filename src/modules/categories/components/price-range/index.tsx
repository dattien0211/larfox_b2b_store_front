"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
// @ts-ignore
import RangeSlider from "react-range-slider-input"
import "react-range-slider-input/dist/style.css"
import "./styles.css"

const PriceRange = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Default slider range
  const defaultRange = [10000, 250000]
  const [value, setValue] = useState(defaultRange)

  // Format number with commas using Intl.NumberFormat
  const formatNumber = (num: number) =>
    new Intl.NumberFormat("vi-VN").format(num)

  // Sync slider value with URL query parameters
  useEffect(() => {
    const minPrice = parseInt(
      searchParams.get("min_price") || `${defaultRange[0]}`
    )
    const maxPrice = parseInt(
      searchParams.get("max_price") || `${defaultRange[1]}`
    )
    setValue([minPrice, maxPrice])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams])

  const handlePriceFilterChange = () => {
    const currentParams = new URLSearchParams(searchParams.toString())

    // Update the query parameters
    currentParams.set("min_price", value[0].toString())
    currentParams.set("max_price", value[1].toString())

    // Push the updated URL
    router.push(`?${currentParams.toString()}`)
  }

  return (
    <>
      <h2 className="text-lg sm:text-xl font-semibold border-b border-gray-200 pb-4 sm:py-4 mt-6 sm:mt-8">
        Giá
      </h2>
      <div className="my-6 sm:my-12 w-[98%]">
        <RangeSlider
          id="range-slider-yellow"
          min={10000}
          max={5000000}
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
        <button
          className="px-8 py-2 bg-primary text-white rounded-md hover:bg-orang-10 text-sm sm:text-base"
          onClick={handlePriceFilterChange}
        >
          Áp dụng
        </button>
      </div>
    </>
  )
}

export default PriceRange
