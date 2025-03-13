import React, { Suspense } from "react"
import { notFound } from "next/navigation"
import { HttpTypes } from "@medusajs/types"
import "react-quill/dist/quill.snow.css"

import ProductActions from "@modules/products/components/product-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import RelatedProducts from "@modules/products/components/related-products"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import ImageSlider from "@modules/layout/components/img-slider"
import ProductReview from "@modules/products/components/product-review"
import ProductActionsWrapper from "./product-actions-wrapper"
import ProductDescription from "../components/product-description"
import Breadcrumb from "@modules/layout/components/bread-crumb"
import RiceSpike from "@modules/common/components/rice-spike"
import ProductDescriptionSkeleton from "../components/product-description/product-description-skeleton"

type ProductTemplateProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  countryCode: string
  customer: HttpTypes.StoreCustomer | null
  token?: string
}

const ProductTemplate: React.FC<ProductTemplateProps> = async ({
  product,
  region,
  countryCode,
  customer,
  token,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  return (
    <div className="bg-primary-bg py-3 sm:py-6">
      <section
        className="content-container py-4 sm:py-[18px] mb-4 sm:mb-6 rounded-lg shadow-lg bg-white "
        data-testid="product-breadcrumb"
      >
        <Breadcrumb product={product} />
      </section>

      <section
        className="content-container py-4 sm:py-6 mt-3 mb-4 sm:mt-6 sm:mb-8 rounded-lg shadow-lg bg-white relative"
        data-testid="product-container"
      >
        <RiceSpike />
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
      </section>

      <section className="content-container py-4 sm:py-6 my-4 sm:my-8 rounded-lg shadow-lg bg-white relative">
        <RiceSpike />
        <Suspense fallback={<ProductDescriptionSkeleton />}>
          <ProductDescription description={product?.description || undefined} />
        </Suspense>
      </section>

      <section className="content-container py-4 sm:py-6 my-4 sm:my-8 rounded-lg shadow-lg bg-white relative">
        <RiceSpike />
        <Suspense
          fallback={
            <div className="text-base sm:text-2xl text-center">
              Đang tải đánh giá sản phẩm...
            </div>
          }
        >
          <ProductReview customer={customer} product={product} token={token} />
        </Suspense>
      </section>

      <section
        className="content-container py-4 sm:py-6 my-4 sm:my-8 rounded-lg shadow-lg bg-white relative"
        data-testid="related-products-container"
      >
        <RiceSpike />
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product} countryCode={countryCode} />
        </Suspense>
      </section>
    </div>
  )
}

export default ProductTemplate
