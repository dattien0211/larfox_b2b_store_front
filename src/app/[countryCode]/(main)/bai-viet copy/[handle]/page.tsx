import { Metadata } from "next"
import { notFound } from "next/navigation"

import ProductTemplate from "@modules/products/templates"
import { getRegion, listRegions } from "@lib/data/regions"
import { getProductByHandle } from "@lib/data/products"

import { getBlogByHandle, getListBlog } from "@lib/data/blog"

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

    const { blogs } = await getListBlog()

    return countryCodes
      .map((countryCode) =>
        blogs.map((blog) => ({
          countryCode,
          handle: blog.handle,
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

  const blog = await getBlogByHandle(handle)

  if (!blog) {
    notFound()
  }

  return {
    title: `${blog.title} | Anco`,
    description: `${blog.short_description}`,
    openGraph: {
      title: `${blog.title} | Anco`,
      description: `${blog.short_description}`,
      images: blog.thumbnail ? [blog.thumbnail] : [],
    },
  }
}

export default async function ProductPage({ params }: Props) {
  const blog = await getBlogByHandle(params.handle)

  if (!blog) {
    notFound()
  }

  return <></>
}
