"use client"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Icons from "@modules/common/icons"
import { useOS } from "@lib/hooks/OSContext"
import { BlogType, Blog } from "types/global"

interface BreadcrumbProps {
  path?: string[]
  className?: string
  allCategories?: HttpTypes.StoreProductCategory[] // Make it optional
  product?: HttpTypes.StoreProduct
  isBlog?: boolean
  blog?: Blog
  blogType?: BlogType
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  path = [],
  className,
  allCategories = [], // Default to an empty array
  product,
  isBlog = false,
  blog,
  blogType,
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
      <ul className="list-none p-0 flex flex-wrap gap-y-1 items-center text-sm sm:text-base relative z-30">
        <li>
          <LocalizedClientLink
            href="/"
            className="hover:text-primary text-primary/90 font-semibold capitalize"
          >
            Trang chủ
          </LocalizedClientLink>
        </li>

        {!isBlog && (
          <BreadcrumbItem
            href="/tat-ca-san-pham"
            label="Sản phẩm"
            icon={RightArrow}
            os={os}
          />
        )}

        {filteredItems.slice(1).map((item, index) => {
          const href = `/${filteredItems
            .slice(0, index + 2)
            .map((i) => i.handle)
            .join("/")}`

          return (
            <BreadcrumbItem
              key={item.handle}
              href={href}
              label={item.name}
              icon={RightArrow}
              os={os}
              separator={index > 0}
            />
          )
        })}

        {path?.length <= 0 &&
          allCategories.length > 0 &&
          allCategories.map((item, index) => {
            const href = `/danh-muc-san-pham/${item.handle}`
            return (
              <BreadcrumbItem
                key={item.handle}
                href={href}
                label={item.name}
                icon={RightArrow}
                os={os}
                separator={index > 0}
              />
            )
          })}

        {product && (
          <BreadcrumbItem
            label={product.title.toLowerCase()}
            icon={RightArrow}
            os={os}
            isLast
          />
        )}

        {blogType && (
          <BreadcrumbItem
            href={`/loai-bai-viet/${blogType.value}`}
            label={blogType.name.toLowerCase()}
            icon={RightArrow}
            os={os}
          />
        )}

        {blog && (
          <BreadcrumbItem
            label={blog.title.toLowerCase()}
            icon={RightArrow}
            os={os}
            isLast
          />
        )}
      </ul>
    </nav>
  )
}

const BreadcrumbItem: React.FC<{
  href?: string
  label: string
  icon: any
  os: string
  separator?: boolean
  isLast?: boolean
}> = ({ href, label, icon: Icon, os, separator = false, isLast = false }) => (
  <li className="flex items-center text-nowrap">
    {separator ? (
      <span className="ml-1 mr-2 font-bold">,</span>
    ) : (
      <span className="mx-1 sm:mx-2">
        <Icon size={os === "mobile" ? "10" : "12"} />
      </span>
    )}
    {href ? (
      <LocalizedClientLink
        href={href}
        className="hover:text-primary text-primary/90 font-semibold capitalize"
      >
        {label}
      </LocalizedClientLink>
    ) : (
      <p
        className={`!text-primary/75 font-semibold capitalize ${
          isLast ? "w-36 sm:w-96 line-clamp-1" : ""
        }`}
      >
        {label}
      </p>
    )}
  </li>
)

export default Breadcrumb
