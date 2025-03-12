import { Metadata } from "next"
import Image from "next/image"
import IMGS from "@constants/IMGS"
import storeConfig from "@constants/storeConfig"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  title: "Về Chúng Tôi | Bông Lúa",
  description:
    "Khám phá câu chuyện thương hiệu và sứ mệnh của Bông Lúa trong việc cung cấp nông sản sạch và chất lượng nhất.",
}

export default function AboutUs() {
  return (
    <div className="bg-[#F5F7FD] pt-3 pb-8 sm:pt-6 sm:pb-14">
      <div className="content-container bg-white rounded-lg shadow-lg py-4 sm:pt-2 sm:pb-14 mb-4 sm:mb-8 relative">
        <Image
          src={IMGS.IntroImage}
          alt="Hình ảnh giới thiệu"
          className="w-full h-auto object-contain mt-4"
        />

        <h1 className="sm:text-[28px] text-xl font-bold text-center text-primary mb-4 mt-3 sm:mb-8 sm:mt-6 font-times">
          Về Chúng Tôi
        </h1>

        <section className="mb-4">
          <p className="text-sm text-justify sm:text-normal sm:text-lg text-gray-700 indent-4  sm:indent-8">
            Chào mừng bạn đến với
            <LocalizedClientLink
              href="/"
              className="font-semibold mx-1 text-primary"
            >
              {storeConfig.STORE_WEB_NAME}
            </LocalizedClientLink>
            – nơi hội tụ những nông sản tươi ngon, an toàn và chất lượng cao từ
            nông dân địa phương. Chúng tôi được thành lập với sứ mệnh đưa những
            sản phẩm thiên nhiên, không chỉ đảm bảo dinh dưỡng mà còn góp phần
            bảo vệ sức khỏe cộng đồng và phát triển bền vững nông nghiệp Việt
            Nam.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-2 sm:mb-4 font-times">
            Sứ Mệnh
          </h2>
          <ul className="list-disc list-inside text-gray-700 pl-4 sm:pl-8 text-sm sm:text-base  space-y-1 sm:space-y-2">
            <li>
              <strong>Mang đến sự an tâm:</strong> Cam kết cung cấp nông sản
              được chọn lọc kỹ càng, đảm bảo tiêu chuẩn an toàn vệ sinh thực
              phẩm.
            </li>
            <li>
              <strong>Ủng hộ người nông dân:</strong> Hợp tác chặt chẽ với các
              nông hộ, giúp họ tiếp cận thị trường rộng lớn và ổn định giá bán.
            </li>
            <li>
              <strong>Thúc đẩy nông nghiệp sạch:</strong> Đầu tư vào các phương
              pháp canh tác hữu cơ, giảm thiểu hóa chất, hướng đến sản xuất xanh
              và bền vững.
            </li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-2 sm:mb-4 font-times">
            Tầm Nhìn
          </h2>
          <p className="list-disc list-inside text-gray-700 indent-4 sm:indent-8 text-sm sm:text-base text-justify sm:text-normal">
            Chúng tôi mong muốn trở thành địa chỉ tin cậy hàng đầu cho người
            tiêu dùng khi tìm kiếm các sản phẩm nông sản chất lượng, tự nhiên và
            có nguồn gốc rõ ràng. Đồng thời,
            <LocalizedClientLink
              href="/"
              className="font-semibold text-primary mx-1"
            >
              {storeConfig.STORE_WEB_NAME}
            </LocalizedClientLink>
            sẽ là cầu nối hiệu quả giữa nông dân và thị trường, góp phần xây
            dựng một nền nông nghiệp phát triển hài hòa với thiên nhiên.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-2 sm:mb-4 font-times">
            Giá Trị Cốt Lõi
          </h2>
          <ul className="list-disc list-inside text-gray-700 pl-4 sm:pl-8 text-sm sm:text-base space-y-1 sm:space-y-2">
            <li>
              <strong>Chất lượng:</strong> Mỗi sản phẩm đều trải qua quy trình
              kiểm định nghiêm ngặt từ trang trại đến bàn ăn.
            </li>
            <li>
              <strong>Minh bạch:</strong> Thông tin về nguồn gốc, quy trình sản
              xuất và các tiêu chuẩn kiểm định được chia sẻ một cách rõ ràng và
              công khai.
            </li>
            <li>
              <strong>Tận tâm:</strong> Đội ngũ của chúng tôi luôn lắng nghe và
              cải thiện, nhằm mang lại trải nghiệm mua sắm tốt nhất cho khách
              hàng.
            </li>
            <li>
              <strong>Bền vững:</strong> Chúng tôi đầu tư vào các giải pháp thân
              thiện với môi trường, góp phần bảo vệ hành tinh xanh cho thế hệ
              tương lai.
            </li>
          </ul>
        </section>

        <section className="mb-4 ">
          <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-2 sm:mb-4 font-times">
            Cam Kết Chất Lượng
          </h2>
          <p className="text-gray-700 indent-4 sm:indent-8 text-sm sm:text-lg text-justify sm:text-normal">
            Tại
            <LocalizedClientLink
              href="/"
              className="font-semibold text-primary mx-1"
            >
              {storeConfig.STORE_WEB_NAME}
            </LocalizedClientLink>
            , chất lượng sản phẩm không chỉ là mục tiêu mà còn là trách nhiệm
            của chúng tôi đối với sức khỏe người tiêu dùng. Từ quy trình chọn
            lựa nông sản, giao hàng đến dịch vụ chăm sóc khách hàng, mọi khâu
            đều được đảm bảo theo tiêu chuẩn cao nhất, mang đến cho bạn sự an
            tâm và hài lòng tuyệt đối.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-2 sm:mb-4 font-times">
            Liên Hệ và Hỗ Trợ
          </h2>
          <p className="text-sm sm:text-lg text-gray-700 mb-2 indent-4 sm:indent-8">
            Chúng tôi luôn sẵn sàng lắng nghe ý kiến và giải đáp mọi thắc mắc
            của khách hàng.
          </p>
          <ul className="pl-4 sm:pl-8 list-disc list-inside space-y-1 sm:space-y-2">
            <li className="text-sm sm:text-lg text-gray-700 font-times">
              <strong>Email:</strong> {storeConfig.STORE_EMAIL}
            </li>
            <li className="text-sm sm:text-lg text-gray-700 font-times">
              <strong>Số điện thoại:</strong> {storeConfig.STORE_PHONE}
            </li>
            <li className="text-sm sm:text-lg text-gray-700 font-times">
              <strong>Địa chỉ:</strong> {storeConfig.STORE_ADDRESS}
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}
