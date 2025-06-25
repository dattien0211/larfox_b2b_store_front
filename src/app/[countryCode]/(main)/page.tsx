import { Metadata } from "next"

import { getBlogList } from "@lib/data/blog"
import { getBlogTypesList } from "@lib/data/blog-types"
import { getCollectionsWithProducts } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import { getCategoriesList } from "@lib/data/categories"
import { getBrandList } from "@lib/data/brand"
import Image from "next/image"
import IMGS from "@constants/IMGS"

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
  const { brands } = await getBrandList()

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
    //         <Brands brands={brands} />
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
    //     {blogTypes && blogTypes.length > 0 && (
    //       <Suspense fallback={<BlogTypeSkeleton />}>
    //         <BlogTypes blogTypes={blogTypes} />
    //       </Suspense>
    //     )}
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
                <Image
                  src={IMGS.Search}
                  alt={"Photo"}
                  className="text-2xl text-white"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Secure Financial Programs
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Transact with confidence using our secure and reliable financial
                programs backed by trusted banks
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-16">
            {"Explore "}
            <span className="gradient-text font-medium">
              services and goods sellers
            </span>
          </h2>
          <div className="relative">
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-gray-200 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-300">
              <Image src={IMGS.Left} alt={"Left"} width={24} height={24} />
            </button>
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-gray-200 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-300">
              <Image src={IMGS.Right} alt={"Left"} width={24} height={24} />
            </button>
            <div className="overflow-hidden">
              <div className="transition-transform duration-300 ease-in-out">
                <div className="space-y-8">
                  <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
                    <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-200 hover:border-primary">
                      <div className="text-2xl text-primary mb-3 justify-items-center">
                        <Image
                          src={IMGS.Search}
                          alt={"Search"}
                          width={24}
                          height={24}
                        />
                      </div>
                      <p className="text-sm font-medium text-gray-800">
                        Technology Outsourcing
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
                    <div className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-200 hover:border-primary">
                      <div className="text-2xl text-primary mb-3 justify-items-center">
                        <Image
                          src={IMGS.Search}
                          alt={"Search"}
                          width={24}
                          height={24}
                        />
                      </div>
                      <p className="text-sm font-medium text-gray-800">
                        Technology Outsourcing
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                  <Image
                    src={IMGS.Search}
                    alt={"Search"}
                    width={24}
                    height={24}
                  />
                </div>
                <h3 className="text-2xl font-semibold">Escrow</h3>
              </div>
              <p className="text-gray-300">
                No service fee, Buyers get deposit interest rate
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-8 rounded-2xl border border-gray-600">
              <div className="flex items-center mb-6">
                <div className="text-3xl text-emerald-400 mr-4">
                  <Image
                    src={IMGS.Search}
                    alt={"Search"}
                    width={24}
                    height={24}
                  />
                </div>
                <h3 className="text-2xl font-semibold">Escrow</h3>
              </div>
              <p className="text-gray-300">
                No service fee, Buyers get deposit interest rate
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
                  <h4 className="font-semibold mb-3">Prompt business need</h4>
                  <p className="text-sm text-gray-600">
                    Mô tả nhu cầu kinh doanh rõ ràng với sự trợ giúp của AI
                    Agent
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold text-white text-xl">3</span>
                  </div>
                  <h4 className="font-semibold mb-3">Prompt business need</h4>
                  <p className="text-sm text-gray-600">
                    Mô tả nhu cầu kinh doanh rõ ràng với sự trợ giúp của AI
                    Agent
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold text-white text-xl">4</span>
                  </div>
                  <h4 className="font-semibold mb-3">Prompt business need</h4>
                  <p className="text-sm text-gray-600">
                    Mô tả nhu cầu kinh doanh rõ ràng với sự trợ giúp của AI
                    Agent
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Tin tức kinh doanh tùy chỉnh
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Bắt đầu nhanh chóng mỗi ngày với bản tóm tắt tin tức từ AI agent của
            chúng tôi
          </p>
          <div className="grid md:grid-cols-5 gap-4 mb-8">
            <div className="bg-blue-100 p-4 rounded-lg text-center">
              <div className="text-2xl text-blue-600 mb-2 justify-items-center">
                <Image
                  src={IMGS.Search}
                  alt={"Search"}
                  width={24}
                  height={24}
                />
              </div>
              <p className="font-medium">Chính sách chính phủ</p>
            </div>

            <div className="bg-green-100 p-4 rounded-lg text-center">
              <div className="text-2xl text-blue-600 mb-2 justify-items-center">
                <Image
                  src={IMGS.Search}
                  alt={"Search"}
                  width={24}
                  height={24}
                />
              </div>
              <p className="font-medium">Chính sách chính phủ</p>
            </div>

            <div className="bg-yellow-100 p-4 rounded-lg text-center">
              <div className="text-2xl text-blue-600 mb-2 justify-items-center">
                <Image
                  src={IMGS.Search}
                  alt={"Search"}
                  width={24}
                  height={24}
                />
              </div>
              <p className="font-medium">Chính sách chính phủ</p>
            </div>

            <div className="bg-purple-100 p-4 rounded-lg text-center">
              <div className="text-2xl text-blue-600 mb-2 justify-items-center">
                <Image
                  src={IMGS.Search}
                  alt={"Search"}
                  width={24}
                  height={24}
                />
              </div>
              <p className="font-medium">Chính sách chính phủ</p>
            </div>

            <div className="bg-red-100 p-4 rounded-lg text-center">
              <div className="text-2xl text-blue-600 mb-2 justify-items-center">
                <Image
                  src={IMGS.Search}
                  alt={"Search"}
                  width={24}
                  height={24}
                />
              </div>
              <p className="font-medium">Chính sách chính phủ</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Về Larfox</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl text-center">
              <div className="text-4xl text-blue-600 mb-4 justify-items-center">
                <Image
                  src={IMGS.Search}
                  alt={"Search"}
                  width={24}
                  height={24}
                />
              </div>
              <h3 className="text-xl font-bold mb-4">Sứ mệnh & Mục đích</h3>
              <p className="text-gray-600">
                Kết nối doanh nghiệp toàn cầu thông qua nền tảng thương mại điện
                tử B2B tiên tiến
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl text-center">
              <div className="text-4xl text-blue-600 mb-4 justify-items-center">
                <Image
                  src={IMGS.Search}
                  alt={"Search"}
                  width={24}
                  height={24}
                />
              </div>
              <h3 className="text-xl font-bold mb-4">Sứ mệnh & Mục đích</h3>
              <p className="text-gray-600">
                Kết nối doanh nghiệp toàn cầu thông qua nền tảng thương mại điện
                tử B2B tiên tiến
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl text-center">
              <div className="text-4xl text-blue-600 mb-4 justify-items-center">
                <Image
                  src={IMGS.Search}
                  alt={"Search"}
                  width={24}
                  height={24}
                />
              </div>
              <h3 className="text-xl font-bold mb-4">Sứ mệnh & Mục đích</h3>
              <p className="text-gray-600">
                Kết nối doanh nghiệp toàn cầu thông qua nền tảng thương mại điện
                tử B2B tiên tiến
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
