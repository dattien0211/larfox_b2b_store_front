import { acceptTransferRequest } from "@lib/data/orders"
import { Heading, Text } from "@medusajs/ui"
import TransferImage from "@modules/order/components/transfer-image"

export default async function TransferPage({
  params,
}: {
  params: { id: string; token: string }
}) {
  const { id, token } = params

  const { success, error } = await acceptTransferRequest(id, token)

  return (
    <div className="flex flex-col gap-y-4 items-start w-2/5 mx-auto mt-10 mb-20">
      <TransferImage />
      <div className="flex flex-col gap-y-6">
        {success && (
          <>
            <Heading level="h1" className=" text-xl  text-zinc-900">
              Đơn hàng đã được vận chuyển!
            </Heading>
            <Text className="text-zinc-600">
              Đơn hàng: {id} đã được chuyển thành công cho chủ sở hữu mới.
            </Text>
          </>
        )}
        {!success && (
          <>
            <Text className="text-zinc-600">
              Đã xảy ra lỗi khi chấp nhận việc chuyển giao. Vui lòng thử lại.
            </Text>
            {error && (
              <Text className="text-red-500">Thông báo lỗi: {error}</Text>
            )}
          </>
        )}
      </div>
    </div>
  )
}
