import { Metadata } from "next"

import ProfilePhone from "@modules/account//components/profile-phone"
import ProfileBillingAddress from "@modules/account/components/profile-billing-address"
import ProfileEmail from "@modules/account/components/profile-email"
import ProfileName from "@modules/account/components/profile-name"
import ProfilePassword from "@modules/account/components/profile-password"

import { notFound } from "next/navigation"
import { listRegions } from "@lib/data/regions"
import { getCustomer } from "@lib/data/customer"
import RiceSpike from "@modules/common/components/rice-spike"

export const metadata: Metadata = {
  title: "Thông Tin Tài Khoản | Bông Lúa",
  description: "Xem và sửa tài khoản của bạn.",
}

export default async function Profile() {
  const customer = await getCustomer()
  const regions = await listRegions()

  if (!customer || !regions) {
    notFound()
  }

  return (
    <div
      className="w-full bg-white rounded-lg shadow-lg p-4 relative"
      data-testid="profile-page-wrapper"
    >
      <RiceSpike />

      <section className="mb-8 flex flex-col gap-y-4  ">
        <h1 className="sm:text-28 text-lg font-semibold text-primary font-times capitalize">
          Thông tin tài khoản
        </h1>
        <p className="text-sm sm:text-base">
          Xem và cập nhật thông tin hồ sơ của bạn, bao gồm tên, email và số điện
          thoại. Bạn cũng có thể cập nhật địa chỉ thanh toán hoặc thay đổi mật
          khẩu của mình.
        </p>
      </section>

      <section className="flex flex-col gap-y-8 w-full">
        <ProfileName customer={customer} />
        <Divider />
        {/* <ProfileEmail customer={customer} />
        <Divider /> */}
        <ProfilePhone customer={customer} />
        <Divider />
        {/* <ProfilePassword customer={customer} />
        <Divider /> */}
        <ProfileBillingAddress customer={customer} regions={regions} />
      </section>
    </div>
  )
}

const Divider = () => {
  return <div className="w-full h-px bg-gray-200" />
}
