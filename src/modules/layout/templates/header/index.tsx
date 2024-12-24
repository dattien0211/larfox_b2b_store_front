import { getCategoriesList } from "@lib/data/categories"

import TopNav from "./topNav"
import MiddleNav from "./middleNav"
import BottomNav from "./bottomNav"

export default async function Header() {
  const categories = await getCategoriesList()
  return (
    <header className="border-b border-grey-10 ">
      <TopNav />
      <div className="w-full ">
        <div className="content-container ">
          <MiddleNav />
          <BottomNav categories={categories.product_categories} />
        </div>
      </div>
    </header>
  )
}
