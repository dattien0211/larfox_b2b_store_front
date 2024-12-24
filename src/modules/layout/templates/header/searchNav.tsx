"use client"

import Icons from "@modules/common/icons"
import { useRouter, useParams } from "next/navigation"

export default function SearchNav() {
  const { Search } = Icons
  const router = useRouter()
  const { countryCode } = useParams()

  const handleOnFocus = () => {
    router.push(`/${countryCode}/tim-kiem`)
  }

  return (
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
        onFocus={handleOnFocus}
      />
      <div className="bg-primary w-[46px] h-[46px] flex items-center justify-center rounded-r-md cursor-pointer">
        <span className="text-white">
          <Search />
        </span>
      </div>
    </div>
  )
}
