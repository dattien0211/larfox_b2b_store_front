import { values } from "lodash"
export type FeaturedProduct = {
  id: string
  title: string
  handle: string
  thumbnail?: string
}

export type VariantPrice = {
  calculated_price_number: number
  calculated_price: string
  original_price_number: number
  original_price: string
  currency_code: string
  price_type: string
  percentage_diff: string
}

export type Blog = {
  id: string
  title: string
  handle: string
  type: string
  thumbnail: string
  short_description: string
  description: string
  metadata: Record<string, any>
}

export type BlogType = {
  id: string
  name: string
  value: string
  description: string
  metadata: Record<string, any>
}

export type BlogTypeQueryParams = {
  limit?: number
  order?: string
  offset?: number
  q?: string
  name?: string
  value?: string
}

export type BlogQueryParams = {
  limit?: number
  order?: string
  offset?: number
  q?: string
  title?: string
  handle?: string
  type?: string
}

export type ProductTag = {
  id: string
  value: string
}

export type PaginatedProductTagList = {
  product_tags: ProductTag[]
  count: number
}
