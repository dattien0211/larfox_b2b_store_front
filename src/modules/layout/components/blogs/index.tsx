import React from "react"
import Icons from "@modules/common/icons"
import Image from "next/image"
import IMGS from "@constants/IMGS"

const Blogs = () => {
  const { LeftArrow, RightArrow } = Icons

  return (
    <div className=" relative pt-20 pb-24">
      {/* Background Text */}
      <div className="content-container relative z-20">
        <div className="absolute text-[#FFF6E8] font-bold font-times text-[140px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10">
          Blogs
        </div>

        {/* Shop Title */}
        <div className="flex flex-col items-center relative z-20">
          <h2 className="italic text-primary font-times font-bold text-2xl">
            Thật thú vị
          </h2>
          <h1 className="text-44px font-bold font-times">Tin tức mới</h1>
        </div>
      </div>

      {/* Products */}
      <div className="content-container mt-20">
        <div className="grid grid-cols-3 gap-x-8">
          <div>
            <Image
              src={IMGS.Blog}
              alt="hot product"
              width={380}
              height={280}
              className="w-full"
            />
            <div className="bg-grey-15 pt-4 px-8 pb-12 flex flex-col gap-y-4">
              <h3 className="text-primary font-semibold text-sm">BLogs</h3>
              <h1 className="text-2xl font-bold font-times">
                Làm thế nào để lựa chọn sống vui khoẻ
              </h1>
              <p>
                Hơn một thập niên gắn bó với trà, rồi lập thương hiệu Trà bà Vân
                (Bavantea), câu chuyện làm trà của Xuân Hiến không thể bắt đầu
                nói về kinh doanh, mà đó chỉ...
              </p>
              <button className="hover:bg-primary hover:text-white border border-primary text-primary px-4 py-1 rounded-full w-[40%]">
                Xem Thêm
              </button>
            </div>
          </div>
          <div>
            <Image
              src={IMGS.Blog}
              alt="hot product"
              width={380}
              height={280}
              className="w-full"
            />
            <div className="bg-grey-15 pt-4 px-8 pb-12 flex flex-col gap-y-4">
              <h3 className="text-primary font-semibold text-sm">BLogs</h3>
              <h1 className="text-2xl font-bold font-times">
                Làm thế nào để lựa chọn sống vui khoẻ
              </h1>
              <p>
                Hơn một thập niên gắn bó với trà, rồi lập thương hiệu Trà bà Vân
                (Bavantea), câu chuyện làm trà của Xuân Hiến không thể bắt đầu
                nói về kinh doanh, mà đó chỉ...
              </p>
              <button className="hover:bg-primary hover:text-white border border-primary text-primary px-4 py-1 rounded-full w-[40%]">
                Xem Thêm
              </button>
            </div>
          </div>
          <div>
            <Image
              src={IMGS.Blog}
              alt="hot product"
              width={380}
              height={280}
              className="w-full"
            />
            <div className="bg-grey-15 pt-4 px-8 pb-12 flex flex-col gap-y-4">
              <h3 className="text-primary font-semibold text-sm">BLogs</h3>
              <h1 className="text-2xl font-bold font-times">
                Làm thế nào để lựa chọn sống vui khoẻ
              </h1>
              <p>
                Hơn một thập niên gắn bó với trà, rồi lập thương hiệu Trà bà Vân
                (Bavantea), câu chuyện làm trà của Xuân Hiến không thể bắt đầu
                nói về kinh doanh, mà đó chỉ...
              </p>
              <button className="hover:bg-primary hover:text-white border border-primary text-primary px-4 py-1 rounded-full w-[40%]">
                Xem Thêm
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-8 flex items-center justify-center gap-x-4">
        <button className="mt-8 hover:text-orange-600 hover:bg-white shadow-md rounded-full flex items-center justify-center px-8 py-[10px] bg-gradient-to-r from-[#EE9C23] to-[#FFBB56] text-white transition-all duration-300 ease-in-out">
          <p className="mr-2 text-lg">Xem thêm</p>
          <RightArrow size={12} />
        </button>
      </div>
    </div>
  )
}

export default Blogs
