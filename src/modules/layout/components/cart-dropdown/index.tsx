"use client"

import { Popover, Transition } from "@headlessui/react"
import { Button } from "@medusajs/ui"
import { usePathname } from "next/navigation"
import { Fragment, useEffect, useRef, useState } from "react"

import { convertToLocale } from "@lib/util/money"
import { HttpTypes } from "@medusajs/types"
import DeleteButton from "@modules/common/components/delete-button"
import LineItemOptions from "@modules/common/components/line-item-options"
import LineItemPrice from "@modules/common/components/line-item-price"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "@modules/products/components/thumbnail"
import icons from "@modules/common/icons"
import QuantityItem from "./quantityItem"

const CartDropdown = ({
  cart: cartState,
}: {
  cart?: HttpTypes.StoreCart | null
}) => {
  const { Bag } = icons
  const [activeTimer, setActiveTimer] = useState<NodeJS.Timer | undefined>(
    undefined
  )
  const [cartDropdownOpen, setCartDropdownOpen] = useState(false)

  const open = () => setCartDropdownOpen(true)
  const close = () => setCartDropdownOpen(false)

  const totalItems =
    cartState?.items?.reduce((acc, item) => {
      return acc + item.quantity
    }, 0) || 0

  const subtotal = cartState?.subtotal ?? 0
  const itemRef = useRef<number>(totalItems || 0)

  const timedOpen = () => {
    open()

    const timer = setTimeout(close, 5000)

    setActiveTimer(timer)
  }

  const openAndCancel = () => {
    if (activeTimer) {
      clearTimeout(activeTimer)
    }

    open()
  }

  // Clean up the timer when the component unmounts
  useEffect(() => {
    return () => {
      if (activeTimer) {
        clearTimeout(activeTimer)
      }
    }
  }, [activeTimer])

  const pathname = usePathname()

  // open cart dropdown when modifying the cart items, but only if we're not on the cart page
  useEffect(() => {
    if (itemRef.current !== totalItems && !pathname.includes("/cart")) {
      timedOpen()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalItems, itemRef.current])

  return (
    <div
      className="h-full z-20"
      onMouseEnter={openAndCancel}
      onMouseLeave={close}
    >
      <Popover className="relative h-full flex items-center">
        <Popover.Button className="h-full py-4 px-2">
          <LocalizedClientLink
            className="hover:text-ui-fg-base relative"
            href="/gio-hang"
            data-testid="nav-cart-link"
          >
            <Bag />
            <span className="w-[18px] h-[18px] flex items-center justify-center absolute -top-[6px] left-[2px] bg-primary text-white rounded-full text-xs">
              {totalItems}
            </span>
          </LocalizedClientLink>
        </Popover.Button>
        <Transition
          show={cartDropdownOpen}
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel
            static
            className="hidden small:block absolute top-[calc(100%+0px)] right-0 bg-white border border-grey-20 shadow-lg w-[440px] text-ui-fg-base"
            data-testid="nav-cart-dropdown"
          >
            {/* <h1 className="text-lg font-semibold p-4 text-center">Giỏ Hàng</h1> */}
            {cartState && cartState.items?.length ? (
              <>
                <div className="overflow-y-scroll max-h-[402px] p-4 grid grid-cols-1 gap-y-8 no-scrollbar">
                  {cartState.items
                    .sort((a, b) => {
                      return (a.created_at ?? "") > (b.created_at ?? "")
                        ? -1
                        : 1
                    })
                    .map((item) => (
                      <div
                        className="grid grid-cols-[100px_1fr] gap-x-2"
                        key={item.id}
                        data-testid="cart-item"
                      >
                        <LocalizedClientLink
                          href={`/san-pham/${item.variant?.product?.handle}`}
                          className="w-24"
                        >
                          <Thumbnail
                            thumbnail={item.variant?.product?.thumbnail}
                            images={item.variant?.product?.images}
                            size="square"
                          />
                        </LocalizedClientLink>
                        <div className="flex flex-col flex-1">
                          <h3 className="text-lg overflow-hidden text-ellipsis truncate whitespace-nowrap">
                            <LocalizedClientLink
                              href={`/san-pham/${item.variant?.product?.handle}`}
                              data-testid="product-link"
                            >
                              {item.title}
                            </LocalizedClientLink>
                          </h3>
                          {/* <LineItemOptions
                                  variant={item.variant}
                                  data-testid="cart-item-variant"
                                  data-value={item.variant}
                                /> */}
                          <div className="flex items-center justify-between mt-2">
                            <QuantityItem item={item} />
                            <div className="flex">
                              <LineItemPrice item={item} style="tight" />
                            </div>
                            <DeleteButton
                              id={item.id}
                              data-testid="cart-item-remove-button"
                            ></DeleteButton>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="p-4 flex flex-col gap-y-4 text-small-regular">
                  <div className="flex items-center justify-between">
                    <span className="text-ui-fg-base font-semibold">
                      Tổng giá:
                      {/* <span className="font-normal">(excl. taxes)</span> */}
                    </span>
                    <span
                      className="text-large-semi"
                      data-testid="cart-subtotal"
                      data-value={subtotal}
                    >
                      {convertToLocale({
                        amount: subtotal,
                        currency_code: cartState.currency_code,
                      })}
                    </span>
                  </div>
                  <LocalizedClientLink href="/gio-hang" passHref>
                    <button
                      className="hover:bg-orang-30 bg-primary outline-none text-[16px] w-full py-2 rounded-md text-white"
                      data-testid="go-to-cart-button"
                    >
                      Đi đến giỏ hàng
                    </button>
                  </LocalizedClientLink>
                </div>
              </>
            ) : (
              <div>
                <div className="flex py-6 flex-col gap-y-4 items-center justify-center">
                  <span>Bạn chưa có sản phẩm trong giỏ hàng.</span>
                  <div>
                    <LocalizedClientLink href="/tat-ca-san-pham">
                      <>
                        <span className="sr-only"> Xem tất cả sản phẩm</span>
                        <button
                          onClick={close}
                          className="hover:bg-orang-30 bg-primary outline-none text-[16px] px-4 py-2 rounded-md text-white"
                        >
                          Khám phá sản phẩm
                        </button>
                      </>
                    </LocalizedClientLink>
                  </div>
                </div>
              </div>
            )}
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  )
}

export default CartDropdown
