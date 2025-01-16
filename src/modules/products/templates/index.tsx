import React, { Suspense } from "react"

import ProductActions from "@modules/products/components/product-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import RelatedProducts from "@modules/products/components/related-products"
// import ProductInfo from "@modules/products/templates/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import { notFound } from "next/navigation"
import ProductActionsWrapper from "./product-actions-wrapper"
import { HttpTypes } from "@medusajs/types"
import ImageSlider from "@modules/layout/components/img-slider"
import { Heading } from "@medusajs/ui"
import ProductReview from "@modules/products/components/product-review"
import { getCustomer } from "@lib/data/customer"
import { cookies } from "next/headers"

type ProductTemplateProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  countryCode: string
}

const ProductTemplate: React.FC<ProductTemplateProps> = async ({
  product,
  region,
  countryCode,
}) => {
  if (!product || !product.id) {
    return notFound()
  }
  const customer = await getCustomer().catch(() => null)
  const token = cookies().get("_medusa_jwt")?.value

  return (
    <div className="mb-16 sm:mb-24">
      <div
        className="content-container flex flex-col  small:items-start py-6 relative"
        data-testid="product-container"
      >
        <div className="flex flex-col md:flex-row items-start justify-center gap-x-4 md:gap-x-6 lg:gap-x-14 gap-y-8 w-full">
          <div className="w-full md:w-1/2">
            <ImageSlider
              images={product?.images || []}
              showThumbnails={
                product?.images ? product?.images?.length > 1 : false
              }
            />
          </div>
          <div className="w-full md:w-1/2">
            {/* <ProductInfo product={product} /> */}
            <div className="flex flex-col w-full">
              <ProductOnboardingCta />
              <Suspense
                fallback={
                  <ProductActions
                    disabled={true}
                    product={product}
                    region={region}
                  />
                }
              >
                <ProductActionsWrapper id={product.id} region={region} />
              </Suspense>
            </div>
          </div>
        </div>

        <div className="mt-6 md:mt-14 w-full">
          <Heading level="h1" className="text-primary text-xl sm:text-2xl ">
            Mô tả sản phẩm
          </Heading>
          <div
            className="border border-grey-20 sm:pt-4 md:pt-6 sm:pb-8 md:pb-12 sm:px-8 md:px-10 mt-6 sm:mt-10 p-4 text-sm sm:text-base"
            dangerouslySetInnerHTML={{
              __html: product.description
                ? product.description.replace(/\n/g, "<br />")
                : "Mô tả sản phẩm đang được cập nhật.",
            }}
          ></div>
        </div>

        <div className="mt-6 sm:mt-10 w-full">
          <Heading level="h1" className="text-primary text-xl sm:text-2xl ">
            Đánh giá sản phẩm
          </Heading>

          <ProductReview customer={customer} product={product} token={token} />
        </div>
      </div>

      <div
        className="content-container mt-8 sm:mt-20 sm:mb-44"
        data-testid="related-products-container"
      >
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product} countryCode={countryCode} />
        </Suspense>
      </div>
    </div>
  )
}

export default ProductTemplate
