import Icons from "@modules/common/icons"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function FooterPolicy() {
  const { RightArrow } = Icons

  return (
    <div className="sm:col-span-6 lg:col-span-3">
      <h1 className="font-bold text-lg sm:text-2xl font-manrope-bold">
        Chính sách
      </h1>
      <div className="sm:mt-8 mt-2">
        <ul className="list-none space-y-2 sm:space-y-4">
          <li className="hover:text-orang-5">
            <LocalizedClientLink
              href="/chinh-sach-mua-hang-va-thanh-toan"
              className="flex items-center"
            >
              <RightArrow />
              <p className="ml-2 text-sm sm:text-base">
                Chính sách mua hàng, và thanh toán
              </p>
            </LocalizedClientLink>
          </li>
          <li className="hover:text-orang-5">
            <LocalizedClientLink
              href="/chinh-sach-bao-hanh"
              className="flex items-center"
            >
              <RightArrow />{" "}
              <p className="ml-2 text-sm sm:text-base">Chính sách bảo hành</p>
            </LocalizedClientLink>
          </li>
          <li className="hover:text-orang-5">
            <LocalizedClientLink
              href="/chinh-sach-doi-tra-va-hoan-tien"
              className="flex items-center"
            >
              <RightArrow />
              <p className="ml-2 text-sm sm:text-base">
                Chính sách đổi trả và hoàn tiền
              </p>
            </LocalizedClientLink>
          </li>
          <li className="hover:text-orang-5">
            <LocalizedClientLink
              href="/chinh-sach-bao-mat"
              className="flex items-center"
            >
              <RightArrow />
              <p className="ml-2 text-sm sm:text-base">Chính sách bảo mật</p>
            </LocalizedClientLink>
          </li>
        </ul>
      </div>
    </div>
  )
}
