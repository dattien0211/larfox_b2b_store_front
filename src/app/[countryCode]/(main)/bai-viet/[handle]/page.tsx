import { Metadata } from "next"
import { notFound } from "next/navigation"
import DOMPurify from "isomorphic-dompurify"
import "react-quill/dist/quill.snow.css"

import { getRegion, listRegions } from "@lib/data/regions"

import { getBlogByHandle, getBlogList } from "@lib/data/blog"
import BlogSlider from "@modules/layout/components/blogs/slider"
import { BlogQueryParams } from "types/global"
import RiceSpike from "@modules/common/components/rice-spike"
import { getBlogTypeByValue } from "@lib/data/blog-types"
import Breadcrumb from "@modules/layout/components/bread-crumb"

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

  const formattedTitle = blog.title
    ? blog.title.toLowerCase().replace(/^\w/, (c) => c.toUpperCase())
    : ""
  return {
    title: `${formattedTitle} | Bông Lúa`,
    description: `${blog.short_description}`,
    openGraph: {
      title: `${blog.title} | Bông Lúa`,
      description: `${blog.short_description}`,
      images: blog.thumbnail?.url ? [blog.thumbnail?.url] : [],
    },
  }
}

export default async function BlogPage({ params }: Props) {
  const blog = await getBlogByHandle(params.handle)

  if (!blog) {
    notFound()
  }

  const blogType = (await getBlogTypeByValue(blog.type)) || undefined

  const sanitizedContent = DOMPurify.sanitize(blog.description)

  const queryParams: BlogQueryParams = {
    type: blog.type,
  }
  const { blogs } = await getBlogList(1, queryParams)

  const relatedBlogs = blogs?.filter((item) => item.id !== blog.id)

  return (
    <div className="bg-primary-bg py-3 sm:py-6">
      <section className="relative content-container py-4 sm:py-6 mb-3 sm:mb-6 rounded-lg shadow-lg bg-white">
        <Breadcrumb isBlog={true} blogType={blogType} blog={blog} />
      </section>
      <section className="relative content-container py-4 sm:py-6 mb-6 sm:mb-10 rounded-lg shadow-lg bg-white">
        <RiceSpike />
        <div
          className="ql-editor rich-text-content"
          dangerouslySetInnerHTML={{ __html: sanitizedContent }}
        ></div>
      </section>

      {relatedBlogs.length > 0 && (
        <section className="relative content-container py-4 sm:py-6 my-6 sm:my-10 rounded-lg shadow-lg bg-white">
          <RiceSpike />
          <div>
            <h1 className="mb-3 sm:mb-6 font-bold font-times text-xl md:text-28 text-primary">
              Bài viết liên quan
            </h1>
            <BlogSlider
              blogs={relatedBlogs}
              slidesPerView={3}
              spaceBetween={16}
            />
          </div>
        </section>
      )}
    </div>
  )
}
