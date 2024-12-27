"use client"

import React from "react"
import Image from "next/image"

import { StaticImageData } from "next/image"

interface BlogCardProps {
  imageSrc: StaticImageData
  title: string
  description: string
}

const BlogCard: React.FC<BlogCardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <div>
      <Image
        src={imageSrc}
        alt={title}
        width={380}
        height={280}
        className="w-full"
      />
      <div className="bg-grey-15 pt-4 px-4 pb-6 sm:px-8 sm:pb-12 flex flex-col gap-y-2 sm:gap-y-4">
        <h3 className="text-primary font-semibold text-sm">Blogs</h3>
        <h1 className="text-lg sm:text-2xl font-bold font-times">{title}</h1>
        <p className="text-sm sm:text-base line-clamp-4 text-justify">
          {description}
        </p>
        <button className="hover:bg-primary hover:text-white text-nowrap border border-primary text-primary px-2 sm:text-base text-sm sm:px-4 py-1 rounded-full w-[40%]">
          Xem Thêm
        </button>
      </div>
    </div>
  )
}

export default BlogCard
