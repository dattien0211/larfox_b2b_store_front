import { getBlogList } from "@lib/data/blog"
import Text from "@modules/layout/components/text"
import { notFound } from "next/navigation"
import { BlogQueryParams, BlogType } from "types/global"
import BlogCard from "@modules/layout/components/blogs/blogCard"
import BlogSlider from "@modules/layout/components/blogs/slider"
import { Pagination } from "@modules/store/components/pagination"
import clsx from "clsx"

export default async function BlogTypesTemplate({
  page,
  type,
  name,
  isAllBLogs = false,
  blogTypes,
}: {
  type?: string
  page?: string
  name?: string
  isAllBLogs?: boolean
  blogTypes?: BlogType[]
}) {
  const BLOG_LIMIT = isAllBLogs ? 6 : 12
  const BLOG_COL_SHOW = isAllBLogs ? 12 : 3
  const pageNumber = page ? parseInt(page) : 1
  const queryParams: BlogQueryParams = {}

  if (type) {
    queryParams.type = type
  }

  queryParams.limit = BLOG_LIMIT

  const { blogs, count } = await getBlogList(pageNumber || 1, queryParams)

  const totalPages = Math.ceil(count / BLOG_LIMIT)

  if (!blogs) {
    notFound()
  }

  const relatedBlogs = !isAllBLogs ? blogs.slice(BLOG_COL_SHOW) : []

  return (
    <div className="content-container py-3 sm:py-9 mt-4 sm:mt-12 mb-16 sm:mb-32">
      <Text backgroundText="Bài Viết" title="BLog" subTitle={name} />
      <div
        className={clsx("mt-8 sm:mt-16", {
          "flex flex-col gap-y-4 sm:gap-y-8": !isAllBLogs,
          "grid grid-cols-3 gap-x-6 gap-y-10 ": isAllBLogs,
        })}
      >
        {blogs.slice(0, BLOG_COL_SHOW).map((blog, index) => (
          <BlogCard
            blog={blog}
            isRow={!isAllBLogs ? true : false}
            key={index}
            blogTypes={blogTypes}
          />
        ))}
      </div>
      {totalPages > 1 && (
        <Pagination
          data-testid="blog-pagination"
          page={pageNumber}
          totalPages={totalPages}
        />
      )}
      {!isAllBLogs && relatedBlogs.length > 0 && (
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
