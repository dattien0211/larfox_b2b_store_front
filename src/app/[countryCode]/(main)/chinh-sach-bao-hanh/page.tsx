import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Chính Sách Bảo Hành | Anco",
  description: "Các thông tin liên quan đến chính sách bảo hành của Anco.",
}

export default async function SecurityPolicyPage() {
  return (
    <>
      <div className="py-9 content-container mb-16 sm:mb-24">
        <h1 className="font-bold  sm:text-3xl text-2xl font-times">
          Chính Sách Bảo Hành
        </h1>

        <div className="mt-4 sm:mt-8 space-y-4 text-sm sm:text-base text-justify sm:text-normal ">
          <p>
            Sản phẩm Anco có thành phần thiên nhiên và hầu hết không chứa chất
            bảo quản nên có hạn sử dụng ngắn và dễ bị tác động xấu từ môi
            trường, một số loại có ghi hạn mở nắp kèm theo, quý khách vui lòng
            xem kỹ thông tin và Bảo quản đúng hướng dẫn. Anco chịu trách nhiệm
            về chất lượng sản phẩm đến hết hạn sử dụng công bố trên nhãn với
            điều kiện bảo quản tương ứng.
          </p>
          <p>
            Trong trường hợp quý khách nhận thấy sản phẩm có chất lượng không
            đảm bảo hoặc có hiện tượng bất thường khi còn hạn sử dụng, vui lòng
            giữ lại sản phẩm và phản hồi với Anco, chúng tôi sẵn lòng nhận lại
            sản phẩm và lắng nghe phản hồi góp ý để cải thiện chất lượng ngày
            một tốt hơn.
          </p>
          <p>
            Trường hợp khách hàng bị kích ứng với sản phẩm, Anco xin hoàn tiền
            và nhận lại sản phẩm. Chúng tôi mong khách hàng đọc kỹ thành phần và
            hướng dẫn sử dụng của sản phẩm và hiểu rằng mỹ phẩm thiên nhiên dù
            an toàn cũng có thể gây kích ứng hoặc không phù hợp với cơ địa riêng
            của một số trường hợp đặc biệt. Anco cam kết trung thực 100% về
            thành phần công bố trên nhãn sản phẩm.
          </p>
          <p>
            Chúng tôi rất tiếc phải từ chối bảo hành với các trường hợp sản phẩm
            bị lỗi, hỏng do môi trường bảo quản không phù hợp: cất giữ ở khu vực
            nhiệt độ cao, rơi gãy, để ẩm nước hoặc không đảm bảo vệ sinh khi sử
            dụng.
          </p>
        </div>
      </div>
    </>
  )
}
