"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"
import Select, { SingleValue } from "react-select"

export type SortOptions = "giam_dan" | "tang_dan" | "moi_nhat"

type SortCategoriesProps = {
  sortBy?: SortOptions
  "data-testid"?: string
}

const sortOptions = [
  {
    value: "moi_nhat",
    label: "Mới nhất",
  },
  {
    value: "tang_dan",
    label: "Giá từ: Thấp → Cao",
  },
  {
    value: "giam_dan",
    label: "Giá từ: Cao → Thấp",
  },
]

const SortCategories: React.FC<SortCategoriesProps> = ({
  "data-testid": dataTestId,
  sortBy = "moi_nhat",
}) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams?.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  const setQueryParams = (name: string, value: string) => {
    const query = createQueryString(name, value)
    router.push(`${pathname}?${query}`)
  }

  const handleChange = (
    newValue: SingleValue<{ value: string; label: string }>
  ) => {
    if (newValue) {
      setQueryParams("sap-xep", newValue.value as SortOptions)
    }
  }

  const selectedOption = sortOptions.find((option) => option.value === sortBy)

  return (
    <Select
      value={selectedOption}
      options={sortOptions}
      onChange={handleChange}
      data-testid={dataTestId}
      isSearchable={false}
      instanceId="my-select-instance"
      classNames={{
        control: () => "custom-control",
        placeholder: () => "custom-placeholder",
        singleValue: () => "custom-single-value",
        menu: () => "custom-menu",
        option: () => "custom-option",
      }}
    />
  )
}

export default SortCategories
