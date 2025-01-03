import { Metadata } from "next"
import InteractiveLink from "@modules/common/components/interactive-link"

export const metadata: Metadata = {
  title: "404",
  description: "Xuất hiện lỗi 404",
}

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-[calc(100vh-64px)] px-4">
      <h1 className="text-xl-semi sm:text-2xl-semi text-ui-fg-base">
        Không tìm thấy trang
      </h1>
      <p className="text-black-30 text-center ">
        Trang Web bạn đang cố truy cập có vẻ không tồn tại.
      </p>
      <InteractiveLink href="/">Quay lại trang chủ</InteractiveLink>
    </div>
  )
}
