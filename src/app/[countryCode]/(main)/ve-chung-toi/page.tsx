import { Metadata } from "next"
import Image from "next/image"
import IMGS from "@constants/IMGS"

export const metadata: Metadata = {
  title: "Về Chúng Tôi | Anco",
  description: "Các thông tin liên quan đến Anco.",
}

export default async function Chung() {
  return (
    <div className="mb-36">
      <Image src={IMGS.IntroImage} alt="" className="w-full pt-9" />

      <div className="content-container">
        <div className="relative">
          <div className="absolute text-grey-15 font-bold  text-60px sm:text-80px  md:text-110px lg:text-128px left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 -z-10">
            About us
          </div>
          <div className="flex flex-col items-center">
            <h2 className="italic text-primary font-times font-bold text-lg sm:text-xl lg:text-2xl">
              Về chúng tôi
            </h2>
            <h1 className="sm:text-3xl text-2xl   md:text-4xl md:text-44px font-bold font-times mt-2">
              Câu chuyện thương hiệu
            </h1>
          </div>
        </div>

        <h1 className=" sm:text-3xl text-2xl  mt-16">Câu chuyện thương hiệu</h1>
        <div className="mt-4 mb-8">
          Được thành lập từ năm….. cho đến nay công ty chúng tôi đã ngày càng
          được mở rộng, ngày càng được khách hàng ưa chuộng. Hiện tại, trong
          thời gian sắp tới công ty đang đề ra mục tiêu sẽ trở thành một trong
          số những công ty đi đầu về ngành dịch vụ……
        </div>

        <h1 className=" sm:text-3xl text-2xl ">Nhà sáng lập</h1>
        <div className="space-y-2 mt-4 mb-8">
          <p>
            Trong tình hình chính trị, xã hội hiện nay thì dịch vụ ……. đang là
            một trong số những dịch vụ nổi trội, có rất nhiều sự lựa chọn khác
            nhau.
          </p>
          <p>
            Ngoài những sự lựa chọn hợp lý thì trên thị trường cũng có rất nhiều
            những công ty đặt lợi ích lên trên đạo đức. Nếu như bạn đang muốn
            tìm một công ty quan tâm đến cảm nhận của khách hàng, luôn muốn
            khách hàng có những trải nghiệm tuyệt vời, tốt nhất thì bạn có thể
            đến với công ty……..
          </p>
          <p>
            Được thành lập từ năm….. cho đến nay công ty chúng tôi đã ngày càng
            được mở rộng, ngày càng được khách hàng ưa chuộng. Hiện tại, trong
            thời gian sắp tới công ty đang đề ra mục tiêu sẽ trở thành một trong
            số những công ty đi đầu về ngành dịch vụ……
          </p>
        </div>

        <h1 className=" sm:text-3xl text-2xl ">Triết lý</h1>
        <div className="space-y-2 mt-4 mb-8">
          <p>
            Đến với công ty chúng tôi bạn sẽ được hưởng rất nhiều lợi ích
            như………..
          </p>
          <p>
            Với sứ mệnh…… nhân viên công ty không ngừng cố gắng. Lãnh đạo công
            ty không ngừng học hỏi hằng ngày để có thể đáp ứng được nhu cầu của
            khách hàng, đem đến cho khách hàng những dịch vụ tốt nhất. Trong
            tình hình chính trị, xã hội hiện nay thì dịch vụ ……. đang là một
            trong số những dịch vụ nổi trội, có rất nhiều sự lựa chọn khác nhau.
          </p>
          <p>
            Ngoài những sự lựa chọn hợp lý thì trên thị trường cũng có rất nhiều
            những công ty đặt lợi ích lên trên đạo đức. Nếu như bạn đang muốn
            tìm một công ty quan tâm đến cảm nhận của khách hàng, luôn muốn
            khách hàng có những trải nghiệm tuyệt vời, tốt nhất thì bạn có thể
            đến với công ty……
          </p>
        </div>

        <h1 className=" sm:text-3xl text-2xl ">Sứ mệnh</h1>
        <div className="space-y-2 mt-4 mb-8">
          <p>
            Được thành lập từ năm….. cho đến nay công ty chúng tôi đã ngày càng
            được mở rộng, ngày càng được khách hàng ưa chuộng. Hiện tại, trong
            thời gian sắp tới công ty đang đề ra mục tiêu sẽ trở thành một trong
            số những công ty đi đầu về ngành dịch vụ……
          </p>
          <p>
            Đến với công ty chúng tôi bạn sẽ được hưởng rất nhiều lợi ích
            như………..
          </p>
          <p>
            Với sứ mệnh…… nhân viên công ty không ngừng cố gắng. Lãnh đạo công
            ty không ngừng học hỏi hằng ngày để có thể đáp ứng được nhu cầu của
            khách hàng, đem đến cho khách hàng những dịch vụ tốt nhất.
          </p>
        </div>
      </div>
    </div>
  )
}
