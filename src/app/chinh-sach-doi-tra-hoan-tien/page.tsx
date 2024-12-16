import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}

export default async function Chung() {
  
  return (
    <>
      <div className="py-[36px] content-container">
        <div className="flex flex-col font-bold gap-x-6 text-[32px]">
        Chính Sách Đổi Trả Và Hoàn Tiền
        </div>

        <div className="py-[16px] text-[20px] font-medium">
        1. Đổi trả do lỗi sai đơn hoặc lỗi vận chuyển:
        </div>
        <div className="text-[16px]">
        Để đảm bảo chất lượng dịch vụ và đem lại cho Quý Khách những trải nghiệm tốt nhất với sản phẩm, Cỏ Mềm áp dụng chính sách đổi hàng với các trường hợp sau:<br />
  <div className="py-[16px] pl-[16px]">
  1. Nhầm sản phẩm, thiếu hoặc thừa sản phẩm so với đơn hàng đã xác nhận<br />
  2. Sản phẩm bị móp vỡ, gãy hỏng do vận chuyển<br />
  3. Sản phẩm có lỗi kỹ thuật phát hiện khi sử dụng<br />
  </div>
  <div className="pt-[16px]">Trong 3 trường hợp trên, Cỏ Mềm đổi hàng cho quý khách theo trình tự sau:<br /></div>
  <div className="pt-[16px]">Bước 1. Quý khách vui lòng thông báo cho Cỏ Mềm trong vòng 24h kể từ khi nhận hàng, kèm theo ảnh chụp gói hàng và toàn bộ sản phẩm nhận được<br /></div>
  <div className="pt-[16px]">Bước 2. Cỏ Mềm tiến hành gửi mặt hàng thiếu/lỗi, hỏng đúng số lượng và chủng loại cho quý khách trong vòng 5 ngày từ khi nhận được yêu cầu<br /></div>
  <div className="pt-[16px]">Bước 3. Quý khách gửi lại mặt hàng thừa/lỗi, hỏng về địa chỉ công ty: số 225 phố Trần Đăng Ninh, phường Dịch Vọng, quân Cầu Giấy, Hà Nội<br /></div>
  <div className="pt-[16px]">Bước 4. Trong trường hợp có phát sinh chênh lệch, Cỏ Mềm chuyển khoản cho quý khách vào số tài khoản ngân hàng do quý khách cung cấp hoặc quý khách thanh toán phần chênh lệch cho Cỏ Mềm khi nhận được hàng đổi<br /></div>

  <div className="pt-[16px]">Phí vận chuyển đổi trả: với sản phẩm cần đổi do 03 lý do trên, quý khách không phải trả phí vận chuyển, mọi chi phí vận chuyển phát sinh sẽ do Cỏ Mềm thanh toán bằng hình thức thanh toán trực tiếp cho đơn vị vận chuyển.<br /></div>

</div>
<div className="py-[16px] text-[20px] font-medium">
2. Đổi trả sản phẩm theo mong muốn riêng của khách hàng: 
        </div>
        <div className="text-[16px]">
        <div className="pt-[16px]">Với mong muốn Khách lựa chọn được sản phẩm tốt và có trải nghiệm hài lòng nhất, cũng như đảm bảo niềm tin vào sản phẩm Cỏ Mềm, khách hàng có thể đổi trả sản phẩm đã mua tại Cỏ Mềm trong vòng 05 ngày kể từ khi nhận hàng.<br /></div>
        <div className="pt-[16px]">Điều kiện đổi trả:<br /></div>
        <ul className="pt-[16px] pl-[24px] list-disc">
  <li>Sản phẩm chưa qua sử dụng, còn nguyên bao bì đóng gói, đầy đủ phụ kiện nếu có.<br /></li>
  <li> Bao bì sản phẩm không bị bẩn, méo vỡ, có mùi lạ hoặc có dấu hiệu bảo quản không đúng với hướng dẫn sử dụng.<br /></li>
  <li>  Còn hoá đơn mua hàng.<br /></li>
  </ul>
  <div className="pt-[16px]">Lưu ý:<br /></div>
  <ul className="list-disc pt-[16px] pl-[24px]">
  <li>Sản phẩm chỉ được đổi 01 lần.<br /></li>
  <li> Quý khách vui lòng thanh toán phí vận chuyển 2 chiều khi yêu cầu đổi trả hàng theo mong muốn. <br /></li>
  <li>  Trong trường hợp có phát sinh chênh lệch, Cỏ Mềm chuyển khoản cho quý khách vào số tài khoản ngân hàng do quý khách cung cấp hoặc quý khách thanh toán cho Cỏ Mềm khi nhận được hàng đổi<br /></li>
  </ul>
  <div className="pt-[16px]">3. Hoàn trả sản phẩm:<br /></div>
  <div className="pt-[16px]">Trong trường hợp khách hàng gặp phản ứng không mong muốn với sản phẩm. Quý khách vui lòng cung cấp hình ảnh về tình trạng gặp phải hoặc giấy khám sức khỏe từ cơ sở y tế để Cỏ Mềm xác nhận.<br /></div>
  <ul className="list-disc pt-[16px] pl-[24px]">
  <li>Cách thức hoàn trả:<br /></li>
  </ul>
  Bước 1: Quý khách gửi hàng về cho Cỏ Mềm theo quy định (Phí vận chuyển sẽ do Cỏ Mềm thanh toán)<br />
  <div className="pt-[16px]">Bước 2: Quý khách cung cấp Số tài khoản của quý khách bằng cách Inbox cho Cỏ Mềm tại: http://m.me/comemhomelab<br /></div>
  <div className="pt-[16px]">Bước 3: Cỏ Mềm hoàn tiền bằng hình thức chuyển khoản cho quý khách trong vòng 5 ngày làm việc (Không bao gồm ngày nghỉ, lễ tết).<br /></div>
  <div className="pt-[16px]">Gửi hàng về Cỏ Mềm:<br /></div>

  Trong các trường hợp Bảo hành hoặc Đổi trả có yêu cầu gửi hàng về Cỏ Mềm, Quý khách vui lòng đóng gói sản phẩm cẩn thận nhằm đảm bảo trạng thái nguyên vẹn và gửi hàng cho đối tác vận chuyển trong vòng 48h kể từ khi hoàn thành việc trao đổi xác nhận thông tin với Cỏ Mềm về đơn hàng. Cỏ Mềm rất tiếc sẽ phải từ chối sản phẩm bị hư hại do lỗi đóng gói sơ sài từ Quý khách. <br />
  <div className="pt-[16px]">Địa chỉ nhận hàng đổi trả: số 255 phố Trần Đăng Ninh, phường Dịch Vọng, quận Cầu Giấy, Hà Nội<br /></div>

</div>

      </div>
    </>
  )
}
