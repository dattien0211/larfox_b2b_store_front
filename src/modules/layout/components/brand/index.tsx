"use client"

import React from "react"
import Image from "next/image"

import { Brand } from "types/global"
import { Heading } from "@medusajs/ui"
import RiceSpike from "@modules/common/components/rice-spike"

interface BlogsProps {
  brands: Brand[]
}

const Brands: React.FC<BlogsProps> = ({ brands }) => {
  if (!brands) return null

  return (
    <div className="relative content-container py-4 sm:py-6 my-6 sm:my-10 rounded-lg shadow-lg bg-white">
      <RiceSpike />

      <Heading
        level="h1"
        className="mb-2 sm:mb-4 font-semibold capitalize font-times text-primary text-xl sm:text-2xl text-left"
      >
        Thương hiệu
      </Heading>

      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="group flex justify-center items-center border border-primary/35 hover:border-primary/45 p-2 sm:p-4 rounded-lg hover:shadow-xl transition-all duration-500 cursor-pointer"
          >
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
          </div>
        ))}
      </div>
    </div>
  )
}

export default Brands
