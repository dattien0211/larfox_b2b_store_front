import { Heading, Text } from "@medusajs/ui"

import PaginatedProducts from "@modules/store/templates/paginated-products"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { SortOptions } from "@modules/layout/components/sort-category"

type SearchResultsTemplateProps = {
  query: string
  ids: string[]
  sortBy?: SortOptions
  page?: string
  countryCode: string
}

const SearchResultsTemplate = ({
  query,
  ids,
  sortBy,
  page,
  countryCode,
}: SearchResultsTemplateProps) => {
  const pageNumber = page ? parseInt(page) : 1

  return (
    <div className="content-container mb-24 sm:mb-48">
      <div className="flex justify-between border-b w-full py-6 pl-4 pr-8 small:px-0 small:pr-2 items-center">
        <div className="flex flex-col items-start">
          <Text className="text-ui-fg-muted txt-large">
            Kết quả tìm kiếm cho:
          </Text>
          <Heading>
            {decodeURI(query)}
            <span className="text-ui-fg-muted ml-1">
              ({ids.length} sản phẩm)
            </span>
          </Heading>
        </div>
        <LocalizedClientLink
          href="/tat-ca-san-pham"
          className="txt-large text-ui-fg-subtle hover:text-ui-fg-base"
        >
          Xóa
        </LocalizedClientLink>
      </div>
      <div className="flex flex-col small:flex-row small:items-start py-6">
        {ids.length > 0 ? (
          <>
            <div className="content-container !px-0">
              <PaginatedProducts
                isSearch={true}
                productsIds={ids}
                sortBy={sortBy}
                page={pageNumber}
                countryCode={countryCode}
              />
            </div>
          </>
        ) : (
          <Text className="mt-3  font-manrope-semibold  text-base sm:text-lg">
            Không có sản phẩm tương ứng những gì bạn vừa tìm kiếm.
          </Text>
        )}
      </div>
    </div>
  )
}

export default SearchResultsTemplate
