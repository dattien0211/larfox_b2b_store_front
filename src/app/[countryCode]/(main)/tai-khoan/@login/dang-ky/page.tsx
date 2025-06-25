import { Metadata } from "next"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { useForm } from "react-hook-form"
import { signup } from "@lib/data/customer"

export const metadata: Metadata = {
  title: "Đăng ký tài khoản",
  description: "Đăng ký tài khoản.",
}

type RegisterFormInputs = {
  first_name: string
  email: string
  phone: string // Phone is required
  password: string
  confirm_password: string
}

export default function SignUp() {
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
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Country / Region *
                  </label>
                  <select className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none text-gray-700">
                    <option value="">Select your country/region</option>
                    <option value="SG">Singapore</option>
                    <option value="US">United States</option>
                    <option value="CN">China</option>
                    <option value="JP">Japan</option>
                    <option value="KR">South Korea</option>
                    <option value="VN">Vietnam</option>
                    <option value="TH">Thailand</option>
                    <option value="MY">Malaysia</option>
                    <option value="ID">Indonesia</option>
                    <option value="PH">Philippines</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Password *
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none pr-12"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      <i className="fas fa-eye" id="password-eye"></i>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Confirm Password *
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="confirm-password"
                      className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none pr-12"
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      <i className="fas fa-eye" id="confirm-password-eye"></i>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Website
                  </label>
                  <input
                    type="url"
                    className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
                    placeholder="https://www.yourcompany.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
                    placeholder="Your first name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
                    placeholder="Your last name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
                    placeholder="Your job title"
                  />
                </div>

                <div className="pt-4">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="mt-1 w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2"
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
                    className="btn-hover w-full gradient-bg text-white font-semibold py-4 rounded-lg transition-all duration-300 hover:gradient-glow"
                  >
                    <i className="fas fa-user-plus mr-2"></i>
                    Sign Up
                  </button>
                </div>
              </form>

              <div className="text-center mt-8 pt-6 border-t border-gray-200">
                <p className="text-gray-600">
                  {"Already have an account? "}
                  <LocalizedClientLink
                    href="/tai-khoan/dang-nhap"
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
