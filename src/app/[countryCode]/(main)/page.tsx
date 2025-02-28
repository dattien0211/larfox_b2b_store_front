import { Metadata } from "next"
import Image from "next/image"
import Hero from "@modules/home/components/hero"
import Category from "@modules/home/components/category"

import FlashSale from "@modules/layout/components/flash-sale"
import Collection from "@modules/layout/components/collection"

import Blogs from "@modules/layout/components/blogs"
import Text from "@modules/layout/components/text"
import IMGS from "@constants/IMGS"
import {
  BEST_SELLER_PRODUCT_HANDLE,
  DAC_SAN_OCOP_HANDLE,
  FLASH_SALE_HANDLE,
  RECOMMEND_PRODUCT_HANDLE,
} from "@constants/defaultHandleCollection"
import { getBlogList } from "@lib/data/blog"
import { getBlogTypesList } from "@lib/data/blog-types"
import { getCollectionsWithProducts } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import { getCategoriesList } from "@lib/data/categories"
import { getBannersList } from "@lib/data/banners"

export const metadata: Metadata = {
  title: "Bông Lúa",
  description:
    "Trang Web bán các sản phẩm về làm đẹp theo một cách tự nhiên và an toàn",
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

  return (
    <>
      <Hero
        banners={banners.filter(
          (banner) => banner.position_type === "main_banner"
        )}
      />

      <Category categories={product_categories} />

      <div className="relative  py-12 content-container">
        <Text subTitle="Flash Sale" title="Ưu đãi" />
        <div className="absolute top-[5%] left-0  w-[60px] h-[60px] sm:w-[100px] sm:h-[100px]">
          <Image
            src={IMGS.RiceSpike}
            alt="banner"
            width={100}
            height={100}
            className="w-full h-full object-contain rotate-45"
          />
        </div>

        <div className="absolute top-[20%] right-0  w-[60px] h-[60px] sm:w-[100px] sm:h-[100px]">
          <Image
            src={IMGS.RiceSpike}
            alt="banner"
            width={100}
            height={100}
            className="w-full h-full object-contain scale-x-[-1] rotate-[-35deg]"
          />
        </div>
        <FlashSale
          products={getCollectionByHandle(FLASH_SALE_HANDLE)?.products}
          collectionHandle={FLASH_SALE_HANDLE}
        />
      </div>

      <Collection
        collection={getCollectionByHandle(BEST_SELLER_PRODUCT_HANDLE)}
      />

      <Collection
        collection={getCollectionByHandle(RECOMMEND_PRODUCT_HANDLE)}
      />

      <Collection collection={getCollectionByHandle(DAC_SAN_OCOP_HANDLE)} />

      {blogs && blogTypes && blogs.length > 0 && (
        <Blogs blogs={blogs} blogTypes={blogTypes} />
      )}
    </>
  )
}
