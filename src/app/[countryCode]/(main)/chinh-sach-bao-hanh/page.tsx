import RiceSpike from "@modules/common/components/rice-spike"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Chính Sách Bảo Hành | Bông Lúa",
  description: "Các thông tin liên quan đến chính sách bảo hành của Bông Lúa.",
}

export default async function SecurityPolicyPage() {
  return (
    <div className="bg-primary-bg pt-3 pb-8 sm:pt-6 sm:pb-14">
      <div className="content-container bg-white rounded-lg shadow-lg pt-4 pb-12  sm:pt-6 sm:pb-16 mb-4 sm:mb-8 relative">
        <RiceSpike />
        <h1 className="font-bold text-xl sm:text-28 lg:text-28 font-times text-primary">
          Chính Sách Bảo Hành
        </h1>

        <div className="mt-3 sm:mt-6 space-y-1 sm:space-y-2 text-sm sm:text-base text-justify sm:text-normal indent-4">
          <p>
            Sản phẩm Bông Lúa có thành phần thiên nhiên và hầu hết không chứa
            chất bảo quản nên có hạn sử dụng ngắn và dễ bị tác động xấu từ môi
            trường, một số loại có ghi hạn mở nắp kèm theo, quý khách vui lòng
            xem kỹ thông tin và Bảo quản đúng hướng dẫn. Bông Lúa chịu trách
            nhiệm về chất lượng sản phẩm đến hết hạn sử dụng công bố trên nhãn
            với điều kiện bảo quản tương ứng.
          </p>
          <p>
            Trong trường hợp quý khách nhận thấy sản phẩm có chất lượng không
            đảm bảo hoặc có hiện tượng bất thường khi còn hạn sử dụng, vui lòng
            giữ lại sản phẩm và phản hồi với Bông Lúa, chúng tôi sẵn lòng nhận
            lại sản phẩm và lắng nghe phản hồi góp ý để cải thiện chất lượng
            ngày một tốt hơn.
          </p>
          <p>
            Trường hợp khách hàng bị kích ứng với sản phẩm, Bông Lúa xin hoàn
            tiền và nhận lại sản phẩm. Chúng tôi mong khách hàng đọc kỹ thành
            phần và hướng dẫn sử dụng của sản phẩm và hiểu rằng mỹ phẩm thiên
            nhiên dù an toàn cũng có thể gây kích ứng hoặc không phù hợp với cơ
            địa riêng của một số trường hợp đặc biệt. Bông Lúa cam kết trung
            thực 100% về thành phần công bố trên nhãn sản phẩm.
          </p>
          <p>
            Chúng tôi rất tiếc phải từ chối bảo hành với các trường hợp sản phẩm
            bị lỗi, hỏng do môi trường bảo quản không phù hợp: cất giữ ở khu vực
            nhiệt độ cao, rơi gãy, để ẩm nước hoặc không đảm bảo vệ sinh khi sử
            dụng.
          </p>
        </div>
      </div>
    </div>
  )
}
