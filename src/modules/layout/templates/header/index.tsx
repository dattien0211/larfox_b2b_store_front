import MiddleNav from "./middleNav"
import BottomNav from "./bottomNav"
import { getCategoriesList } from "@lib/data/categories"

export default async function Header() {
  const { product_categories } = await getCategoriesList()

  return (
    <header className="border-b border-grey-20">
      {/*<TopNav />*/}
      <div className="w-full ">
        <div className="container">
          <MiddleNav />
          <BottomNav categories={product_categories} />
        </div>
      </div>
    </header>
  )
}
