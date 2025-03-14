import { Metadata } from "next"
import { notFound } from "next/navigation"
import { getRegion, listRegions } from "@lib/data/regions"
import Image from "next/image"

import { getBrandByHandle, getBrandList } from "@lib/data/brand"
import RiceSpike from "@modules/common/components/rice-spike"
import ShowItem from "@modules/layout/components/show-item"
import LoadMoreProducts from "./load-more-product"

type Props = {
  params: { countryCode: string; handle: string }
}

export async function generateStaticParams() {
  try {
    const countryCodes = await listRegions().then((regions) =>
      regions?.map((r) => r.countries?.map((c) => c.iso_2)).flat()
    )

    if (!countryCodes) {
      return []
    }

    const { brands } = await getBrandList()

    return countryCodes
      .map((countryCode) =>
        brands.map((brand) => ({
          countryCode,
          handle: brand.handle,
        }))
      )
      .flat()
      .filter((param) => param.handle)
  } catch (error) {
    console.error(
      `Failed to generate static paths for product pages: ${
        error instanceof Error ? error.message : "Unknown error"
      }.`
    )
    return []
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { handle } = params
  const region = await getRegion(params.countryCode)

  if (!region) {
    notFound()
  }

  const brand = await getBrandByHandle(handle)

  if (!brand) {
    notFound()
  }

  return {
    title: `${brand.name} | Bông Lúa`,
    description: `${brand.short_description}`,
    openGraph: {
      title: `${brand.name} | Bông Lúa`,
      description: `${brand.short_description}`,
      images: brand.thumbnail?.url ? [brand.thumbnail?.url] : [],
    },
  }
}

export default async function BlogPage({ params }: Props) {
  const brand = await getBrandByHandle(params.handle)

  if (!brand) {
    notFound()
  }

  const products = brand.products

  return (
    <div className="bg-primary-bg py-3 sm:py-6">
      <section className="content-container bg-white rounded-lg shadow-lg px-4 py-5 relative mb-6 sm:mb-10">
        <RiceSpike />
        <div className="flex flex-row gap-x-2 sm:gap-x-4 items-center text-center">
          <div className="relative w-24 aspect-square border border-primary bg-gray-300 rounded-full">
            {brand.logo && (
              <Image
                src={brand.logo.url}
                alt={brand.name}
                width={100}
                height={100}
                className="w-full h-full rounded-full object-contain"
              />
            )}
          </div>

          <div className="flex flex-col items-start  gap-y-2 ">
            <h2 className="text-base sm:text-xl font-semibold text-center">
              {brand.name}
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm text-left">
              {brand.headquarters}
            </p>
          </div>
        </div>
      </section>

      <section className="content-container bg-white rounded-lg shadow-lg px-4 pt-3 pb-6 sm:pt-5 sm:pb-10 relative my-6 sm:my-10">
        <RiceSpike />
        <h1 className="sm:text-2xl text-xl text-primary capitalize font-manrope-semibold">
          Tất cả sản phẩm
        </h1>
        {products && <LoadMoreProducts products={products} />}
      </section>
    </div>
  )
}
