"use client"

import React, { useState } from "react"
import Icons from "@modules/common/icons"
import CategoryFilterSkeleton from "../category-filter/category-filter-skeleton"

export default function FilterMenuSkeleton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { Filter, XMark } = Icons

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      {/* Toggle Button Only Show On Tablet Below */}
      <section className="lg:hidden flex items-center gap-x-3">
        <button className="bg-gray-300 text-white py-1 rounded-full px-3 animate-pulse">
          <Filter />
        </button>
        <div className="h-5 w-32 bg-gray-300 rounded-md animate-pulse"></div>
      </section>

      <section
        className={`p-4 lg:p-0 lg:pb-4 fixed lg:static top-0 left-0 z-[100] min-h-svh h-full w-[85%] lg:w-64 transform transition-transform duration-300 bg-white lg:bg-transparent ${
          isMenuOpen ? "translate-x-0 overflow-y-auto" : "-translate-x-full"
        } lg:translate-x-0 lg:block`}
      >
        {/* Header Skeleton */}
        <div className="lg:hidden flex justify-between mb-4">
          <div className="w-[40px] md:w-[100px] lg:w-[120px] h-10 bg-gray-300 rounded-md animate-pulse"></div>
          <span
            className="text-gray-400 cursor-pointer py-2 pl-2 hover:text-grey-30"
            onClick={toggleMenu}
          >
            <XMark size={24} />
          </span>
        </div>

        {/* Category Filter Skeleton */}
        <CategoryFilterSkeleton />

        {/* Price Range Skeleton */}
        {/*<PriceRangeSkeleton />*/}

        {/* Tag Filter Skeleton */}
        {/*<TagFilterSkeleton />*/}
      </section>

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
