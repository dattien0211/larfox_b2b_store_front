"use client"

import { Table, Text, clx } from "@medusajs/ui"

import { updateLineItem } from "@lib/data/cart"
import { HttpTypes } from "@medusajs/types"
import CartItemSelect from "@modules/cart/components/cart-item-select"
import ErrorMessage from "@modules/checkout/components/error-message"
import DeleteButton from "@modules/common/components/delete-button"
import LineItemOptions from "@modules/common/components/line-item-options"
import LineItemPrice from "@modules/common/components/line-item-price"
import LineItemUnitPrice from "@modules/common/components/line-item-unit-price"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Spinner from "@modules/common/icons/spinner"
import Thumbnail from "@modules/products/components/thumbnail"
import { useState } from "react"
import QuantityItem from "@modules/layout/components/cart-dropdown/quantityItem"
import clsx from "clsx"

type ItemProps = {
  item: HttpTypes.StoreCartLineItem
  type?: "full" | "preview"
}

const Item = ({ item, type = "full" }: ItemProps) => {
  const [updating, setUpdating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const { handle } = item.variant?.product ?? {}

  // const maxQtyFromInventory = 10
  // const maxQuantity = item.variant?.manage_inventory ? 10 : maxQtyFromInventory

  return (
    <Table.Row
      className="w-full hover:!bg-transparent "
      data-testid="product-row"
    >
      <Table.Cell
        className={clx("!pl-0 !pr-2 sm:!pr-4 py-4 sm:w-24", {
          "!w-20": type === "preview",
        })}
      >
        <LocalizedClientLink
          href={`/san-pham/${handle}`}
          className={clx("flex", {
            "w-16": type === "preview",
            "small:w-24 w-16": type === "full",
          })}
        >
          <Thumbnail
            thumbnail={item.variant?.product?.thumbnail}
            images={item.variant?.product?.images}
            size="square"
          />
        </LocalizedClientLink>
      </Table.Cell>

      <Table.Cell className="text-lef !pr-0 sm:!pr-6">
        <LocalizedClientLink
          href={`/san-pham/${handle}`}
          className={clsx(
            "text-xs sm:text-sm text-ui-fg-base w-[150px] sm:w-[200px] !font-manrope line-clamp-2 ",
            {
              "!text-sm": type === "preview",
            }
          )}
          data-testid="product-title"
        >
          {item.product_title}
        </LocalizedClientLink>
        {/* <LineItemOptions variant={item.variant} data-testid="product-variant" /> */}

        {type === "full" && (
          <div className="mt-2">
            <div className={clsx("flex gap-2 items-center !h-[30px]", {})}>
              <QuantityItem
                itemQuantity={item.quantity}
                itemId={item.id}
                setUpdating={setUpdating}
                setError={setError}
                isDisabled={updating || error !== null}
              />
              {updating && <Spinner />}
            </div>
            <ErrorMessage error={error} data-testid="product-error-message" />
          </div>
        )}
      </Table.Cell>

      {type === "full" && (
        <Table.Cell className="hidden small:table-cell">
          <LineItemUnitPrice item={item} style="tight" />
        </Table.Cell>
      )}

      <Table.Cell
        className={clsx("!pr-0", {
          "!pr-0": type === "preview",
          "sm:!pr-6": type === "full",
        })}
      >
        <div
          className={clx(
            "!text-lg flex flex-col items-end justify-center h-full"
          )}
        >
          {type === "preview" && (
            <span className="flex gap-x-1">
              <Text className="text-ui-fg-muted text-xs !font-manrope flex items-center">
                {item.quantity}x{" "}
              </Text>
              <LineItemUnitPrice item={item} style="tight" />
            </span>
          )}
          <LineItemPrice item={item} style="tight" />
        </div>
      </Table.Cell>

      {type === "full" && (
        <Table.Cell className="!px-0 ">
          <div className="flex flex-col items-center justify-end">
            <DeleteButton id={item.id} data-testid="product-delete-button" />
          </div>
        </Table.Cell>
      )}
    </Table.Row>
  )
}

export default Item
