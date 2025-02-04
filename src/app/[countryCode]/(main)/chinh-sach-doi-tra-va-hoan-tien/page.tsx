import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Chính Sách Đổi Trả Và Hoàn Tiền | Anco",
  description:
    "Các thông tin liên quan đến chính sách đổi trả và hoàn tiền của Anco.",
}

export default async function RefundPolicyPage() {
  return (
    <>
      <div className="py-9 content-container mb-16 sm:mb-24">
        <h1 className=" sm:text-3xl text-2xl  mb-6 font-bold font-times">
          Chính Sách Đổi Trả Và Hoàn Tiền
        </h1>
        <p className="text-justify sm:text-normal sm:text-base text-sm ">
          Quý khách vui lòng kiểm tra hàng ngay sau khi nhận được, đảm bảo sản
          phẩm đúng số lượng, chủng loại, mẫu mã và chất lượng như yêu cầu. Nếu
          có sai sót hoặc phát sinh ngoài ý muốn, quý khách vui lòng thông báo
          cho Anco trong vòng 24h kể từ khi nhận hàng, kèm theo ảnh chụp gói
          hàng và toàn bộ sản phẩm nhận được. Anco sẽ tiếp nhận và điều chỉnh
          đơn hàng cho quý khách trong vòng 48h từ khi nhận được yêu cầu.
        </p>
        <h2 className="mt-4 mb-3 sm:mt-8 sm:mb-6 sm:text-2xl text-xl font-semibold font-times">
          1. Đổi trả do lỗi sai đơn hoặc lỗi vận chuyển:
        </h2>
        <div className="text-justify sm:text-normal sm:text-base text-sm">
          <p>
            Để đảm bảo chất lượng dịch vụ và đem lại cho Quý Khách những trải
            nghiệm tốt nhất với sản phẩm, Anco áp dụng chính sách đổi hàng với
            các trường hợp sau:
          </p>

          <div className="py-4 pl-4 space-y-2 sm:pace-y-4">
            <p>
              1.Nhầm sản phẩm, thiếu hoặc thừa sản phẩm so với đơn hàng đã xác
              nhận
            </p>
            <p>2.Sản phẩm bị móp vỡ, gãy hỏng do vận chuyển</p>
            <p>3.Sản phẩm có lỗi kỹ thuật phát hiện khi sử dụng</p>
          </div>
          <div className="space-y-2 sm:space-y-4">
            <p>
              Trong 3 trường hợp trên, Anco đổi hàng cho quý khách theo trình tự
              sau:
            </p>
            <div className="pl-3 sm:pl-6 space-y-2 sm:space-y-4">
              <p>
                Bước 1. Quý khách vui lòng thông báo cho Anco trong vòng 24h kể
                từ khi nhận hàng, kèm theo ảnh chụp gói hàng và toàn bộ sản phẩm
                nhận được
              </p>
              <p>
                Bước 2. Anco tiến hành gửi mặt hàng thiếu/lỗi, hỏng đúng số
                lượng và chủng loại cho quý khách trong vòng 5 ngày từ khi nhận
                được yêu cầu
              </p>
              <p>
                Bước 3. Quý khách gửi lại mặt hàng thừa/lỗi, hỏng về địa chỉ
                công ty: số 225 phố Trần Đăng Ninh, phường Dịch Vọng, quân Cầu
                Giấy, Hà Nội
              </p>
              <p>
                Bước 4. Trong trường hợp có phát sinh chênh lệch, Anco chuyển
                khoản cho quý khách vào số tài khoản ngân hàng do quý khách cung
                cấp hoặc quý khách thanh toán phần chênh lệch cho Anco khi nhận
                được hàng đổi
              </p>
            </div>
            <p>
              Phí vận chuyển đổi trả: với sản phẩm cần đổi do 03 lý do trên, quý
              khách không phải trả phí vận chuyển, mọi chi phí vận chuyển phát
              sinh sẽ do Anco thanh toán bằng hình thức thanh toán trực tiếp cho
              đơn vị vận chuyển.
            </p>
          </div>
        </div>
        <h2 className="mt-4 mb-3 sm:mt-8 sm:mb-6 sm:text-2xl text-xl font-semibold font-times">
          2. Đổi trả sản phẩm theo mong muốn riêng của khách hàng:
        </h2>
        <div className="text-justify sm:text-normal sm:text-base text-sm ">
          <p>
            Với mong muốn Khách lựa chọn được sản phẩm tốt và có trải nghiệm hài
            lòng nhất, cũng như đảm bảo niềm tin vào sản phẩm Anco, khách hàng
            có thể đổi trả sản phẩm đã mua tại Anco trong vòng 05 ngày kể từ khi
            nhận hàng.
            <br />
          </p>
          <p className="mt-2">
            Điều kiện đổi trả:
            <br />
          </p>
          <ul className="mt-2 pl-6 list-disc">
            <li>
              Sản phẩm chưa qua sử dụng, còn nguyên bao bì đóng gói, đầy đủ phụ
              kiện nếu có.
              <br />
            </li>
            <li>
              Bao bì sản phẩm không bị bẩn, méo vỡ, có mùi lạ hoặc có dấu hiệu
              bảo quản không đúng với hướng dẫn sử dụng.
              <br />
            </li>
            <li>
              Còn hoá đơn mua hàng.
              <br />
            </li>
          </ul>
          <p className="mt-2">
            Lưu ý:
            <br />
          </p>
          <ul className="list-disc mt-2 pl-6">
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
              Trong trường hợp có phát sinh chênh lệch, Anco chuyển khoản cho
              quý khách vào số tài khoản ngân hàng do quý khách cung cấp hoặc
              quý khách thanh toán cho Anco khi nhận được hàng đổi
              <br />
            </li>
          </ul>
        </div>
        <h2 className="mt-4 mb-3 sm:mt-8 sm:mb-6 sm:text-2xl text-xl font-semibold font-times">
          3. Hoàn trả sản phẩm:
        </h2>
        <div className="text-justify sm:text-normal sm:text-base text-sm space-y-2 sm:space-y-4">
          <p>
            Trong trường hợp khách hàng gặp phản ứng không mong muốn với sản
            phẩm. Quý khách vui lòng cung cấp hình ảnh về tình trạng gặp phải
            hoặc giấy khám sức khỏe từ cơ sở y tế để Anco xác nhận.
            <br />
          </p>
          <ul className="list-disc pl-6 mb-2">
            <li>Cách thức hoàn trả:</li>
          </ul>
          <div className="pl-3 sm:pl-6 space-y-2 sm:space-y-4">
            <p>
              Bước 1: Quý khách gửi hàng về cho Anco theo quy định (Phí vận
              chuyển sẽ do Anco thanh toán)
            </p>
            <p>
              Bước 2: Quý khách cung cấp Số tài khoản của quý khách bằng cách
              Inbox cho Anco tại: http://m.me/anco
            </p>
            <p>
              Bước 3: Anco hoàn tiền bằng hình thức chuyển khoản cho quý khách
              trong vòng 5 ngày làm việc (Không bao gồm ngày nghỉ, lễ tết).
            </p>
          </div>
          <ul className="list-disc pl-6 mb-2">
            <li>Gửi hàng về Anco:</li>
          </ul>
          <p>
            Trong các trường hợp Bảo hành hoặc Đổi trả có yêu cầu gửi hàng về Cỏ
            Mềm, Quý khách vui lòng đóng gói sản phẩm cẩn thận nhằm đảm bảo
            trạng thái nguyên vẹn và gửi hàng cho đối tác vận chuyển trong vòng
            48h kể từ khi hoàn thành việc trao đổi xác nhận thông tin với Anco
            về đơn hàng. Anco rất tiếc sẽ phải từ chối sản phẩm bị hư hại do lỗi
            đóng gói sơ sài từ Quý khách.
          </p>
          <p>
            Địa chỉ nhận hàng đổi trả: số 180 Trần Hưng Đạo, Hoàn Kiếm, Hà Nội
          </p>
        </div>
      </div>
    </>
  )
}
