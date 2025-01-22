import { Metadata } from "next"
import { notFound } from "next/navigation"
import DOMPurify from "isomorphic-dompurify"
import "react-quill/dist/quill.snow.css"

import { getRegion, listRegions } from "@lib/data/regions"

import { getBlogByHandle, getBlogList } from "@lib/data/blog"
import BlogSlider from "@modules/layout/components/blogs/slider"
import { BlogQueryParams } from "types/global"

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

    const { blogs } = await getBlogList()

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

export default async function BlogPage({ params }: Props) {
  const blog = await getBlogByHandle(params.handle)

  if (!blog) {
    notFound()
  }

  const sanitizedContent = DOMPurify.sanitize(blog.description)

  const queryParams: BlogQueryParams = {
    type: blog.type,
  }
  const { blogs } = await getBlogList(1, queryParams)

  const relatedBlogs = blogs?.filter((item) => item.id !== blog.id)

  return (
    <div className="content-container py-4 sm:py-8 mb-16 sm:mb-32">
      <div
        className="ql-editor rich-text-content"
        dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      ></div>

      {relatedBlogs.length > 0 && (
        <div className="mt-8 sm:mt-12 mb-6 sm:mb-12">
          <h1 className="mb-4 sm:mb-8 font-bold font-times text-xl md:text-2xl">
            Bài viết liên quan
          </h1>
          <BlogSlider blogs={relatedBlogs} />
        </div>
      )}
    </div>
  )
}

export const dynamic = "force-dynamic"
