import React from "react"
import RecommendProductsSlider from "./slider"

interface RecommendProductsProps {}

const RecommendProducts: React.FC<RecommendProductsProps> = () => {
  return (
    <div className="content-container mt-14 sm:mt-20">
      <RecommendProductsSlider />
    </div>
  )
}

export default RecommendProducts
