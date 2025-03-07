"use client"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Icons from "@modules/common/icons"
import { useOS } from "@lib/hooks/OSContext"
interface BreadcrumbProps {
  path: string[]
  className?: string
  allCategories: HttpTypes.StoreProductCategory[]
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  path,
  className,
  allCategories,
}) => {
  const { os } = useOS()
  const { RightArrow } = Icons

  const filteredItems = path.map((segment) => {
    return (
      allCategories.find((item) => item.handle === segment) || {
        handle: segment,
        name: segment,
      }
    )
  })

  return (
    <nav aria-label="breadcrumb" className={className}>
      <ul className="list-none p-0 flex flex-wrap gap-y-1 items-center text-sm sm:text-base text-primary">
        <li>
          <LocalizedClientLink
            href="/"
            className="hover:text-primary font-semibold"
          >
            Trang chủ
          </LocalizedClientLink>
        </li>
        <span className="mx-1 sm:mx-2">
          <RightArrow size={os === "mobile" ? "10" : "12"} />
        </span>
        <li>
          <LocalizedClientLink
            href="/tat-ca-san-pham"
            className="hover:text-primary font-semibold"
          >
            Sản phẩm
          </LocalizedClientLink>
        </li>
        {filteredItems.slice(1).map((item, index) => {
          // Construct the URL up to the current segment
          const href = `/${filteredItems
            .slice(0, index + 2)
            .map((i) => i.handle)
            .join("/")}`

          return (
            <li key={href} className="flex items-center text-nowrap">
              {index > 0 ? (
                <span className="ml-1 mr-2 font-bold">,</span>
              ) : (
                <span className="mx-1 sm:mx-2">
                  <RightArrow size={os === "mobile" ? "10" : "12"} />
                </span>
              )}

              <LocalizedClientLink
                href={href}
                className="hover:text-primary font-semibold"
              >
                {item.name}
              </LocalizedClientLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Breadcrumb
