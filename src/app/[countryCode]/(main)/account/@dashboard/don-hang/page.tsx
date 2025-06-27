import { Metadata } from "next"

import OrderOverview from "@modules/account/components/order-overview"
import { notFound } from "next/navigation"
import { listOrders } from "@lib/data/orders"
import Divider from "@modules/common/components/divider"
import TransferRequestForm from "@modules/account/components/transfer-request-form"
import RiceSpike from "@modules/common/components/rice-spike"

export const metadata: Metadata = {
  title: "Đơn hàng | Bông Lúa",
  description: "Xem lại đơn hàng của bạn.",
}

export default async function Orders() {
  const orders = await listOrders()

  if (!orders) {
    notFound()
  }

  return (
    <div
      className="w-full bg-white rounded-lg shadow-lg px-4 pt-4 pb-8 relative"
      data-testid="orders-page-wrapper"
    >
      <RiceSpike />

      <section className="mb-8 flex flex-col gap-y-4">
        <h1 className="sm:text-28 text-xl font-semibold text-primary font-times">
          Đơn hàng
        </h1>
        <p className="text-base-regular">
          Xem các đơn hàng trước đây của bạn và trạng thái của chúng. Bạn cũng
          có thể tạo yêu cầu trả hàng hoặc đổi hàng nếu cần.
        </p>
      </section>

      <section>
        <OrderOverview orders={orders} />
        <Divider className="my-16" />
        <TransferRequestForm />
      </section>
    </div>
  )
}
