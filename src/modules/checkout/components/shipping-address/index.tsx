import { HttpTypes } from "@medusajs/types"
import { useFormContext, Controller } from "react-hook-form" // Ensure Controller is imported for react-select
import { Container } from "@medusajs/ui"
import Checkbox from "@modules/common/components/checkbox"
import Input from "@modules/common/components/input"
import { mapKeys } from "lodash"
import React, { useEffect, useMemo, useState } from "react"
import AddressSelect from "../address-select"
import cityConstant from "@constants/citiesData.json"
import Select from "react-select"

const ShippingAddress = ({
  customer,
  cart,
  checked,
  onChange,
}: {
  customer: HttpTypes.StoreCustomer | null
  cart: HttpTypes.StoreCart | null
  checked: boolean
  onChange?: () => void
}) => {
  const [provinceOptions, setProvinceOptions] = useState<any>([])

  const {
    register,
    setValue,
    watch,
    control,
    formState: { errors },
  } = useFormContext()

  const city = watch("shipping_address.city")
  const province = watch("shipping_address.province")

  const countriesInRegion = useMemo(
    () => cart?.region?.countries?.map((c) => c.iso_2),
    [cart?.region]
  )

  const setFormAddress = (
    address?: HttpTypes.StoreCartAddress,
    email?: string
  ) => {
    if (address) {
      setValue("shipping_address.first_name", address.first_name || "")
      setValue("shipping_address.last_name", address.last_name || "")
      setValue("shipping_address.address_1", address.address_1 || "")
      setValue("shipping_address.company", address.company || "")
      setValue("shipping_address.postal_code", address.postal_code || "")
      setValue("shipping_address.city", address.city || "")
      setValue("shipping_address.country_code", address.country_code || "")
      setValue("shipping_address.province", address.province || "")
      setValue("shipping_address.phone", address.phone || "")
    }
    if (email) {
      setValue("email", email || "")
    }
  }

  useEffect(() => {
    if (cart && cart.shipping_address) {
      setFormAddress(cart.shipping_address, cart.email)
    }

    if (cart && !cart.email && customer?.email) {
      setFormAddress(undefined, customer.email)
    }
  }, [cart, customer])

  useEffect(() => {
    if (city) {
      const filteredProvinces =
        cityConstant
          .find((item) => item.name === city)
          ?.districts?.map((item: any) => ({
            label: item.name,
            value: item.name,
          })) || []
      setProvinceOptions(filteredProvinces)
    } else {
      setProvinceOptions([])
    }
  }, [city])

  const handleChangeCity = (selectedOption: any) => {
    setValue("shipping_address.city", selectedOption?.value || "")
    setValue("shipping_address.province", "") // Clear province when city changes
  }

  const handleChangeProvince = (selectedOption: any) => {
    setValue("shipping_address.province", selectedOption?.value || "")
  }

  return (
    <>
      {/* {customer && (addressesInRegion?.length || 0) > 0 && (
        <Container className="mb-6 flex flex-col gap-y-4 p-5">
          <p className="text-small-regular">
            {`Xin chào ${customer.first_name}, Bạn có muốn sử dụng địa chỉ đã lưu?`}
          </p>
          <AddressSelect
            addresses={customer.addresses}
            addressInput={
              mapKeys(formData, (_, key) =>
                key.replace("shipping_address.", "")
              ) as HttpTypes.StoreCartAddress
            }
            onSelect={setFormAddress}
          />
        </Container>
      )} */}

      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <Input
            {...register("shipping_address.first_name", {
              required: "Vui lòng nhập họ và tên.",
            })}
            label="Họ và tên"
            autoComplete="given-name"
            error={(errors?.shipping_address as any)?.first_name?.message}
            data-testid="shipping-first-name-input"
            isRequired={true}
          />
        </div>

        <div>
          <Controller
            name="shipping_address.city"
            control={control}
            rules={{ required: "Vui lòng chọn tỉnh/ thành." }}
            render={({ field }) => (
              <Select
                {...field}
                placeholder="Tỉnh/ Thành"
                isClearable
                options={cityConstant.map((item) => ({
                  label: item.name,
                  value: item.name,
                }))}
                onChange={handleChangeCity}
                value={
                  field.value
                    ? { label: field.value, value: field.value }
                    : null
                }
                styles={{ control: (base) => ({ ...base, height: 44 }) }}
              />
            )}
          />
          {!city && (errors?.shipping_address as any)?.city && (
            <p className="text-red-500 text-sm mt-2">
              {(errors?.shipping_address as any)?.city?.message}
            </p>
          )}
        </div>

        <div>
          <Controller
            name="shipping_address.province"
            control={control}
            rules={{ required: "Vui lòng chọn quận/ huyện." }}
            render={({ field }) => (
              <Select
                {...field}
                placeholder="Quận/ Huyện"
                isClearable
                options={provinceOptions}
                onChange={handleChangeProvince}
                isDisabled={!city}
                value={
                  field.value
                    ? { label: field.value, value: field.value }
                    : null
                }
                styles={{ control: (base) => ({ ...base, height: 44 }) }}
              />
            )}
          />
          {!province && (errors?.shipping_address as any)?.province && (
            <p className="text-red-500 text-sm mt-2">
              {(errors?.shipping_address as any)?.province?.message}
            </p>
          )}
        </div>

        <div className="col-span-2">
          <Input
            {...register("shipping_address.address_1", {
              required: "Vui lòng nhập chi tiết địa chỉ giao hàng.",
            })}
            label="Địa chỉ giao hàng"
            error={(errors?.shipping_address as any)?.address_1?.message}
            data-testid="shipping-address-input"
            isRequired={true}
          />
        </div>
      </div>

      {/* <div className="my-4">
        <Checkbox
          label="Địa chỉ nhận hóa đơn trùng với địa chỉ giao hàng."
          name="same_as_billing"
          checked={checked}
          onChange={onChange}
          data-testid="billing-address-checkbox"
        />
      </div> */}

      <div className="grid grid-cols-2 gap-4 my-4">
        <Input
          {...register("email", {
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Vui lòng nhập Email hợp lệ.",
            },
          })}
          label="Email"
          error={errors.email?.message}
          type="email"
          autoComplete="email"
          data-testid="shipping-email-input"
        />

        <Input
          {...register("shipping_address.phone", {
            required: "Vui lòng nhập số điện thoại.",
            pattern: {
              value:
                /^(?:\+84|84)[3|5|7|8|9]{1}(\d{8})$|^(0[3|5|7|8|9]{1}[0-9]{8})$/,
              message: "Vui lòng nhập số điện thoại hợp lệ",
            },
          })}
          label="Số điện thoại"
          error={(errors?.shipping_address as any as any)?.phone?.message}
          autoComplete="tel"
          data-testid="shipping-phone-input"
          isRequired={true}
        />
      </div>
    </>
  )
}

export default ShippingAddress
