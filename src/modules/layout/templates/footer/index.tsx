import Image from "next/image"

import IMGS from "@constants/IMGS"
import FooterContact from "./contact"
import FooterAbout from "./about"
import FooterPolicy from "./policy"
import FooterOfferForm from "./offer-form"
import FooterSocial from "./social"

export default async function Footer() {
  return (
    <footer className="w-full">
      <div className="w-full  bg-[#7c6540]">
        <div className="content-container">
          <div className="flex flex-col md:flex-row gap-y-4 md:gap-y-0 items-center justify-between py-4 sm:py-8">
            <div className="w-14 sm:w-16 h-auto relative">
              <Image
                src={IMGS.Logo}
                alt="Logo"
                width={64}
                height={64}
                priority={true}
                className="w-auto h-auto"
              />
            </div>
            {/* <FooterSocial /> */}
          </div>
          <div className="relative w-full h-1">
            <Image src={IMGS.Line} alt="leaf" fill className="object-cover" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-x-8 gap-y-6 sm:gap-y-12 lg:gap-x-10 mt-4 sm:mt-12 pb-4 sm:pb-8 text-white">
            <FooterContact />
            <FooterAbout />
            <FooterPolicy />
            <FooterOfferForm />
          </div>
        </div>
      </div>
      <div className="w-full text-white  py-4 bg-primary flex items-center justify-center">
        <h1 className="text-center text-xs sm:text-base text-wrap">
          © {new Date().getFullYear()} Bông Lúa Company (201201016057)
          (1001568-K)
        </h1>
      </div>
    </footer>
  )
}
