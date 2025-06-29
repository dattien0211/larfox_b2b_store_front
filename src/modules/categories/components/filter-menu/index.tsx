"use client"

import { useState } from "react"
import { HttpTypes } from "@medusajs/types"
import CategoryFilter from "@modules/categories/components/category-filter"
import Icons from "@modules/common/icons"
import { ProductTag } from "types/global"

export default function FilterMenu({
  allCategories,
  paramsCategory,
  productTags,
}: {
  paramsCategory: string[]
  allCategories: HttpTypes.StoreProductCategory[]
  productTags?: ProductTag[]
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { Filter, XMark } = Icons
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      {/* Toggle Button Only Show On Tablet Below  */}
      {allCategories && allCategories.length > 0 && (
        <CategoryFilter
          allCategories={allCategories}
          paramsCategory={paramsCategory}
        />
      )}
      {/*<PriceRange />*/}
      {/*{productTags && productTags.length > 0 && (*/}
      {/*  <TagFilter productTags={productTags} />*/}
      {/*)}*/}
      {/*<button*/}
      {/*  onClick={toggleMenu}*/}
      {/*  className=" bg-primary text-white py-1 rounded-full px-3"*/}
      {/*>*/}
      {/*  <Filter />*/}
      {/*</button>*/}
      {/*<Breadcrumb*/}
      {/*  allCategories={allCategories}*/}
      {/*  path={["danh-muc-san-pham", ...paramsCategory]}*/}
      {/*/>*/}

      {/*<section*/}
      {/*  className={`p-4 lg:p-0 lg:pb-4 fixed lg:static top-0 left-0 z-[100] min-h-svh h-full w-[85%] lg:w-64 transform transition-transform duration-300  bg-white lg:bg-transparent ${*/}
      {/*    isMenuOpen ? "translate-x-0 overflow-y-auto" : "-translate-x-full "*/}
      {/*  } lg:translate-x-0 lg:block`}*/}
      {/*>*/}
      {/*<div className="lg:hidden flex justify-between mb-4">*/}
      {/*  <div className="w-[40px] md:w-[100px] lg:w-[120px] h-auto">*/}
      {/*    <LocalizedClientLink href="/">*/}
      {/*      <Image*/}
      {/*        src={IMGS.Logo}*/}
      {/*        alt="Logo"*/}
      {/*        width={120}*/}
      {/*        height={56}*/}
      {/*        className="w-auto h-auto"*/}
      {/*        priority={true}*/}
      {/*      />*/}
      {/*    </LocalizedClientLink>*/}
      {/*  </div>*/}
      {/*  <span*/}
      {/*    className="text-primary cursor-pointer py-2 pl-2 hover:text-grey-30"*/}
      {/*    onClick={toggleMenu}*/}
      {/*  >*/}
      {/*    <XMark size={24} />*/}
      {/*  </span>*/}
      {/*</div>*/}
      {/*</section>*/}

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
