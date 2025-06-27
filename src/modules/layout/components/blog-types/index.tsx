"use client"

import React from "react"

import { useOS } from "@lib/hooks/OSContext"
import { BlogType } from "types/global"
import BlogTypesItem from "./blog-types-item"

interface BlogsProps {
  blogTypes: BlogType[]
}

const BlogTypes: React.FC<BlogsProps> = ({ blogTypes }) => {
  const { os } = useOS()

  if (!blogTypes || blogTypes.length === 0) return null

  const displayedBlogTypes = blogTypes.slice(0, 4)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Business news
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Start every day quickly with a summary of news from our AI agent
        </p>
        <div className="grid md:grid-cols-5 gap-4 mb-8">
          {displayedBlogTypes.map((blogType, idx) => (
            <BlogTypesItem
              key={blogType.id}
              thumbnail={blogType.thumbnail?.url || ""}
              title={blogType.name}
              link={`/blog-types/${blogType.value}`}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogTypes
