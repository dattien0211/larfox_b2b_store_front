"use client"

import { HttpTypes } from "@medusajs/types"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import clsx from "clsx"

const CategoryFilter = ({
  allCategories,
  paramsCategory,
}: {
  allCategories: HttpTypes.StoreProductCategory[]
  paramsCategory: string[]
}) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  useEffect(() => {
    if (paramsCategory) {
      setSelectedCategories(paramsCategory)
    }
  }, [paramsCategory])

  const toggleCategory = (handle: string) => {
    setSelectedCategories((prev) => {
      const isSelected = prev.includes(handle)
      const updatedCategories = isSelected
        ? prev.filter((categoryHandle) => categoryHandle !== handle) // Remove category
        : [...prev, handle] // Add category

      const basePath = pathname.split("/").slice(0, 2).join("/") // Extract base path
      const newPath = `${basePath}/danh-muc-san-pham/${updatedCategories.join(
        "/"
      )}` // Updated category path

      const params = new URLSearchParams(searchParams.toString()) // Clone current search params
      const finalPath =
        updatedCategories.length > 0
          ? `${newPath}?${params}`
          : `${basePath}/tat-ca-san-pham?${params}`

      router.push(finalPath, { scroll: false }) // Navigate while keeping query parameters

      return updatedCategories
    })
  }

  return (
    <>
      <h2 className="text-lg sm:text-xl font-semibold border-b border-gray-200 pb-4 sm:py-4">
        Loại sản phẩm
      </h2>
      <div className="space-y-6 mt-6 sm:space-y-8 sm:mt-8">
        {allCategories.map((category) => (
          <label
            key={category.id}
            className="flex items-center cursor-pointer hover:opacity-80"
            onClick={() => toggleCategory(category.handle)}
          >
            <div
              className={clsx(
                "relative flex items-center justify-center w-5 h-5 rounded border-2 cursor-pointer",
                {
                  "bg-primary border-primary": selectedCategories.includes(
                    category.handle
                  ),
                  "border-grey-5": !selectedCategories.includes(
                    category.handle
                  ),
                }
              )}
            >
              {selectedCategories.includes(category.handle) && (
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
                "text-primary": selectedCategories.includes(category.handle),
              })}
            >
              {category.name}
            </span>
          </label>
        ))}
      </div>
    </>
  )
}

export default CategoryFilter
