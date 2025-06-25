import { Metadata } from "next"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  title: "Đăng nhập",
  description: "Đăng nhập.",
}

export default function SignIn() {
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
                <div className="pt-2">
                  <button
                    type="submit"
                    className="btn-hover w-full gradient-bg text-white font-semibold py-4 rounded-lg transition-all duration-300 hover:gradient-glow"
                  >
                    <i className="fas fa-user-plus mr-2"></i>
                    Sign In
                  </button>
                </div>
              </form>

              <div className="text-center mt-8 pt-6 border-t border-gray-200">
                <p className="text-gray-600">
                  {"Don't have an account? "}
                  <LocalizedClientLink
                    href="/tai-khoan/dang-ky"
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
