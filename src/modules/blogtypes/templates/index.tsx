import { getBlogList } from "@lib/data/blog"
import TextAnco from "@modules/layout/components/text-anco"
import { notFound } from "next/navigation"
import { BlogQueryParams } from "types/global"
import BlogCard from "@modules/layout/components/blogs/blogCard"
import BlogSlider from "@modules/layout/components/blogs/slider"
import { Pagination } from "@modules/store/components/pagination"

const BLOG_LIMIT = 12
const BLOG_COL_SHOW = 3

export default async function BlogTypesTemplate({
  page,
  type,
  name,
}: {
  type: string
  page?: string
  name: string
}) {
  const pageNumber = page ? parseInt(page) : 1

  const queryParams: BlogQueryParams = {}
  if (type) {
    queryParams.type = type
  }

  const { blogs, count } = await getBlogList(pageNumber || 1, queryParams)

  const totalPages = Math.ceil(count / BLOG_LIMIT)

  if (!blogs) {
    notFound()
  }

  const relatedBlogs = blogs.slice(BLOG_COL_SHOW)

  return (
    <div className="content-container py-3 sm:py-9 mt-4 sm:mt-12 mb-16 sm:mb-24">
      <TextAnco backgroundText="Bài Viết" title="BLog" subTitle={name} />
      <div className="flex flex-col gap-y-4 sm:gap-y-8 mt-8 sm:mt-16">
        {blogs.slice(0, BLOG_COL_SHOW).map((blog, index) => (
          <BlogCard blog={blog} isRow={true} key={index} />
        ))}
      </div>
      {totalPages > 1 && (
        <Pagination
          data-testid="blog-pagination"
          page={pageNumber}
          totalPages={totalPages}
        />
      )}
      {relatedBlogs.length > 0 && (
        <div className="mt-8 sm:mt-12 mb-6 sm:mb-12">
          <h1 className="mb-4 sm:mb-8 font-bold font-times text-xl md:text-2xl">
            Bài viết liên quan
          </h1>
          <BlogSlider blogs={blogs.slice(BLOG_COL_SHOW)} />
        </div>
      )}
    </div>
  )
}
