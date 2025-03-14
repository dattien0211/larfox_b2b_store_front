import { Metadata } from "next"
import { notFound } from "next/navigation"

import { getRegion, listRegions } from "@lib/data/regions"
import { getBlogTypeByValue, getBlogTypesList } from "@lib/data/blog-types"
import BlogTypesTemplate from "@modules/blogtypes/templates"

type Props = {
  params: { handle: string; countryCode: string }
  searchParams: {
    page?: string
  }
}

export async function generateStaticParams() {
  try {
    const countryCodes = await listRegions().then((regions) =>
      regions?.map((r) => r.countries?.map((c) => c.iso_2)).flat()
    )

    if (!countryCodes) {
      return []
    }

    const { blogTypes } = await getBlogTypesList()

    return countryCodes
      .map((countryCode) =>
        blogTypes.map((blogType) => ({
          countryCode,
          handle: blogType.value,
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
  const { handle } = params
  const region = await getRegion(params.countryCode)

  if (!region) {
    notFound()
  }

  const blogType = await getBlogTypeByValue(handle)

  if (!blogType) {
    notFound()
  }

  return {
    title: `${blogType.name} | Bông Lúa`,
    description: `${blogType.description}`,
  }
}

export default async function BlogTypePage({ params, searchParams }: Props) {
  const blogType = await getBlogTypeByValue(params.handle)

  if (!blogType) {
    notFound()
  }

  const { page } = searchParams

  return (
    <BlogTypesTemplate
      page={page}
      type={params.handle}
      name={blogType.name}
    ></BlogTypesTemplate>
  )
}

export const revalidate = 600
