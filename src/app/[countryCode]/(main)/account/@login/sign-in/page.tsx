"use client"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Input from "@modules/common/components/input"
import { useForm } from "react-hook-form"
import { login } from "@lib/data/customer"
import { useState } from "react"
import ErrorMessage from "@modules/checkout/components/error-message"

type LoginFormInputs = {
  email: string
  password: string
}

export default function SignIn() {
  const [serverError, setServerError] = useState<string | null>(null)
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>()

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      const formData = new FormData()
      formData.append("email", data.email)
      formData.append("password", data.password)
      const error = await login(null, formData)

      if (error) {
        setServerError("Email hoặc mật khẩu không hợp lệ!")
      }
    } catch (error: any) {
      setServerError(error.message || "Đã xảy ra lỗi khi đăng nhập!")
      console.error("Unexpected Error:", error)
    }
  }
  return (
    <>
      <section id="registration-form" className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">
                Join <span className="gradient-text">LARFOX.COM</span>
              </h1>
              <p className="text-xl text-gray-600">
                Connect with global B2B partners and unlock new opportunities
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    {...register("email", {
                      required: "Vui lòng nhập email!",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Email không đúng định dạng!",
                      },
                      onChange: (e) => {
                        setValue("email", e.target.value.trim(), {
                          shouldValidate: true,
                        })
                      },
                    })}
                    autoComplete="email"
                    data-testid="email-input"
                    placeholder="your.email@company.com"
                  />
                  {errors.email && (
                    <ErrorMessage
                      error={errors.email.message}
                      data-testid="email-error"
                    />
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Password *
                  </label>
                  <div className="relative">
                    <Input
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
                      placeholder="Enter your password"
                    />
                    {errors.password && (
                      <ErrorMessage
                        error={errors.password.message}
                        data-testid="password-error"
                      />
                    )}
                    {serverError && (
                      <ErrorMessage
                        error={serverError}
                        data-testid="server-error"
                      />
                    )}
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      <i className="fas fa-eye" id="password-eye"></i>
                    </button>
                  </div>
                </div>
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-hover w-full gradient-bg text-white font-semibold py-4 rounded-lg transition-all duration-300 hover:gradient-glow"
                  >
                    <i className="fas fa-user-plus mr-2"></i>
                    {isSubmitting ? "Signing In" : "Sign In"}
                  </button>
                </div>
              </form>

              <div className="text-center mt-8 pt-6 border-t border-gray-200">
                <p className="text-gray-600">
                  {"Don't have an account? "}
                  <LocalizedClientLink
                    href="/account/sign-up"
                    className="text-primary hover:underline font-medium cursor-pointer"
                  >
                    Sign Up
                  </LocalizedClientLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
