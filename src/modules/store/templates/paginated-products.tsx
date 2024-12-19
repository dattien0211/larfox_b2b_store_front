import { getProductsListWithSort } from "@lib/data/products"
import { getRegion } from "@lib/data/regions"
import { SortOptions } from "@modules/categories/components/sort-category"
import ProductPreview from "@modules/products/components/product-preview"
import { Pagination } from "@modules/store/components/pagination"

const PRODUCT_LIMIT = 12

type PaginatedProductsParams = {
  limit: number
  collection_id?: string[]
  category_id?: string[]
  id?: string[]
  order?: string
}

export default async function PaginatedProducts({
  sortBy,
  page,
  collectionId,
  categoryId,
  productsIds,
  countryCode,
}: {
  sortBy?: SortOptions
  page: number
  collectionId?: string
  categoryId?: string[]
  productsIds?: string[]
  countryCode: string
}) {
  const region = await getRegion(countryCode)
  if (!region) return null

  const queryParams: PaginatedProductsParams = { limit: 12 }

  if (collectionId) queryParams["collection_id"] = [collectionId]
  if (categoryId) queryParams["category_id"] = [...categoryId]
  if (productsIds) queryParams["id"] = productsIds

  if (sortBy === "moi_nhat") {
    queryParams["order"] = "created_at"
  }

  const sortOrder =
    sortBy === "giam_dan"
      ? "price_desc"
      : sortBy === "tang_dan"
      ? "price_asc"
      : undefined

  let {
    response: { products, count },
  } = await getProductsListWithSort({
    page,
    queryParams,
    sortBy: sortOrder,
    countryCode,
  })

  // const totalPages = Math.ceil(count / PRODUCT_LIMIT)
  const totalPages = 3

  //@ts-ignore
  const product = {
    id: "prod_01JDS2CW5C8S6QTC6J154YW019",
    title: "Bịt mắt thảo dược AnCo Eyes",
    subtitle:
      "Thư giãn vùng mắt, giảm nhức mỏi mắt, giúp ngủ ngon.Làm ấm niêm mạc mũi, cải thiện viêm xoang.100% thảo dược thiên nhiên: thiên niên kiện, kê huyết đằng, tang kí sinh, mộc qua, xuyên khung, thạc xương bồ, thủ phục linh,địa liền, hạt muồng…",
    description: "HƯỚNG DẪN SỬ DỤNG \n",
    handle: "bit-mat-thao-duoc-anco-eyes",
    is_giftcard: false,
    discountable: true,
    thumbnail:
      "http://localhost:9000/static/1734430017747-anh-man-hinh-2024-06-13-luc-33258-ch-20240613083309-2pl0t%201.png",
    collection_id: null,
    type_id: null,
    weight: null,
    length: null,
    height: null,
    width: null,
    hs_code: null,
    origin_country: null,
    mid_code: null,
    material: null,
    created_at: "2024-11-28T09:42:22.109Z",
    updated_at: "2024-11-28T09:42:22.109Z",
    type: null,
    collection: null,
    options: [
      {
        id: "opt_01JDS2CW65K6N6B0WJD6F922EE",
        title: "Default option",
        metadata: null,
        product_id: "prod_01JDS2CW5C8S6QTC6J154YW019",
        created_at: "2024-11-28T09:42:22.109Z",
        updated_at: "2024-11-28T09:42:22.109Z",
        deleted_at: null,
        values: ["value1", "value2"],
      },
    ],
    tags: [
      {
        id: "ptag_01JFAXS5R98R4SH0EQ7R31J9JY",
        value: "Chăm sóc sức khỏe",
        metadata: null,
        created_at: "2024-12-17T18:23:43.881Z",
        updated_at: "2024-12-17T18:23:43.881Z",
        deleted_at: null,
      },
    ],
    images: [
      {
        id: "img_01JFA22GW02CZGHZVFY3YVKCQW",
        url: "http://localhost:9000/static/1734430017747-anh-man-hinh-2024-06-13-luc-33258-ch-20240613083309-2pl0t%201.png",
        metadata: null,
        rank: 0,
        product_id: "prod_01JDS2CW5C8S6QTC6J154YW019",
        created_at: "2024-12-17T10:19:30.041Z",
        updated_at: "2024-12-17T10:19:30.041Z",
        deleted_at: null,
      },
      {
        id: "img_01JFA22GW1SSKECJ1SCA6SCSFP",
        url: "http://localhost:9000/static/1734430426783-Mask%20group.png",
        metadata: null,
        rank: 1,
        product_id: "prod_01JDS2CW5C8S6QTC6J154YW019",
        created_at: "2024-12-17T10:19:30.041Z",
        updated_at: "2024-12-17T10:19:30.041Z",
        deleted_at: null,
      },
    ],
    variants: [
      {
        id: "variant_01JDS2CW876FVY3R3YE0RNXWXB",
        title: "Default variant",
        sku: "Ancocare - h001-01",
        barcode: null,
        ean: null,
        upc: null,
        allow_backorder: false,
        manage_inventory: true,
        hs_code: null,
        origin_country: "vn",
        mid_code: null,
        material: null,
        weight: null,
        length: null,
        height: null,
        width: null,
        metadata: null,
        variant_rank: 0,
        product_id: "prod_01JDS2CW5C8S6QTC6J154YW019",
        created_at: "2024-11-28T09:42:22.215Z",
        updated_at: "2024-11-28T09:42:22.215Z",
        deleted_at: null,
        options: ["option1"],
        calculated_price: { price: 100 },
      },
    ],
    categories: [
      {
        id: "pcat_01JDS11KZV035D1Y4P77MKW0DD",
        name: "Anco care",
        description: "",
        handle: "anco-care",
        mpath: "pcat_01JDS11KZV035D1Y4P77MKW0DD",
        is_active: true,
        is_internal: false,
        rank: 0,
        metadata: null,
        parent_category_id: null,
        parent_category: null,
        created_at: "2024-11-28T09:18:44.735Z",
        updated_at: "2024-12-19T02:27:57.500Z",
        deleted_at: null,
      },
      {
        id: "pcat_01JDS11KZV0424242424242424242",
        name: "Sản phẩm độc quyền",
        description: "",
        handle: "san-phan-doc-quyen",
        mpath: "pcat_01JDS11KZV035D1Y4P77MKW0DD",
        is_active: true,
        is_internal: false,
        rank: 0,
        metadata: null,
        parent_category_id: null,
        parent_category: null,
        created_at: "2024-11-28T09:18:44.735Z",
        updated_at: "2024-12-19T02:27:57.500Z",
        deleted_at: null,
      },
    ],
  }

  //@ts-ignore
  products = Array.from({ length: 12 }, () => ({ ...product }))

  //@ts-ignore
  return (
    <>
      <ul
        className="grid grid-cols-2 w-full small:grid-cols-3 medium:grid-cols-3 gap-x-8 gap-y-14"
        data-testid="products-list"
      >
        {products.map((p) => {
          return (
            <li key={p.id}>
              <ProductPreview product={p} region={region} />
            </li>
          )
        })}
      </ul>
      {totalPages > 1 && (
        <Pagination
          data-testid="product-pagination"
          page={page}
          totalPages={totalPages}
        />
      )}
    </>
  )
}
