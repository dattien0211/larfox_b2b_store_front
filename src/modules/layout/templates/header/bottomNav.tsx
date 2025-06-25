"use client"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { HttpTypes } from "@medusajs/types"

interface BottomNavProps {
  categories?: HttpTypes.StoreProductCategory[]
}

export default function BottomNav({ categories }: BottomNavProps) {
  return (
    <div className="relative">
      <div className="hidden sm:flex items-center justify-between">
        <nav className="border-t border-gray-100 py-3">
          <div className="flex items-center space-x-12 text-sm font-medium overflow-x-auto">
            {categories ? (
              categories.length > 0 ? (
                categories?.map((category, index) => (
                  <LocalizedClientLink
                    href={`/danh-muc-san-pham/${category.handle}`}
                    key={index}
                  >
                    <span className="text-gray-700 hover:text-primary cursor-pointer whitespace-nowrap">
                      {category.name}
                    </span>
                  </LocalizedClientLink>
                ))
              ) : (
                <></>
              )
            ) : (
              <></>
            )}
          </div>
        </nav>
      </div>
    </div>
  )
}
