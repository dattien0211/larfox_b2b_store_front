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
        <div className="absolute top-full -left-[103px]  bg-white z-[999] w-[1152px] shadow-md border-t border-grey-15 transition-all transform duration-500 ease-in-out">
          <div className="flex bg-white pt-8 pb-10 px-6">
            {/* Sidebar Menu */}
            <div className="w-1/4">
              <ul className="space-y-4">
                {categories &&
                  categories?.length > 0 &&
                  categories.map((category, index) => (
                    <LocalizedClientLink
                      key={index}
                      className={clsx(
                        "flex justify-between items-center text-black-30 hover:bg-grey-15 py-3 px-4 rounded-md cursor-pointer group",
                        index === 0 && "bg-grey-15"
                      )}
                      href={`/danh-muc-san-pham/${category.handle}`}
                    >
                      <span className="text-lg">{category.name}</span>
                      <span className="text-grey-30 group-hover:text-primary">
                        <RightArrow />
                      </span>
                    </LocalizedClientLink>
                  ))}
              </ul>
            </div>

            {/* Content Section */}
            <div className="w-3/4 pl-8">
              <div className="space-y-10">
                {/* Section 1 */}
                <div>
                  <h2 className="text-black-30 font-semibold mb-2">
                    Sản phẩm độc quyền
                  </h2>
                  <div className="grid grid-cols-4 gap-x-4 gap-y-2 text-black-30">
                    {[
                      "Tinh dầu căng tràn",
                      "Tinh dầu trong lành",
                      "Tinh dầu điều hoà",
                      "Sáp thơm thảo dược",
                      "Gối thảo dược",
                      "Bịt mắt thảo dược",
                      "Sáp thơm thảo dược",
                      "Gối thảo dược",
                      "Gối thảo dược",
                      "Bịt mắt thảo dược",
                      "Sáp thơm thảo dược",
                      "Gối thảo dược",
                    ].map((product, index) => (
                      <div
                        key={index}
                        className="truncate hover:text-primary py-1 cursor-pointer "
                      >
                        {product}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 2 */}
                <div>
                  <h2 className="text-black-30 font-semibold mb-2">
                    Sản phẩm Thương mại
                  </h2>
                  <div className="grid grid-cols-4 gap-y-2 gap-x-4 text-black-30">
                    {[
                      "Tinh dầu căng tràn",
                      "Tinh dầu trong lành",
                      "Tinh dầu điều hoà",
                      "Sáp thơm thảo dược",
                      "Gối thảo dược",
                      "Bịt mắt thảo dược",
                      "Sáp thơm thảo dược",
                      "Gối thảo dược",
                      "Gối thảo dược",
                      "Bịt mắt thảo dược",
                      "Sáp thơm thảo dược",
                      "Gối thảo dược",
                    ].map((product, index) => (
                      <div
                        key={index}
                        className="truncate cursor-pointer hover:text-primary py-1 "
                      >
                        {product}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Menu
