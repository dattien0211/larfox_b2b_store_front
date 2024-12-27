import Icons from "@modules/common/icons"

interface SelectSubsidiaryProps {
  dropDownColor?: string
}

const SelectSubsidiary = ({
  dropDownColor = "#AEAEAE",
}: SelectSubsidiaryProps) => {
  const { DropDown, Market } = Icons
  return (
    <div className="flex gap-x-2 my-2 sm:my-0 ">
      <div className="w-8 h-8 rounded-md bg-grey-10 flex items-center justify-center">
        <span className="text-primary">
          <Market />
        </span>
      </div>
      <div>
        <p className="text-xxs md:text-xs">Hệ thống cửa hàng</p>
        <div className="flex items-center cursor-pointer gap-x-2">
          <h1 className="text-xs sm:text-sm lg:text-base">TP Hà Nội</h1>
          <DropDown color={dropDownColor} />
        </div>
      </div>
    </div>
  )
}

export default SelectSubsidiary
