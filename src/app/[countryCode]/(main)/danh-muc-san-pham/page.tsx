import { redirect } from "next/navigation"
// Type for params
type Params = {
  countryCode: string
}

export default function RedirectPage({ params }: { params: Params }) {
  const { countryCode } = params

  // Perform a server-side redirect
  redirect(`/${countryCode}/tat-ca-san-pham`)
}
