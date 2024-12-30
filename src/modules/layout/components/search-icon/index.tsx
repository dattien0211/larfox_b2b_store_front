"use client"

import Icons from "@modules/common/icons"
import { useState } from "react"
import SearchModal from "@modules/search/templates/search-modal"

export default function SearchIconMobile() {
  const { Search } = Icons
  const [isShowModalSearch, setIsShowModalSearch] = useState(false)
  const handleOnClick = () => {
    setIsShowModalSearch(!isShowModalSearch)
  }

  return (
    <>
      <span
        className="md:hidden block cursor-pointer hover:text-primary py-2 px-1 lg:py-4 lg:px-2 "
        onClick={handleOnClick}
      >
        <Search />
      </span>
      {isShowModalSearch && <SearchModal setShow={setIsShowModalSearch} />}
    </>
  )
}
