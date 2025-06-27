import { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Thông tin tài khoản",
  description: "Thông tin tài khoản.",
}

export default function Login() {
  redirect("/account/sign-in")
}
