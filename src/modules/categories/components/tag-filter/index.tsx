"use client"

import { HttpTypes } from "@medusajs/types"
import { values } from "lodash"
import { usePathname, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import clsx from "clsx"

const TagFilter = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const tagArr = [
    { id: 1, name: "Nhà cửa", handle: "150" },
    { id: 2, name: "Trị liệu tại nhà", handle: "200" },
    { id: 3, name: "Thải độc", handle: "350" },
    { id: 4, name: "Thảo dược", handle: "450" },
    { id: 5, name: "Chăm sóc sức khoẻ", handle: "550" },
    { id: 6, name: "Túi làm ấm", handle: "650" },
    { id: 7, name: "Tẩy da", handle: "750" },
    { id: 7, name: "Miếng dán", handle: "850" },
  ]

  // useEffect(() => {
  //   if (paramsCategory) {
  //     setSelectedTags(paramsCategory)
  //   }
  // }, [paramsCategory])

  const toggleCategory = (handle: string) => {
    setSelectedTags((prev) => {
      const isSelected = prev.includes(handle)
      const updatedTags = isSelected
        ? prev.filter((categoryHandle) => categoryHandle !== handle) // Remove the category if already selected
        : [...prev, handle] // Add the category if not selected

      // // Construct the new URL
      // const basePath = pathname.split("/").slice(0, 3).join("/") // Extract the base path, e.g., "/vn/loai-san-pham/anco-care"
      // const newPath = `${basePath}/${updatedTags.join("/")}` // Add selected categories to the path

      // // Push the new route
      // router.push(newPath)

      return updatedTags
    })
  }

  return (
    <>
      <h2 className="text-xl font-semibold border-b border-gray-200 py-4 mt-8">
        Tags
      </h2>
      <div className="flex flex-wrap mt-8 gap-2">
        {tagArr.map((tag) => (
          <div
            className={clsx(
              "px-2 py-1 bg-grey-20 cursor-pointer hover:bg-primary hover:text-white transition",
              {
                "bg-primary border-primary": selectedTags.includes(tag.handle),
              }
            )}
            key={tag.id}
          >
            <span
              className={clsx("text-nowrap text-sm", {
                "text-white": selectedTags.includes(tag.handle),
              })}
            >
              {tag.name}
            </span>
          </div>
        ))}
      </div>
    </>
  )
}

export default TagFilter
