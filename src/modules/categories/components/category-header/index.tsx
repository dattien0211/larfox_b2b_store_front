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
    <div className="flex items-center justify-between p-4 h-[60px] bg-grey-15 mb-12">
      <Breadcrumb allCategories={allCategories} path={path} />

      <div className="flex items-center space-x-6">
        {/* <span className="text-gray-600">Showing 1-12</span> */}

        <div className="relative z-50 w-40 text-sm">
          <SortCategories sortBy={sortBy} />
        </div>

        {/* <div className="flex items-center space-x-2">
          <button className="p-2 border border-gray-300 rounded text-gray-500 hover:bg-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <button className="p-2 border border-gray-300 rounded text-gray-500 hover:bg-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h7v7H4V6zm9 0h7v7h-7V6zM4 16h7v7H4v-7zm9 0h7v7h-7v-7z"
              />
            </svg>
          </button>
        </div> */}
      </div>
    </div>
  )
}

export default CategoryHeader
