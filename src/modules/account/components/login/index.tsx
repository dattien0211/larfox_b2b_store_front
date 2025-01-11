import { useState } from "react"
import { useForm } from "react-hook-form"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import Input from "@modules/common/components/input"
import ErrorMessage from "@modules/checkout/components/error-message"
import { login } from "@lib/data/customer"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

type LoginFormInputs = {
  email: string
  password: string
}

const Login = ({ setCurrentView }: Props) => {
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
      console.error("Unexpected Error:", error) // Logs unexpected errors to the console
    }
  }

  return (
    <div
      className="max-w-sm w-full flex flex-col items-center"
      data-testid="login-page"
    >
      <h1 className="sm:text-3xl text-2xl  mb-6 text-primary font-times">
        Đăng nhập
      </h1>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col w-full gap-y-4">
          <div>
            <Input
              label="Email"
              autoComplete="email"
              data-testid="email-input"
              {...register("email", {
                required: "Vui lòng nhập Email!",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Email không đúng định dạng!",
                },
                onChange: (e) => {
                  setValue("email", e.target.value.trim(), {
                    shouldValidate: true,
                  })
                },
              })}
            />
            {errors.email && (
              <ErrorMessage
                error={errors.email.message}
                data-testid="email-error"
              />
            )}
          </div>
          <div>
            <Input
              label="Mật khẩu"
              type="password"
              autoComplete="current-password"
              data-testid="password-input"
              {...register("password", {
                required: "Vui lòng nhập mật khẩu!",
                minLength: {
                  value: 8,
                  message: "Mật khẩu phải có ít nhất 8 ký tự!",
                },
              })}
            />
            {errors.password && (
              <ErrorMessage
                error={errors.password.message}
                data-testid="password-error"
              />
            )}
          </div>
        </div>
        {serverError && (
          <ErrorMessage error={serverError} data-testid="server-error" />
        )}
        <button
          type="submit"
          data-testid="sign-in-button"
          className="w-full mt-4 text-white bg-primary rounded-md py-2"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Đang đăng nhập ..." : "Đăng nhập"}
        </button>
      </form>
      <span className="text-center mt-4 text-sm sm:text-base">
        Chưa phải là thành viên?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
          className="underline text-primary"
          data-testid="register-button"
        >
          Đăng ký ngay
        </button>
        .
      </span>
    </div>
  )
}

export default Login
