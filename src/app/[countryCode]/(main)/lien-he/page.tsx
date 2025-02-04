import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Liên hệ| Anco",
  description: "Các thông tin liên quan đến liên hệ của Anco.",
}

export default async function ContactPage() {
  return (
    <>
      <div className="py-9 content-container mb-16 sm:mb-24">
        <h1 className="flex font-bold flex-col gap-x-6 sm:text-3xl text-2xl font-times">
          Liên hệ
        </h1>
      </div>
    </>
  )
}
