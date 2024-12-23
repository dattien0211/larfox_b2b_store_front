"use client"

import { CheckCircleSolid } from "@medusajs/icons"
import { Heading, Text, useToggleState } from "@medusajs/ui"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

import Divider from "@modules/common/components/divider"
import Spinner from "@modules/common/icons/spinner"

import { setAddresses } from "@lib/data/cart"
import compareAddresses from "@lib/util/compare-addresses"
import { HttpTypes } from "@medusajs/types"
import { useFormState } from "react-dom"
import BillingAddress from "../billing_address"
import ErrorMessage from "../error-message"
import ShippingAddress from "../shipping-address"
import { SubmitButton } from "../submit-button"
import { useForm, FormProvider } from "react-hook-form"
import { useState } from "react"

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

  const isOpen = searchParams.get("step") === "address"

  // const { state: sameAsBilling, toggle: toggleSameAsBilling } = useToggleState(
  //   cart?.shipping_address && cart?.billing_address
  //     ? compareAddresses(cart?.shipping_address, cart?.billing_address)
  //     : true
  // )

  // hard code for the same address for shipping and billing
  const sameAsBilling = true

  const handleEdit = () => {
    router.push(pathname + "?step=address")
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
          formData.append(`${prefix}.${key}`, fields[key] || "")
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
    <div className="bg-white">
      <div className="flex flex-row items-center justify-between mb-6">
        <Heading
          level="h2"
          className="flex flex-row text-3xl gap-x-2 items-baseline text-primary"
        >
          Địa chỉ giao hàng
          {!isOpen && <CheckCircleSolid />}
        </Heading>
        {!isOpen && cart?.shipping_address && (
          <Text>
            <button
              onClick={handleEdit}
              className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover text-lg"
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
            <div className="pb-8">
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
                    className="text-3xl-regular gap-x-4 pb-6 pt-8"
                  >
                    Địa chỉ nhận hóa đơn
                  </Heading>

                  <BillingAddress cart={cart} />
                </div>
              )}
              <SubmitButton
                className="mt-4 bg-primary hover:bg-orang-10 rounded-none !shadow-none"
                data-testid="submit-address-button"
              >
                Tiếp tục đặt hàng
              </SubmitButton>
              <ErrorMessage
                error={message}
                data-testid="address-error-message"
              />
            </div>
          </form>
        </FormProvider>
      ) : (
        <div>
          <div className="text-small-regular">
            {cart && cart.shipping_address ? (
              <div className="flex items-start gap-x-8">
                <div className="flex flex-col  items-start gap-y-4 w-full">
                  <div
                    className="flex flex-col"
                    data-testid="shipping-address-summary"
                  >
                    <Text className="text-base txt-ui-fg-base mb-1 font-semibold">
                      Thông tin giao hàng
                    </Text>

                    {cart?.shipping_address ? (
                      <div className="flex flex-wrap">
                        <Text className="text-base text-ui-fg-subtle mr-1">
                          Khách hàng{" "}
                          <span className="font-semibold">
                            {`${cart.shipping_address.last_name || ""} ${
                              cart.shipping_address.first_name || ""
                            } -`}
                          </span>
                        </Text>

                        {cart.shipping_address.province && (
                          <Text className="text-base text-ui-fg-subtle">
                            {`${cart.shipping_address.province}`}
                          </Text>
                        )}
                        {cart.shipping_address.city && (
                          <Text className="text-base text-ui-fg-subtle">
                            {`, ${cart.shipping_address.city}`}
                          </Text>
                        )}
                        <Text className="text-base text-ui-fg-subtle">
                          {`, ${cart.shipping_address.address_1 || ""}`}
                        </Text>
                        <Text className="text-base text-ui-fg-subtle">
                          {`, ${
                            cart?.shipping_address?.country_code?.toUpperCase() ||
                            "VN."
                          }`}
                        </Text>
                      </div>
                    ) : (
                      <Text className="text-base text-ui-fg-subtle">
                        Không có thông tin địa chỉ giao hàng.
                      </Text>
                    )}
                  </div>

                  <div
                    className="flex flex-col"
                    data-testid="shipping-contact-summary"
                  >
                    <Text className="text-base txt-ui-fg-base mb-1 font-semibold">
                      Thông tin liên hệ
                    </Text>
                    <Text className="text-base text-ui-fg-subtle">
                      Số điện thoại:{" "}
                      <span className="font-semibold">
                        {cart.shipping_address.phone
                          ? cart.shipping_address.phone
                          : ""}
                      </span>
                    </Text>
                    <Text className="text-base text-ui-fg-subtle">
                      Email:{" "}
                      <span className="font-semibold">
                        {cart.email ? cart.email : ""}
                      </span>
                    </Text>
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
      <Divider className="mt-8" />
    </div>
  )
}

export default Addresses
