"use client"

import Icons from "@modules/common/icons"
import SearchModal from "@modules/search/templates/search-modal"
import { useState } from "react"

export default function SearchNav() {
  const { Search } = Icons
  const [isShowModalSearch, setIsShowModalSearch] = useState(false)
  const handleOnFocus = () => {
    setIsShowModalSearch(!isShowModalSearch)
  }

  return (
    <>
      <div className="hidden md:flex items-center h-[46px]">
        <input
          type="text"
          name=""
          id=""
          placeholder="Tìm kiếm sản phẩm..."
          className="px-4 hidden md:block md:w-[260px] lg:w-[420px] focus:outline-none h-full bg-grey-10 text-primary rounded-l-md"
          onFocus={handleOnFocus}
        />
        <div className="bg-primary w-[46px] h-[46px] flex items-center justify-center rounded-r-md cursor-pointer">
          <span className="text-black md:text-white" onClick={handleOnFocus}>
            <Search />
          </span>
        </div>
      </div>
      {isShowModalSearch && <SearchModal setShow={setIsShowModalSearch} />}
    </>
  )
}
