"use client"

import { useState, useRef, useEffect } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import SelectSubsidiary from "@modules/layout/components/select-subsidiary"
import Icons from "@modules/common/icons"
import Menu from "./menu"
import { HttpTypes } from "@medusajs/types"

export default function BottomNav({
  categories,
}: {
  categories?: HttpTypes.StoreProductCategory[]
}) {
  const { DropDown, RightArrow } = Icons
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const btnToggleRef = useRef<HTMLButtonElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      btnToggleRef.current &&
      !btnToggleRef.current.contains(event.target as Node)
    ) {
      setMenuOpen(false)
    }
  }

  useEffect(() => {
    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside)

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="relative">
      {/* Desktop Navigation */}
      <div className="hidden sm:flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <div className="py-2 pr-2 lg:py-4 lg:pr-4 cursor-pointer hover:text-primary">
            <LocalizedClientLink
              href="/"
              className="text-sm text-nowrap lg:text-base"
            >
              Trang chủ
            </LocalizedClientLink>
          </div>

          <div className="relative flex items-center gap-x-2 lg:gap-x-4 p-2 lg:p-4 cursor-pointer hover:text-primary group">
            <h1 className="text-sm text-nowrap lg:text-base">Sản phẩm</h1>
            <span className="text-grey-30 group-hover:text-primary">
              <DropDown />
            </span>
            <Menu categories={categories} />
          </div>

          <div className="flex items-center gap-x-2 lg:gap-x-4 p-2 lg:p-4 cursor-pointer hover:text-primary group">
            <h1 className="text-sm text-nowrap lg:text-base">Giới thiệu</h1>
            <span className="text-grey-30 group-hover:text-primary">
              <DropDown />
            </span>
          </div>
          <div className="flex items-center gap-x-2 lg:gap-x-4 p-2 lg:p-4 cursor-pointer hover:text-primary group">
            <h1 className="text-sm text-nowrap lg:text-base">Blog</h1>
            <span className="text-grey-30 group-hover:text-primary">
              <DropDown />
            </span>
          </div>
          <h1 className="p-2 lg:p-4 cursor-pointer hover:text-primary">
            <LocalizedClientLink
              href="/"
              className="text-sm text-nowrap lg:text-base"
            >
              Liên hệ
            </LocalizedClientLink>
          </h1>
        </div>

        <SelectSubsidiary />
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex items-center justify-between">
        <button
          ref={btnToggleRef}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="py-2 pr-2 text-grey-30 hover:text-primary"
        >
          {/* Hamburger Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 7.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>

        <SelectSubsidiary />
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className={`absolute z-40 top-full left-0 -mx-4 py-4 pl-4 pr-6 border-t border-grey-20  w-[calc(100%+2rem)]  bg-white shadow-md flex flex-col gap-y-3  transition-all duration-300 ease-in-out ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <LocalizedClientLink
            href="/"
            className="py-2 hover:text-primary flex items-center justify-between"
            onClick={() => setMenuOpen(false)}
          >
            Trang chủ
            <RightArrow />
          </LocalizedClientLink>
          <LocalizedClientLink
            href="/tat-ca-san-pham"
            className="py-2 hover:text-primary flex items-center justify-between"
            onClick={() => setMenuOpen(false)}
          >
            <h1>Sản phẩm</h1>
            <RightArrow />
          </LocalizedClientLink>
          <LocalizedClientLink
            href="/ve-chung-toi"
            className="py-2 hover:text-primary flex items-center justify-between"
            onClick={() => setMenuOpen(false)}
          >
            <h1>Giới thiệu</h1>
            <RightArrow />
          </LocalizedClientLink>
          <LocalizedClientLink
            href="/"
            className="py-2 hover:text-primary flex items-center justify-between"
            onClick={() => setMenuOpen(false)}
          >
            <h1>Blog</h1>
            <RightArrow />
          </LocalizedClientLink>
          <LocalizedClientLink
            href="/"
            className="py-2 hover:text-primary flex items-center justify-between"
            onClick={() => setMenuOpen(false)}
          >
            Liên hệ
            <RightArrow />
          </LocalizedClientLink>
          <LocalizedClientLink
            href="/tai-khoan"
            className="py-2 hover:text-primary flex items-center justify-between"
            onClick={() => setMenuOpen(false)}
          >
            Tài khoản
            <RightArrow />
          </LocalizedClientLink>
        </div>
      )}
    </div>
  )
}
