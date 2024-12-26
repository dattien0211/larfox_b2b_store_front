"use client"

import React, { useEffect, useMemo } from "react"
import { useForm, Controller } from "react-hook-form"
import Select from "react-select"

import Input from "@modules/common/components/input"
import AccountInfo from "../account-info"
import { HttpTypes } from "@medusajs/types"
import { updateCustomerAddress } from "@lib/data/customer"
import ErrorMessage from "@modules/checkout/components/error-message"
import cityConstant from "@constants/citiesData.json"

type MyInformationProps = {
  customer: HttpTypes.StoreCustomer
  regions: HttpTypes.StoreRegion[]
}

type FormInputs = {
  first_name: string
  phone: string
  city: string
  province: string
  address_1: string
}

const ProfileBillingAddress: React.FC<MyInformationProps> = ({
  customer,
  regions,
}) => {
  const regionOptions = useMemo(() => {
    return (
      regions
        ?.map((region) => {
          return region.countries?.map((country) => ({
            value: country.iso_2,
            label: country.display_name,
          }))
        })
        .flat() || []
    )
  }, [regions])
  const [provinceOptions, setProvinceOptions] = React.useState<any>([])
  const [successState, setSuccessState] = React.useState(false)
  const [errorState, setErrorState] = React.useState<string | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
    control,
    watch,
  } = useForm<FormInputs>({
    defaultValues: {
      first_name: customer.addresses[0]?.first_name || "",
      phone: customer.addresses[0]?.phone || "",
      city: customer.addresses[0]?.city || "",
      province: customer.addresses[0]?.province || "",
      address_1: customer.addresses[0]?.address_1 || "",
    },
    shouldUnregister: false, // Prevent unregistering inputs when hidden
  })

  const city = watch("city")
  const province = watch("province")

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
    /* @ts-ignore */
    setValue("city", selectedOption?.value || "")
    /* @ts-ignore */
    setValue("province", "") // Clear province when city changes
  }

  const handleChangeProvince = (selectedOption: any) => {
    /* @ts-ignore */
    setValue("province", selectedOption?.value || "")
  }

  const onSubmit = async (data: FormInputs) => {
    const formData = new FormData()

    // Append the form data to FormData object
    formData.append("first_name", data["first_name"])
    formData.append("address_1", data["address_1"])
    formData.append("city", data["city"])
    formData.append("province", data["province"])
    formData.append("phone", data["phone"])

    // Flattening the form data structure
    Object.entries(data).forEach(([key, value]) => {
      if (typeof value === "object" && value !== null) {
        Object.entries(value).forEach(([nestedKey, nestedValue]) => {
          formData.append(`${key}[${nestedKey}]`, nestedValue as string)
        })
      } else {
        formData.append(key, value as string)
      }
    })

    try {
      const response = await updateCustomerAddress(
        { addressId: customer.addresses[0].id },
        formData
      )

      if (response.success) {
        setSuccessState(true)
        setErrorState(null) // Clear previous errors
        reset(data) // Optionally reset the form after a successful submission
      } else {
        setSuccessState(false)
        setErrorState(response.message || "Đã có lỗi xảy ra. Vui lòng thử lại.")
      }
    } catch (error) {
      setSuccessState(false)
      setErrorState("Đã xảy ra lỗi. Vui lòng thử lại!")
      console.error("API Error:", error)
    }
  }

  const clearState = () => {
    setSuccessState(false)
    setErrorState(null)
    reset({
      first_name: customer.addresses[0]?.first_name || "",
      phone: customer.addresses[0]?.phone || "",
      city: customer.addresses[0]?.city || "",
      province: customer.addresses[0]?.province || "",
      address_1: customer.addresses[0]?.address_1 || "",
    })
  }

  useEffect(() => {
    if (successState) {
      reset()
    }
  }, [successState, reset])

  const billingAddress = customer.addresses[0]
  const currentInfo = useMemo(() => {
    if (!billingAddress.address_1) {
      return "Chưa có địa chỉ nhận hàng"
    }

    const country =
      regionOptions?.find(
        (country) => country?.value === billingAddress.country_code
      )?.label || billingAddress.country_code?.toUpperCase()

    return (
      <div
        className="flex flex-row mt-1 font-semibold"
        data-testid="current-info"
      >
        <span>{billingAddress.first_name}</span>
        <span className="mx-3">-</span>
        <span>{billingAddress.address_1}</span>
        <span className="ml-[2px] mr-1">,</span>
        <span>
          {billingAddress.province}
          <span className="ml-[2px] mr-1">,</span>
          {billingAddress.city}
          <span className="ml-[2px] mr-1">,</span>
        </span>
        <span>{country === "Viet Nam" ? "Việt Nam" : country}</span>
      </div>
    )
  }, [billingAddress, regionOptions])

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      onReset={() => clearState()}
      className="w-full"
    >
      <AccountInfo
        label="Địa chỉ nhận hàng"
        currentInfo={currentInfo}
        isSuccess={successState}
        isError={!!errorState}
        errorMessage={errorState ?? undefined}
        clearState={clearState}
        data-testid="account-billing-address-editor"
      >
        <div className="grid grid-cols-1 gap-y-2">
          <div className="grid grid-cols-2 gap-x-4">
            <Input
              label="Họ và tên"
              required
              data-testid="billing-first-name-input"
              {...register("first_name", {
                required: "Vui lòng nhập họ và tên!",
              })}
            />
            {errors["first_name"] && (
              <ErrorMessage error={errors["first_name"]?.message} />
            )}

            <Input
              label="Số điện thoại"
              type="tel"
              required
              autoComplete="phone"
              data-testid="phone-input"
              {...register("phone", {
                required: "Vui lòng nhập số điện thoại!",
                pattern: {
                  value:
                    /^(?:\+84|84)[3|5|7|8|9]{1}(\d{8})$|^(0[3|5|7|8|9]{1}[0-9]{8})$/,
                  message: "Số điện thoại không đúng định dạng!",
                },
              })}
            />
            {errors.phone && <ErrorMessage error={errors.phone?.message} />}
          </div>

          <div className="grid grid-cols-2 gap-x-4">
            <Controller
              name="city"
              control={control}
              rules={{ required: "Vui lòng chọn tỉnh/ thành." }}
              render={({ field }) => (
                <Select
                  {...field}
                  placeholder="Tỉnh/ Thành"
                  isClearable
                  /* @ts-ignore */
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

            {!city && errors["city"] && (
              <ErrorMessage error={errors["city"]?.message} />
            )}

            <Controller
              name="province"
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

            {!province && errors["city"] && (
              <ErrorMessage error={errors["province"]?.message} />
            )}
          </div>

          <Input
            label="Địa chỉ nhận hàng"
            required
            data-testid="billing-address-1-input"
            {...register("address_1", {
              required: "Vui lòng nhập địa chỉ!",
            })}
          />
          {errors["address_1"] && (
            <ErrorMessage error={errors["address_1"]?.message} />
          )}
        </div>
      </AccountInfo>
    </form>
  )
}

export default ProfileBillingAddress
