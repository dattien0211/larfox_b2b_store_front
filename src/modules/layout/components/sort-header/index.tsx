import Icons from "@modules/common/icons"
import { HttpTypes } from "@medusajs/types"
import Breadcrumb from "../bread-crumb"
import SortCategories, { SortOptions } from "../sort-category"
import RiceSpike from "@modules/common/components/rice-spike"

const SortHeader = ({
  allCategories,
  path,
  sortBy,
}: {
  path: string[]
  allCategories: HttpTypes.StoreProductCategory[]
  sortBy?: SortOptions
}) => {
  return (
    <div className="flex px-2 py-1 lg:py-0  items-center justify-between  sm:p-4 sm:h-[60px] bg-white rounded-lg shadow-lg mb-4 relative">
      <RiceSpike classIMG2="!-bottom-5 sm:!-bottom-8 -right-5" />

      <div className="hidden lg:block">
        <Breadcrumb allCategories={allCategories} path={path} />
      </div>

      <h1 className="lg:hidden  text-sm">Sắp xếp</h1>

      <div className="flex items-center justify-between space-x-6">
        {/* <span className="text-gray-600">Showing 1-12</span> */}

        <div className="relative z-10 sm:w-32 lg:w-44 text-sm">
          <SortCategories sortBy={sortBy} />
        </div>
      </div>
    </div>
  )
}

export default SortHeader
