import React, { Suspense } from "react"
import { notFound } from "next/navigation"
import { Heading } from "@medusajs/ui"
import { HttpTypes } from "@medusajs/types"
import { cookies } from "next/headers"
import "react-quill/dist/quill.snow.css"

import ProductActions from "@modules/products/components/product-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import RelatedProducts from "@modules/products/components/related-products"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import ImageSlider from "@modules/layout/components/img-slider"
import ProductReview from "@modules/products/components/product-review"
import { getCustomer } from "@lib/data/customer"
import ProductActionsWrapper from "./product-actions-wrapper"
import { getProductsById } from "@lib/data/products"
import ProductDescription from "../components/product-description"

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
  // const customer = await getCustomer().catch(() => null)
  // const [productById] = await getProductsById({
  //   ids: [product.id],
  //   regionId: region.id,
  // })

  const customerPromise = getCustomer().catch(() => null)
  const productPromise = getProductsById({
    ids: [product.id],
    regionId: region.id,
  })
  const [customer, [productById]] = await Promise.all([
    customerPromise,
    productPromise,
  ])
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

        <Suspense fallback={<p>Đang tải mô tả sản phẩm...</p>}>
          <ProductDescription description={product?.description || undefined} />
        </Suspense>

        <Suspense fallback={<p>Đang tải đánh giá sản phẩm...</p>}>
          <ProductReview
            customer={customer}
            product={productById}
            token={token}
          />
        </Suspense>
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
