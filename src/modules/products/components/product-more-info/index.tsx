import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type ProductInfoProps = {
  product: HttpTypes.StoreProduct
}

const ProductMoreInfo = ({ product }: ProductInfoProps) => {
  const countryMapping: Record<string, string> = {
    vn: "Việt Nam",
    us: "United States",
    ca: "Canada",
    // Add more country mappings as needed
  }

  return (
    <div className="mb-4 flex flex-col gap-y-2">
      <div className="flex text-sm">
        <span className="text-black-20">SKU:</span>
        <div className="flex gap-x-2 ml-1">
          {product?.variants?.map((variant, index) => {
            return (
              <span key={variant?.id}>
                {variant?.sku}
                {product?.variants && index < product?.variants.length - 1
                  ? ", "
                  : ""}
              </span>
            )
          })}
        </div>
      </div>
      <div className="flex text-sm">
        <span className="text-black-20">Loại Sản Phẩm:</span>
        <div className="flex gap-x-2">
          {product?.categories?.map((category) => {
            return (
              <LocalizedClientLink
                key={category.id}
                href={`/loai-san-pham/${category.handle}`}
                className="hover:text-blue-500"
              >
                {category.name}
              </LocalizedClientLink>
            )
          })}
        </div>
      </div>
      <div className="flex text-sm">
        <span className="text-black-20">Thẻ:</span>
        <div className="flex gap-x-2 ml-1">
          {product?.tags?.map((tag, index) => {
            return (
              <LocalizedClientLink href="" key={tag?.id}>
                {tag?.value}
                {product?.tags && index < product?.tags.length - 1 ? ", " : ""}
              </LocalizedClientLink>
            )
          })}
        </div>
      </div>
      <div className="flex text-sm">
        <span className="text-black-20">Thương hiệu:</span>
        <div className="flex gap-x-2 ml-1">
          {product?.variants?.map((variant, index) => {
            return (
              <span key={variant?.id}>
                {variant?.origin_country
                  ? countryMapping[variant?.origin_country?.toLowerCase()]
                  : countryMapping["vn"]}
                {product?.variants && index < product?.variants.length - 1
                  ? ", "
                  : ""}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProductMoreInfo
