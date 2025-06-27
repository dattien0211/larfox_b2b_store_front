"use client"

import RightArrow from "@modules/common/icons/right-arrow"
import React, { useState } from "react"
import clsx from "clsx"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Menu = ({
  menuItems,
  to,
  isGrid = false,
  isCategory = true,
}: {
  menuItems?: any[]
  to: string
  isGrid?: boolean
  isCategory?: boolean
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="absolute inset-0 w-full h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div
          className={clsx(
            "absolute top-full left-0 bg-white z-[999] w-72 shadow-lg border-t border-grey-15 transition-all transform duration-500 ease-in-out pt-4 pb-6 px-2",
            { "!w-[600px] !px-4": isGrid }
          )}
        >
          {/* Sidebar Menu */}
          <ul
            className={clsx({
              "space-y-2": !isGrid,
              "grid grid-cols-2 gap-x-14 gap-y-4": isGrid,
            })}
          >
            {isCategory && (
              <li>
                <LocalizedClientLink
                  className={clsx(
                    "flex justify-between items-center text-black-30 hover:bg-grey-15 py-3 px-4 rounded-md cursor-pointer group"
                  )}
                  href={`/products`}
                >
                  <span className="text-base text-nowrap">
                    Tất cả sản phảm{" "}
                  </span>
                  <span className="text-grey-30 group-hover:text-primary">
                    <RightArrow />
                  </span>
                </LocalizedClientLink>
              </li>
            )}

            {menuItems &&
              menuItems?.length > 0 &&
              menuItems.map((menuItem, index) => (
                <li key={index}>
                  <LocalizedClientLink
                    className={clsx(
                      "flex justify-between items-center text-black-30 hover:bg-grey-15 p-3 rounded-md cursor-pointer group "
                    )}
                    href={`${to}/${menuItem.handle || menuItem.value}`}
                  >
                    <span className="text-base whitespace-nowrap overflow-hidden text-ellipsis block max-w-[175px] capitalize">
                      {menuItem.name.toLowerCase()}
                    </span>

                    <span className="text-grey-30 group-hover:text-primary">
                      <RightArrow />
                    </span>
                  </LocalizedClientLink>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Menu
