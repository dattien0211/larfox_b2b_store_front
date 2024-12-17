import LocalizedClientLink from "@modules/common/components/localized-client-link"
import SelectSubsidiary from "@modules/layout/components/select-subsidiary"
import Icons from "@modules/common/icons"

export default async function BottomNav() {
  const { DropDown, Market } = Icons

  return (
    <div className="flex items-center justify-between ">
      <div className="flex items-center gap-x-4">
        <h1 className="py-4 cursor-pointer">
          <LocalizedClientLink href="#">Trang chủ</LocalizedClientLink>
        </h1>
        <div className="flex items-center gap-x-2 py-4 cursor-pointer">
          <h1>Sản phẩm</h1>
          <span className="text-grey-30">
            <span className="text-grey-30">
              <DropDown />
            </span>
          </span>
        </div>
        <div className="flex items-center gap-x-2 py-4 cursor-pointer">
          <h1>Giới thiệu</h1>
          <span className="text-grey-30">
            <DropDown />
          </span>
        </div>
        <div className="flex items-center gap-x-2 py-4 cursor-pointer">
          <h1>Blog</h1>
          <span className="text-grey-30">
            <DropDown />
          </span>
        </div>
        <h1 className="py-4 cursor-pointer">
          <LocalizedClientLink href="#">Liên hệ</LocalizedClientLink>
        </h1>
      </div>

      <SelectSubsidiary />
    </div>
  )
}
