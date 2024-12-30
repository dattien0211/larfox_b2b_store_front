"use client"

import { Heading, Text, clx } from "@medusajs/ui"

import PaymentButton from "../payment-button"
import { useSearchParams } from "next/navigation"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Review = ({ cart }: { cart: any }) => {
  const searchParams = useSearchParams()

  const isOpen = searchParams.get("step") === "danh-gia"

  const paidByGiftcard =
    cart?.gift_cards && cart?.gift_cards?.length > 0 && cart?.total === 0

  const previousStepsCompleted =
    cart.shipping_address &&
    cart.shipping_methods.length > 0 &&
    (cart.payment_collection || paidByGiftcard)

  return (
    <div className="bg-white">
      <div className="flex flex-row items-center justify-between mb-6">
        <h1
          className={clx(
            "flex flex-row sm:text-3xl text-2xl font-semibold font-times text-primary gap-x-2 items-baseline",
            {
              "opacity-50 pointer-events-none select-none": !isOpen,
            }
          )}
        >
          Chính sách và Điều khoản
        </h1>
      </div>
      {isOpen && previousStepsCompleted && (
        <>
          <div className="flex items-start gap-x-1 w-full mb-6">
            <div className="w-full">
              <Text className="txt-medium-plus text-justify text-ui-fg-base mb-1">
                Bằng cách nhấp vào nút Đặt Hàng, bạn xác nhận rằng bạn đã đọc,
                hiểu và chấp nhận&nbsp;
                <LocalizedClientLink
                  href="/chinh-sach-mua-hang-va-thanh-toan"
                  className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover"
                >
                  Chính Sách Mua Hàng
                </LocalizedClientLink>
                ,&nbsp;
                <LocalizedClientLink
                  href="/chinh-sach-bao-hanh"
                  className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover"
                >
                  Chính Sách Bảo Hành
                </LocalizedClientLink>
                &nbsp;và&nbsp;
                <LocalizedClientLink
                  href="/chinh-sach-doi-tra-va-hoan-tien"
                  className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover"
                >
                  Chính Sách Đổi Trả Và Hoàn Tiền
                </LocalizedClientLink>
                &nbsp;của chúng tôi, đồng thời đồng ý rằng bạn đã đọc{" "}
                <LocalizedClientLink
                  href="/chinh-sach-bao-mat"
                  className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover"
                >
                  Chính Sách Bảo Mật
                </LocalizedClientLink>
                &nbsp;của Anco.
              </Text>
            </div>
          </div>
          <PaymentButton cart={cart} data-testid="submit-order-button" />
        </>
      )}
    </div>
  )
}

export default Review
