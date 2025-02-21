import Image from "next/image"
import Icons from "@modules/common/icons"
import SelectSubsidiary from "@modules/layout/components/select-subsidiary"
import IMGS from "@constants/IMGS"

export default async function FooterOfferForm() {
  const { Send } = Icons

  return (
    <div className="sm:col-span-6 lg:col-span-4">
      <h1 className="font-bold text-lg sm:text-2xl font-times">
        Đăng ký nhận ưu đãi từ Bông Lúa
      </h1>
      <div className="sm:mt-8 mt-2">
        <div className="flex h-[46px] w-full">
          <input
            type="text"
            placeholder="Nhập email"
            className="px-4 flex-1 focus:outline-none h-full bg-grey-10 rounded-l-md text-primary"
          />
          <div className="bg-primary w-[46px] h-[46px] flex items-center justify-center rounded-r-md cursor-pointer">
            <span className="text-white">
              <Send />
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between mt-2 sm:mt-14">
        <SelectSubsidiary dropDownColor="#FFFFFF" />
        <div className="flex gap-x-2 mt-2 md:mt-0">
          <div className="relative w-[62px] h-[30px]">
            <Image
              src={IMGS.Paypal}
              alt="Paypal"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-contain"
            />
          </div>
          <div className="relative w-[88px] h-[30px]">
            <Image
              src={IMGS.Visa}
              alt="Paypal"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
