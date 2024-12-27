"use client"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { useOS } from "@lib/hooks/OSContext"
import ProductItem from "../product-item"

const ListProducts: React.FC = () => {
  const { os } = useOS()

  const allProducts = [
    <ProductItem key={1} />,
    <ProductItem key={2} />,
    <ProductItem key={3} />,
    <ProductItem key={4} />,
    <ProductItem key={5} />,
    <ProductItem key={6} />,
    <ProductItem key={7} />,
    <ProductItem key={8} />,
  ]

  const displayedProducts =
    os === "desktop"
      ? allProducts
      : os === "tablet"
      ? allProducts.slice(0, 6)
      : allProducts.slice(0, 4)

  return (
    <div className="content-container mt-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-8 sm:gap-y-12">
        {displayedProducts}
      </div>
      <div className="flex justify-center">
        <LocalizedClientLink href="#">
          <button className="mt-10 sm:mt-20 rounded-full px-4 py-[6px] sm:px-8 sm:py-2 mx-auto border border-primary text-primary hover:bg-primary hover:text-white">
            Xem tất cả
          </button>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default ListProducts
