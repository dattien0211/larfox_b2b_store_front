import Image from "next/image"
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

export type Banner = {
  id: string
  title?: string
  image: Record<string, any>
  link?: string
  is_active: boolean
  position_type: string
  start_date?: Date
  end_date?: Date
  alt_text?: string
  button_text?: string
  metadata?: Record<string, any>
  created_at: string
  updated_at: string
}

export type QueryParams = {
  limit?: number
  order?: string
  offset?: number
  q?: string
}

export type BlogTypeQueryParams = QueryParams & {
  name?: string
  value?: string
}

export type BlogQueryParams = QueryParams & {
  title?: string
  handle?: string
  type?: string
}

export type BannerQueryParams = QueryParams

export type ProductTag = {
  id: string
  value: string
}

export type PaginatedProductTagList = {
  product_tags: ProductTag[]
  count: number
}

export type ImageType = {
  id: string
  url: string
}

export type Brand = {
  id: string
  name: string
  handle: string
  logo: ImageType | null
  thumbnail: ImageType | null
  short_description: string | null
  description: string | null
  website: string | null
  founded_year: number | null
  headquarters: string | null
  is_active: boolean
  social_links: object | null
  metadata: object | null
  created_at: string
  updated_at: string
  deleted_at: string | null
}
