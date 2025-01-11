"use client"

import React, { useEffect, useMemo, useState } from "react"
import { useForm, Controller } from "react-hook-form"
import Select from "react-select"

import Input from "@modules/common/components/input"
import AccountInfo from "../account-info"
import { HttpTypes } from "@medusajs/types"
import {
  addCustomerAddress,
  deleteCustomerAddress,
  updateCustomerAddress,
} from "@lib/data/customer"
import ErrorMessage from "@modules/checkout/components/error-message"
import cityConstant from "@constants/citiesData.json"
import { Button, toast } from "@medusajs/ui"

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
  const [provinceOptions, setProvinceOptions] = useState<any[]>([])
  const [successState, setSuccessState] = useState(false)
  const [errorState, setErrorState] = useState<string | null>(null)
  const [toggle, setToggle] = useState(false)

  const currentInfo = useMemo(() => {
    const customerAddress = customer.addresses[0]
    if (!customerAddress?.address_1) return "Chưa có địa chỉ nhận hàng"

    return (
      <div
        className="flex flex-wrap mt-1 font-semibold"
        data-testid="current-info"
      >
        <span className="text-nowrap">{customerAddress.first_name}</span>
        <span className="mx-3">-</span>
        <span className="text-nowrap">{customerAddress.address_1}</span>
        <span className="ml-[2px] mr-1">,</span>
        <span className="text-nowrap">{customerAddress.province}</span>
        <span className="ml-[2px] mr-1">,</span>
        <span className="text-nowrap">{customerAddress.city}</span>
        <span className="ml-[2px] mr-1">,</span>
      </div>
    )
  }, [customer.addresses])

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
      first_name: "",
      phone: "",
      city: "",
      province: "",
      address_1: "",
    },
    shouldUnregister: false,
  })

  const city = watch("city")

  useEffect(() => {
    if (city) {
      const filteredProvinces =
        cityConstant
          .find((item) => item.name === city)
          ?.districts?.map((district: any) => ({
            label: district.name,
            value: district.name,
          })) || []
      setProvinceOptions(filteredProvinces)
    } else {
      setProvinceOptions([])
    }
  }, [city])

  const initializeForm = () => {
    const address = customer?.addresses[0]
    setValue("first_name", address?.first_name || customer?.first_name || "")
    setValue("phone", address?.phone || customer?.phone || "")
    setValue("city", address?.city || "")
    setValue("province", address?.province || "")
    setValue("address_1", address?.address_1 || "")
  }

  useEffect(() => {
    initializeForm()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customer, toggle])

  const clearState = () => {
    setToggle(!toggle)
    setErrorState(null)
    setSuccessState(false)
    reset()
  }

  const onSubmit = async (data: FormInputs) => {
    try {
      const formData = new FormData()
      Object.entries(data).forEach(([key, value]) =>
        formData.append(key, value?.trim())
      )

      const addressId = customer?.addresses[0]?.id
      const response = addressId
        ? await updateCustomerAddress({ addressId }, formData)
        : await addCustomerAddress(customer.id, formData)

      if (response.success) {
        setSuccessState(true)
        setErrorState(null)
      } else {
        throw new Error(response.message || "Đã có lỗi xảy ra.")
      }
    } catch (error) {
      setSuccessState(false)
      setErrorState("Đã xảy ra lỗi. Vui lòng thử lại!")
      console.error("API Error:", error)
    }
  }

  const handleDeleteAddress = async () => {
    try {
      const addressId = customer?.addresses[0]?.id
      if (!addressId) return

      await deleteCustomerAddress(addressId)
      toast.success("Thành công", {
        description: "Xóa địa chỉ nhận hàng thành công",
      })
      clearState()
    } catch (error) {
      console.error("Error deleting address:", error)
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        onReset={clearState}
        className="w-full"
      >
        <AccountInfo
          label="Địa chỉ nhận hàng"
          currentInfo={currentInfo}
          isSuccess={successState}
          isError={!!errorState}
          errorMessage={errorState || undefined}
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
              {errors.first_name && (
                <ErrorMessage error={errors.first_name.message} />
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
              {errors.phone && <ErrorMessage error={errors.phone.message} />}
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
                    options={cityConstant.map((item) => ({
                      label: item.name,
                      value: item.name,
                    }))}
                    onChange={(selectedOption) => {
                      setValue("city", selectedOption?.value || "")
                      setValue("province", "")
                    }}
                    value={
                      field.value
                        ? { label: field.value, value: field.value }
                        : null
                    }
                    classNames={{
                      control: () => "custom-control",
                      placeholder: () => "custom-placeholder",
                      singleValue: () => "custom-single-value",
                      menu: () => "custom-menu",
                      option: () => "custom-option",
                    }}
                  />
                )}
              />
              {errors.city && <ErrorMessage error={errors.city.message} />}

              <Controller
                name="province"
                control={control}
                rules={{ required: "Vui lòng chọn quận/ huyện." }}
                render={({ field }) => (
                  <Select
                    {...field}
                    placeholder="Quận/ Huyện"
                    isClearable
                    isDisabled={!city}
                    options={provinceOptions}
                    onChange={(selectedOption) =>
                      setValue("province", selectedOption?.value || "")
                    }
                    value={
                      field.value
                        ? { label: field.value, value: field.value }
                        : null
                    }
                    classNames={{
                      control: () => "custom-control",
                      placeholder: () => "custom-placeholder",
                      singleValue: () => "custom-single-value",
                      menu: () => "custom-menu",
                      option: () => "custom-option",
                    }}
                  />
                )}
              />
              {errors.province && (
                <ErrorMessage error={errors.province.message} />
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
            {errors.address_1 && (
              <ErrorMessage error={errors.address_1.message} />
            )}
          </div>
        </AccountInfo>
      </form>

      {customer?.addresses[0]?.id && (
        <div className="flex justify-end">
          <Button
            className="w-full sm:w-[100px] bg-primary shadow-none text-sm -mt-6"
            onClick={handleDeleteAddress}
            data-testid="delete-button"
          >
            Xóa địa chỉ
          </Button>
        </div>
      )}
    </>
  )
}

export default ProfileBillingAddress
