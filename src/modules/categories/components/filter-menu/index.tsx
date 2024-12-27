"use client"

import { useState } from "react"
import { HttpTypes } from "@medusajs/types"

import CategoryFilter from "@modules/categories/components/category-filter"
import PriceRange from "@modules/categories/components/price-range"
import SizeFilter from "@modules/categories/components/size-filter"
import TagFilter from "@modules/categories/components/tag-filter"
import Icons from "@modules/common/icons"

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
      <button
        onClick={toggleMenu}
        className="lg:hidden bg-primary text-white p-2 rounded-full fixed bottom-5 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <Filter />
      </button>

      {/* Filter Menu */}
      <div
        className={`backdrop-blur-md p-4 lg:p-0 fixed lg:static top-0 left-0 z-[100] h-svh lg:h-full bg-white w-[100%] lg:w-[280px] transform transition-transform overflow-y-auto ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:block`}
      >
        <div className="lg:hidden flex justify-end">
          <span
            className="text-primary cursor-pointer py-2 pl-2"
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
        <SizeFilter />
        <TagFilter />
      </div>

      {/* Overlay for Smaller Screens */}
      {/* {isMenuOpen && (
        <div
          onClick={toggleMenu}
          className="fixed w-full h-full inset-0 bg-black-30/70 z-40 lg:hidden"
        ></div>
      )} */}
    </>
  )
}
