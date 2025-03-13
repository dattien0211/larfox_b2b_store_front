import { Metadata } from "next"
import { notFound } from "next/navigation"

import {
  getCollectionByHandle,
  getCollectionsList,
} from "@lib/data/collections"
import { listRegions } from "@lib/data/regions"
import { StoreCollection, StoreRegion } from "@medusajs/types"
import CollectionTemplate from "@modules/collections/templates"
import { SortOptions } from "@modules/categories/components/sort-category"
import { getCategoriesList } from "@lib/data/categories"

type Props = {
  params: { handle: string; countryCode: string }
  searchParams: {
    ["sap-xep"]?: SortOptions
    page?: string
    min_price?: string
    max_price?: string
  }
}

export async function generateStaticParams() {
  const { collections } = await getCollectionsList()

  if (!collections) {
    return []
  }

  const countryCodes = await listRegions().then(
    (regions: StoreRegion[]) =>
      regions
        ?.map((r) => r.countries?.map((c) => c.iso_2))
        .flat()
        .filter(Boolean) as string[]
  )

  const collectionHandles = collections.map(
    (collection: StoreCollection) => collection.handle
  )

  const staticParams = countryCodes
    ?.map((countryCode: string) =>
      collectionHandles.map((handle: string | undefined) => ({
        countryCode,
        handle,
      }))
    )
    .flat()

  return staticParams
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const collection = await getCollectionByHandle(params.handle)

  if (!collection) {
    notFound()
  }

  const metadata = {
    title: `${collection.title} | Bông Lúa`,
    description: `Bộ sưu tập - ${collection.title} `,
  } as Metadata

  return metadata
}

export default async function CollectionPage({ params, searchParams }: Props) {
  const { page } = searchParams
  const sortBy = searchParams["sap-xep"]
  const minPrice = searchParams["min_price"]
  const maxPrice = searchParams["max_price"]

  const [categories, collection] = await Promise.all([
    getCategoriesList(),
    getCollectionByHandle(params.handle).then(
      (collection: StoreCollection) => collection
    ),
  ])

  if (!collection) {
    notFound()
  }

  return (
    <CollectionTemplate
      collection={collection}
      allCategories={categories.product_categories}
      page={page}
      sortBy={sortBy}
      minPrice={minPrice}
      maxPrice={maxPrice}
      countryCode={params.countryCode}
    />
  )
}
