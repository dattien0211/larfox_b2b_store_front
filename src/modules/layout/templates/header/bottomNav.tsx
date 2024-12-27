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
  const { DropDown } = Icons
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false) // Close menu when clicked outside
      }
    }

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
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 text-grey-30 hover:text-primary"
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
          className={`absolute z-50 top-full left-0 w-full bg-white shadow-md flex flex-col gap-y-2 p-4 transition-all duration-300 ease-in-out ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <LocalizedClientLink
            href="/"
            className="py-2 hover:text-primary"
            onClick={() => setMenuOpen(false)}
          >
            Trang chủ
          </LocalizedClientLink>
          <div className="py-2 hover:text-primary">
            <h1>Sản phẩm</h1>
          </div>
          <div className="py-2 hover:text-primary">
            <h1>Giới thiệu</h1>
          </div>
          <div className="py-2 hover:text-primary">
            <h1>Blog</h1>
          </div>
          <LocalizedClientLink
            href="/"
            className="py-2 hover:text-primary"
            onClick={() => setMenuOpen(false)}
          >
            Liên hệ
          </LocalizedClientLink>
        </div>
      )}
    </div>
  )
}
