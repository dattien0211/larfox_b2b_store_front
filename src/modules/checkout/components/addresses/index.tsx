"use client"

import { CheckCircleSolid } from "@medusajs/icons"
import { Heading, Text, useToggleState } from "@medusajs/ui"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

import Divider from "@modules/common/components/divider"
import Spinner from "@modules/common/icons/spinner"

import { setAddresses } from "@lib/data/cart"
import { HttpTypes } from "@medusajs/types"
import { useFormState } from "react-dom"
import BillingAddress from "../billing_address"
import ErrorMessage from "../error-message"
import ShippingAddress from "../shipping-address"
import { SubmitButton } from "../submit-button"
import { useForm, FormProvider } from "react-hook-form"
import { useState } from "react"
import { DEFAULT_EMAIL } from "@constants/defaultEmail"

const Addresses = ({
  cart,
  customer,
}: {
  cart: HttpTypes.StoreCart | null
  customer: HttpTypes.StoreCustomer | null
}) => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const isOpen = searchParams.get("step") === "dia-chi"

  // hard code for the same address for shipping and billing
  const sameAsBilling = true

  const handleEdit = () => {
    router.push(pathname + "?step=dia-chi")
  }

  // const [message, formAction] = useFormState(setAddresses, null)
  const [message, setMessage] = useState<string>("")

  const methods = useForm()

  // Define submit handler
  const onSubmit = async (data: any) => {
    try {
      const formData = new FormData()

      // Helper function to append fields to FormData
      const appendFields = (prefix: string, fields: any) => {
        Object.keys(fields).forEach((key) => {
          formData.append(`${prefix}.${key}`, fields[key]?.trim() || "")
        })
      }

      // Append shipping address fields
      appendFields("shipping_address", {
        first_name: data?.shipping_address?.first_name,
        last_name: data?.shipping_address?.last_name,
        address_1: data?.shipping_address?.address_1,
        city: data?.shipping_address?.city,
        province: data?.shipping_address?.province,
        phone: data?.shipping_address?.phone,
        country_code: cart?.shipping_address?.country_code || "vn",
      })

      // Append email
      formData.append("email", data.email)

      // Append billing address if `sameAsBilling` is false
      if (!sameAsBilling) {
        appendFields("billing_address", {
          first_name: data?.billing_address?.first_name,
          last_name: data?.billing_address?.last_name,
          address_1: data?.billing_address?.address_1,
          city: data?.billing_address?.city,
          province: data?.billing_address?.province,
          phone: data?.billing_address?.phone,
          country_code: cart?.shipping_address?.country_code || "vn",
        })
      } else {
        formData.append("same_as_billing", "on")
      }

      const response = await setAddresses(null, formData)

      if (response) {
        setMessage(response)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <div className="flex flex-row items-center justify-between mb-2 sm:mb-6">
        <h1 className="flex flex-row sm:text-[28px] text-xl font-semibold font-times  gap-x-2 items-baseline text-primary sm:mb-4">
          Địa chỉ nhận hàng
          {!isOpen && <CheckCircleSolid />}
        </h1>
        {!isOpen && cart?.shipping_address && (
          <Text>
            <button
              onClick={handleEdit}
              className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover text-sm sm:text-base !font-manrope-semibold !text-primary"
              data-testid="edit-address-button"
            >
              Sửa
            </button>
          </Text>
        )}
      </div>
      {isOpen ? (
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="pb-2">
              <ShippingAddress
                customer={customer}
                checked={sameAsBilling}
                // onChange={toggleSameAsBilling}
                cart={cart}
              />

              {!sameAsBilling && (
                <div>
                  <Heading
                    level="h2"
                    className="sm:text-[28px] text-xl  -regular gap-x-4 pb-6 pt-8"
                  >
                    Địa chỉ nhận hóa đơn
                  </Heading>

                  <BillingAddress cart={cart} />
                </div>
              )}
              <SubmitButton
                className="mt-2 bg-primary/90 hover:bg-primary !shadow-none capitalize rounded-md"
                data-testid="submit-address-button"
              >
                Tiếp tục để đặt hàng
              </SubmitButton>
              <ErrorMessage
                error={message}
                data-testid="address-error-message"
              />
            </div>
          </form>
        </FormProvider>
      ) : (
        <div className="mb-4 sm:mb-0">
          <div className="text-small-regular">
            {cart && cart.shipping_address ? (
              <div className="flex items-start gap-x-8">
                <div className="flex flex-col  items-start gap-y-4 w-full">
                  <div
                    className="flex flex-col"
                    data-testid="shipping-address-summary"
                  >
                    <Text className="text-base txt-ui-fg-base mb-1 !font-manrope-semibold">
                      Thông tin giao hàng
                    </Text>

                    {cart?.shipping_address ? (
                      <div className="flex flex-col ">
                        <div className="flex">
                          <Text className="text-sm sm:text-base text-ui-fg-subtle mr-1 !font-manrope">
                            Khách hàng:
                          </Text>
                          <Text className="text-sm sm:text-base text-ui-fg-subtle">
                            <span className="!font-manrope-semibold">
                              {`${cart.shipping_address.last_name || ""} ${
                                cart.shipping_address.first_name || ""
                              }`}
                            </span>
                          </Text>
                        </div>

                        <div className="flex">
                          <Text className="text-sm sm:text-base text-ui-fg-subtle mr-1 !font-manrope">
                            Địa chỉ:
                          </Text>
                          <div className="flex flex-wrap ">
                            <Text className="text-sm sm:text-base text-ui-fg-subtle !font-manrope-semibold">
                              {`${cart.shipping_address.address_1 || ""}`}
                            </Text>
                            {cart.shipping_address.province && (
                              <Text className="text-sm sm:text-base text-ui-fg-subtle !font-manrope-semibold">
                                {`, ${cart.shipping_address.province}`}
                              </Text>
                            )}
                            {cart.shipping_address.city && (
                              <Text className="text-sm sm:text-base text-ui-fg-subtle !font-manrope-semibold">
                                {`, ${cart.shipping_address.city}.`}
                              </Text>
                            )}
                          </div>
                        </div>

                        {/* <Text className="text-base text-ui-fg-subtle">
                          {`, ${
                            cart?.shipping_address?.country_code?.toUpperCase() ===
                            "VN"
                              ? "Việt Nam."
                              : cart?.shipping_address?.country_code?.toUpperCase() ||
                                "Việt Nam."
                          }`}
                        </Text> */}
                      </div>
                    ) : (
                      <Text className="text-base text-ui-fg-subtle !font-manrope">
                        Chưa có thông tin địa chỉ nhận hàng.
                      </Text>
                    )}
                  </div>

                  <div
                    className="flex flex-col"
                    data-testid="shipping-contact-summary"
                  >
                    <Text className="text-base txt-ui-fg-base mb-1 !font-manrope-semibold ">
                      Thông tin liên hệ
                    </Text>
                    <Text className="text-sm sm:text-base text-ui-fg-subtle !font-manrope">
                      Số điện thoại:{" "}
                      <span className="!font-manrope-semibold">
                        {cart.shipping_address.phone
                          ? cart.shipping_address.phone
                          : ""}
                      </span>
                    </Text>
                    {cart.email && cart.email !== DEFAULT_EMAIL && (
                      <Text className="text-sm sm:text-base text-ui-fg-subtle !font-manrope">
                        Email:{" "}
                        <span className="!font-manrope-semibold">
                          {cart.email}
                        </span>
                      </Text>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <Spinner />
              </div>
            )}
          </div>
        </div>
      )}
      <Divider className="sm:mt-8" />
    </>
  )
}

export default Addresses
