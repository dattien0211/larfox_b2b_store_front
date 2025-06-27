"use client"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { signup } from "@lib/data/customer"
import { useForm } from "react-hook-form"
import Input from "@modules/common/components/input"
import { useState } from "react"
import ErrorMessage from "@modules/checkout/components/error-message"

type RegisterFormInputs = {
  first_name: string
  last_name: string
  company_name: string
  country_code: string
  company_website: string
  job_title: string
  email: string
  phone: string
  password: string
  confirm_password: string
}

export default function SignUp() {
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
                {/*<div>*/}
                {/*  <label className="block text-sm font-semibold text-gray-700 mb-2">*/}
                {/*    Country / Region **/}
                {/*  </label>*/}
                {/*  <select className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none text-gray-700">*/}
                {/*    <option value="">Select your country/region</option>*/}
                {/*    <option value="SG">Singapore</option>*/}
                {/*    <option value="US">United States</option>*/}
                {/*    <option value="CN">China</option>*/}
                {/*    <option value="JP">Japan</option>*/}
                {/*    <option value="KR">South Korea</option>*/}
                {/*    <option value="VN">Vietnam</option>*/}
                {/*    <option value="TH">Thailand</option>*/}
                {/*    <option value="MY">Malaysia</option>*/}
                {/*    <option value="ID">Indonesia</option>*/}
                {/*    <option value="PH">Philippines</option>*/}
                {/*  </select>*/}
                {/*</div>*/}

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
                          shouldValidate: true, // Trigger validation after trimming
                        })
                      },
                    })}
                    autoComplete="email"
                    data-testid="email-input"
                    placeholder="your.email@company.com"
                  />
                  {errors.email && (
                    <ErrorMessage error={errors.email.message} />
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
                      <ErrorMessage error={errors.password.message} />
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Confirm Password *
                  </label>
                  <div className="relative">
                    <Input
                      {...register("confirm_password", {
                        required: "Vui lòng xác nhận mật khẩu!",
                        validate: (value) =>
                          value === password || "Mật khẩu xác nhận không khớp!",
                      })}
                      type="password"
                      autoComplete="new-password"
                      data-testid="confirm-password-input"
                      placeholder="Confirm your password"
                    />
                    {errors.confirm_password && (
                      <ErrorMessage error={errors.confirm_password.message} />
                    )}
                  </div>
                </div>

                {/*<div>*/}
                {/*  <label className="block text-sm font-semibold text-gray-700 mb-2">*/}
                {/*    Company Name **/}
                {/*  </label>*/}
                {/*  <Input*/}
                {/*    {...register("company_name", {*/}
                {/*      required: "Vui lòng nhập tên công ty",*/}
                {/*    })}*/}
                {/*    autoComplete="name"*/}
                {/*    data-testid=""*/}
                {/*    placeholder="Your company name"*/}
                {/*  />*/}
                {/*</div>*/}

                {/*<div>*/}
                {/*  <label className="block text-sm font-semibold text-gray-700 mb-2">*/}
                {/*    Company Website*/}
                {/*  </label>*/}
                {/*  <Input*/}
                {/*    {...register("company_website")}*/}
                {/*    type={"url"}*/}
                {/*    autoComplete="name"*/}
                {/*    data-testid=""*/}
                {/*    placeholder="https://www.yourcompany.com"*/}
                {/*  />*/}
                {/*</div>*/}

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name *
                  </label>
                  <Input
                    {...register("first_name", {
                      required: "",
                    })}
                    autoComplete="given-name"
                    data-testid=""
                    placeholder="Your first name"
                  />
                  {errors.first_name && (
                    <ErrorMessage error={errors.first_name.message} />
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <Input
                    {...register("last_name", {
                      required: "",
                    })}
                    autoComplete="cc-name"
                    data-testid=""
                    placeholder="Your last name"
                  />
                  {errors.last_name && (
                    <ErrorMessage error={errors.last_name.message} />
                  )}
                </div>

                {/*<div>*/}
                {/*  <label className="block text-sm font-semibold text-gray-700 mb-2">*/}
                {/*    Job Title **/}
                {/*  </label>*/}
                {/*  <Input*/}
                {/*    {...register("job_title", {*/}
                {/*      required: "",*/}
                {/*    })}*/}
                {/*    autoComplete="job-title"*/}
                {/*    data-testid=""*/}
                {/*    placeholder="Your job title"*/}
                {/*  />*/}
                {/*</div>*/}

                <div className="pt-4">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="mt-1 w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
                    />
                    <span className="text-sm text-gray-700 leading-relaxed">
                      {"I have read and agreed to all "}
                      <span className="text-primary hover:underline font-medium cursor-pointer">
                        Policies and Rules
                      </span>
                      ,
                      <span className="text-primary hover:underline font-medium cursor-pointer">
                        Terms of Use
                      </span>
                      {", and "}
                      <span className="text-primary hover:underline font-medium cursor-pointer">
                        Legal Terms
                      </span>
                      {
                        " of Larfox.com, and to receive more information about its products and services."
                      }
                    </span>
                  </label>
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-hover w-full gradient-bg text-white font-semibold py-4 rounded-lg transition-all duration-300 hover:gradient-glow"
                  >
                    <i className="fas fa-user-plus mr-2"></i>
                    {isSubmitting ? "Signing Up" : "Sign Up"}
                  </button>
                </div>
              </form>

              <div className="text-center mt-8 pt-6 border-t border-gray-200">
                <p className="text-gray-600">
                  {"Already have an account? "}
                  <LocalizedClientLink
                    href="/account/sign-in"
                    className="text-primary hover:underline font-medium cursor-pointer"
                  >
                    Sign In
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
