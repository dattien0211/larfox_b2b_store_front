import { getBlogList } from "@lib/data/blog"
import { notFound } from "next/navigation"
import { BlogQueryParams, BlogType } from "types/global"
import BlogCard from "@modules/layout/components/blogs/blogCard"
import { Pagination } from "@modules/store/components/pagination"
import clsx from "clsx"
import RiceSpike from "@modules/common/components/rice-spike"

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
  const BLOG_LIMIT = 12
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

  return (
    <div className="bg-primary-bg py-3 sm:py-6">
      <section className="relative content-container py-4 sm:py-6 mb-6 sm:mb-10 rounded-lg shadow-lg bg-white">
        <RiceSpike />
        <h1 className="text-center font-times capitalize text-primary text-xl sm:text-3xl font-semibold">
          {isAllBLogs ? "Tất cả bài viết" : name}
        </h1>
        <div
          className={clsx(
            "mt-3 sm:mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6"
          )}
        >
          {blogs.map((blog, index) => (
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
      </section>
    </div>
  )
}
