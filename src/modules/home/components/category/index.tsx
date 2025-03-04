import CategoryItem from "./category-item"
import { Heading } from "@medusajs/ui"
import { StoreProductCategory } from "@medusajs/types"

interface CategoryProps {
  categories: StoreProductCategory[]
}

const Category: React.FC<CategoryProps> = async ({ categories }) => {
  if (!categories) {
    return null
  }

  return (
    <div className="content-container mt-4 sm:mt-8 relative">
      <Heading
        level="h1"
        className="mb-2 sm:mb-4 font-semibold capitalize font-times text-primary text-lg sm:text-2xl"
      >
        Danh mục sản phẩm
      </Heading>

      <div className="grid grid-cols-3 small:grid-cols-6 w-full border-t border-l border-black/5">
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
