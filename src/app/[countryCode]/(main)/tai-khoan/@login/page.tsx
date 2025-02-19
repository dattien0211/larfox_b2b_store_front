import { Metadata } from "next"

import LoginTemplate from "@modules/account/templates/login-template"

export const metadata: Metadata = {
  title: "Thông tin tài khoản | Bông Lúa",
  description: "Thông tin tài khoản trên Bông Lúa.",
}

export default function Login() {
  return <LoginTemplate />
}
