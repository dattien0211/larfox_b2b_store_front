import { Metadata } from "next"
import Image from "next/image"
import Hero from "@modules/home/components/hero"
import { getCollectionsWithProducts } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

import AboutUs from "@modules/layout/components/about-us"
import FlashSale from "@modules/layout/components/flash-sale"
import ListProducts from "@modules/layout/components/list-products"
import RecommendProducts from "@modules/layout/components/recommend-products"
import IMGS from "@constants/IMGS"
import OurStory from "@modules/layout/components/our-story"
import Blogs from "@modules/layout/components/blogs"
import TextAnco from "@modules/layout/components/text-anco"
import ProductBanner from "@modules/layout/components/product-banner"
import {
  FLASH_SALE_HANDLE,
  RECOMMEND_PRODUCT_HANDLE,
  NEW_PRODUCT_HANDLE,
  BEST_SELLER_PRODUCT_HANDLE,
  EQUIPMENT_PRODUCT_HANDLE,
} from "@constants/defaultHandleCollection"
import { getBlogList } from "@lib/data/blog"
import { getBlogTypesList } from "@lib/data/blog-types"

export const metadata: Metadata = {
  title: "Anco",
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
  function getProductsByCollectionHandle(handle: string) {
    if (!collections) return []
    const collection = collections.find(
      (collection) => collection.handle === handle
    )
    return collection ? collection.products : []
  }

  const { blogs } = await getBlogList()

  const { blogTypes } = await getBlogTypesList()

  return (
    <>
      <Hero />
      <div className="py-12 sm:py-20 relative">
        <TextAnco
          backgroundText="Production"
          subTitle="Giá trị Anco đem lại"
          title="Về chúng tôi"
          description="Sự đổi mới sáng tạo - Chìa khóa thành công - Sự bền vững và phát triển lâu dài."
        />
        <AboutUs />
        <div className="absolute bottom-6 sm:bottom-10 lg::bottom-16 right-0 sm:right-4 w-[90px] h-[35px] sm:w-[120px] sm:h-[50px]">
          <Image
            src={IMGS.Leaf1}
            alt="leaf"
            width={120}
            height={50}
            className="mr-4 w-auto h-auto"
          />
        </div>
      </div>
      <div className="bg-beige-10 relative py-12 sm:py-20">
        <TextAnco
          backgroundText="Big Sale"
          subTitle="Flash Sale"
          title="Ưu đãi"
          classBGText="!text-[#FFF6E8]"
        />
        <div className="absolute top-2 left-2 sm:top-4 sm:left-4 w-[60px] h-[60px] sm:w-[100px] sm:h-[100px]">
          <Image
            src={IMGS.Leaf2}
            alt="banner"
            width={100}
            height={100}
            className="w-full h-full object-contain"
          />
        </div>
        <FlashSale
          products={getProductsByCollectionHandle(FLASH_SALE_HANDLE)}
          collectionHandle={FLASH_SALE_HANDLE}
        />
      </div>
      <div className="bg-beige-10 relative py-12 sm:py-20">
        <TextAnco
          backgroundText="Assortm"
          subTitle="Sản phẩm nổi bật"
          title="Anco Shop"
          description="Những sản phẩm đặc biệt của chúng tôi, được thiết kế và sản xuất với công nghệ tiên tiến."
        />
        <RecommendProducts
          products={getProductsByCollectionHandle(RECOMMEND_PRODUCT_HANDLE)}
          collectionHandle={RECOMMEND_PRODUCT_HANDLE}
        />
      </div>
      <ProductBanner />
      <div className="relative py-12 sm:py-20">
        <TextAnco
          backgroundText="Products"
          subTitle="Sản phẩm mới"
          title="Sản phẩm"
          description="Sản phẩm mới giúp nâng cao hiệu quả công việc và cuộc sống hàng ngày."
        />
        <ListProducts
          products={getProductsByCollectionHandle(NEW_PRODUCT_HANDLE)}
          collectionHandle={NEW_PRODUCT_HANDLE}
        />
      </div>
      <div className="relative py-12 sm:py-20">
        <TextAnco
          backgroundText="Products"
          subTitle="Sản phẩm bán chạy"
          title="Sản phẩm"
          classDesText="sm:w-[50%] mx-auto"
          description="Luôn đứng đầu trong danh sách bán chạy nhờ vào tính năng ưu việt và khả năng đáp ứng nhu cầu của khách hàng một cách hoàn hảo."
        />
        <ListProducts
          products={getProductsByCollectionHandle(BEST_SELLER_PRODUCT_HANDLE)}
          collectionHandle={BEST_SELLER_PRODUCT_HANDLE}
        />
        <Image
          src={IMGS.Banner5}
          alt="banner"
          width={1440}
          height={555}
          className="w-full absolute -top-10 sm:top-[-40%] left-0 -z-10"
        />
      </div>
      <ProductBanner />
      <div className="bg-beige-10 relative py-12 sm:py-20">
        <TextAnco
          backgroundText="Assortm"
          subTitle="Anco Shop"
          title="Trang thiết bị"
          description="Những sản phẩm đặc biệt của chúng tôi, được thiết kế và sản xuất với công nghệ tiên tiến."
        />
        <RecommendProducts
          products={getProductsByCollectionHandle(EQUIPMENT_PRODUCT_HANDLE)}
          collectionHandle={EQUIPMENT_PRODUCT_HANDLE}
        />
      </div>
      <OurStory />
      {blogs && blogs.length > 0 && (
        <Blogs blogs={blogs} blogTypes={blogTypes} />
      )}
    </>
  )
}
