"use client"

import { useState } from "react"
import { HttpTypes } from "@medusajs/types"
import Image from "next/image"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import IMGS from "@constants/IMGS"
import CategoryFilter from "@modules/categories/components/category-filter"
import PriceRange from "@modules/categories/components/price-range"
import SizeFilter from "@modules/categories/components/size-filter"
import TagFilter from "@modules/categories/components/tag-filter"
import Icons from "@modules/common/icons"
import Breadcrumb from "../bread-crumb"

export default function FilterMenu({
  allCategories,
  paramsCategory,
}: {
  paramsCategory: string[]
  allCategories: HttpTypes.StoreProductCategory[]
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { Filter, XMark } = Icons
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      {/* Toggle Button */}
      <div className="lg:hidden flex items-center gap-x-3">
        <button
          onClick={toggleMenu}
          className=" bg-primary text-white py-1 rounded-full px-3"
        >
          <Filter />
        </button>
        <Breadcrumb
          allCategories={allCategories}
          path={["danh-muc-san-pham", ...paramsCategory]}
        />
      </div>

      <div
        className={`p-4 lg:p-0 fixed lg:static top-0 left-0 z-[100] h-svh lg:h-full bg-white w-[85%] lg:w-[280px] transform transition-transform duration-300 overflow-y-auto ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:block`}
      >
        <div className="lg:hidden flex justify-between mb-4">
          <div className="w-[80px] md:w-[100px] lg:w-[120px] h-auto">
            <LocalizedClientLink href="/">
              <Image
                src={IMGS.Logo}
                alt="Logo"
                width={120}
                height={56}
                className="w-auto h-auto"
              />
            </LocalizedClientLink>
          </div>
          <span
            className="text-primary cursor-pointer py-2 pl-2 hover:text-grey-30"
            onClick={toggleMenu}
          >
            <XMark size={24} />
          </span>
        </div>
        {allCategories && allCategories.length > 0 && (
          <CategoryFilter
            allCategories={allCategories}
            paramsCategory={paramsCategory}
          />
        )}
        <PriceRange />
        {/* <SizeFilter />
        <TagFilter /> */}
      </div>

      {/* Overlay for Smaller Screens */}
      {isMenuOpen && (
        <div
          onClick={toggleMenu}
          className="fixed w-full h-full inset-0 bg-black-30/70 z-40 lg:hidden"
        ></div>
      )}
    </>
  )
}
