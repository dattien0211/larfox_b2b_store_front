import Image from "next/image"
import Icons from "@modules/common/icons"
import IMGS from "@constants/IMGS"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function MiddleNav() {
  const { DropDown, Search, UserAnco, Heart, Bag } = Icons

  return (
    <div className="flex items-center justify-between my-4">
      <div className="w-[120px] h-auto">
        <LocalizedClientLink href="/">
          <Image
            src={IMGS.Logo}
            alt="Logo"
            width={120}
            height={56}
            className="w-auto h-auto"
          />
        </LocalizedClientLink>
      </div>
      <div className="flex items-center h-[46px]">
        {/* <div className="bg-grey-10 rounded-l-md flex items-center justify-center gap-x-4 px-8 h-full  border-r border-grey-20 cursor-pointer">
          All categories
          <span className="text-grey-30 ">
            <DropDown />
          </span>
        </div> */}
        <input
          type="text"
          name=""
          id=""
          placeholder="Tìm kiếm sản phẩm..."
          className="px-4 w-[420px] focus:outline-none h-full bg-grey-10 text-primary rounded-l-md"
        />
        <div className="bg-primary w-[46px] h-[46px] flex items-center justify-center rounded-r-md cursor-pointer">
          <span className="text-white">
            <Search />
          </span>
        </div>
      </div>
      <div className="flex items-center gap-x-4">
        <span className="cursor-pointer hover:text-primary">
          <UserAnco />
        </span>
        <span className="cursor-pointer hover:text-primary">
          <Heart />
        </span>
        <span className="cursor-pointer hover:text-primary">
          <Bag />
        </span>
      </div>
    </div>
  )
}
