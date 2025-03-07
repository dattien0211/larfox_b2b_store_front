import { Heading, Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"

const EmptyCartMessage = () => {
  return (
    <div
      className="py-24 px-2 flex flex-col justify-center items-start bg-white sm:px-4 rounded-lg shadow-lg"
      data-testid="empty-cart-message"
    >
      <h1 className="flex flex-row sm:text-3xl text-xl capitalize font-semibold gap-x-2 items-baseline text-primary font-times">
        Giỏ hàng
      </h1>
      <Text className="text-base-regular mt-4 mb-6 max-w-[32rem] text-justify">
        Bạn chưa có sản phẩm nào trong giỏ hàng. Hãy thay đổi điều đó, sử dụng
        liên kết dưới đây để bắt đầu khám phá các sản phẩm của chúng tôi.
      </Text>
      <div className="text-primary">
        <InteractiveLink href="/tat-ca-san-pham">
          Khám phá sản phẩm
        </InteractiveLink>
      </div>
    </div>
  )
}

export default EmptyCartMessage
