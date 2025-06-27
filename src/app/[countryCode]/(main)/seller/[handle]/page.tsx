import { redirect } from "next/navigation"

type Props = {
  params: { countryCode: string; handle: string }
}
export default async function SellerPage({ params }: Props) {
  redirect(`/${params.countryCode}/seller/${params.handle}/home`)
}
