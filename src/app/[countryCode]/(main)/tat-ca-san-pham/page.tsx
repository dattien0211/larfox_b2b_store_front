import { Metadata } from "next"

import StoreTemplate from "@modules/store/templates"
import { SortOptions } from "@modules/categories/components/sort-category"
import { getCategoriesList } from "@lib/data/categories"

export const metadata: Metadata = {
  title: "Tất Cả Sản Phẩm | Anco",
  description: "Khám phá tất cả sản phẩm trên Anco.",
}

type Params = {
  searchParams: {
    ["sap-xep"]?: SortOptions
    page?: string
  }
  params: {
    countryCode: string
  }
}

export default async function StorePage({ searchParams, params }: Params) {
  const { page } = searchParams
  const sortBy = searchParams["sap-xep"]
  const categories = await getCategoriesList()

  return (
    <StoreTemplate
      allCategories={categories.product_categories}
      sortBy={sortBy}
      page={page}
      countryCode={params.countryCode}
    />
  )
}
