import { HttpTypes } from "@medusajs/types"
import { Heading, Text } from "@medusajs/ui"
import Icons from "@modules/common/icons"

type ProductInfoProps = {
  product: HttpTypes.StoreProduct
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const { Star } = Icons
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
          <div className="text-primary flex gap-x-[2px]">
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
            <Star size={20} />
          </div>
          <p className="text-sm">
            4.8<span className="text-black-20 ml-1">(12k đánh giá)</span>
          </p>
          <div className="w-[2px] h-3 bg-grey-45"></div>
          <p className="text-sm">Đã bán 129</p>
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
