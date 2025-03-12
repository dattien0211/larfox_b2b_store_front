import Image from "next/image"
import { Heading } from "@medusajs/ui"
import { StoreProductCategory } from "@medusajs/types"

import IMGS from "@constants/IMGS"
import CategoryItem from "./category-item"
import RiceSpike from "@modules/common/components/rice-spike"

interface CategoryProps {
  categories: StoreProductCategory[]
}

const Category: React.FC<CategoryProps> = async ({ categories }) => {
  if (!categories) {
    return null
  }

  return (
    <div className="relative content-container py-4 sm:pt-6 sm:pb-8 mb-6 sm:mb-10  bg-white rounded-lg shadow-lg">
      <RiceSpike />
      <Heading
        level="h1"
        className="mb-2 sm:mb-4 font-semibold capitalize font-times text-primary text-xl sm:text-2xl"
      >
        Danh mục sản phẩm
      </Heading>

      <div className="grid grid-cols-3 sm:grid-cols-4 small:grid-cols-6 w-full border-t border-l border-primary/35">
        <CategoryItem
          key={100}
          text={"Tất cả sản phẩm"}
          link={"/tat-ca-san-pham"}
          isAll={true}
        />
        {categories &&
          categories.map((category) => (
            <CategoryItem
              key={category.id}
              // @ts-ignore
              imagesSRC={category?.metadata?.thumbnail?.url}
              text={category.name}
              link={category.handle}
            />
          ))}
      </div>
    </div>
  )
}

export default Category
