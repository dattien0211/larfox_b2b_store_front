import React, { useEffect, useImperativeHandle, useState } from "react"

import Eye from "@modules/common/icons/eye"
import EyeOff from "@modules/common/icons/eye-off"

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & {
  errors?: Record<string, unknown>
  touched?: Record<string, unknown>
  name: string
  topLabel?: string
  error?: any
  isRequired?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      placeholder,
      type,
      name,
      touched,
      required,
      topLabel,
      error,
      isRequired,
      ...props
    },
    ref
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null)
    const [showPassword, setShowPassword] = useState(false)
    const [inputType, setInputType] = useState(type)

    useEffect(() => {
      if (type === "password" && showPassword) {
        setInputType("text")
      }

      if (type === "password" && !showPassword) {
        setInputType("password")
      }
    }, [type, showPassword])

    useImperativeHandle(ref, () => inputRef.current!)

    return (
      <div className="flex flex-col w-full">
        <div className="flex relative z-0 w-full">
          <input
            type={inputType}
            name={name}
            placeholder={placeholder}
            required={required}
            className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none pr-12"
            {...props}
            ref={inputRef}
          />
          {type === "password" && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-ui-fg-subtle px-4 focus:outline-none transition-all duration-150 outline-none focus:text-ui-fg-base absolute right-0 top-3"
            >
              {showPassword ? <Eye /> : <EyeOff />}
            </button>
          )}
        </div>
        {error && (
          <div className="text-red-500 text-sm mt-2">{error ? error : ""}</div> // Error message below input
        )}
      </div>
    )
  }
)

Input.displayName = "Input"

export default Input
