import { getCategoriesList } from "@lib/data/categories"

import TopNav from "./topNav"
import MiddleNav from "./middleNav"
import BottomNav from "./bottomNav"
import { getBlogTypesList } from "@lib/data/blog-types"

export default async function Header() {
  const categories = await getCategoriesList()
  const { blogTypes } = await getBlogTypesList()

  return (
    <header>
      <TopNav />
      <div className="w-full ">
        <div className="content-container ">
          <MiddleNav />
          <BottomNav
            categories={categories.product_categories}
            blogTypes={blogTypes}
          />
        </div>
      </div>
    </header>
  )
}
