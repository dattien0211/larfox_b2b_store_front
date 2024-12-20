import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}

export default async function SecurityPolicyPage() {
  return (
    <>
      <div className="py-9 content-container !mb-24">
        <h1 className="flex font-bold flex-col gap-x-6 text-3xl">
          Chính Sách Bảo Hành
        </h1>
      </div>
    </>
  )
}
