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

type ProductTemplateProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  countryCode: string
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  return (
    <>
      <div
        className="content-container flex flex-col  small:items-start py-6 relative"
        data-testid="product-container"
      >
        <div className="flex items-start justify-center gap-x-14 w-full">
          <div className="w-1/2">
            <ImageSlider
              images={product?.images || []}
              showThumbnails={
                product?.images ? product?.images?.length > 1 : false
              }
            />
          </div>
          <div className="w-1/2 ">
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

        <div className="mt-20 w-full">
          <Heading level="h1" className="text-primary text-xl ">
            Mô tả sản phẩm
          </Heading>
          <div
            className="border border-grey-20 pt-6 pb-12 px-10 mt-10"
            dangerouslySetInnerHTML={{
              __html: product.description
                ? product.description.replace(/\n/g, "<br />")
                : "",
            }}
          ></div>
        </div>

        <div className="mt-10 w-full">
          <Heading level="h1" className="text-primary text-xl ">
            Đánh giá sản phẩm
          </Heading>
          <div className="border border-grey-20 pt-6 pb-12 px-10 mt-10">
            <ProductReview />
          </div>
        </div>
      </div>

      <div
        className="content-container my-16 small:mt-20 small:mb-44"
        data-testid="related-products-container"
      >
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product} countryCode={countryCode} />
        </Suspense>
      </div>
    </>
  )
}

export default ProductTemplate
