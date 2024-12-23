import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { getCollectionsWithProducts } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import AboutUs from "@modules/layout/components/about-us"
import FlashSale from "@modules/layout/components/flash-sale"
import HotProducts from "@modules/layout/components/hot-products"
import BannerProduct from "@modules/layout/components/banner-product"
import NewProducts from "@modules/layout/components/new-products"
import RecommendProducts from "../../../modules/layout/components/recommend-products"
import IMGS from "@constants/IMGS"
import OurStory from "@modules/layout/components/our-story"
import Blogs from "@modules/layout/components/blogs"

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
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  return (
    <div className="relative z-20">
      <Hero />
      {/* <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div> */}

      <AboutUs />
      <FlashSale />
      <RecommendProducts
        backgroundText="Assortm"
        shopName="Anco Shop"
        title="Sản phẩm nổi bật"
        description="Những sản phẩm đặc biệt của chúng tôi, được thiết kế và sản xuất với công nghệ tiên tiến"
      />
      <BannerProduct imageSrc={IMGS.Banner4} title="Sắp ra mắt" />
      <NewProducts />
      <HotProducts />
      <BannerProduct
        imageSrc={IMGS.Banner6}
        title="Xem chi tiết"
        buttonClass="!left-[21%]"
      />
      <RecommendProducts
        backgroundText="Assortm"
        shopName="Anco Shop"
        title="Trang thiết bị"
        description="Những sản phẩm đặc biệt của chúng tôi, được thiết kế và sản xuất với công nghệ tiên tiến"
      />
      <OurStory />
      <Blogs />
    </div>
  )
}
