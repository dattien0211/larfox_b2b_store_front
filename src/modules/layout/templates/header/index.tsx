import TopNav from "./topNav"
import MiddleNav from "./middleNav"
import BottomNav from "./bottomNav"

import { getBlogTypesList } from "@lib/data/blog-types"
import { getCategoriesList } from "@lib/data/categories"

export default async function Header() {
  const { product_categories } = await getCategoriesList()
  const { blogTypes } = await getBlogTypesList()

  return (
    <header className="border-b border-grey-20 shadow-lg">
      <TopNav />
      <div className="w-full ">
        <div className="content-container ">
          <MiddleNav />
          <BottomNav categories={product_categories} blogTypes={blogTypes} />
        </div>
      </div>
    </header>
  )
}
