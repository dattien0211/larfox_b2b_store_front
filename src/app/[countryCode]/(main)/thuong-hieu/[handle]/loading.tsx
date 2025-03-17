import repeat from "@lib/util/repeat"
import ProductItemSkeleton from "@modules/layout/components/product-item/product-item-skeleton"

const Loading = () => {
  return (
    <div className="bg-primary-bg py-3 sm:py-6">
      {/* Brand Info Skeleton */}
      <section className="content-container bg-white rounded-lg shadow-lg px-4 py-5 relative mb-6 sm:mb-10 animate-pulse">
        <div className="flex flex-row gap-x-2 sm:gap-x-4 items-center text-center">
          {/* Logo Skeleton */}
          <div className="w-24 aspect-square border border-primary bg-gray-300 rounded-full"></div>

          {/* Text Skeleton */}
          <div className="flex flex-col items-start gap-y-2 w-full">
            <div className="h-5 w-32 bg-gray-300 rounded"></div>
            <div className="h-4 w-24 bg-gray-300 rounded"></div>
          </div>
        </div>
      </section>

      {/* Product Section Skeleton */}
      <section className="content-container bg-white rounded-lg shadow-lg px-4 pt-3 pb-6 sm:pt-5 sm:pb-10 relative my-6 sm:my-10 animate-pulse">
        <div className="h-6 w-40 bg-gray-300 rounded mb-4"></div>

        {/* Product Grid Skeleton */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {repeat(10).map((_, index) => (
            <ProductItemSkeleton key={index} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Loading
