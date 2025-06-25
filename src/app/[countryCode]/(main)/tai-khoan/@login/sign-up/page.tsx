import { Metadata } from "next"

import LoginTemplate from "@modules/account/templates/login-template"

export const metadata: Metadata = {
  title: "Thông tin tài khoản",
  description: "Thông tin tài khoản.",
}

export default function SignUp() {
  return <LoginTemplate />
}
