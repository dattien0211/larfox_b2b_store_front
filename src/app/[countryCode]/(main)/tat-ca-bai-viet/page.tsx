import { Metadata } from "next"

import BlogTypesTemplate from "@modules/blogtypes/templates"
import { getBlogTypesList } from "@lib/data/blog-types"

type Props = {
  searchParams: {
    page?: string
  }
}

export const metadata: Metadata = {
  title: "Tất Cả Bài Viết | Bông Lúa",
  description: "Khám phá tất cả bài viết trên Bông Lúa.",
}

export default async function AllBlogsPage({ searchParams }: Props) {
  const { page } = searchParams

  const { blogTypes } = await getBlogTypesList()

  return (
    <BlogTypesTemplate
      page={page}
      name={"Bài viết"}
      isAllBLogs={true}
      blogTypes={blogTypes}
    ></BlogTypesTemplate>
  )
}

export const revalidate = 60
