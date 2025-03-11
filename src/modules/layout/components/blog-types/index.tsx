"use client"

import React from "react"
import Image from "next/image"
import clsx from "clsx"
import { BlogType } from "types/global"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Heading } from "@medusajs/ui"
import RiceSpike from "@modules/common/components/rice-spike"

interface BlogsProps {
  blogTypes: BlogType[]
}

const BlogTypes: React.FC<BlogsProps> = ({ blogTypes }) => {
  if (!blogTypes || blogTypes.length === 0) return null

  return (
    <div className="relative content-container py-6 sm:py-8 my-5 sm:my-9 rounded-lg shadow-lg bg-white">
      <RiceSpike />

      {/* Tiêu đề */}
      <Heading
        level="h1"
        className="mb-4 sm:mb-6 font-semibold capitalize font-times text-primary text-lg sm:text-2xl text-left"
      >
        Chủ Đề Nổi Bật
      </Heading>

      {/* Danh sách blog */}
      <div className="mt-4 sm:mt-6 grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {blogTypes.map((blogType) => (
          <LocalizedClientLink
            key={blogType.id}
            href={`/loai-bai-viet/${blogType.value}`}
            className="group bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col sm:flex-row items-center justify-center gap-x-2"
          >
            {/* Ảnh blogType */}
            <div className="relative w-2/3 h-[80px] sm:h-[92px]  overflow-hidden">
              <Image
                src={blogType.thumbnail.url}
                alt={blogType.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Nội dung blogType */}
            <div className="p-2 w-full">
              <h2 className="text-sm sm:text-base capitalize font-semibold text-gray-600  group-hover:text-primary transition-colors text-center line-clamp-2 h-10 sm:h-14 flex items-center">
                {blogType.name}
              </h2>
            </div>
          </LocalizedClientLink>
        ))}
      </div>
    </div>
  )
}

export default BlogTypes
