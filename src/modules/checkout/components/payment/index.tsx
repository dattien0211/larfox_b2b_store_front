"use client"

import { useCallback, useContext, useEffect, useMemo, useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { RadioGroup } from "@headlessui/react"
import ErrorMessage from "@modules/checkout/components/error-message"
import { CheckCircleSolid, CreditCard } from "@medusajs/icons"
import { Button, Container, Heading, Text, Tooltip, clx } from "@medusajs/ui"
import { CardElement } from "@stripe/react-stripe-js"
import { StripeCardElementOptions } from "@stripe/stripe-js"

import Divider from "@modules/common/components/divider"
import PaymentContainer from "@modules/checkout/components/payment-container"
import {
  isManual,
  isQR,
  isStripe as isStripeFunc,
  paymentInfoMap,
} from "@lib/constants"
import { StripeContext } from "@modules/checkout/components/payment-wrapper"
import { initiatePaymentSession } from "@lib/data/cart"
import Image from "next/image"
import IMGS from "@constants/IMGS"

const Payment = ({
  cart,
  availablePaymentMethods,
}: {
  cart: any
  availablePaymentMethods: any[]
}) => {
  const activeSession = cart.payment_collection?.payment_sessions?.find(
    (paymentSession: any) => paymentSession.status === "pending"
  )

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [cardBrand, setCardBrand] = useState<string | null>(null)
  const [cardComplete, setCardComplete] = useState(false)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(
    activeSession?.provider_id ?? ""
  )

  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const isOpen = searchParams.get("step") === "thanh-toan"

  const isStripe = isStripeFunc(activeSession?.provider_id)
  const stripeReady = useContext(StripeContext)

  const paidByGiftcard =
    cart?.gift_cards && cart?.gift_cards?.length > 0 && cart?.total === 0

  const paymentReady =
    (activeSession && cart?.shipping_methods.length !== 0) || paidByGiftcard

  const useOptions: StripeCardElementOptions = useMemo(() => {
    return {
      style: {
        base: {
          fontFamily: "Inter, sans-serif",
          color: "#424270",
          "::placeholder": {
            color: "rgb(107 114 128)",
          },
        },
      },
      classes: {
        base: "pt-3 pb-1 block w-full h-11 px-4 mt-0 bg-ui-bg-field border rounded-md appearance-none focus:outline-none focus:ring-0 focus:shadow-borders-interactive-with-active border-ui-border-base hover:bg-ui-bg-field-hover transition-all duration-300 ease-in-out",
      },
    }
  }, [])

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  const handleEdit = () => {
    router.push(pathname + "?" + createQueryString("step", "thanh-toan"), {
      scroll: false,
    })
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    try {
      const shouldInputCard =
        isStripeFunc(selectedPaymentMethod) && !activeSession

      if (!activeSession) {
        await initiatePaymentSession(cart, {
          provider_id: selectedPaymentMethod,
        })
      }

      if (!shouldInputCard) {
        return router.push(
          pathname + "?" + createQueryString("step", "danh-gia"),
          {
            scroll: false,
          }
        )
      }
    } catch (err: any) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    setError(null)
  }, [isOpen])

  return (
    <div className="bg-white">
      <div className="flex flex-row items-center justify-between mb-2 sm:mb-6">
        <h1
          className={clx(
            "flex flex-row sm:text-3xl text-xl font-semibold font-times text-primary text gap-x-2 items-baseline",
            {
              "opacity-50 pointer-events-none select-none":
                !isOpen && !paymentReady,
            }
          )}
        >
          Phương thức thanh toán
          {!isOpen && paymentReady && <CheckCircleSolid />}
        </h1>
        {!isOpen && paymentReady && (
          <Text>
            <button
              onClick={handleEdit}
              className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover text-sm sm:text-base !font-manrope !text-primary"
              data-testid="edit-payment-button"
            >
              Sửa
            </button>
          </Text>
        )}
      </div>
      <div>
        <div className={isOpen ? "block" : "hidden"}>
          {!paidByGiftcard && availablePaymentMethods?.length && (
            <>
              <RadioGroup
                value={selectedPaymentMethod}
                onChange={(value: string) => setSelectedPaymentMethod(value)}
              >
                {availablePaymentMethods.map((paymentMethod) => {
                  return (
                    <PaymentContainer
                      paymentInfoMap={paymentInfoMap}
                      paymentProviderId={paymentMethod.id}
                      key={paymentMethod.id}
                      selectedPaymentOptionId={selectedPaymentMethod}
                    />
                  )
                })}
              </RadioGroup>
              {isStripe && stripeReady && (
                <div className="mt-5 transition-all duration-150 ease-in-out">
                  <Text className="text-base text-ui-fg-base mb-1">
                    Nhập chi tiết thẻ
                  </Text>

                  <CardElement
                    options={useOptions as StripeCardElementOptions}
                    onChange={(e) => {
                      setCardBrand(
                        e.brand &&
                          e.brand.charAt(0).toUpperCase() + e.brand.slice(1)
                      )
                      setError(e.error?.message || null)
                      setCardComplete(e.complete)
                    }}
                  />
                </div>
              )}
            </>
          )}

          {paidByGiftcard && (
            <div className="flex flex-col w-1/3">
              <Text className="text-base text-ui-fg-base mb-1">
                Phương thức thanh toán
              </Text>
              <Text
                className="txt-medium text-ui-fg-subtle"
                data-testid="payment-method-summary"
              >
                Thẻ quà tặng
              </Text>
            </div>
          )}

          {isQR(selectedPaymentMethod) && (
            <div className="animate-fade-in-right flex flex-col items-center justify-center gap-y-2 text-small-regular cursor-pointer py-5 border rounded-rounded px-8 mb-2 mt-4">
              <div className="w-64 h-64">
                <Image
                  src={IMGS.QR}
                  alt="QR image"
                  width={250}
                  height={250}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="mt-4 ">
                <p className="indent-4 text-sm sm:text-base text-justify">
                  <span className="text-primary font-manrope-bold mr-2 uppercase">
                    Lưu ý:
                  </span>
                  Vui lòng ghi chú tên và số điện thoại đặt hàng trong phần nội
                  dung chuyển khoản để nhân viên kiểm tra lại.
                </p>
                <p className="indent-4 text-sm sm:text-base text-justify mt-2">
                  Nếu không nhập hoặc có lỗi hãy liên lạc theo số điện thoại
                  <span className="font-semibold text-primary mx-1">
                    0946174888
                  </span>
                  để được hỗ trợ nhanh nhất.
                </p>
              </div>
            </div>
          )}

          <ErrorMessage
            error={error}
            data-testid="payment-method-error-message"
          />

          <Button
            size="large"
            className="mt-6 mb-4 sm:mb-0 bg-primary hover:bg-orang-10 rounded-none !shadow-none"
            onClick={handleSubmit}
            isLoading={isLoading}
            disabled={
              (isStripe && !cardComplete) ||
              (!selectedPaymentMethod && !paidByGiftcard)
            }
            data-testid="submit-payment-button"
          >
            {!activeSession && isStripeFunc(selectedPaymentMethod)
              ? " Nhập chi tiết thẻ"
              : "Tiếp tục để đặt hàng"}
          </Button>
        </div>

        <div className={isOpen ? "hidden" : "block mb-4 sm:mb-0"}>
          {cart && paymentReady && activeSession ? (
            <div className="flex items-start gap-x-1 w-full">
              <div className="flex flex-col sm:w-1/2">
                <Text
                  className="font-normal  txt-medium text-sm sm:text-base text-ui-fg-subtle !font-manrope"
                  data-testid="payment-method-summary"
                >
                  {paymentInfoMap[selectedPaymentMethod]?.title ||
                    selectedPaymentMethod}
                </Text>
              </div>
              {!isManual(selectedPaymentMethod) &&
                !isQR(selectedPaymentMethod) && (
                  <div className="flex flex-col w-1/2">
                    <Text className="text-base text-ui-fg-base mb-1 ">
                      Chi tiết thanh toán
                    </Text>
                    <div
                      className="flex gap-2 txt-medium text-ui-fg-subtle items-center"
                      data-testid="payment-details-summary"
                    >
                      <Container className="flex items-center h-7 w-fit p-2 bg-ui-button-neutral-hover">
                        {paymentInfoMap[selectedPaymentMethod]?.icon || (
                          <CreditCard />
                        )}
                      </Container>
                      <Text>
                        {isStripeFunc(selectedPaymentMethod) && cardBrand
                          ? cardBrand
                          : "Bước tiếp theo sẽ xuất hiện"}
                      </Text>
                    </div>
                  </div>
                )}
            </div>
          ) : paidByGiftcard ? (
            <div className="flex flex-col w-1/3">
              <Text className="text-base text-ui-fg-base mb-1">
                Phương thức thanh toán
              </Text>
              <Text
                className="txt-medium text-ui-fg-subtle"
                data-testid="payment-method-summary"
              >
                Thẻ quà tặng
              </Text>
            </div>
          ) : null}
        </div>
      </div>
      <Divider className="sm:mt-8" />
    </div>
  )
}

export default Payment
