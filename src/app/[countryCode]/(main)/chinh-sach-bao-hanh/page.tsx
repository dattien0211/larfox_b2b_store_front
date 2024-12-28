import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Chính Sách Bảo Hành | Anco",
  description: "Các thông tin liên quan đến chính sách bảo hành của Anco.",
}

export default async function SecurityPolicyPage() {
  return (
    <>
      <div className="py-9 content-container !mb-24">
        <h1 className="flex font-bold flex-col gap-x-6 sm:text-3xl text-2xl ">
          Chính Sách Bảo Hành
        </h1>
      </div>
    </>
  )
}
