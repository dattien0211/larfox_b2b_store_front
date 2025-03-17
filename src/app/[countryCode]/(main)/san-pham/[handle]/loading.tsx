import RiceSpike from "@modules/common/components/rice-spike"
import BreadcrumbSkeleton from "@modules/layout/components/bread-crumb/bread-crumb-skeleton"
import ProductDescriptionSkeleton from "@modules/products/components/product-description/product-description-skeleton"
import ReviewProductSkeleton from "@modules/products/components/product-review/review-product-skeleton"

export default function Loading() {
  return (
    <div className="bg-primary-bg py-3 sm:py-6 ">
      <div className="content-container">
        <section className="content-container py-4 sm:py-[18px] mb-4 sm:mb-6 rounded-lg shadow-lg bg-white ">
          <BreadcrumbSkeleton />
        </section>

        <section
          className="content-container py-4 sm:py-6 mt-3 mb-4 sm:mt-6 sm:mb-8 rounded-lg shadow-lg bg-white relative animate-pulse"
          data-testid="product-container"
        >
          <RiceSpike />
          {/* Placeholder for RiceSpike */}
          <div className="flex flex-col md:flex-row items-start justify-center gap-x-4 md:gap-x-6 lg:gap-x-14 gap-y-8 w-full">
            {/* Left side skeleton */}
            <div className="w-full md:w-1/2 h-80 bg-gray-200 rounded-lg"></div>

            {/* Right side skeleton */}
            <div className="w-full md:w-1/2 flex flex-col gap-y-4">
              <div className="w-3/4 h-6 bg-gray-200 rounded"></div>{" "}
              {/* Title */}
              <div className="w-full h-4 bg-gray-200 rounded"></div>{" "}
              {/* Description line 1 */}
              <div className="w-5/6 h-4 bg-gray-200 rounded"></div>{" "}
              {/* Description line 2 */}
              <div className="w-1/2 h-10 bg-gray-200 rounded"></div>{" "}
              {/* Button placeholder */}
            </div>
          </div>
        </section>

        <section className="content-container py-4 sm:py-6 my-4 sm:my-8 rounded-lg shadow-lg bg-white relative">
          <RiceSpike />
          <ProductDescriptionSkeleton />
        </section>

        <section className="content-container py-4 sm:py-6 my-4 sm:my-8 rounded-lg shadow-lg bg-white relative">
          <RiceSpike />

          <ReviewProductSkeleton />
        </section>
      </div>
    </div>
  )
}
