"use client"

import clsx from "clsx"
import { HttpTypes } from "@medusajs/types"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

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
      const newPath = `${basePath}/category/${updatedCategories.join("/")}` // Updated category path

      const params = new URLSearchParams(searchParams.toString()) // Clone current search params
      const finalPath =
        updatedCategories.length > 0
          ? `${newPath}?${params}`
          : `${basePath}/products?${params}`

      router.push(finalPath, { scroll: true }) // Navigate while keeping query parameters

      return updatedCategories
    })
  }

  return (
    <div className="w-80 bg-white p-6 rounded-xl shadow-sm h-fit">
      <h3 className="font-semibold mb-4">Danh mục sản phẩm</h3>
      <div className="space-y-2 mt-6">
        {allCategories.map((category) => (
          <label
            key={category.id}
            className="flex items-center"
            onClick={() => {
              toggleCategory(category.handle)
            }}
          >
            <div
              className={clsx(
                "relative flex items-center justify-center min-w-5 min-h-5 rounded border-2 cursor-pointer",
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
              {/*{selectedCategories.includes(category.handle) && (*/}
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
              {/*)}*/}
            </div>
            <span
              className={clsx(
                "ml-2  line-clamp-1 font-medium text-sm sm:text-[15px]",
                {
                  "text-primary": selectedCategories.includes(category.handle),
                }
              )}
            >
              {category.name}
            </span>
          </label>
        ))}
      </div>
    </div>
  )
}

export default CategoryFilter
