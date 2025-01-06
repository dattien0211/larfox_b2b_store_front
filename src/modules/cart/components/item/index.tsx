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

  // TODO: Update this to grab the actual max inventory
  // const maxQtyFromInventory = 10
  // const maxQuantity = item.variant?.manage_inventory ? 10 : maxQtyFromInventory

  return (
    <Table.Row
      className="w-full hover:!bg-transparent "
      data-testid="product-row"
    >
      <Table.Cell
        className={clx("!pl-0 !pr-2 sm:!pr-4 py-4 w-24", {
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

      <Table.Cell className="text-lef !pr-2 sm:!pr-6">
        <Text
          className={clsx(
            "text-sm sm:text-base truncate text-ui-fg-base w-[150px] sm:w-[200px]",
            {
              "!text-base": type === "preview",
            }
          )}
          data-testid="product-title"
        >
          {item.product_title}
        </Text>
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
        className={clsx("!pr-2", {
          "!pr-0": type === "preview",
          "sm:!pr-6": type === "full",
        })}
      >
        <span
          className={clx(
            "!text-lg flex flex-col items-end justify-center h-full"
          )}
        >
          {type === "preview" && (
            <span className="flex gap-x-1 ">
              <Text className="text-ui-fg-muted text-xs sm:text-sm">
                {item.quantity}x{" "}
              </Text>
              <LineItemUnitPrice item={item} style="tight" />
            </span>
          )}
          <LineItemPrice item={item} style="tight" />
        </span>
      </Table.Cell>

      {type === "full" && (
        <Table.Cell className="!px-0">
          <DeleteButton id={item.id} data-testid="product-delete-button" />
        </Table.Cell>
      )}
    </Table.Row>
  )
}

export default Item
