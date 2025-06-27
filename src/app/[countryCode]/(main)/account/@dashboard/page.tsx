import { Metadata } from "next"
import { notFound, redirect } from "next/navigation"
import { getCustomer } from "@lib/data/customer"

export const metadata: Metadata = {
  title: "Tài Khoản | Larfox",
  description: "Đánh giá lại các hoạt động của tài khoản của bạn.",
}

export default async function OverviewTemplate() {
  const customer = await getCustomer().catch(() => null)

  if (!customer) {
    notFound()
  }

  redirect("/")
}
