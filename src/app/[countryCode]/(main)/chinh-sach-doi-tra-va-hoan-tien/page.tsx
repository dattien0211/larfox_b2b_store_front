import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Chính Sách Đổi Trả Và Hoàn Tiền | Anco",
  description:
    "Các thông tin liên quan đến chính sách đổi trả và hoàn tiền của Anco.",
}

export default async function RefundPolicyPage() {
  return (
    <>
      <div className="py-9 content-container !mb-24">
        <h1 className=" sm:text-3xl text-2xl  mb-6 font-bold">
          Chính Sách Đổi Trả Và Hoàn Tiền
        </h1>
        <p>
          Quý khách vui lòng kiểm tra hàng ngay sau khi nhận được, đảm bảo sản
          phẩm đúng số lượng, chủng loại, mẫu mã và chất lượng như yêu cầu. Nếu
          có sai sót hoặc phát sinh ngoài ý muốn, quý khách vui lòng thông báo
          cho Cỏ Mềm trong vòng 24h kể từ khi nhận hàng, kèm theo ảnh chụp gói
          hàng và toàn bộ sản phẩm nhận được. Cỏ Mềm sẽ tiếp nhận và điều chỉnh
          đơn hàng cho quý khách trong vòng 48h từ khi nhận được yêu cầu.
        </p>
        <h2 className="mt-8 mb-6 text-2xl font-semibold ">
          1. Đổi trả do lỗi sai đơn hoặc lỗi vận chuyển:
        </h2>
        <div>
          Để đảm bảo chất lượng dịch vụ và đem lại cho Quý Khách những trải
          nghiệm tốt nhất với sản phẩm, Cỏ Mềm áp dụng chính sách đổi hàng với
          các trường hợp sau:
          <br />
          <div className="py-4 pl-4">
            1. Nhầm sản phẩm, thiếu hoặc thừa sản phẩm so với đơn hàng đã xác
            nhận
            <br />
            2. Sản phẩm bị móp vỡ, gãy hỏng do vận chuyển
            <br />
            3. Sản phẩm có lỗi kỹ thuật phát hiện khi sử dụng
            <br />
          </div>
          <div className="pt-4">
            Trong 3 trường hợp trên, Cỏ Mềm đổi hàng cho quý khách theo trình tự
            sau:
            <br />
          </div>
          <div className="pt-4">
            Bước 1. Quý khách vui lòng thông báo cho Cỏ Mềm trong vòng 24h kể từ
            khi nhận hàng, kèm theo ảnh chụp gói hàng và toàn bộ sản phẩm nhận
            được
            <br />
          </div>
          <div className="pt-4">
            Bước 2. Cỏ Mềm tiến hành gửi mặt hàng thiếu/lỗi, hỏng đúng số lượng
            và chủng loại cho quý khách trong vòng 5 ngày từ khi nhận được yêu
            cầu
            <br />
          </div>
          <div className="pt-4">
            Bước 3. Quý khách gửi lại mặt hàng thừa/lỗi, hỏng về địa chỉ công
            ty: số 225 phố Trần Đăng Ninh, phường Dịch Vọng, quân Cầu Giấy, Hà
            Nội
            <br />
          </div>
          <div className="pt-4">
            Bước 4. Trong trường hợp có phát sinh chênh lệch, Cỏ Mềm chuyển
            khoản cho quý khách vào số tài khoản ngân hàng do quý khách cung cấp
            hoặc quý khách thanh toán phần chênh lệch cho Cỏ Mềm khi nhận được
            hàng đổi
            <br />
          </div>
          <div className="pt-4">
            Phí vận chuyển đổi trả: với sản phẩm cần đổi do 03 lý do trên, quý
            khách không phải trả phí vận chuyển, mọi chi phí vận chuyển phát
            sinh sẽ do Cỏ Mềm thanh toán bằng hình thức thanh toán trực tiếp cho
            đơn vị vận chuyển.
            <br />
          </div>
        </div>
        <h2 className="mt-8 mb-6 text-2xl font-semibold ">
          2. Đổi trả sản phẩm theo mong muốn riêng của khách hàng: 
        </h2>
        <div>
          <p>
            Với mong muốn Khách lựa chọn được sản phẩm tốt và có trải nghiệm hài
            lòng nhất, cũng như đảm bảo niềm tin vào sản phẩm Cỏ Mềm, khách hàng
            có thể đổi trả sản phẩm đã mua tại Cỏ Mềm trong vòng 05 ngày kể từ
            khi nhận hàng.
            <br />
          </p>
          <p className="pt-4">
            Điều kiện đổi trả:
            <br />
          </p>
          <ul className="pt-4 pl-6 list-disc">
            <li>
              Sản phẩm chưa qua sử dụng, còn nguyên bao bì đóng gói, đầy đủ phụ
              kiện nếu có.
              <br />
            </li>
            <li>
               Bao bì sản phẩm không bị bẩn, méo vỡ, có mùi lạ hoặc có dấu hiệu
              bảo quản không đúng với hướng dẫn sử dụng.
              <br />
            </li>
            <li>
               Còn hoá đơn mua hàng.
              <br />
            </li>
          </ul>
          <p className="pt-4">
            Lưu ý:
            <br />
          </p>
          <ul className="list-disc pt-4 pl-6">
            <li>
              Sản phẩm chỉ được đổi 01 lần.
              <br />
            </li>
            <li>
               Quý khách vui lòng thanh toán phí vận chuyển 2 chiều khi yêu cầu
              đổi trả hàng theo mong muốn. 
              <br />
            </li>
            <li>
               Trong trường hợp có phát sinh chênh lệch, Cỏ Mềm chuyển khoản cho
              quý khách vào số tài khoản ngân hàng do quý khách cung cấp hoặc
              quý khách thanh toán cho Cỏ Mềm khi nhận được hàng đổi
              <br />
            </li>
          </ul>
          <p className="pt-4">
            3. Hoàn trả sản phẩm:
            <br />
          </p>
          <p className="pt-4">
            Trong trường hợp khách hàng gặp phản ứng không mong muốn với sản
            phẩm. Quý khách vui lòng cung cấp hình ảnh về tình trạng gặp phải
            hoặc giấy khám sức khỏe từ cơ sở y tế để Cỏ Mềm xác nhận.
            <br />
          </p>
          <ul className="list-disc pt-4 pl-6">
            <li>
              Cách thức hoàn trả:
              <br />
            </li>
          </ul>
          Bước 1: Quý khách gửi hàng về cho Cỏ Mềm theo quy định (Phí vận chuyển
          sẽ do Cỏ Mềm thanh toán)
          <br />
          <p className="pt-4">
            Bước 2: Quý khách cung cấp Số tài khoản của quý khách bằng cách
            Inbox cho Cỏ Mềm tại: http://m.me/comemhomelab
            <br />
          </p>
          <p className="pt-4">
            Bước 3: Cỏ Mềm hoàn tiền bằng hình thức chuyển khoản cho quý khách
            trong vòng 5 ngày làm việc (Không bao gồm ngày nghỉ, lễ tết).
            <br />
          </p>
          <p className="pt-4">
            Gửi hàng về Cỏ Mềm:
            <br />
          </p>
          Trong các trường hợp Bảo hành hoặc Đổi trả có yêu cầu gửi hàng về Cỏ
          Mềm, Quý khách vui lòng đóng gói sản phẩm cẩn thận nhằm đảm bảo trạng
          thái nguyên vẹn và gửi hàng cho đối tác vận chuyển trong vòng 48h kể
          từ khi hoàn thành việc trao đổi xác nhận thông tin với Cỏ Mềm về đơn
          hàng. Cỏ Mềm rất tiếc sẽ phải từ chối sản phẩm bị hư hại do lỗi đóng
          gói sơ sài từ Quý khách. 
          <br />
          <p className="pt-4">
            Địa chỉ nhận hàng đổi trả: số 255 phố Trần Đăng Ninh, phường Dịch
            Vọng, quận Cầu Giấy, Hà Nội
            <br />
          </p>
        </div>
      </div>
    </>
  )
}
