import Image from "next/image"

import Icons from "@modules/common/icons"
import IMGS from "@constants/IMGS"
import FooterContact from "./contact"
import FooterAbout from "./about"
import FooterPolicy from "./policy"
import FooterOfferForm from "./offer-form"
import FooterSocial from "./social"

export default async function Footer() {
  // const { collections } = await getCollectionsList(0, 6)
  // const { product_categories } = await getCategoriesList(0, 6)

  const { Twitter, FaceBook, Instagram, Google } = Icons

  return (
    <footer className="w-full">
      <div className="w-full  bg-primary/80">
        <div className="relative w-full">
          <Image
            src={IMGS.Leaf}
            priority
            alt="leaf"
            width={1200} // Set the original width of the image
            height={56} // Set the original height to maintain the aspect ratio
            className="absolute left-0 -top-12 sm:-top-36 w-screen  z-10" // Ensures the image fills the window width
          />
        </div>
        <div className="content-container">
          <div className="flex flex-col md:flex-row gap-y-4 md:gap-y-0 items-center justify-between py-4 sm:py-8">
            <div className="relative w-[120px] h-[54px]">
              <Image
                src={IMGS.Logo2}
                alt="Logo"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-contain"
              />
            </div>
            <FooterSocial />
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
        <h1 className="text-center text-sm sm:text-base">
          © {new Date().getFullYear()} Bông Lúa Company (201201016057)
          (1001568-K)
        </h1>
      </div>
    </footer>
  )
}
