import { Metadata } from "next"
import { Suspense } from "react"

import Category from "@modules/home/components/category"
import FlashSale from "@modules/layout/components/flash-sale"
import Collection from "@modules/layout/components/collection"
import Blogs from "@modules/layout/components/blogs"
import Brands from "@modules/layout/components/brand"
import BlogTypes from "@modules/layout/components/blog-types"
import FeaturedProduct from "@modules/layout/components/featured-product"

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
    <div className="bg-[#F5F7FD] py-3 sm:py-6">
      <Suspense
        fallback={
          <div className="text-base sm:text-2xl text-center">
            Đang tải danh mục sản phẩm...
          </div>
        }
      >
        <Category categories={product_categories} />
      </Suspense>

      <Suspense
        fallback={
          <div className="text-base sm:text-2xl text-center my-5 sm:my-10">
            Đang tải chương trình khuyến mại...
          </div>
        }
      >
        <FlashSale collection={getCollectionByHandle(FLASH_SALE_HANDLE)} />
      </Suspense>

      <Suspense
        fallback={
          <div className="text-base sm:text-2xl text-center my-5 sm:my-10">
            Đang tải bộ sưu tập...
          </div>
        }
      >
        <Collection
          collection={getCollectionByHandle(BEST_SELLER_PRODUCT_HANDLE)}
        />
      </Suspense>

      {brands && brands.length > 0 && (
        <Suspense fallback={<div>Đang tải thương hiệu...</div>}>
          <Brands brands={brands} />
        </Suspense>
      )}

      <Suspense
        fallback={
          <div className="text-base sm:text-2xl text-center my-5 sm:my-10">
            Đang tải bộ sưu tập...
          </div>
        }
      >
        <Collection
          collection={getCollectionByHandle(RECOMMEND_PRODUCT_HANDLE)}
        />
      </Suspense>

      {blogs && blogTypes && blogs.length > 0 && (
        <Suspense
          fallback={
            <div className="text-base sm:text-2xl text-center my-5 sm:my-10">
              Đang tải bài viết...
            </div>
          }
        >
          <Blogs blogs={blogs} blogTypes={blogTypes} />
        </Suspense>
      )}

      <Suspense
        fallback={
          <div className="text-base sm:text-2xl text-center my-5 sm:my-10">
            Đang tải bộ sưu tập...
          </div>
        }
      >
        <Collection collection={getCollectionByHandle(DAC_SAN_OCOP_HANDLE)} />
      </Suspense>

      {blogTypes && blogTypes.length > 0 && (
        <Suspense
          fallback={
            <div className="text-base sm:text-2xl text-center my-5 sm:my-10">
              Đang tải chủ đề...
            </div>
          }
        >
          <BlogTypes blogTypes={blogTypes} />
        </Suspense>
      )}

      <Suspense
        fallback={
          <div className="text-base sm:text-2xl text-center my-5 sm:my-10">
            Đang tải sản phẩm nổi bật
          </div>
        }
      >
        <FeaturedProduct
          collection={getCollectionByHandle(FEATURED_PRODUCT_HANDLE)}
        />
      </Suspense>
    </div>
  )
}
