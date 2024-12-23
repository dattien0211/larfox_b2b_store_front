import { Suspense } from "react"

import { listRegions } from "@lib/data/regions"
import {
  getCategoryByHandle,
  listCategories,
  getCategoriesList,
} from "@lib/data/categories"
import { StoreRegion } from "@medusajs/types"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import TopNav from "./topNav"
import MiddleNav from "./middleNav"
import BottomNav from "./bottomNav"

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)
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
