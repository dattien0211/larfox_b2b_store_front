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
    min_price?: string
    max_price?: string
  }
  params: {
    countryCode: string
  }
}

export default async function StorePage({ searchParams, params }: Params) {
  const { page } = searchParams
  const sortBy = searchParams["sap-xep"]
  const categories = await getCategoriesList()
    const minPrice = searchParams["min_price"]
    const maxPrice = searchParams["max_price"]

  return (
    <StoreTemplate
      allCategories={categories.product_categories}
      sortBy={sortBy}
      minPrice={minPrice}
      maxPrice={maxPrice}
      page={page}
      countryCode={params.countryCode}
    />
  )
}
