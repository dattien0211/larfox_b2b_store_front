import ClientLayout from "./client-layout"
import { getBrandList } from "@lib/data/brand"

export default async function SellerLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { handle: string }
}) {
  const { sellers } = await getBrandList()
  const seller = sellers.find((item) => item.handle === params.handle)

  return <ClientLayout seller={seller!}>{children}</ClientLayout>
}
