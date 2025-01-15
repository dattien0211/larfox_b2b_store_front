import { Metadata } from "next"
import { notFound } from "next/navigation"
import DOMPurify from "isomorphic-dompurify"
import "react-quill/dist/quill.snow.css"

import { getRegion, listRegions } from "@lib/data/regions"

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
  const sanitizedContent = DOMPurify.sanitize(blog.description)

  return (
    <div className="content-container py-4 sm:py-8 mb-16 sm:mb-24">
      <div
        className="ql-editor rich-text-content"
        dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      ></div>
    </div>
  )
}

export const dynamic = "force-dynamic"
