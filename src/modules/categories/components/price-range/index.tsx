"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
// @ts-ignore
import RangeSlider from "react-range-slider-input"
import "react-range-slider-input/dist/style.css"
import "./styles.css"
import RiceSpike from "@modules/common/components/rice-spike"

const MIN_PRICE_DEFAULT = 0
const MAX_PRICE_DEFAULT = 1000000
const MIN_PRICE = 0
const MAX_PRICE = 3000000

const PriceRange = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Default slider range
  const defaultRange = [MIN_PRICE_DEFAULT, MAX_PRICE_DEFAULT]
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
    router.push(`?${currentParams.toString()}`, { scroll: false })
  }

  return (
    <div className="bg-white mt-8 lg:mt-4 lg:px-4 lg:py-6 lg:rounded-lg lg:shadow-lg ">
      <h2 className="text-base sm:text-lg font-semibold border-b border-gray-200 pb-4 text-primary">
        Giá
      </h2>
      <div className="my-6 lg:my-7 w-[98%]">
        <RangeSlider
          id="range-slider-yellow"
          min={MIN_PRICE}
          max={MAX_PRICE}
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
      <div className="mt-2 lg:mt-4">
        <button
          className="px-8 py-1 bg-primary text-white rounded-md hover:bg-orang-10 text-sm sm:text-base"
          onClick={handlePriceFilterChange}
        >
          Áp dụng
        </button>
      </div>
    </div>
  )
}

export default PriceRange
