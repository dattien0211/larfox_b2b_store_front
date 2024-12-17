import { getCategoriesList } from "@lib/data/categories"
import { getCollectionsList } from "@lib/data/collections"
import { Text, clx } from "@medusajs/ui"
import Image from "next/image"

import Icons from "@modules/common/icons"
import SelectSubsidiary from "@modules/layout/components/select-subsidiary"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"
import IMGS from "@constants/IMGS"
import PayPal from "@modules/common/icons/paypal"

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6)
  const { product_categories } = await getCategoriesList(0, 6)

  const { Twitter, FaceBook, Instagram, Google, RightArrow, Send } = Icons

  return (
    <footer className="w-full">
      <div className="w-full  bg-orang-10">
        <div className="relative w-full">
          <Image
            src={IMGS.Leaf}
            alt="leaf"
            width={1200} // Set the original width of the image
            height={56} // Set the original height to maintain the aspect ratio
            className="absolute left-0 -top-36 w-screen h-auto z-10" // Ensures the image fills the window width
          />
        </div>
        <div className="content-container">
          <div className="flex flex-col md:flex-row gap-y-4 md:gap-y-0 items-center justify-between py-8">
            <Image
              src={IMGS.Logo2}
              alt="leaf"
              width={120} // Set the original width of the image
              height={32} // Set the original height to maintain the aspect ratio
            />
            <div className="flex items-center justify-center gap-x-2">
              <h1 className="text-white font-manrope-bold font-bold">
                Follow Us
              </h1>
              <div className="w-[45px] h-[1px] bg-white"></div>
              <div className="w-8 h-8 rounded-full bg-orang-20 flex items-center justify-center cursor-pointer">
                <Twitter color="#FFFFFF" />
              </div>
              <div className="w-8 h-8 rounded-full bg-orang-20 flex items-center justify-center cursor-pointer">
                <FaceBook color="#FFFFFF" />
              </div>
              <div className="w-8 h-8 rounded-full bg-orang-20 flex items-center justify-center cursor-pointer">
                <Instagram color="#FFFFFF" />
              </div>
              <div className="w-8 h-8 rounded-full bg-orang-20 flex items-center justify-center cursor-pointer">
                <Google color="#FFFFFF" />
              </div>
            </div>
          </div>
          <Image
            src={IMGS.Line}
            alt="leaf"
            width={1200} // Set the original width of the image
            height={5} // Set the original height to maintain the aspect ratio
          />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-x-10 mt-12 pb-8 text-white">
            <div className="md:col-span-3">
              <h1 className="font-bold text-2xl font-manrope-bold">Liên hệ</h1>
              <div className="mt-8">
                <p className="mt-4">
                  Địa chỉ: BT3/16A4 làng Việt Kiều Châu Âu, phường Mộ Lao, Quận
                  Hà Đông, Thành phố Hà Nội
                </p>
                <p className="mt-4">0946174888</p>
                <p className="mt-4">trabavan34@gmail.com</p>
              </div>
            </div>

            <div className="md:col-span-2">
              <h1 className="font-bold text-2xl font-manrope-bold">Về Anco</h1>
              <div className="mt-8">
                <ul className="list-none">
                  <li className="mt-4">
                    <LocalizedClientLink href="#" className="flex items-center">
                      <RightArrow /> <p className="ml-2">Trang chủ</p>
                    </LocalizedClientLink>
                  </li>
                  <li className="mt-4">
                    <LocalizedClientLink href="#" className="flex items-center">
                      <RightArrow /> <p className="ml-2">Giới thiệu</p>
                    </LocalizedClientLink>
                  </li>
                  <li className="mt-4">
                    <LocalizedClientLink href="#" className="flex items-center">
                      <RightArrow /> <p className="ml-2">Sản phẩm</p>
                    </LocalizedClientLink>
                  </li>
                  <li className="mt-4">
                    <LocalizedClientLink href="#" className="flex items-center">
                      <RightArrow /> <p className="ml-2">Đối tác</p>
                    </LocalizedClientLink>
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:col-span-3">
              <h1 className="font-bold text-2xl font-manrope-bold">
                Chính sách
              </h1>
              <div className="mt-8">
                <ul className="list-none">
                  <li className="mt-4 ">
                    <LocalizedClientLink href="#" className="flex items-center">
                      <RightArrow />
                      <p className="ml-2">Chính sách mua, và thanh toán</p>
                    </LocalizedClientLink>
                  </li>
                  <li className="mt-4 ">
                    <LocalizedClientLink href="#" className="flex items-center">
                      <RightArrow /> <p className="ml-2">Chính sách bảo hành</p>
                    </LocalizedClientLink>
                  </li>
                  <li className="mt-4 ">
                    <LocalizedClientLink href="#" className="flex items-center">
                      <RightArrow />
                      <p className="ml-2">Chính sách đổi trả hoàn tiền</p>
                    </LocalizedClientLink>
                  </li>
                  <li className="mt-4 ">
                    <LocalizedClientLink href="#" className="flex items-center">
                      <RightArrow /> <p className="ml-2">Chính sách bảo mật</p>
                    </LocalizedClientLink>
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:col-span-4">
              <h1 className="font-bold text-2xl font-manrope-bold">
                Đăng ký nhận ưu đãi từ Anco
              </h1>
              <div className="mt-8">
                <div className="flex h-[46px] w-full">
                  <input
                    type="text"
                    placeholder="Nhập email"
                    className="px-4 flex-1 focus:outline-none h-full bg-grey-10 rounded-l-md text-primary"
                  />
                  <div className="bg-orang-5 w-[46px] h-[46px] flex items-center justify-center rounded-r-md cursor-pointer">
                    <span className="text-white">
                      <Send />
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between mt-14">
                <SelectSubsidiary dropDownColor="#FFFFFF" />
                <div className="flex gap-x-2 mt-4 md:mt-0">
                  <Image
                    src={IMGS.Paypal}
                    alt="Paypal"
                    width={62}
                    height={30}
                    className="h-[30px]"
                  />
                  <Image
                    src={IMGS.Visa}
                    alt="Visa"
                    width={88}
                    height={30}
                    className="h-[30px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-white  py-6 bg-orang-20 flex items-center justify-center">
        <h1>
          © {new Date().getFullYear()} Anco Company (201201016057) (1001568-K)
        </h1>
      </div>
      <div className="content-container">
        {/* <div className="flex w-full mb-16 justify-between text-ui-fg-muted">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} Medusa Store. All rights reserved.
          </Text>
          <MedusaCTA />
        </div> */}
      </div>
    </footer>
  )
}
