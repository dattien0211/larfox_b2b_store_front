import storeConfig from "@constants/storeConfig"
import RiceSpike from "@modules/common/components/rice-spike"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Chính Sách Mua Hàng Và Thanh Toán | Bông Lúa",
  description:
    "Các thông tin liên quan đến chính sách mua hàng và thanh toán của Bông Lúa.",
}

export default async function PaymentPolicyPage() {
  return (
    <div className="bg-primary-bg pt-3 pb-8 sm:pt-6 sm:pb-14">
      <div className="content-container bg-white rounded-lg shadow-lg pt-4 pb-12  sm:pt-6 sm:pb-16 mb-4 sm:mb-8 relative">
        <RiceSpike />

        <section>
          <h1 className="font-bold text-xl sm:text-2xl lg:text-[28px] font-times text-primary">
            1. Chính Sách Mua Hàng Và Thanh Toán
          </h1>
          <ul className="pl-6 sm:pl-8 list-disc text-sm sm:text-base text-justify sm:text-normal mt-2">
            <li>Gọi điện thoại đến Hotline {storeConfig.STORE_PHONE}</li>
            <li>Truy cập website {storeConfig.STORE_WEB_NAME}</li>
            <li>Facebook Page: Bông Lúa có tích xanh chính hãng</li>
            <li>
              Đến trải nghiệm không gian Xanh an lành tại chuỗi cửa hàng Bông
              Lúa.
              <br />
            </li>
          </ul>
        </section>

        {/* <p>Cụ thể:</p> */}

        <section>
          {" "}
          <h1 className="sm:mt-4 sm:mb-3 mt-2 mb-1 sm:text-xl text-base font-bold">
            Mua hàng tại website bonglua.com:
          </h1>
          <div className="space-y-1 sm:space-y-2 sm:text-base text-sm text-justify sm:text-normal indent-2 sm:indent-4">
            <p>
              Bước 1: Truy cập website bonglua.com, tìm hiểu sản phẩm mình cần
              tại mục SẢN PHẨM hoặc vào mục KHUYẾN MÃI để tham khảo các chương
              trình giảm giá, quà tặng hấp dẫn.
              <br />
            </p>
            <p>
              Bước 2: Chọn sản phẩm, số lượng cần mua và click “Bỏ vào giỏ
              hàng&rdquo; để tiếp tục mua thêm các sản phẩm khác, hoặc click vào
              “Mua ngay&rdquo; để tiến hành thanh toán.
              <br />
            </p>
            <p>
              Bước 3: Sau khi chọn xong tất cả các sản phẩm muốn mua. Click vào
              Giỏ hàng ở góc trên bên phải màn hình. Kiểm tra lại các sản phẩm
              và số lượng trong giỏ hàng và chọn phương thức thanh toán phù hợp
              <br />
            </p>
            <p>
              Bước 4: Ấn XÁC NHẬN ĐẶT HÀNG sau khi đã điền đầy đủ thông tin.
              <br />
            </p>
            <p>
              Bước 5: Nhân viên Bông Lúa sẽ gọi điện cho bạn để xác nhận đơn
              hàng và thực hiện đơn hàng.
              <br />
            </p>
          </div>
        </section>

        <section>
          <h1 className="sm:mt-4 sm:mb-3 mt-2 mb-1 sm:text-xl text-base font-bold">
            Mua hàng tại Facebook Page Bông Lúa:
          </h1>
          <div className="space-y-1 sm:space-y-2 sm:text-base text-sm text-justify sm:text-normal indent-2 sm:indent-4">
            <p>
              Xem bài đính ghim trên đầu trang, hoặc bài viết về sản phẩm bạn
              quan tâm
            </p>
            <p>Inbox Page để được tư vấn lựa chọn sản phẩm và đặt hàng.</p>
            <p>
              Giờ mở cửa: 09h00 sáng đến 21h30 tối. Tất cả các ngày trong tuần.
            </p>
            <p>Chỉ nghỉ lễ 01 dịp: Tết Nguyên đán (ngày 30 đến 05 Tết).</p>
            <p>Xem và tìm kiếm các Cửa hàng gần bạn:</p>
          </div>
        </section>

        <section>
          <h1 className="font-bold text-xl sm:text-2xl lg:text-[28px] font-times text-primary mt-3 sm:mt-6">
            2. Vận chuyển và thanh toán
          </h1>
          <div className="sm:text-base text-sm text-justify sm:text-normal mt-2 indent-2 sm:indent-4 space-y-1 sm:space-y-2">
            <p>
              Sau khi xác nhận đơn hàng và thông tin giao hàng từ Quý Khách,
              trong vòng 24h Bông Lúa sẽ tiến hành đóng gói hàng hóa và chuyển
              giao hàng cho đơn vị vận chuyển.
              <br />
            </p>
            <p>
              Tại nội thành Hà Nội và Sài Gòn, nhân viên giao hàng của Bông Lúa
              sẽ trực tiếp giao hàng đến quý khách trong vòng 48h làm việc, trừ
              trường hợp có khó khăn đột xuất hoặc bất khả kháng.
              <br />
            </p>
            <p>
              Tại các địa chỉ khác, Bông Lúa giao hàng qua công ty vận chuyển
              chuyên nghiệp với hình thức Hoả tốc. Thời gian từ 2-5 ngày làm
              việc tuỳ địa điểm. Các thành phố trung tâm sẽ nhận hàng nhanh hơn
              vùng sâu vùng xa. Một số mặt hàng dạng lỏng, nước sẽ vận chuyển
              lâu hơn các mặt hàng dạng khô.
              <br />
            </p>
            <ul className=" pl-6 list-disc ">
              <li>
                Chính sách vận chuyển
                <br />
              </li>
            </ul>
            <p>
              - Các Quận Hà Nội và Thành Phố Hồ Chí Minh: 30k/đơn
              <br />
            </p>
            <p>
              - Các địa chỉ khác: 35k/đơn
              <br />
            </p>
            <p>
              Đơn hàng ship gấp theo yêu cầu: Khách hàng thanh toán chi phí theo
              biểu phí của đơn vị vận chuyển (Grab, GHTK)
              <br />
            </p>
            <ul className="pt-2 pl-6 list-disc ">
              <li>
                Hình thức thanh toán
                <br />
              </li>
            </ul>
            <p>
              Tại cửa hàng Bông Lúa: thanh toán tiền Việt Nam hoặc thẻ Visa,
              Master, ATM
              <br />
            </p>
            <p>
              Đơn hàng vận chuyển: chuyển khoản trước, thanh toán qua các đơn vị
              thanh toán trực tuyến (áp dụng với đơn hàng đặt trên website),
              hoặc COD thanh toán tiền mặt tại nhà khi nhận hàng.
              <br />
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
