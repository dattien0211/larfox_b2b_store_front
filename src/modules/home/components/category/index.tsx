import Image from "next/image"
import { Heading } from "@medusajs/ui"
import { StoreProductCategory } from "@medusajs/types"

import IMGS from "@constants/IMGS"
import CategoryItem from "./category-item"

interface CategoryProps {
  categories: StoreProductCategory[]
}

const Category: React.FC<CategoryProps> = async ({ categories }) => {
  if (!categories) {
    return null
  }

  return (
    <div className="relative content-container py-4 sm:pt-6 sm:pb-8 mb-4 sm:mb-8  bg-white rounded-md shadow-md">
      <div className="absolute -top-[2%] left-0 w-9 h-9 sm:w-16 sm:h-16  ">
        <Image
          src={IMGS.RiceSpike}
          alt="banner"
          width={64}
          height={64}
          className="w-full h-full object-contain rotate-45"
        />
      </div>

      <div className="absolute -bottom-[2%] right-0 w-9 h-9 sm:w-16 sm:h-16 ">
        <Image
          src={IMGS.RiceSpike}
          alt="banner"
          width={64}
          height={64}
          className="w-full h-full object-contain scale-x-[-1] rotate-[-35deg]"
        />
      </div>
      <Heading
        level="h1"
        className="mb-2 sm:mb-4 font-semibold capitalize font-times text-primary text-lg sm:text-2xl"
      >
        Danh mục sản phẩm
      </Heading>

      <div className="grid grid-cols-3 sm:grid-cols-4 small:grid-cols-6 w-full border-t border-l border-black/5">
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
