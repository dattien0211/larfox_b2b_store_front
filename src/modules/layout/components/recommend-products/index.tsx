import React from "react"
import Icons from "@modules/common/icons"
import Image from "next/image"
import IMGS from "@constants/IMGS"

interface RecommendProductsProps {
  backgroundText?: string
  shopName?: string
  title?: string
  description?: string
}

const RecommendProducts: React.FC<RecommendProductsProps> = ({
  backgroundText,
  shopName,
  title,
  description = "Những sản phẩm đặc biệt của chúng tôi, được thiết kế và sản xuất với công nghệ tiên tiến",
}) => {
  const { LeftArrow, RightArrow } = Icons

  return (
    <div className="bg-beige-10 relative py-20">
      {/* Background Text */}
      <div className="content-container relative z-20">
        <div className="absolute text-[#FFF6E8] font-bold font-times text-[140px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10">
          {backgroundText}
        </div>

        {/* Shop Title */}
        <div className="flex flex-col items-center relative z-20">
          <h2 className="italic text-primary font-times font-bold text-2xl">
            {shopName}
          </h2>
          <h1 className="text-44px font-bold font-times">{title}</h1>
        </div>
      </div>

      {/* Section Description */}
      <h1 className="mt-4 text-xl text-center">{description}</h1>

      {/* Products */}
      <div className="content-container mt-20">
        <div className="grid grid-cols-3 gap-x-8">
          {/* Product 1 */}
          <div className="relative">
            <Image
              src={IMGS.HotProduct1}
              alt="hot product"
              width={380}
              height={280}
              className="w-full"
            />
            <div className="absolute w-[90%] bg-white left-1/2 -translate-x-1/2 -bottom-16 z-20 cursor-pointer rounded-md p-4 shadow-lg flex flex-col items-center justify-center">
              <h2 className="font-times italic text-primary">Anco Care</h2>
              <h1 className="text-2xl font-manrope-extrabold">Xịt xao vàng</h1>
              <h3 className="text-primary">285.000 đ</h3>
            </div>
          </div>

          {/* Product 2 */}
          <div className="relative">
            <Image
              src={IMGS.HotProduct2}
              alt="hot product"
              width={380}
              height={280}
              className="w-full"
            />
            <div className="absolute w-[90%] bg-white left-1/2 -translate-x-1/2 -bottom-16 z-20 cursor-pointer rounded-md p-4 shadow-lg flex flex-col items-center justify-center">
              <h2 className="font-times italic text-primary">Anco Home</h2>
              <h1 className="text-2xl font-manrope-extrabold">
                Lược chải sức khỏe
              </h1>
              <h3 className="text-primary">150.000 đ</h3>
            </div>
          </div>

          {/* Product 3 */}
          <div className="relative">
            <Image
              src={IMGS.HotProduct3}
              alt="hot product"
              width={380}
              height={280}
              className="w-full"
            />
            <div className="absolute w-[90%] bg-white left-1/2 -translate-x-1/2 -bottom-16 z-20 cursor-pointer rounded-md p-4 shadow-lg flex flex-col items-center justify-center">
              <h2 className="font-times italic text-primary">Anco Foods</h2>
              <h1 className="text-2xl font-manrope-extrabold">Trà thảo mộc</h1>
              <h3 className="text-primary">325.000 đ</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-32 flex items-center justify-center gap-x-4">
        <button className="w-12 h-12 rounded-full flex items-center justify-center bg-orang-25 opacity-50">
          <LeftArrow color="white" />
        </button>
        <button className="w-12 h-12 rounded-full flex items-center justify-center bg-orang-25">
          <RightArrow color="white" />
        </button>
      </div>
    </div>
  )
}

export default RecommendProducts
