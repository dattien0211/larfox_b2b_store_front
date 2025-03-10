"use client"

import { useState, useRef, useEffect } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Icons from "@modules/common/icons"
import Menu from "./menu"
import { HttpTypes } from "@medusajs/types"
import MobileMenu from "./mobile-menu"
import { BlogType } from "types/global"
import storeConfig from "@constants/storeConfig"

interface BottomNavProps {
  categories?: HttpTypes.StoreProductCategory[]
  blogTypes: BlogType[]
}

export default function BottomNav({ categories, blogTypes }: BottomNavProps) {
  const { DropDown } = Icons
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  const menuItems: Record<
    string,
    {
      title: string
      href?: string
      submenus?: { title: string; href?: string }[]
    }[]
  > = {
    main: [
      { title: "Trang chủ", href: "/" },
      {
        title: "Sản phẩm",
        submenus: [
          { title: "Tất cả sản phẩm", href: "/tat-ca-san-pham" },
          ...(categories?.map((category) => ({
            title: category.name,
            href: `/danh-muc-san-pham/${category.handle}`,
          })) || []),
        ],
      },
      {
        title: "Blog",
        submenus: [
          ...(blogTypes?.map((blogType) => ({
            title: blogType.name,
            href: `/loai-bai-viet/${blogType.value}`,
          })) || []),
        ],
      },
      { title: "Giới thiệu", href: "/gioi-thieu" },
      // {
      //   title: "Liên hệ",
      // },
      { title: "Tài khoản", href: "/tai-khoan" },
    ],
  }

  const toggleSubmenu = (menuTitle: string) => {
    setActiveSubmenu((prev) => (prev === menuTitle ? null : menuTitle))
  }

  return (
    <div className="relative">
      {/* Desktop Navigation */}
      <div className="hidden sm:flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <div className="py-2 pr-2 lg:py-4 lg:pr-4 cursor-pointer hover:text-primary">
            <LocalizedClientLink
              href="/"
              className=" text-sm text-nowrap lg:text-base capitalize"
            >
              Trang chủ
            </LocalizedClientLink>
          </div>

          <LocalizedClientLink
            href="/tat-ca-san-pham"
            className="relative flex items-center gap-x-2 lg:gap-x-4 p-2 lg:p-4 cursor-pointer hover:text-primary group"
          >
            <h1 className=" text-sm text-nowrap lg:text-base capitalize">
              Sản phẩm
            </h1>
            <span className="text-grey-30 group-hover:text-primary">
              <DropDown />
            </span>
            <Menu
              menuItems={categories}
              to={"/danh-muc-san-pham"}
              isGrid={true}
            />
          </LocalizedClientLink>

          <LocalizedClientLink
            href="/tat-ca-bai-viet"
            className="relative flex items-center gap-x-2 lg:gap-x-4 p-2 lg:p-4 cursor-pointer hover:text-primary group"
          >
            <h1 className=" text-sm text-nowrap lg:text-base">Blog</h1>
            <span className="text-grey-30 group-hover:text-primary">
              <DropDown />
            </span>
            <Menu
              menuItems={blogTypes}
              to={"/loai-bai-viet"}
              isCategory={false}
            />
          </LocalizedClientLink>

          <LocalizedClientLink
            href="/gioi-thieu"
            className="flex items-center gap-x-2 lg:gap-x-4 p-2 lg:p-4 cursor-pointer hover:text-primary group"
          >
            <h1 className=" text-sm text-nowrap lg:text-base capitalize">
              Giới thiệu
            </h1>
            {/* <span className="text-grey-30 group-hover:text-primary">
              <DropDown />
            </span> */}
          </LocalizedClientLink>
          {/* <LocalizedClientLink
            href="/lien-he"
            className=" text-sm text-nowrap lg:text-base p-2 lg:p-4 cursor-pointer hover:text-primary"
          >
            Liên hệ
          </LocalizedClientLink> */}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex items-center justify-between">
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="py-2 pr-2 text-grey-30 hover:text-primary"
        >
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
        <div className="text-sm text-grey-45">
          Hotline: {storeConfig.STORE_PHONE}
        </div>
      </div>

      {/* Mobile Menu Component */}
      <MobileMenu
        menuItems={menuItems}
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        activeSubmenu={activeSubmenu}
        toggleSubmenu={toggleSubmenu}
      />
    </div>
  )
}
