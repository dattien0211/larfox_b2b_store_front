import Icons from "@modules/common/icons"

const ProductPolicy = () => {
  const { Heart, Car, Clock } = Icons

  return (
    <div className="flex items-start justify-center gap-x-4">
      <div className="w-1/2 border border-grey-20">
        <div className="h-11 bg-grey-50 px-2 lg:px-4 flex items-center gap-x-2  lg:gap-x-4 ">
          <div className="flex items-center justify-center text-white bg-primary w-6 h-6 rounded-full">
            <Car />
          </div>
          <p className="font-manrope-bold">Vận chuyển</p>
        </div>
        <div className="lg:p-4 p-2 text-sm sm:text-base h-[96px] sm:h-[128px]">
          Đồng giá 30.000đ cho các  đơn hàng toàn quốc. 
        </div>
      </div>

      <div className="w-1/2 border border-grey-20">
        <div className="h-11 bg-grey-50 px-2 lg:px-4 flex items-center   gap-x-2  lg:gap-x-4 ">
          <div className="flex items-center justify-center text-white bg-primary w-6 h-6 rounded-full">
            <Clock />
          </div>
          <p className="font-manrope-bold">Thời gian</p>
        </div>
        <div className="lg:p-4 p-2 text-sm sm:text-base  h-[96px] sm:h-[128px]">
          <ul className="list-disc px-2 md:px-6">
            <li>Hà Nội, TP.HCM: 1-2 ngày </li>
            <li>Các tỉnh còn lại: 2-5 ngày</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProductPolicy
