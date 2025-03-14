"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"

import { Brand } from "types/global"
import { Heading } from "@medusajs/ui"
import RiceSpike from "@modules/common/components/rice-spike"
import { useOS } from "@lib/hooks/OSContext"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

interface BrandsProps {
  brands: Brand[]
}

const Brands: React.FC<BrandsProps> = ({ brands }) => {
  const { os } = useOS() // ✅ Get OS from context
  const [visibleCount, setVisibleCount] = useState(6)

  useEffect(() => {
    setVisibleCount(os === "mobile" ? 6 : brands.length)
  }, [os, brands.length])

  if (!brands) return null

  const displayBrand = brands.slice(0, visibleCount)

  return (
    <div className="relative content-container py-4 sm:py-6 my-6 sm:my-10 rounded-lg shadow-lg bg-white">
      <RiceSpike />

      <Heading
        level="h1"
        className="mb-2 sm:mb-4 font-semibold capitalize font-times text-primary text-xl sm:text-28 text-left"
      >
        Thương hiệu
      </Heading>

      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4">
        {displayBrand.map((brand) => (
          <ul
            key={brand.id}
            className="group flex justify-center items-center border border-primary/35 hover:border-primary/45 p-2 sm:p-4 rounded-lg hover:shadow-xl transition-all duration-500 cursor-pointer"
          >
            <li>
              <LocalizedClientLink href={`/thuong-hieu/${brand.handle}`}>
                {brand.logo?.url ? (
                  <Image
                    src={brand.logo.url}
                    alt={brand.name}
                    width={100}
                    height={100}
                    className="object-contain transition-transform duration-300 group-hover:scale-125"
                  />
                ) : (
                  <span className="group-hover:text-primary">No logo</span>
                )}
              </LocalizedClientLink>
            </li>
          </ul>
        ))}
      </div>

      {/* View More Button (Only on Mobile) */}
      {os === "mobile" && visibleCount < brands.length && (
        <div className="mt-4 flex justify-center">
          <button
            onClick={() =>
              setVisibleCount((prev) => Math.min(prev + 6, brands.length))
            }
            className="sm:hidden text-sm capitalize rounded-full px-6 py-1 mx-auto border border-primary text-primary"
          >
            Xem thêm
          </button>
        </div>
      )}
    </div>
  )
}

export default Brands
