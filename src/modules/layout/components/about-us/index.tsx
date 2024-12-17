import Icons from "@modules/common/icons"
import Image from "next/image"
import IMGS from "@constants/IMGS"

export default function AboutUs() {
  const { Gear, StarBadge, People, Inventory, Shield } = Icons

  return (
    <>
      <div className="content-container pt-20">
        <div className="relative">
          <div className="absolute text-grey-15 font-bold font-times text-[140px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 -z-10">
            Production
          </div>
          <div className="flex flex-col items-center">
            <h2 className="italic text-primary font-times font-bold text-2xl">
              Về chúng tôi
            </h2>
            <h1 className="text-[44px] font-bold font-times">
              Gía trị Anco đem lại
            </h1>
          </div>
        </div>
        <h3 className="text-xl  text-center mt-4">
          Sự đổi mới sáng tạo – Chìa khóa thành công - Sự bền vững và phát triển
          lâu dài
        </h3>
        <div className="flex gap-x-4 mt-20">
          <div className="w-1/5 flex flex-col items-center justify-center gap-y-4">
            <div className="w-[84px] h-[84px] rounded-full bg-orang-25 flex items-center justify-center">
              <Gear color="#FFFFFF" />
            </div>
            <h1 className="font-manrope-bold font-bold">Chiết khấu hấp dẫn</h1>
            <p className="text-center">Chiết khấu cáo dành cho doanh nghiệp</p>
          </div>
          <div className="w-1/5 flex flex-col items-center justify-center gap-y-4">
            <div className="w-[84px] h-[84px] rounded-full bg-orang-25 flex items-center justify-center">
              <StarBadge color="#FFFFFF" />
            </div>
            <h1 className="font-manrope-bold font-bold">Thương hiệu uy tín</h1>
            <p className="text-center">
              Nói không với hàng giả hàng nhái kém chất lượng
            </p>
          </div>
          <div className="w-1/5 flex flex-col items-center justify-center gap-y-4">
            <div className="w-[84px] h-[84px] rounded-full bg-orang-25 flex items-center justify-center">
              <People color="#FFFFFF" />
            </div>
            <h1 className="font-manrope-bold font-bold">
              Chất lượng vượt trội
            </h1>
            <p className="text-center">
              Cam kết cung cấp sản phẩm và dịch vụ chất lượng cao.
            </p>
          </div>
          <div className="w-1/5 flex flex-col items-center justify-center gap-y-4">
            <div className="w-[84px] h-[84px] rounded-full bg-orang-25 flex items-center justify-center">
              <Inventory color="#FFFFFF" />
            </div>
            <h1 className="font-manrope-bold font-bold">Cam kết chính hãng</h1>
            <p className="text-center">
              Cung cấp các sản phẩm chính hãng, nguồn gốc rõ ràng
            </p>
          </div>
          <div className="w-1/5 flex flex-col items-center justify-center gap-y-4">
            <div className="w-[84px] h-[84px] rounded-full bg-orang-25 flex items-center justify-center">
              <Shield color="#FFFFFF" />
            </div>
            <h1 className="font-manrope-bold font-bold">An toàn tuyệt đối</h1>
            <p className="text-center">
              Sản phẩm hoàn toàn an toàn, đã được kiểm tra kỹ lưỡng
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-end pb-10">
        <Image
          src={IMGS.Leaf1}
          alt="leaf"
          width={120}
          height={50}
          className="mr-4"
        />
      </div>
    </>
  )
}
