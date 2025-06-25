"use client"

import { useRef, useEffect } from "react"
import clsx from "clsx"
import Image from "next/image"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Icons from "@modules/common/icons"
import IMGS from "@constants/IMGS"

interface MobileMenuProps {
  menuItems: Record<
    string,
    {
      title: string
      href?: string
      submenus?: { title: string; href?: string }[]
    }[]
  >
  isOpen: boolean
  onClose: () => void
  activeSubmenu: string | null
  toggleSubmenu: (menuTitle: string) => void
}

export default function MobileMenu({
  menuItems,
  isOpen,
  onClose,
  activeSubmenu,
  toggleSubmenu,
}: MobileMenuProps) {
  const { RightArrow, DownArrow, UpArrow, XMark } = Icons
  const menuRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      onClose()
      toggleSubmenu("")
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black-30 bg-opacity-50 z-30 backdrop-blur-sm"
          onClick={onClose}
        ></div>
      )}
      <div
        ref={menuRef}
        className={`fixed z-40 top-0 left-0 h-full w-[85%] max-w-xs bg-white shadow-lg transition-transform duration-300 ${
          isOpen ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
      >
        <div className="p-4 flex items-center justify-between border-b border-grey-20">
          <div className="w-[30px] h-auto relative">
            <LocalizedClientLink href="/">
              <Image
                src={IMGS.Logo}
                alt="Logo"
                priority={true}
                className="w-auto h-auto"
              />
            </LocalizedClientLink>
          </div>

          <button onClick={onClose} className="hover:text-grey-30 text-primary">
            <XMark size={24} />
          </button>
        </div>
        <div className="px-4 py-2 flex flex-col gap-y-2 overflow-auto">
          {menuItems["main"].map((item) => (
            <div key={item.title} className="relative">
              <LocalizedClientLink
                href={item.href || "/"}
                className={clsx(
                  "py-1 flex items-center justify-between w-full hover:text-primary",
                  { "text-primary": activeSubmenu === item.title }
                )}
                onClick={() =>
                  item.submenus ? toggleSubmenu(item.title) : onClose()
                }
              >
                {item.title}
                {item.submenus ? (
                  activeSubmenu === item.title ? (
                    <UpArrow />
                  ) : (
                    <DownArrow />
                  )
                ) : null}
              </LocalizedClientLink>
              <div
                className={clsx(
                  "max-h-0 overflow-hidden ml-4 transition-all duration-300 text-sm space-y-2",
                  {
                    "max-h-[700px]": activeSubmenu === item.title,
                  }
                )}
              >
                {/*{item.submenus?.map((submenuItem) => (*/}
                {/*  <LocalizedClientLink*/}
                {/*    key={submenuItem.title}*/}
                {/*    href={submenuItem.href || "#"}*/}
                {/*    className="py-2 hover:text-primary flex items-center justify-between"*/}
                {/*    onClick={onClose}*/}
                {/*  >*/}
                {/*    {submenuItem.title}*/}
                {/*    <RightArrow />*/}
                {/*  </LocalizedClientLink>*/}
                {/*))}*/}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
