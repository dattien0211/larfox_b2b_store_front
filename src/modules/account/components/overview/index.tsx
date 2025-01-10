import { Container } from "@medusajs/ui"

import ChevronDown from "@modules/common/icons/chevron-down"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { convertToLocale } from "@lib/util/money"
import { HttpTypes } from "@medusajs/types"

type OverviewProps = {
  customer: HttpTypes.StoreCustomer | null
  orders: HttpTypes.StoreOrder[] | null
}

const Overview = ({ customer, orders }: OverviewProps) => {
  return (
    <div data-testid="overview-page-wrapper">
      <div className="block">
        <div className="text-lg sm:text-xl flex flex-col sm:flex-row justify-between items-center mb-4 font-times">
          <span data-testid="welcome-message" data-value={customer?.first_name}>
            Xin chào{" "}
            <span className="text-primary font-semibold">
              {customer?.first_name}
            </span>
          </span>
          <span className="text-lg sm:text-xl">
            Email:{" "}
            <span
              className="font-semibold text-primary"
              data-testid="customer-email"
              data-value={customer?.email}
            >
              {customer?.email}
            </span>
          </span>
        </div>
        <div className="flex flex-col py-8 border-t border-gray-200">
          <div className="flex flex-col gap-y-4 h-full col-span-1 row-span-2 flex-1">
            <div className="flex flex-col gap-y-4">
              <div className="flex items-center gap-x-2">
                <h3 className="text-2xl sm:text-3xl font-times text-primary font-semibold ">
                  Đơn hàng gần đây
                </h3>
              </div>
              <ul
                className="flex flex-col gap-y-4"
                data-testid="orders-wrapper"
              >
                {orders && orders.length > 0 ? (
                  orders.slice(0, 5).map((order) => {
                    return (
                      <li
                        key={order.id}
                        data-testid="order-wrapper"
                        data-value={order.id}
                      >
                        <LocalizedClientLink
                          href={`/tai-khoan/don-hang/chi-tiet/${order.id}`}
                        >
                          <Container className="bg-gray-50 flex justify-between items-center p-4 text-sm md:text-base gap-x-4 gap-y-2">
                            <div className="flex flex-col sm:flex-row flex-wrap gap-x-2 sm:gap-x-4 flex-1 gap-y-2">
                              <div className="w-full sm:w-1/5">
                                <span className="font-semibold text-sm">
                                  Ngày đặt
                                </span>
                                <div data-testid="order-created-date">
                                  {new Date(
                                    order.created_at
                                  ).toLocaleDateString("vi-VN")}
                                </div>
                              </div>
                              <div className="w-full sm:w-1/2">
                                <span className="font-semibold text-sm">
                                  Mã đơn hàng
                                </span>
                                <div
                                  data-testid="order-id"
                                  data-value={order.id}
                                  className="uppercase"
                                >
                                  {order.id}
                                </div>
                              </div>
                              <div>
                                <span className="font-semibold text-sm">
                                  Tổng thành tiền
                                </span>
                                <div data-testid="order-amount">
                                  {convertToLocale({
                                    amount: order.total,
                                    currency_code: order.currency_code,
                                  })}
                                </div>
                              </div>
                            </div>
                            <button
                              className="flex items-center justify-between"
                              data-testid="open-order-button"
                            >
                              <span className="sr-only">
                                Đi đến đơn hàng #{order.display_id}
                              </span>
                              <ChevronDown className="-rotate-90" />
                            </button>
                          </Container>
                        </LocalizedClientLink>
                      </li>
                    )
                  })
                ) : (
                  <span data-testid="no-orders-message">
                    Chưa có phát sinh đơn hàng gần đây.
                  </span>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview
