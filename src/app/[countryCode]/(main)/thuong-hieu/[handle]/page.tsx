import { Metadata } from "next"
import { notFound } from "next/navigation"
import DOMPurify from "isomorphic-dompurify"
import { getRegion, listRegions } from "@lib/data/regions"

import { getBlogByHandle, getBlogList } from "@lib/data/blog"
import BlogSlider from "@modules/layout/components/blogs/slider"
import { BlogQueryParams } from "types/global"
import RiceSpike from "@modules/common/components/rice-spike"
import { getBrandByHandle, getBrandList } from "@lib/data/brand"
import { Brand } from "../../../../../types/global"

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

  // console.log("OK", brand)

  return <div className="bg-primary-bg py-3 sm:py-6"></div>
}
