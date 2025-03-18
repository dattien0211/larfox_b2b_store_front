import { Metadata } from "next"
import { Suspense } from "react"

import Category from "@modules/home/components/category"
import FlashSale from "@modules/layout/components/flash-sale"
import Collection from "@modules/layout/components/collection"
import Blogs from "@modules/layout/components/blogs"
import BlogTypes from "@modules/layout/components/blog-types"
import Brands from "@modules/layout/components/brand"
import FeaturedProduct from "@modules/layout/components/featured-product"

import CategorySkeleton from "@modules/home/components/category/category-skeleton"
import FlashSaleSkeleton from "@modules/layout/components/flash-sale/flash-sale-skeleton"
import CollectionSkeleton from "@modules/layout/components/collection/collection-skeleton"
import BlogSkeleton from "@modules/layout/components/blogs/blog-skeleton"
import BrandsSkeleton from "@modules/layout/components/brand/brand-skeleton"
import BlogTypeSkeleton from "@modules/layout/components/blog-types/blog-types-skeleton"

import {
  BEST_SELLER_PRODUCT_HANDLE,
  DAC_SAN_OCOP_HANDLE,
  FLASH_SALE_HANDLE,
  RECOMMEND_PRODUCT_HANDLE,
  FEATURED_PRODUCT_HANDLE,
} from "@constants/defaultHandleCollection"

import { getBlogList } from "@lib/data/blog"
import { getBlogTypesList } from "@lib/data/blog-types"
import { getCollectionsWithProducts } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import { getCategoriesList } from "@lib/data/categories"
import { getBrandList } from "@lib/data/brand"

export const metadata: Metadata = {
  title:
    "Bông Lúa – Nơi cung cấp các sản phẩm nông nghiệp sạch, an toàn và chất lượng cao",
  description:
    "Bông Lúa – Nơi cung cấp các sản phẩm nông nghiệp sạch, an toàn và chất lượng cao. Chúng tôi cam kết mang đến những mặt hàng tươi ngon, được nuôi trồng theo phương pháp tự nhiên, không hóa chất độc hại, giúp bảo vệ sức khỏe người tiêu dùng và môi trường. Khám phá đa dạng các loại rau củ, trái cây, gạo, đặc sản vùng miền và nhiều sản phẩm khác, được tuyển chọn kỹ lưỡng từ những nông trại uy tín. Hãy cùng Bông Lúa hướng tới một cuộc sống xanh, lành mạnh và bền vững!",
}

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }

  const collections = await getCollectionsWithProducts(countryCode)

  if (!collections) {
    return null
  }

  const getCollectionByHandle = (handle: string) => {
    return collections.find((collection) => collection.handle === handle)
  }

  const { blogs } = await getBlogList()
  const { blogTypes } = await getBlogTypesList()
  const { product_categories } = await getCategoriesList()
  const { brands } = await getBrandList()

  
  return (
    <div className="bg-primary-bg py-3 sm:py-6">
      <div className="content-container">
        <Suspense fallback={<CategorySkeleton />}>
          <Category categories={product_categories} />
        </Suspense>
        <Suspense fallback={<FlashSaleSkeleton />}>
          <FlashSale
            collection={getCollectionByHandle(FLASH_SALE_HANDLE)}
            countryCode={countryCode}
          />
        </Suspense>
        <Suspense fallback={<CollectionSkeleton />}>
          <Collection
            collection={getCollectionByHandle(BEST_SELLER_PRODUCT_HANDLE)}
            countryCode={countryCode}
          />
        </Suspense>
        {brands && brands.length > 0 && (
          <Suspense fallback={<BrandsSkeleton />}>
            <Brands brands={brands} />
          </Suspense>
        )}
        <Suspense fallback={<CollectionSkeleton />}>
          <Collection
            collection={getCollectionByHandle(RECOMMEND_PRODUCT_HANDLE)}
            countryCode={countryCode}
          />
        </Suspense>
        {blogs && blogTypes && blogs.length > 0 && (
          <Suspense fallback={<BlogSkeleton />}>
            <Blogs blogs={blogs} blogTypes={blogTypes} />
          </Suspense>
        )}
        <Suspense fallback={<CollectionSkeleton />}>
          <Collection
            collection={getCollectionByHandle(DAC_SAN_OCOP_HANDLE)}
            countryCode={countryCode}
          />
        </Suspense>
        {blogTypes && blogTypes.length > 0 && (
          <Suspense fallback={<BlogTypeSkeleton />}>
            <BlogTypes blogTypes={blogTypes} />
          </Suspense>
        )}
        <Suspense fallback={<CollectionSkeleton />}>
          <FeaturedProduct
            collection={getCollectionByHandle(FEATURED_PRODUCT_HANDLE)}
            countryCode={countryCode}
          />
        </Suspense>
      </div>
    </div>
  )
}
