import Icons from "@modules/common/icons"
import { HttpTypes } from "@medusajs/types"
import Breadcrumb from "../bread-crumb"
import SortCategories, { SortOptions } from "../sort-category"

const CategoryHeader = ({
  allCategories,
  path,
  sortBy,
}: {
  path: string[]
  allCategories: HttpTypes.StoreProductCategory[]
  sortBy?: SortOptions
}) => {
  return (
    <div className="flex items-center justify-between p-2 sm:p-4 h-[60px] bg-grey-15 mb-4 sm:mb-8">
      <Breadcrumb allCategories={allCategories} path={path} />

      <div className="flex items-center space-x-6">
        {/* <span className="text-gray-600">Showing 1-12</span> */}

        <div className="relative z-20 w-20 sm:w-32 lg:w-44 text-sm">
          <SortCategories sortBy={sortBy} />
        </div>
      </div>
    </div>
  )
}

export default CategoryHeader
