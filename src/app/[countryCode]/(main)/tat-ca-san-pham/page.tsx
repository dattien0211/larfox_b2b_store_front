import { Metadata } from "next"
import { SortOptions } from "@modules/categories/components/sort-category"
import { getCategoriesList } from "@lib/data/categories"
import { getProductTagsList } from "@lib/data/products"
import StoreTemplate from "@modules/store/templates"

export const metadata: Metadata = {
  title: "Tất Cả Sản Phẩm",
  description: "Khám phá tất cả sản phẩm trên Larfox.",
}

type Params = {
  searchParams: {
    ["sap-xep"]?: SortOptions
    page?: string
    min_price?: string
    max_price?: string
    tag_id?: string
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
  const tagId = Array.isArray(searchParams.tag_id)
    ? searchParams.tag_id
    : searchParams.tag_id
    ? [searchParams.tag_id]
    : []

  const { product_tags } = await getProductTagsList()

  return (
    <StoreTemplate
      allCategories={categories.product_categories}
      sortBy={sortBy}
      minPrice={minPrice}
      maxPrice={maxPrice}
      page={page}
      countryCode={params.countryCode}
      productTags={product_tags}
      tagId={tagId}
    />
  )
}
