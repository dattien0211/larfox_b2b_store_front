import { Metadata } from "next"
import { notFound } from "next/navigation"

import {
  getCategoryByHandle,
  listCategories,
  getCategoriesList,
} from "@lib/data/categories"
import { listRegions } from "@lib/data/regions"
import { StoreProductCategory, StoreRegion } from "@medusajs/types"
import CategoryTemplate from "@modules/categories/templates"
import { SortOptions } from "@modules/categories/components/sort-category"
import { getProductTagsList } from "@lib/data/products"

type Props = {
  params: { category: string[]; countryCode: string }
  searchParams: {
    ["sap-xep"]?: SortOptions
    page?: string
    min_price?: string
    max_price?: string
    tag_id?: string
  }
}

export async function generateStaticParams() {
  const product_categories = await listCategories()

  if (!product_categories) {
    return []
  }

  const countryCodes = await listRegions().then((regions: StoreRegion[]) =>
    regions?.map((r) => r.countries?.map((c) => c.iso_2)).flat()
  )

  const categoryHandles = product_categories.map(
    (category: any) => category.handle
  )

  const staticParams = countryCodes
    ?.map((countryCode: string | undefined) =>
      categoryHandles.map((handle: any) => ({
        countryCode,
        category: [handle],
      }))
    )
    .flat()

  return staticParams
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { product_categories } = await getCategoryByHandle(params.category)

    const title = product_categories
      .map((category: StoreProductCategory) => category.name)
      .join(", ")

    const description =
      product_categories[product_categories.length - 1].description ??
      `Danh mục sản phẩm - ${title}.`

    return {
      title: `${title} | Bông Lúa`,
      description,
      alternates: {
        canonical: `${params.category.join("/")}`,
      },
    }
  } catch (error) {
    notFound()
  }
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { page } = searchParams
  const sortBy = searchParams["sap-xep"]
  const minPrice = searchParams["min_price"]
  const maxPrice = searchParams["max_price"]
  const tagId = Array.isArray(searchParams.tag_id)
    ? searchParams.tag_id
    : searchParams.tag_id
    ? [searchParams.tag_id]
    : []

  const { product_categories } = await getCategoryByHandle(params.category)

  if (!product_categories) {
    notFound()
  }

  const categories = await getCategoriesList()
  const { product_tags } = await getProductTagsList()

  return (
    <CategoryTemplate
      categories={product_categories}
      allCategories={categories.product_categories}
      sortBy={sortBy}
      minPrice={minPrice}
      maxPrice={maxPrice}
      tagId={tagId}
      page={page}
      countryCode={params.countryCode}
      paramsCategory={params.category}
      productTags={product_tags}
    />
  )
}

export const dynamic = "force-dynamic"
