import { Heading, Text } from "@medusajs/ui"
import TransferActions from "@modules/order/components/transfer-actions"
import TransferImage from "@modules/order/components/transfer-image"

export default async function TransferPage({
  params,
}: {
  params: { id: string; token: string }
}) {
  const { id, token } = params

  return (
    <div className="flex flex-col gap-y-4 items-start w-2/5 mx-auto mt-10 mb-20">
      <TransferImage />
      <div className="flex flex-col gap-y-6">
        <Heading level="h1" className=" text-xl  text-zinc-900">
          Yêu cầu chuyển giao đơn hàng {id}
        </Heading>
        <Text className="text-zinc-600">
          Bạn đã nhận được yêu cầu chuyển quyền sở hữu đơn hàng ({id}). Nếu bạn
          đồng ý với yêu cầu này, bạn có thể phê duyệt việc chuyển giao bằng
          cách nhấp vào nút bên dưới.
        </Text>
        <div className="w-full h-px bg-zinc-200" />
        <Text className="text-zinc-600">
          Nếu bạn chấp nhận, chủ sở hữu mới sẽ đảm nhận toàn bộ trách nhiệm và
          quyền liên quan đến đơn hàng này.
        </Text>
        <Text className="text-zinc-600">
          Nếu bạn không nhận ra yêu cầu này hoặc muốn giữ quyền sở hữu, bạn
          không cần thực hiện thêm hành động nào.
        </Text>
        <div className="w-full h-px bg-zinc-200" />
        <TransferActions id={id} token={token} />
      </div>
    </div>
  )
}
