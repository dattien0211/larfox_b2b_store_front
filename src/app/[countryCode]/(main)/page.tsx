import { Metadata } from "next"

import Category from "@modules/home/components/category"
import FlashSale from "@modules/layout/components/flash-sale"
import Collection from "@modules/layout/components/collection"
import Blogs from "@modules/layout/components/blogs"
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
import { getBannersList } from "@lib/data/banners"
import { getBrandList } from "@lib/data/brand"
import Brands from "@modules/layout/components/brand"
import BlogTypes from "@modules/layout/components/blog-types"
import FeaturedProducts from "@modules/home/components/featured-products"
import FeaturedProduct from "@modules/layout/components/featured-product"

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

  // Function to get products based on collection handle
  const getCollectionByHandle = (handle: string) => {
    if (!collections) return undefined
    const collection = collections.find(
      (collection) => collection.handle === handle
    )
    return collection || undefined
  }

  const { blogs } = await getBlogList()

  const { blogTypes } = await getBlogTypesList()

  const { product_categories } = await getCategoriesList()

  const { banners } = await getBannersList()

  const { brands } = await getBrandList()

  return (
    <div className="bg-[#F5F7FD] py-3 sm:py-6">
      {/* <Hero
        banners={banners.filter(
          (banner) => banner.position_type === "main_banner" && banner.is_active
        )}
      /> */}

      <Category categories={product_categories} />

      <FlashSale collection={getCollectionByHandle(FLASH_SALE_HANDLE)} />

      <Collection
        collection={getCollectionByHandle(BEST_SELLER_PRODUCT_HANDLE)}
      />

      <Collection
        collection={getCollectionByHandle(RECOMMEND_PRODUCT_HANDLE)}
      />

      <Collection collection={getCollectionByHandle(DAC_SAN_OCOP_HANDLE)} />

      {brands && brands.length > 0 && <Brands brands={brands} />}

      {blogs && blogTypes && blogs.length > 0 && (
        <Blogs blogs={blogs} blogTypes={blogTypes} />
      )}

      {blogTypes && blogTypes.length > 0 && <BlogTypes blogTypes={blogTypes} />}

      <FeaturedProduct
        collection={getCollectionByHandle(FEATURED_PRODUCT_HANDLE)}
      />
    </div>
  )
}
