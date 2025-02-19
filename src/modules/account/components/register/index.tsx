"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import Input from "@modules/common/components/input"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import ErrorMessage from "@modules/checkout/components/error-message"
import { signup } from "@lib/data/customer"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

type RegisterFormInputs = {
  first_name: string
  email: string
  phone: string // Phone is required
  password: string
  confirm_password: string
}

const Register = ({ setCurrentView }: Props) => {
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormInputs>()

  const onSubmit = async (data: RegisterFormInputs) => {
    try {
      // Exclude `confirm_password` from the data
      const { confirm_password, ...filteredData } = data

      const formData = new FormData()
      Object.entries(filteredData).forEach(([key, value]) =>
        formData.append(key, value?.trim())
      )

      await signup(null, formData)
    } catch (error: any) {
      setServerError(error.message || "Đã xảy ra lỗi khi đăng ký!")
      console.error("Unexpected Error:", error)
    }
  }

  const password = watch("password")

  return (
    <div
      className="max-w-sm flex flex-col items-center"
      data-testid="register-page"
    >
      <h1 className="sm:text-3xl text-2xl  text-primary mb-6 font-times">
        Đăng ký
      </h1>

      <form
        className="w-full flex flex-col"
        onSubmit={handleSubmit(onSubmit)}
        data-testid="register-form"
      >
        <div className="flex flex-col w-full gap-y-2">
          <div>
            <Input
              label="Họ và tên"
              {...register("first_name", {
                required: "Vui lòng nhập họ và tên!",
              })}
              autoComplete="given-name"
              data-testid="first-name-input"
            />
            {errors.first_name && (
              <ErrorMessage error={errors.first_name.message} />
            )}
          </div>
          <div>
            <Input
              label="Email"
              {...register("email", {
                required: "Vui lòng nhập email!",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Email không đúng định dạng!",
                },
                onChange: (e) => {
                  setValue("email", e.target.value.trim(), {
                    shouldValidate: true, // Trigger validation after trimming
                  })
                },
              })}
              autoComplete="email"
              data-testid="email-input"
            />
            {errors.email && <ErrorMessage error={errors.email.message} />}
          </div>
          <div>
            <Input
              label="Số điện thoại"
              {...register("phone", {
                required: "Vui lòng nhập số điện thoại!",
                pattern: {
                  value:
                    /^(?:\+84|84)[3|5|7|8|9]{1}(\d{8})$|^(0[3|5|7|8|9]{1}[0-9]{8})$/,
                  message: "Số điện thoại không đúng định dạng!",
                },
              })}
              type="tel"
              autoComplete="tel"
              data-testid="phone-input"
            />
            {errors.phone && <ErrorMessage error={errors.phone.message} />}
          </div>
          <div>
            <Input
              label="Mật khẩu"
              {...register("password", {
                required: "Vui lòng nhập mật khẩu!",
                minLength: {
                  value: 8,
                  message: "Mật khẩu phải có ít nhất 8 ký tự!",
                },
              })}
              type="password"
              autoComplete="new-password"
              data-testid="password-input"
            />
            {errors.password && (
              <ErrorMessage error={errors.password.message} />
            )}
          </div>
          <div>
            <Input
              label="Xác nhận mật khẩu"
              {...register("confirm_password", {
                required: "Vui lòng xác nhận mật khẩu!",
                validate: (value) =>
                  value === password || "Mật khẩu xác nhận không khớp!",
              })}
              type="password"
              autoComplete="new-password"
              data-testid="confirm-password-input"
            />
            {errors.confirm_password && (
              <ErrorMessage error={errors.confirm_password.message} />
            )}
          </div>
        </div>

        {serverError && (
          <ErrorMessage error={serverError} data-testid="register-error" />
        )}
        <span className="text-center text-ui-fg-base text-small-regular mt-6">
          Bằng cách tạo tài khoản, bạn đồng ý với{" "}
          <LocalizedClientLink href="/chinh-sach-bao-mat" className="underline">
            Chính sách bảo mật
          </LocalizedClientLink>{" "}
          và{" "}
          <LocalizedClientLink
            href="/chinh-sach-mua-hang-va-thanh-toan"
            className="underline"
          >
            Chính sách mua hàng và thanh toán
          </LocalizedClientLink>{" "}
          của Bông Lúa.
        </span>

        <button
          type="submit"
          className="w-full mt-6 bg-primary text-white rounded-md py-2"
          disabled={isSubmitting}
          data-testid="register-button"
        >
          {isSubmitting ? "Đang đăng ký ..." : "Đăng ký"}
        </button>
      </form>

      <span className="text-center text-sm mt-2">
        Đã là thành viên?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="underline text-primary"
        >
          Đăng nhập
        </button>
        .
      </span>
    </div>
  )
}

export default Register
