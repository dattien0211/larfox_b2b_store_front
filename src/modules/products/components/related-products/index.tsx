import { getProductsList } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"
import ProductsSlider from "@modules/layout/components/slider"

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
  const queryParams: HttpTypes.StoreProductParams = { limit: MAX_PRODUCTS }

  const categoryIds = product.categories?.map((category) => category.id)
  if (categoryIds?.length) {
    queryParams["category_id"] = [...categoryIds]
  }

  let products: HttpTypes.StoreProduct[] = []

  try {
    const { response } = await getProductsList({
      pageParam: 1,
      queryParams,
      countryCode,
    })

    products = response.products.filter(
      (responseProduct) => responseProduct.id !== product.id
    )
  } catch (error) {
    console.error("Error fetching related products:", error)
  }

  return (
    <div className="product-page-constraint">
      <div className="flex flex-col items-center text-center mb-3 sm:mb-6">
        <h1 className="sm:text-28 text-xl md:text-3xl font-semibold font-times text-primary capitalize">
          Sản phẩm liên quan
        </h1>
      </div>

      {!products.length ? (
        <div>
          <h1 className="text-black-20 text-sm sm:text-base md:text-lg text-center">
            Sản phẩm đang được thêm, hãy đón chờ những sản phẩm tốt nhất từ Bông
            Lúa bạn nhé.
          </h1>
        </div>
      ) : (
        <ProductsSlider products={products} isSale={isSale} />
      )}
    </div>
  )
}
