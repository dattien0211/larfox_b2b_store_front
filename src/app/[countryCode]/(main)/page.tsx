import { Metadata } from "next"

import { getBlogList } from "@lib/data/blog"
import { getBlogTypesList } from "@lib/data/blog-types"
import { getCollectionsWithProducts } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import { getCategoriesList } from "@lib/data/categories"
import { getBrandList } from "@lib/data/brand"
import Image from "next/image"
import IMGS from "@constants/IMGS"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChartLine, faHandshake, faLightbulb, faNewspaper, faRobot, faShieldHalved, faTools, faUniversity, faArrowTrendUp, faShieldAlt, faBullseye, faHeart, faUsers} from "@fortawesome/free-solid-svg-icons"
import Category from "@modules/home/components/category"
import { Suspense } from "react"
import CategorySkeleton from "@modules/home/components/category/category-skeleton"
import BrandsSkeleton from "@modules/layout/components/brand/brand-skeleton"
import Brands from "@modules/layout/components/brand"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import BlogTypes from "@modules/layout/components/blog-types"
import BlogTypeSkeleton from "@modules/layout/components/blog-types/blog-types-skeleton"

export const metadata: Metadata = {
  title: "Larfox",
  description: "Larfox",
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
  const { sellers } = await getBrandList()
  // @ts-ignore
  return (
    // <div className="bg-primary-bg py-3 sm:py-6">
    //   <div className="container">
    //     <Suspense fallback={<CategorySkeleton />}>
    //       <Category categories={product_categories} />
    //     </Suspense>
    //     <Suspense fallback={<FlashSaleSkeleton />}>
    //       <FlashSale
    //         collection={getCollectionByHandle(FLASH_SALE_HANDLE)}
    //         countryCode={countryCode}
    //       />
    //     </Suspense>
    //     <Suspense fallback={<CollectionSkeleton />}>
    //       <Collection
    //         collection={getCollectionByHandle(BEST_SELLER_PRODUCT_HANDLE)}
    //         countryCode={countryCode}
    //       />
    //     </Suspense>
    //     {brands && brands.length > 0 && (
    //       <Suspense fallback={<BrandsSkeleton />}>
            // <Brands brands={brands} />
    //       </Suspense>
    //     )}
    //     <Suspense fallback={<CollectionSkeleton />}>
    //       <Collection
    //         collection={getCollectionByHandle(RECOMMEND_PRODUCT_HANDLE)}
    //         countryCode={countryCode}
    //       />
    //     </Suspense>
    //     {blogs && blogTypes && blogs.length > 0 && (
    //       <Suspense fallback={<BlogSkeleton />}>
    //         <Blogs blogs={blogs} blogTypes={blogTypes} />
    //       </Suspense>
    //     )}
    //     <Suspense fallback={<CollectionSkeleton />}>
    //       <Collection
    //         collection={getCollectionByHandle(DAC_SAN_OCOP_HANDLE)}
    //         countryCode={countryCode}
    //       />
    //     </Suspense>
        // {blogTypes && blogTypes.length > 0 && (
        //   <Suspense fallback={<BlogTypeSkeleton />}>
        //     <BlogTypes blogTypes={blogTypes} />
        //   </Suspense>
        // )}
    //     <Suspense fallback={<CollectionSkeleton />}>
    //       <FeaturedProduct
    //         collection={getCollectionByHandle(FEATURED_PRODUCT_HANDLE)}
    //         countryCode={countryCode}
    //       />
    //     </Suspense>
    //   </div>
    // </div>
    <div>
      <section className="relative hero-mesh h-[600px] flex items-center overflow-hidden bg-primary-bg">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="text-sm text-gray-600 mb-2">
              Connecting 5 continents
            </div>
            <h1 className="text-6xl font-extralight mb-6 leading-tight">
              {"Easy-to-use "}
              <span className="gradient-text font-medium">
                B2B Commerce Platform
              </span>
              {" for both services and goods"}
            </h1>
            <div className="flex max-w-2xl mb-8">
              <input
                placeholder="Search products, services..."
                className="flex-1 px-6 py-4 rounded-l-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="gradient-bg px-8 py-4 rounded-r-full hover:opacity-90">
                <Image
                  src={IMGS.Search}
                  alt={"Search"}
                  width={24}
                  height={24}
                  className="invert sepia saturate-100 hue-rotate-180"
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-16">
            {"The future of "}
            <span className="gradient-text font-medium">B2B is here now</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <FontAwesomeIcon icon={faShieldAlt} className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Secure Financial Programs
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Transact with confidence using our secure and reliable financial
                programs backed by trusted banks
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <FontAwesomeIcon icon={faRobot} className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                The 1st AI Bidding/Selling Agent
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Find the best total value partners effortlessly fast with our
                1st ever AI bidding/selling with culture matching solutions
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <FontAwesomeIcon icon={faTools} className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Very Simple Tool</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Require no public price listing, this is B2B services and goods
                commerce on digitalized environment
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <FontAwesomeIcon icon={faNewspaper} className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                The 1st Business News AI Agent
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Get top 5 customized business news impacting your business daily
                from our AI agent
              </p>
            </div>
          </div>
        </div>
      </section>

      <Suspense fallback={<CategorySkeleton />}>
        <Category categories={product_categories} />
      </Suspense>

      <section className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-16">
            {"Protect your "}
            <span className="gradient-text font-medium">transaction</span>
            {" and improve your "}
            <span className="gradient-text font-medium">cashflow</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-8 rounded-2xl border border-gray-600">
              <div className="flex items-center mb-6">
                <div className="text-3xl text-emerald-400 mr-4">
                <FontAwesomeIcon icon={faShieldAlt} className="fas fa-shield-alt text-3xl text-emerald-400 mr-2" />
                </div>
                <h3 className="text-2xl font-semibold">Escrow</h3>
              </div>
              <p className="text-gray-300">
                No service fee, Buyers get deposit interest rate
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-8 rounded-2xl border border-gray-600">
              <div className="flex items-center mb-6">
                <FontAwesomeIcon icon={faChartLine} className="fas fa-chart-line text-3xl text-blue-400 mr-2" />
                <h3 className="text-2xl font-semibold">Supply Chain Finance</h3>
              </div>
              <p className="text-gray-300">
                Under favorable financing fee, Sellers get payment earlier than
                payment term
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-16">
            <span className="gradient-text font-medium">Seamless</span>
            {" process"}
          </h2>
          <div className="space-y-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-8 text-center">
                Source-to-Pay on Larfox
              </h3>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold text-white text-xl">1</span>
                  </div>
                  <h4 className="font-semibold mb-3">Prompt business need</h4>
                  <p className="text-sm text-gray-600">
                    Mô tả nhu cầu kinh doanh rõ ràng với sự trợ giúp của AI
                    Agent
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold text-white text-xl">2</span>
                  </div>
                  <h4 className="font-semibold mb-3">
                    Xác nhận AI Agent đấu thầu
                  </h4>
                  <p className="text-sm text-gray-600">
                    Xác nhận danh sách nhà cung cấp phù hợp, điều khoản và điều
                    kiện
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold text-white text-xl">3</span>
                  </div>
                  <h4 className="font-semibold mb-3">Thiết lập thanh toán</h4>
                  <p className="text-sm text-gray-600">
                    Xác nhận điều khoản thanh toán và chương trình tài chính
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold text-white text-xl">4</span>
                  </div>
                  <h4 className="font-semibold mb-3">Hoàn thành và đánh giá</h4>
                  <p className="text-sm text-gray-600">
                    Xác nhận chất lượng hàng hóa/dịch vụ và đánh giá nhà cung
                    cấp
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {sellers && sellers.length > 0 && (
        <Suspense fallback={<BrandsSkeleton />}>
          <Brands sellers={sellers} />
        </Suspense>
      )}

      {blogTypes && blogTypes.length > 0 && (
        <Suspense fallback={<BlogTypeSkeleton />}>
          <BlogTypes blogTypes={blogTypes} />
        </Suspense>
      )}

      <section id="about" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Về Larfox</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl text-center">
              <FontAwesomeIcon icon={faBullseye} className="fas fa-bullseye text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Sứ mệnh &amp; Mục đích</h3>
              <p className="text-gray-600">
                Kết nối doanh nghiệp toàn cầu thông qua nền tảng thương mại điện
                tử B2B tiên tiến
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl text-center">
              <FontAwesomeIcon icon={faHeart} className="fas fa-heart text-4xl text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Giá trị &amp; Cam kết</h3>
              <p className="text-gray-600">
                Cam kết mang lại giá trị tối đa cho khách hàng với sự tin cậy và
                chất lượng dịch vụ
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl text-center">
              <FontAwesomeIcon icon={faUsers} className="fas fa-users text-4xl text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Nghề nghiệp tại Larfox</h3>
              <p className="text-gray-600">
                Tham gia đội ngũ chuyên nghiệp và phát triển sự nghiệp trong môi
                trường công nghệ hiện đại
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
