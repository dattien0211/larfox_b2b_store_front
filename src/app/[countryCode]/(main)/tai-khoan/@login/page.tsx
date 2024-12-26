import { Metadata } from "next"

import LoginTemplate from "@modules/account/templates/login-template"

export const metadata: Metadata = {
  title: "Thông tin tài khoản | Anco",
  description: "Thông tin tài khoản trên Anco.",
}

export default function Login() {
  return <LoginTemplate />
}
