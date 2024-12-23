"use client"

import RightArrow from "@modules/common/icons/right-arrow"
import React from "react"
import { useState } from "react"
import clsx from "clsx"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Menu = ({
  categories,
}: {
  categories?: HttpTypes.StoreProductCategory[]
}) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div
      className="absolute inset-0 w-full h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div className="absolute top-full left-0  bg-white z-[999] w-72 shadow-md border-t border-grey-15 transition-all transform duration-500 ease-in-out">
          <div className="flex bg-white pt-4 pb-6 px-2">
            {/* Sidebar Menu */}
            <div className="w-full">
              <ul className="space-y-2">
                {categories &&
                  categories?.length > 0 &&
                  categories.map((category, index) => (
                    <LocalizedClientLink
                      key={index}
                      className={clsx(
                        "flex justify-between items-center text-black-30 hover:bg-grey-15 py-3 px-4 rounded-md cursor-pointer group"
                      )}
                      href={`/danh-muc-san-pham/${category.handle}`}
                    >
                      <span className="text-base text-nowrap">
                        {category.name}
                      </span>
                      <span className="text-grey-30 group-hover:text-primary">
                        <RightArrow />
                      </span>
                    </LocalizedClientLink>
                  ))}
              </ul>
            </div>

            {/* Content Section */}
          </div>
        </div>
      )}
    </div>
  )
}

export default Menu
