"use client"

import { Badge, Heading, Input, Label, Text, Tooltip } from "@medusajs/ui"
import React from "react"
import { useFormState } from "react-dom"

import { applyPromotions, submitPromotionForm } from "@lib/data/cart"
import { convertToLocale } from "@lib/util/money"
import { InformationCircleSolid, Spinner } from "@medusajs/icons"
import { HttpTypes } from "@medusajs/types"
import Trash from "@modules/common/icons/trash"
import ErrorMessage from "../error-message"
import { SubmitButton } from "../submit-button"
import Icons from "@modules/common/icons"

type DiscountCodeProps = {
  cart: HttpTypes.StoreCart & {
    promotions: HttpTypes.StorePromotion[]
  }
}

const DiscountCode: React.FC<DiscountCodeProps> = ({ cart }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const [promoValue, setPromoValue] = React.useState<string | null>(null)
  const [isApplyPromo, setIsApplyPromo] = React.useState(false)
  const [isRemovePromo, setIsRemovePromo] = React.useState(false)

  const { items = [], promotions = [] } = cart

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPromoValue(e.target.value)
    error && setError(null)
  }

  const removePromotionCode = async (code: string) => {
    const validPromotions = promotions.filter(
      (promotion) => promotion.code !== code
    )

    try {
      setIsRemovePromo(true)
      await applyPromotions(
        validPromotions.filter((p) => p.code === undefined).map((p) => p.code!)
      )
    } catch (error) {
      console.error(error)
    } finally {
      setIsRemovePromo(false)
    }
  }

  const addPromotionCode = async (formData: FormData) => {
    const code = formData.get("code")
    if (!code) {
      return
    }
    const codes = promotions
      .filter((p) => p.code !== undefined)
      .map((p) => p.code!)
    codes.push(code.toString())

    const oldCart = cart

    try {
      setIsApplyPromo(true)
      const updatedCart = await applyPromotions(codes)
      const isValidPromotion =
        JSON.stringify((updatedCart as any)?.promotions) !==
        JSON.stringify(oldCart.promotions)
      if (!isValidPromotion) {
        setError("Mã giảm giá không hợp lệ")
      } else {
        setError(null)
        setPromoValue("")
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsApplyPromo(false)
    }
  }

  const [message, formAction] = useFormState(submitPromotionForm, null)

  return (
    <div className="w-full bg-white flex flex-col">
      <form action={(a) => addPromotionCode(a)} className="w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <Icons.Discount />
            <h1>Mã giảm giá</h1>
          </div>
          <Label className="flex gap-x-1 items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-primary hover:text-black-10 text-base !font-manrope"
              data-testid="add-discount-button"
            >
              Nhập mã giảm giá
            </button>

            {/* <Tooltip content="You can add multiple promotion codes">
              <InformationCircleSolid color="var(--fg-muted)" />
            </Tooltip> */}
          </Label>
        </div>

        {isOpen && (
          <>
            <div className="flex w-full gap-x-2 h-10 mt-2">
              <div className="w-full h-full">
                <Input
                  className="size-full h-10"
                  id="promotion-input"
                  name="code"
                  type="text"
                  autoFocus={false}
                  data-testid="discount-input"
                  value={promoValue ?? ""}
                  onChange={handleOnchange}
                />
              </div>
              <SubmitButton
                className="w-[35%]"
                variant="secondary"
                data-testid="discount-apply-button"
              >
                {isApplyPromo ? <Spinner /> : "Áp dụng"}
              </SubmitButton>
            </div>

            <ErrorMessage
              error={error || message}
              data-testid="discount-error-message"
            />
          </>
        )}
      </form>

      {promotions.length > 0 && (
        <div className="w-full flex items-center mt-4">
          <div className="flex flex-col w-full">
            <Heading level="h3" className="txt-medium font-manrope mb-1">
              Mã khuyến mãi đã áp dụng
            </Heading>

            {promotions.map((promotion) => {
              return (
                <div
                  key={promotion.id}
                  className="flex items-center justify-between w-full max-w-full mb-2"
                  data-testid="discount-row"
                >
                  <Text className="flex items-baseline txt-small-plus w-4/5 pr-1">
                    <span className="truncate" data-testid="discount-code">
                      <Badge
                        color={promotion.is_automatic ? "green" : "grey"}
                        size="small"
                      >
                        {promotion.code}
                      </Badge>{" "}
                      <span className="ml-2">
                        {promotion.application_method?.value !== undefined &&
                          promotion.application_method.currency_code !==
                            undefined && (
                            <>
                              {promotion.application_method.type ===
                              "percentage"
                                ? `${promotion.application_method.value}%`
                                : convertToLocale({
                                    amount: promotion.application_method.value,
                                    currency_code:
                                      promotion.application_method
                                        .currency_code,
                                  })}
                            </>
                          )}
                      </span>
                      {/* {promotion.is_automatic && (
                          <Tooltip content="This promotion is automatically applied">
                            <InformationCircleSolid className="inline text-zinc-400" />
                          </Tooltip>
                        )} */}
                    </span>
                  </Text>
                  {!promotion.is_automatic && (
                    <button
                      className="flex items-center"
                      onClick={() => {
                        if (!promotion.code) {
                          return
                        }

                        removePromotionCode(promotion.code)
                      }}
                      data-testid="remove-discount-button"
                    >
                      {isRemovePromo ? <Spinner /> : <Trash size={14} />}
                      <span className="sr-only">
                        Xóa mã giảm giá khỏi đơn hàng
                      </span>
                    </button>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default DiscountCode
