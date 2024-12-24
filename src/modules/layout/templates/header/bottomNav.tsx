import LocalizedClientLink from "@modules/common/components/localized-client-link"
import SelectSubsidiary from "@modules/layout/components/select-subsidiary"
import Icons from "@modules/common/icons"
import Menu from "./menu"
import { HttpTypes } from "@medusajs/types"

export default function BottomNav({
  categories,
}: {
  categories?: HttpTypes.StoreProductCategory[]
}) {
  const { DropDown } = Icons

  return (
    <div className="flex items-center justify-between relative">
      <div className="flex items-center gap-x-4">
        <div className="py-4 pr-4 cursor-pointer hover:text-primary">
          <LocalizedClientLink href="/">Trang chủ</LocalizedClientLink>
        </div>

        <div className="relative flex items-center gap-x-4 p-4 cursor-pointer hover:text-primary group">
          <h1>Sản phẩm</h1>
          <span className="text-grey-30 group-hover:text-primary">
            <DropDown />
          </span>
          <Menu categories={categories} />
        </div>

        <div className="flex items-center gap-x-4 p-4 cursor-pointer hover:text-primary group">
          <h1>Giới thiệu</h1>
          <span className="text-grey-30 group-hover:text-primary">
            <DropDown />
          </span>
        </div>
        <div className="flex items-center gap-x-4 p-4 cursor-pointer hover:text-primary group">
          <h1>Blog</h1>
          <span className="text-grey-30 group-hover:text-primary">
            <DropDown />
          </span>
        </div>
        <h1 className="p-4 cursor-pointer hover:text-primary">
          <LocalizedClientLink href="/">Liên hệ</LocalizedClientLink>
        </h1>
      </div>

      <SelectSubsidiary />
    </div>
  )
}
