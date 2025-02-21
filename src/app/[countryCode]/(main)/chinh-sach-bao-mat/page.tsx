import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Chính Sách Bảo Mật Thông Tin | Bông Lúa",
  description:
    "Các thông tin liên quan đến chính sách bảo mật thông tin của Bông Lúa.",
}

export default async function SecurityPolicyPage() {
  return (
    <>
      <div className="py-9 content-container mb-16 sm:mb-24">
        <h1 className="flex font-bold flex-col gap-x-6 sm:text-3xl text-2xl font-times">
          Chính Sách Bảo Mật Thông Tin
        </h1>

        <h2 className="mb-3 mt-4 sm:mt-8 sm:mb-6 text-xl sm:text-2xl font-bold font-times">
          1. Mục đích và phạm vi thu thập
        </h2>
        <div className="text-sm sm:text-base space-y-2 sm:space-y-4">
          bonglua.com không bán, chia sẻ hay trao đổi thông tin cá nhân của
          khách hàng thu thập trên trang web cho một bên thứ ba nào khác.
          <p>
            Thông tin cá nhân thu thập được sẽ chỉ được sử dụng trong nội bộ
            công ty.
          </p>
          <p>
            Khi bạn liên hệ đăng ký dịch vụ, thông tin cá nhân mà bonglua.com
            thu thập bao gồm:
          </p>
          <p>Họ và tên</p>
          <p>Địa chỉ</p>
          <p>Điện thoại</p>
          <p>Email</p>
          <p>Ngoài thông tin cá nhân là các thông tin về dịch vụ:</p>
          <p>Tên sản phẩm</p>
          <p>Số lượng</p>
          <p>Thời gian giao nhận sản phẩm</p>
        </div>
        <h2 className="mb-3 mt-4 sm:mt-8 sm:mb-6 text-xl sm:text-2xl font-bold font-times">
          2. Phạm vi sử dụng thông tin
        </h2>
        <div className="text-sm sm:text-base space-y-2 sm:space-y-4 text-justify sm:text-left">
          <p>
            Thông tin cá nhân thu thập được sẽ chỉ được bonglua.com sử dụng
            trong nội bộ công ty và cho một hoặc tất cả các mục đích sau đây:
          </p>
          <p>- Hỗ trợ khách hàng</p>
          <p>- Cung cấp thông tin liên quan đến dịch vụ</p>
          <p>
            - Xử lý đơn đặt hàng và cung cấp dịch vụ và thông tin qua trang web
            của chúng tôi theo yêu cầu của bạn
          </p>
          <p>
            - Chúng tôi có thể sẽ gửi thông tin sản phẩm, dịch vụ mới, thông tin
            về các sự kiện sắp tới hoặc thông tin tuyển dụng nếu quý khách đăng
            kí nhận email thông báo.
          </p>
          <p>
            - Ngoài ra, chúng tôi sẽ sử dụng thông tin bạn cung cấp để hỗ trợ
            quản lý tài khoản khách hàng; xác nhận và thực hiện các giao dịch
            tài chính liên quan đến các khoản thanh toán trực tuyến của bạn.
          </p>
        </div>
        <h2 className="mb-3 mt-4 sm:mt-8 sm:mb-6 text-xl sm:text-2xl font-bold font-times">
          3. Thời gian lưu trữ thông tin
        </h2>
        <div className="text-justify sm:text-left sm:text-base text-sm">
          Đối với thông tin cá nhân, bonglua.com chỉ xóa đi dữ liệu này nếu
          khách hàng có yêu cầu, khách hàng yêu cầu gửi mail về
          cskh@bonglua.com/vn
          <p></p>
        </div>
        <h2 className="mb-3 mt-4 sm:mt-8 sm:mb-6 text-xl sm:text-2xl font-bold font-times">
          4. Những người hoặc tổ chức có thể được tiếp cận với thông tin cá nhân
        </h2>
        <div className="text-justify sm:text-left sm:text-base text-sm space-y-2 sm:space-y-4">
          <p>
            Đối tượng được tiếp cận với thông tin cá nhân của khách hàng thuộc
            một trong những trường hợp sau:
          </p>
          <p>
            - CÔNG TY CP MỸ PHẨM THIÊN NHIÊN CỎ MỀM<p></p>
          </p>
          <p>
            - Các đối tác có ký hợp động thực hiện 1 phần dịch vụ do CÔNG TY CP
            MỸ PHẨM THIÊN NHIÊN CỎ MỀM. Các đối tác này sẽ nhận được những thông
            tin theo thỏa thuận hợp đồng (có thể 1 phần hoặc toàn bộ thông tin
            tuy theo điều khoản hợp đồng) để tiến hành hỗ trợ người dùng sử dụng
            dịch vụ do Công ty cung cấp.
          </p>
        </div>
        <h2 className="mb-3 mt-4 sm:mt-8 sm:mb-6 text-xl sm:text-2xl font-bold font-times">
          5. Địa chỉ của đơn vị thu thập và quản lý thông tin cá nhân
        </h2>
        <ul className="list-disc pl-6 text-sm sm:text-base space-y-2 sm:space-y-4">
          <li>CÔNG TY CP MỸ PHẨM THIÊN NHIÊN CỎ MỀM</li>
          <li>
            Địa chỉ: Số 225, Trần Đăng Ninh, P. Dịch Vọng, Q. Cầu Giấy, TP. Hà
            Nội.
          </li>
          <li> Điện thoại: 1800646890.</li>
          <li> Website: bonglua.com</li>
          <li> Email: cskh@bonglua.com/vn</li>
        </ul>
        <h2 className="mb-3 mt-4 sm:mt-8 sm:mb-6 text-xl sm:text-2xl font-bold font-times">
          6. Phương tiện và công cụ để người dùng tiếp cập và chỉnh sử dữ liệu
          cá nhân của mình
        </h2>
        <div className="text-justify sm:text-left sm:text-base text-sm space-y-2 sm:space-y-4">
          <p>
            bonglua.com không thu thập thông tin khách hàng qua trang web, thông
            tin cá nhân khách hàng được thực hiện thu thập qua email liên hệ đặt
            mua sản phẩm, dịch vụ gửi về hộp mail của chúng tôi:
            cskh@bonglua.com/vn hoặc số điện thoại liên hệ đặt mua sản phẩm gọi
            về 1800646890
          </p>
          <p>
            Bạn có thể liên hệ địa chỉ email cùng số điện thoại trên để yêu cầu
            bonglua.com chỉnh sửa dữ liệu cá nhân của mình<p></p>
          </p>
        </div>
        <h2 className="mb-3 mt-4 sm:mt-8 sm:mb-6 text-xl sm:text-2xl font-bold font-times">
          7. Cơ chế tiếp nhận và giải quyết khiếu nại của người tiêu dùng liên
          quan đến việc thông tin cá nhân bị sử dụng sai mục đích hoặc phạm vi
          đã thông báo
        </h2>
        <div className="text-justify sm:text-left sm:text-base text-sm space-y-2 sm:space-y-4">
          <p>
            Tại bonglua.com , việc bảo vệ thông tin cá nhân của bạn là rất quan
            trọng, bạn được đảm bảo rằng thông tin cung cấp cho chúng tôi sẽ
            được mật bonglua.com cam kết không chia sẻ, bán hoặc cho thuê thông
            tin cá nhân của bạn cho bất kỳ người nào khác. bonglua.com cam kết
            chỉ sử dụng các thông tin của bạn vào các trường hợp sau:
          </p>
          <p>- Nâng cao chất lượng dịch vụ dành cho khách hàng</p>
          <p>- Giải quyết các tranh chấp, khiếu nại</p>
          <p>- Khi cơ quan pháp luật có yêu cầu.</p>
          <p>
            bonglua.com hiểu rằng quyền lợi của bạn trong việc bảo vệ thông tin
            cá nhân cũng chính là trách nhiệm của chúng tôi nên trong bất kỳ
            trường hợp có thắc mắc, góp ý nào liên quan đến chính sách bảo mật
            của bonglua.com , và liên quan đến việc thông tin cá nhân bị sử dụng
            sai mục đích hoặc phạm vi đã thông báo vui lòng liên hệ qua số
            hotline 1800646890 hoặc email: cskh@bonglua.com/vn
          </p>
        </div>
      </div>
    </>
  )
}
