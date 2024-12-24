import { HttpTypes } from "@medusajs/types"

import LocalizedClientLink from "@modules/common/components/localized-client-link"

type ProductInfoProps = {
  product: HttpTypes.StoreProduct
  variant?: HttpTypes.StoreProductVariant
}

const ProductMoreInfo = ({ product, variant }: ProductInfoProps) => {
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
          {variant &&
            product?.variants &&
            product?.variants.length > 0 &&
            product?.variants?.find((_variant) => _variant.id === variant.id)
              ?.sku}
        </div>
      </div>
      <div className="flex text-sm">
        <span className="text-black-20 mr-2">Loại Sản Phẩm:</span>
        <div className="flex gap-x-2">
          {product?.categories &&
            product?.categories?.length > 0 &&
            product?.categories?.map((category, index) => {
              return (
                <div key={category?.id}>
                  <LocalizedClientLink
                    href={`/danh-muc-san-pham/${category?.handle}`}
                    className="hover:text-primary"
                  >
                    {category?.name}
                  </LocalizedClientLink>
                  {product?.categories && index < product?.categories.length - 1
                    ? ", "
                    : ""}
                </div>
              )
            })}
        </div>
      </div>
      <div className="flex text-sm">
        <span className="text-black-20">Thẻ:</span>
        <div className="flex gap-x-2 ml-1">
          {product?.tags &&
            product?.tags?.map((tag, index) => {
              return (
                <div key={tag?.id}>
                  <LocalizedClientLink href="#">
                    {tag?.value}
                  </LocalizedClientLink>
                  {product?.tags && index < product?.tags.length - 1
                    ? ", "
                    : ""}
                </div>
              )
            })}
        </div>
      </div>
      <div className="flex text-sm">
        <span className="text-black-20">Thương hiệu:</span>
        <div className="flex gap-x-2 ml-1">
          {product.origin_country && countryMapping[product.origin_country]}
        </div>
      </div>
    </div>
  )
}

export default ProductMoreInfo
