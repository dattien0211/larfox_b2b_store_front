import Icons from "@modules/common/icons"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function FooterAbout() {
  const { RightArrow } = Icons

  return (
    <div className="sm:col-span-6 lg:col-span-2">
      <h1 className="font-bold text-lg sm:text-2xl font-times">Về Anco</h1>
      <div className="sm:mt-8 mt-2">
        <ul className="list-none space-y-2 sm:space-y-4">
          <li className=" hover:text-orang-5">
            <LocalizedClientLink href="/" className="flex items-center">
              <RightArrow />{" "}
              <p className="ml-2 text-sm sm:text-base">Trang chủ</p>
            </LocalizedClientLink>
          </li>
          <li className=" hover:text-orang-5">
            <LocalizedClientLink
              href="/ve-chung-toi"
              className="flex items-center"
            >
              <RightArrow />
              <p className="ml-2 text-sm sm:text-base">Giới thiệu</p>
            </LocalizedClientLink>
          </li>
          <li className=" hover:text-orang-5">
            <LocalizedClientLink
              href="/tat-ca-san-pham"
              className="flex items-center"
            >
              <RightArrow />
              <p className="ml-2 text-sm sm:text-base">Sản phẩm</p>
            </LocalizedClientLink>
          </li>
          <li className=" hover:text-orang-5">
            <LocalizedClientLink href="/" className="flex items-center">
              <RightArrow />
              <p className="ml-2 text-sm sm:text-base">Đối tác</p>
            </LocalizedClientLink>
          </li>
        </ul>
      </div>
    </div>
  )
}
