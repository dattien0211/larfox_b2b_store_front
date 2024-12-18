import { getProductsList } from "@lib/data/products"
import { getRegion } from "@lib/data/regions"
import { HttpTypes } from "@medusajs/types"
import Product from "../product-preview"

type RelatedProductsProps = {
  product: HttpTypes.StoreProduct
  countryCode: string
}

export default async function RelatedProducts({
  product,
  countryCode,
}: RelatedProductsProps) {
  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }

  // edit this function to define your related products logic
  const queryParams: HttpTypes.StoreProductParams = {}
  if (region?.id) {
    queryParams.region_id = region.id
  }
  if (product.collection_id) {
    queryParams.collection_id = [product.collection_id]
  }
  if (product.tags) {
    queryParams.tag_id = product.tags
      .map((t) => t.id)
      .filter(Boolean) as string[]
  }
  queryParams.is_giftcard = false

  const products = await getProductsList({
    queryParams,
    countryCode,
  }).then(({ response }) => {
    return response.products.filter(
      (responseProduct) => responseProduct.id !== product.id
    )
  })

  return (
    <div className="product-page-constraint">
      <div className="flex flex-col items-center text-center mb-8">
        <span className="text-4xl font-semibold">Sản phẩm liên quan</span>
      </div>

      {!products.length ? (
        <div>
          <h1 className="text-black-20 text-lg text-center">
            Sản phẩm đang được thêm, hãy đón chờ những sản phẩm tốt nhất từ Anco
            bạn nhé.
          </h1>
        </div>
      ) : (
        <ul className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8">
          {products.map((product) => (
            <li key={product.id}>
              <Product region={region} product={product} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
