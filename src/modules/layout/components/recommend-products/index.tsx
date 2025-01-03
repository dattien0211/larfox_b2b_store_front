import { HttpTypes } from "@medusajs/types"
import React from "react"
import RecommendProductsSlider from "./slider"

interface RecommendProductsProps {
  products?: HttpTypes.StoreProduct[]
  collectionHandle?: string
}

const RecommendProducts: React.FC<RecommendProductsProps> = ({
  products,
  collectionHandle,
}) => {
  return (
    <div className="content-container mt-14 sm:mt-20">
      <RecommendProductsSlider
        products={products}
        collectionHandle={collectionHandle}
      />
    </div>
  )
}

export default RecommendProducts
