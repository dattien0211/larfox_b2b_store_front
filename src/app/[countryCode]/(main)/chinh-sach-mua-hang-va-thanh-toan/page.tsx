import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}

export default async function PaymentPolicyPage() {
  return (
    <>
      <div className="py-9 content-container">
        <div className="flex flex-col gap-x-6 text-3xl font-bold">
          Chính Sách Mua Hàng Và Thanh Toán
        </div>
        <ul className="pt-4 pl-6 list-disc ">
          <li>
            Gọi điện thoại đến Hotline 1800.646.890 (Tổng đài miễn cước)
            <br />
          </li>
          <li>
             Facebook Page: Cỏ Mềm HomeLab có tích xanh chính hãng
            <br />
          </li>
          <li>
            {" "}
             Đến trải nghiệm không gian Xanh an lành tại chuỗi cửa hàng Cỏ Mềm.
            <br />
          </li>
        </ul>
        <div>Cụ thể:</div>
        <div className="py-4 text-xlfont-bold">
          Mua hàng tại website comem.vn:
        </div>
        <div className="pt-4 ">
          Bước 1: Truy cập website http://comem.vn, tìm hiểu sản phẩm mình cần
          tại mục SẢN PHẨM hoặc vào mục KHUYẾN MÃI để tham khảo các chương trình
          giảm giá, quà tặng hấp dẫn.
          <br />
        </div>
        <div className="pt-4 ">
          Bước 2: Chọn sản phẩm, số lượng cần mua và click “Bỏ vào giỏ
          hàng&rdquo; để tiếp tục mua thêm các sản phẩm khác, hoặc click vào
          “Mua ngay&rdquo; để tiến hành thanh toán.
          <br />
        </div>
        <div className="pt-4 ">
          Bước 3: Sau khi chọn xong tất cả các sản phẩm muốn mua. Click vào Giỏ
          hàng ở góc trên bên phải màn hình. Kiểm tra lại các sản phẩm và số
          lượng trong giỏ hàng và chọn phương thức thanh toán phù hợp
          <br />
        </div>

        <div className="pt-4 ">
          Bước 4: Ấn XÁC NHẬN ĐẶT HÀNG sau khi đã điền đầy đủ thông tin.
          <br />
        </div>

        <div className="pt-4 ">
          Bước 5: Nhân viên Cỏ Mềm sẽ gọi điện cho bạn để xác nhận đơn hàng và
          thực hiện đơn hàng.
          <br />
        </div>
        <div className="pt-4 ">
          Mua hàng tại Facebook Page Cỏ Mềm HomeLab:
          <br />
        </div>
        <div className="pt-4 ">
          Xem bài đính ghim trên đầu trang, hoặc bài viết về sản phẩm bạn quan
          tâm
          <br />
        </div>
        <div className="pt-4 ">
          Inbox Page để được tư vấn lựa chọn sản phẩm và đặt hàng.
          <br />
        </div>
        <div className="pt-4 ">
          Giờ mở cửa: 09h00 sáng đến 21h30 tối. Tất cả các ngày trong tuần.
          <br />
        </div>
        <div className="pt-4 ">
          Chỉ nghỉ lễ 01 dịp: Tết Nguyên đán (ngày 30 đến 05 Tết).
          <br />
        </div>
        <div className="pt-4 ">
          Xem và tìm kiếm các Cửa hàng gần bạn:
          <br />
        </div>
        <div className="py-4 text-xl font-bold">
          2. Vận chuyển và thanh toán
        </div>
        <ul className="pt-4 pl-6 list-disc ">
          <li>
            Quy trình giao nhận và vận chuyển
            <br />
          </li>
        </ul>
        <div>
          Sau khi xác nhận đơn hàng và thông tin giao hàng từ Quý Khách, trong
          vòng 24h Cỏ Mềm sẽ tiến hành đóng gói hàng hóa và chuyển giao hàng cho
          đơn vị vận chuyển.
          <br />
        </div>
        <div className="pt-4 ">
          Tại nội thành Hà Nội và Sài Gòn, nhân viên giao hàng của Cỏ Mềm sẽ
          trực tiếp giao hàng đến quý khách trong vòng 48h làm việc, trừ trường
          hợp có khó khăn đột xuất hoặc bất khả kháng.
          <br />
        </div>
        <div className="pt-4 ">
          Tại các địa chỉ khác, Cỏ Mềm giao hàng qua công ty vận chuyển chuyên
          nghiệp với hình thức Hoả tốc. Thời gian từ 2-5 ngày làm việc tuỳ địa
          điểm. Các thành phố trung tâm sẽ nhận hàng nhanh hơn vùng sâu vùng xa.
          Một số mặt hàng dạng lỏng, nước sẽ vận chuyển lâu hơn các mặt hàng
          dạng khô.
          <br />
        </div>
        <ul className="pt-4 pl-6 list-disc ">
          <li>
            Chính sách vận chuyển
            <br />
          </li>
        </ul>
        <div>
          - Các Quận Hà Nội: 20k/đơn
          <br />
        </div>
        <div>
          - Các địa chỉ khác: 25k/đơn
          <br />
        </div>
        <div>
          Đơn hàng ship gấp theo yêu cầu: Khách hàng thanh toán chi phí theo
          biểu phí của đơn vị vận chuyển (Grab, GHTK)
          <br />
        </div>
        <ul className="pt-4 pl-6 list-disc ">
          <li>
            Hình thức thanh toán
            <br />
          </li>
        </ul>
        <div>
          Tại cửa hàng Cỏ Mềm: thanh toán tiền Việt Nam hoặc thẻ Visa, Master,
          ATM
          <br />
        </div>
        <div className="pt-4 ">
          Đơn hàng vận chuyển: chuyển khoản trước, thanh toán qua các đơn vị
          thanh toán trực tuyến (áp dụng với đơn hàng đặt trên website), hoặc
          COD thanh toán tiền mặt tại nhà khi nhận hàng.
          <br />
        </div>
      </div>
    </>
  )
}
