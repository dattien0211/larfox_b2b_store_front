import { HttpTypes } from "@medusajs/types"
import { Heading, Text } from "@medusajs/ui"
import Icons from "@modules/common/icons"

type ProductInfoProps = {
  product: HttpTypes.StoreProduct
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const { Star, StarHalf } = Icons

  const reviews = Array.isArray(product?.metadata?.reviews)
    ? product.metadata.reviews
    : []

  const averageRating =
    reviews.length > 0
      ? (reviews.reduce((sum, r) => sum + r.star, 0) / reviews.length).toFixed(
          1
        )
      : "5"
  const rating = parseFloat(averageRating)
  const soldCount = Number(product?.metadata?.sold) || 0

  return (
    <div id="product-info " className="mt-2 sm:mt-4">
      <div className="flex flex-col gap-y-2 sm:gap-y-4">
        <Heading
          level="h2"
          className="sm:text-3xl text-2xl  leading-10 "
          data-testid="product-title"
        >
          {product.title}
        </Heading>
        <div className="flex items-center gap-x-2">
          <div className=" flex gap-x-[2px]">
            {[...Array(5)].map((_, index) => {
              if (index < Math.floor(rating)) {
                // Full star with primary color
                return <Star key={index} size={20} className="text-primary" />
              }
              if (index < Math.ceil(rating)) {
                // Half star with primary color
                return (
                  <StarHalf key={index} size={20} className="text-primary" />
                )
              }
              // Empty star with gray color
              return <Star key={index} size={20} className="text-grey-20" />
            })}
          </div>
          <p className="text-sm">
            {averageRating}
            <span className="text-black-20 ml-1">
              ( {reviews.length} đánh giá)
            </span>
          </p>
          <div className="w-[2px] h-3 bg-grey-45"></div>
          <p className="text-sm">Đã bán: {soldCount}</p>
        </div>

        <Text
          className="text-sm whitespace-pre-line"
          data-testid="product-description"
        >
          {product.subtitle}
        </Text>
      </div>
    </div>
  )
}

export default ProductInfo
