"use client"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { useParams, usePathname } from "next/navigation"
import { Seller } from "../../../../../types/global"

export default function ClientLayout({
  children,
  seller,
}: {
  children: React.ReactNode
  seller: Seller
}) {
  const pathname = usePathname()
  const params = useParams()
  const getTabClass = (href: string) =>
    pathname.includes(href)
      ? "tab-btn px-4 py-2 text-primary border-b-2 border-primary font-medium"
      : "tab-btn px-4 py-2 text-gray-600 hover:text-primary"
  return (
    <>
      <section id="supplier-summary" className="bg-gray-50 py-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <img
                className="w-16 h-16 rounded-lg object-cover"
                src={seller?.photo ? seller.photo : ""}
                alt="TechPro Solutions logo"
              />
              <div>
                <div className="flex items-center mb-1">
                  <h1 className="text-2xl font-bold mr-3">{seller?.name}</h1>
                  <i className="fas fa-shield-check text-green-500 text-lg"></i>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>Annual Revenue: $50M - $100M</span>
                  <span className="text-green-600">Active 5 mins ago</span>
                  <span>Founded: 2015</span>
                  <span>Singapore, Asia Pacific</span>
                </div>
              </div>
            </div>
            <button className="gradient-bg text-white px-6 py-2 rounded-lg hover:opacity-90 font-medium">
              <i className="fas fa-star mr-2"></i>Add to Watch List
            </button>
          </div>
        </div>
      </section>

      <section id="navigation" className="bg-white relative">
        <div className="container mx-auto">
          <div className="flex items-center justify-between pt-4">
            <nav className="flex space-x-8">
              <LocalizedClientLink
                className={getTabClass("/home")}
                href={`/seller/${params.handle}/home`}
              >
                Home
              </LocalizedClientLink>
              <LocalizedClientLink
                className={getTabClass("/goods")}
                href={`/seller/${params.handle}/goods`}
              >
                Goods/Services
              </LocalizedClientLink>
              <LocalizedClientLink
                className={getTabClass("/news")}
                href={`/seller/${params.handle}/news`}
              >
                News
              </LocalizedClientLink>
              <LocalizedClientLink
                className={getTabClass("/contact")}
                href={`/seller/${params.handle}/contact`}
              >
                Contact
              </LocalizedClientLink>
              <LocalizedClientLink
                className="tab-btn px-4 py-2 gradient-bg text-white rounded-lg"
                href={`/seller/${params.handle}/chatnow`}
              >
                Chat now
              </LocalizedClientLink>
            </nav>
          </div>
        </div>
      </section>
      <main className="py-4">{children}</main>
    </>
  )
}
