import { Metadata } from "next"
import Image from "next/image"
import IMGS from "@constants/IMGS"
export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}

export default async function Chung() {
  return (
    <>
      <Image src={IMGS.IntroImage} alt="" className="w-full pt-9" />

      <div className="content-container">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">Về chúng tôi</div>
          <div className="text-4xl font-bold text-[#000]">
            Câu chuyện thương hiệu
          </div>
        </div>
        <div className="flex flex-col gap-x-6 text-4xl ">
          Câu chuyện thương hiệu
        </div>

        <div className="pt-4 font-medium">
          Được thành lập từ năm….. cho đến nay công ty chúng tôi đã ngày càng
          được mở rộng, ngày càng được khách hàng ưa chuộng. Hiện tại, trong
          thời gian sắp tới công ty đang đề ra mục tiêu sẽ trở thành một trong
          số những công ty đi đầu về ngành dịch vụ……
        </div>
        <div className="py-4 flex flex-col gap-x-6 text-4xl">Nhà sáng lập</div>
        <div>
          Trong tình hình chính trị, xã hội hiện nay thì dịch vụ ……. đang là một
          trong số những dịch vụ nổi trội, có rất nhiều sự lựa chọn khác nhau.{" "}
          <br />
          <div className="pt-4">
            Ngoài những sự lựa chọn hợp lý thì trên thị trường cũng có rất nhiều
            những công ty đặt lợi ích lên trên đạo đức. Nếu như bạn đang muốn
            tìm một công ty quan tâm đến cảm nhận của khách hàng, luôn muốn
            khách hàng có những trải nghiệm tuyệt vời, tốt nhất thì bạn có thể
            đến với công ty……..
            <br />
          </div>
          <div className="pt-4">
            Được thành lập từ năm….. cho đến nay công ty chúng tôi đã ngày càng
            được mở rộng, ngày càng được khách hàng ưa chuộng. Hiện tại, trong
            thời gian sắp tới công ty đang đề ra mục tiêu sẽ trở thành một trong
            số những công ty đi đầu về ngành dịch vụ……
            <br />
          </div>
        </div>
        <div className="py-4 flex flex-col gap-x-6 text-4xl">Triết lý</div>
        <div>
          Đến với công ty chúng tôi bạn sẽ được hưởng rất nhiều lợi ích như………..
          <br />
        </div>
        <div className=" pt-4">
          Với sứ mệnh…… nhân viên công ty không ngừng cố gắng. Lãnh đạo công ty
          không ngừng học hỏi hằng ngày để có thể đáp ứng được nhu cầu của khách
          hàng, đem đến cho khách hàng những dịch vụ tốt nhất.
          <br />
          Trong tình hình chính trị, xã hội hiện nay thì dịch vụ ……. đang là một
          trong số những dịch vụ nổi trội, có rất nhiều sự lựa chọn khác nhau.
          <br />
        </div>
        <div className=" pt-4">
          Ngoài những sự lựa chọn hợp lý thì trên thị trường cũng có rất nhiều
          những công ty đặt lợi ích lên trên đạo đức. Nếu như bạn đang muốn tìm
          một công ty quan tâm đến cảm nhận của khách hàng, luôn muốn khách hàng
          có những trải nghiệm tuyệt vời, tốt nhất thì bạn có thể đến với công
          ty……
          <br />
        </div>
        <div className="py-4 flex flex-col gap-x-6 text-4xl">Sứ mệnh</div>
        <div>
          Được thành lập từ năm….. cho đến nay công ty chúng tôi đã ngày càng
          được mở rộng, ngày càng được khách hàng ưa chuộng. Hiện tại, trong
          thời gian sắp tới công ty đang đề ra mục tiêu sẽ trở thành một trong
          số những công ty đi đầu về ngành dịch vụ……
        </div>
        <div className="pt-4">
          Đến với công ty chúng tôi bạn sẽ được hưởng rất nhiều lợi ích như………..
        </div>
        <div className="pt-4">
          Với sứ mệnh…… nhân viên công ty không ngừng cố gắng. Lãnh đạo công ty
          không ngừng học hỏi hằng ngày để có thể đáp ứng được nhu cầu của khách
          hàng, đem đến cho khách hàng những dịch vụ tốt nhất.
        </div>
      </div>
    </>
  )
}
