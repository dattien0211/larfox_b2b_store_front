import { Metadata } from "next"
import { notFound } from "next/navigation"

import ProductTemplate from "@modules/products/templates"
import { getRegion, listRegions } from "@lib/data/regions"
import { getProductByHandle } from "@lib/data/products"
import { sdk } from "@lib/config"
import { getToken } from "@lib/data/cookies"
import { getCustomer } from "@lib/data/customer"

type Props = {
  params: { countryCode: string; handle: string }
}

export async function generateStaticParams() {
  try {
    const countryCodes = await listRegions().then((regions) =>
      regions?.map((r) => r.countries?.map((c) => c.iso_2)).flat()
    )

    if (!countryCodes) {
      return []
    }

    const { products } = await sdk.store.product.list(
      { fields: "handle" },
      { next: { tags: ["products"] } }
    )

    return countryCodes
      .map((countryCode) =>
        products.map((product) => ({
          countryCode,
          handle: product.handle,
        }))
      )
      .flat()
      .filter((param) => param.handle)
  } catch (error) {
    console.error(
      `Failed to generate static paths for product pages: ${
        error instanceof Error ? error.message : "Unknown error"
      }.`
    )
    return []
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Fetch region first since product fetch depends on it
  const region = await getRegion(params.countryCode)
  if (!region) {
    notFound()
  }

  const product = await getProductByHandle(params.handle, region.id)
  if (!product) {
    notFound()
  }

  const formattedTitle = product.title
    ? product.title.toLowerCase().replace(/^\w/, (c) => c.toUpperCase())
    : ""

  return {
    title: `${formattedTitle} | Bông Lúa`,
    description: `${formattedTitle}`,
    openGraph: {
      title: `${formattedTitle} | Bông Lúa`,
      description: `${formattedTitle}`,
      images: product.thumbnail ? [product.thumbnail] : [],
    },
  }
}

export default async function ProductPage({ params }: Props) {
  const region = await getRegion(params.countryCode)
  if (!region) notFound()

  // Run product and customer fetches concurrently after region is available
  const [product, customer] = await Promise.all([
    getProductByHandle(params.handle, region.id),
    getCustomer().catch(() => null),
  ])

  if (!product) notFound()

  const token = getToken()

  return (
    <ProductTemplate
      product={product}
      region={region}
      countryCode={params.countryCode}
      customer={customer}
      token={token}
    />
  )
}

export const revalidate = 30
