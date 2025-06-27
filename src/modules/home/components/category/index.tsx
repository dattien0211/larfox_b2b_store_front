import { StoreProductCategory } from "@medusajs/types"
import Image from "next/image"
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
    <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-light text-center mb-16">
        {"Explore "}
        <span className="gradient-text font-medium">
          services and goods sellers
        </span>
      </h2>
      <div className="relative">
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-gray-200 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-300">
          <Image src={IMGS.Left} alt={"Left"} width={24} height={24} />
        </button>
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-gray-200 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-300">
          <Image src={IMGS.Right} alt={"Left"} width={24} height={24} />
        </button>
        <div className="overflow-hidden">
          <div className="transition-transform duration-300 ease-in-out">
            <div className="space-y-8">
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 pl-14 pr-14">
                {categories.length > 0 ? (
                  categories.map((category) => (
                    <CategoryItem
                      key={category.id}
                      // @ts-ignore
                      imagesSRC={category?.metadata?.thumbnail?.url}
                      text={category?.name}
                      link={`/category/${category.handle}`}
                    />
                  ))
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Category
