"use client"

import repeat from "@lib/util/repeat"
import { useOS } from "@lib/hooks/OSContext"
import ProductItemSkeleton from "@modules/layout/components/product-item/product-item-skeleton"

const SkeletonRelatedProducts = () => {
  const { os } = useOS()

  const slidesPerView = os === "desktop" ? 5 : os === "tablet" ? 3 : 2

  return (
    <div className="product-page-constraint">
      <div className="flex flex-col items-center text-center mb-3 sm:mb-6">
        <h1 className="sm:text-28 text-xl md:text-3xl font-semibold font-times text-primary capitalize">
          Sản phẩm liên quan
        </h1>
      </div>
      <div className="mt-2 sm:mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {repeat(slidesPerView).map((_, index) => (
          <ProductItemSkeleton key={index} />
        ))}
      </div>
    </div>
  )
}

export default SkeletonRelatedProducts
