import { getProductsList } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"
import ProductItem from "@modules/layout/components/product-item"
import ProductsSlider from "@modules/layout/components/slider"
import ProductPreview from "@modules/products/components/product-preview"

type RelatedProductsProps = {
  product: HttpTypes.StoreProduct
  countryCode: string
  isSale?: boolean
}

const MAX_PRODUCTS = 20

export default async function RelatedProducts({
  product,
  countryCode,
  isSale = false,
}: RelatedProductsProps) {
  const queryParams: HttpTypes.StoreProductParams = {}

  queryParams.limit = MAX_PRODUCTS

  const categoryIds = product.categories?.map((category) => category.id)

  if (categoryIds) queryParams["category_id"] = [...categoryIds]

  // if (product.collection_id)
  //   queryParams["collection_id"] = [product.collection_id]

  // if (product.tags && product.tags.length > 0)
  //   queryParams["tag_id"] = product.tags
  //     .map((t) => t.id)
  //     .filter(Boolean) as string[]

  const products = await getProductsList({
    pageParam: 0,
    queryParams,
    countryCode,
  }).then(({ response }) => {
    return response.products.filter(
      (responseProduct) => responseProduct.id !== product.id
    )
  })

  return (
    <div className="product-page-constraint">
      <div className="flex flex-col items-center text-center mb-4 sm:mb-8">
        <h1 className="sm:text-[28px] text-xl   md:text-4xl font-semibold font-times text-primary capitalize">
          Sản phẩm liên quan
        </h1>
      </div>

      {!products.length ? (
        <div>
          <h1 className="text-black-20 text-sm  sm:text-base md:text-lg text-center">
            Sản phẩm đang được thêm, hãy đón chờ những sản phẩm tốt nhất từ Bông
            Lúa bạn nhé.
          </h1>
        </div>
      ) : (
        <ProductsSlider products={products} />
      )}
    </div>
  )
}
