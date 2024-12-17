import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}

export default async function SecurityPolicyPage() {
  return (
    <>
      <div className="py-9 content-container">
        <div className="flex font-bold flex-col gap-x-6 text-3xl">
          Chính Sách Bảo Mật Thông Tin
        </div>

        <div className="py-4 text-xl font-medium">
          1. Mục đích và phạm vi thu thập
        </div>
        <div>
          Comem.vn không bán, chia sẻ hay trao đổi thông tin cá nhân của khách
          hàng thu thập trên trang web cho một bên thứ ba nào khác.
          <br />
          Thông tin cá nhân thu thập được sẽ chỉ được sử dụng trong nội bộ công
          ty.
          <br />
          Khi bạn liên hệ đăng ký dịch vụ, thông tin cá nhân mà Comem.vn thu
          thập bao gồm:
          <br />
          Họ và tên
          <br />
          Địa chỉ
          <br />
          Điện thoại
          <br />
          Email
          <br />
          Ngoài thông tin cá nhân là các thông tin về dịch vụ:
          <br />
          Tên sản phẩm
          <br />
          Số lượng
          <br />
          Thời gian giao nhận sản phẩm
        </div>
        <div className="py-4 text-xl font-medium">
          2. Phạm vi sử dụng thông tin
        </div>
        <div>
          Thông tin cá nhân thu thập được sẽ chỉ được Comem.vn sử dụng trong nội
          bộ công ty và cho một hoặc tất cả các mục đích sau đây:
          <br />
          - Hỗ trợ khách hàng <br />
          - Cung cấp thông tin liên quan đến dịch vụ
          <br />
          - Xử lý đơn đặt hàng và cung cấp dịch vụ và thông tin qua trang web
          của chúng tôi theo yêu cầu của bạn
          <br />
          - Chúng tôi có thể sẽ gửi thông tin sản phẩm, dịch vụ mới, thông tin
          về các sự kiện sắp tới hoặc thông tin tuyển dụng nếu quý khách đăng kí
          nhận email thông báo.
          <br />
          - Ngoài ra, chúng tôi sẽ sử dụng thông tin bạn cung cấp để hỗ trợ quản
          lý tài khoản khách hàng; xác nhận và thực hiện các giao dịch tài chính
          liên quan đến các khoản thanh toán trực tuyến của bạn.
          <br />
        </div>
        <div className="py-4 text-xl font-medium">
          3. Thời gian lưu trữ thông tin
        </div>
        <div>
          Đối với thông tin cá nhân, Comem.vn chỉ xóa đi dữ liệu này nếu khách
          hàng có yêu cầu, khách hàng yêu cầu gửi mail về cskh@comem.vn
          <br />
        </div>
        <div className="py-4 text-xl font-medium">
          4. Những người hoặc tổ chức có thể được tiếp cận với thông tin cá nhân
        </div>
        <div>
          Đối với thông tin cá nhân, Comem.vn chỉ xóa đi dữ liệu này nếu khách
          hàng có yêu cầu, khách hàng yêu cầu gửi mail về cskh@comem.vn
          <br />
        </div>
        <div className="py-4 text-xl font-medium">
          3. Thời gian lưu trữ thông tin
        </div>
        <div>
          Đối với thông tin cá nhân, Comem.vn chỉ xóa đi dữ liệu này nếu khách
          hàng có yêu cầu, khách hàng yêu cầu gửi mail về cskh@comem.vn
          <br />
        </div>
        <div className="py-4 text-xl font-medium">
          4. Những người hoặc tổ chức có thể được tiếp cận với thông tin cá nhân
        </div>
        <div>
          Đối tượng được tiếp cận với thông tin cá nhân của khách hàng thuộc một
          trong những trường hợp sau:
          <br />
          <div className="py-4">
            - CÔNG TY CP MỸ PHẨM THIÊN NHIÊN CỎ MỀM <br />
          </div>
          - Các đối tác có ký hợp động thực hiện 1 phần dịch vụ do CÔNG TY CP MỸ
          PHẨM THIÊN NHIÊN CỎ MỀM. Các đối tác này sẽ nhận được những thông tin
          theo thỏa thuận hợp đồng (có thể 1 phần hoặc toàn bộ thông tin tuy
          theo điều khoản hợp đồng) để tiến hành hỗ trợ người dùng sử dụng dịch
          vụ do Công ty cung cấp.
          <br />
        </div>
        <div className="py-4 text-xl font-medium">
          5. Địa chỉ của đơn vị thu thập và quản lý thông tin cá nhân
        </div>
        <ul className="list-disc pl-6">
          <li>CÔNG TY CP MỸ PHẨM THIÊN NHIÊN CỎ MỀM</li>
          <li>
            Địa chỉ: Số 225, Trần Đăng Ninh, P. Dịch Vọng, Q. Cầu Giấy, TP. Hà
            Nội.
          </li>
          <li> Điện thoại: 1800646890.</li>
          <li> Website: Comem.vn</li>
          <li> Email: cskh@comem.vn</li>
        </ul>
        <div className="py-4 text-xl font-medium">
          6. Phương tiện và công cụ để người dùng tiếp cập và chỉnh sử dữ liệu
          cá nhân của mình
        </div>
        <div>
          Comem.vn không thu thập thông tin khách hàng qua trang web, thông tin
          cá nhân khách hàng được thực hiện thu thập qua email liên hệ đặt mua
          sản phẩm, dịch vụ gửi về hộp mail của chúng tôi: cskh@comem.vn hoặc số
          điện thoại liên hệ đặt mua sản phẩm gọi về 1800646890
          <br />
          <div className="pt-4">
            Bạn có thể liên hệ địa chỉ email cùng số điện thoại trên để yêu cầu
            Comem.vn chỉnh sửa dữ liệu cá nhân của mình <br />
          </div>
        </div>
        <div className="py-4 text-xl font-medium">
          7. Cơ chế tiếp nhận và giải quyết khiếu nại của người tiêu dùng liên
          quan đến việc thông tin cá nhân bị sử dụng sai mục đích hoặc phạm vi
          đã thông báo
        </div>
        <div>
          Tại Comem.vn , việc bảo vệ thông tin cá nhân của bạn là rất quan
          trọng, bạn được đảm bảo rằng thông tin cung cấp cho chúng tôi sẽ được
          mật Comem.vn cam kết không chia sẻ, bán hoặc cho thuê thông tin cá
          nhân của bạn cho bất kỳ người nào khác. Comem.vn cam kết chỉ sử dụng
          các thông tin của bạn vào các trường hợp sau:
          <br />
          <div className="pt-4">
            - Nâng cao chất lượng dịch vụ dành cho khách hàng
            <br />
          </div>
          <div className="pt-4">
            - Giải quyết các tranh chấp, khiếu nại
            <br />
          </div>
          <div className="pt-4">
            - Khi cơ quan pháp luật có yêu cầu.
            <br />
          </div>
          <div className="pt-4">
            Comem.vn hiểu rằng quyền lợi của bạn trong việc bảo vệ thông tin cá
            nhân cũng chính là trách nhiệm của chúng tôi nên trong bất kỳ trường
            hợp có thắc mắc, góp ý nào liên quan đến chính sách bảo mật của
            Comem.vn , và liên quan đến việc thông tin cá nhân bị sử dụng sai
            mục đích hoặc phạm vi đã thông báo vui lòng liên hệ qua số hotline
            1800646890 hoặc email: cskh@comem.vn
            <br />
          </div>
        </div>
      </div>
    </>
  )
}
