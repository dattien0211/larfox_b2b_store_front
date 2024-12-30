"use client"

import { HttpTypes } from "@medusajs/types"
import { values } from "lodash"
import { usePathname, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import clsx from "clsx"

const SizeFilter = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])

  const sizeArr = [
    { id: 1, name: "150ml", handle: "150" },
    { id: 2, name: "200ml", handle: "200" },
    { id: 3, name: "300ml", handle: "350" },
  ]

  // useEffect(() => {
  //   if (paramsCategory) {
  //     setSelectedSizes(paramsCategory)
  //   }
  // }, [paramsCategory])

  const toggleCategory = (handle: string) => {
    setSelectedSizes((prev) => {
      const isSelected = prev.includes(handle)
      const updatedCategories = isSelected
        ? prev.filter((categoryHandle) => categoryHandle !== handle) // Remove the category if already selected
        : [...prev, handle] // Add the category if not selected

      // // Construct the new URL
      // const basePath = pathname.split("/").slice(0, 3).join("/") // Extract the base path, e.g., "/vn/danh-muc-san-pham/anco-care"
      // const newPath = `${basePath}/${updatedCategories.join("/")}` // Add selected categories to the path

      // // Push the new route
      // router.push(newPath)

      return updatedCategories
    })
  }

  return (
    <>
      <h2 className="text-lg sm:text-xl font-semibold border-b border-gray-200 py-4 mt-4 sm:mt-8">
        Size
      </h2>
      <div className="space-y-4 sm:space-y-8 mt-4 sm:mt-8">
        {sizeArr.map((size) => (
          <label
            key={size.id}
            className="flex items-center  cursor-pointer hover:opacity-80"
            onClick={() => toggleCategory(size.handle)}
          >
            <div
              className={clsx(
                "relative flex items-center justify-center w-5 h-5 rounded border-2 cursor-pointer",
                {
                  "bg-primary border-primary": selectedSizes.includes(
                    size.handle
                  ),
                  "border-grey-5": !selectedSizes.includes(size.handle),
                }
              )}
            >
              {selectedSizes.includes(size.handle) && (
                <svg
                  className="absolute w-4 h-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              )}
            </div>
            <span
              className={clsx("ml-2 sm:ml-4 font-medium text-sm sm:text-base", {
                "text-primary": selectedSizes.includes(size.handle),
              })}
            >
              {size.name}
            </span>
          </label>
        ))}
      </div>
    </>
  )
}

export default SizeFilter
