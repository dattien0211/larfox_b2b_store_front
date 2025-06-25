import Image from "next/image"
import IMGS from "@constants/IMGS"

type Props = {
  params: { countryCode: string; handle: string }
}

export default async function SellerNewsPage({ params }: Props) {
  return (
    <>
      <section id="supplier-summary" className="bg-gray-50 py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <img
                className="w-16 h-16 rounded-lg object-cover"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                alt="TechPro Solutions logo"
              />
              <div>
                <div className="flex items-center mb-1">
                  <h1 className="text-2xl font-bold mr-3">TechPro Solutions</h1>
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
              <Image src={IMGS.Logo} alt={""} width={20} height={20} />
              Add to Watch List
            </button>
          </div>
        </div>
      </section>

      <section id="navigation" className="bg-white border-b relative">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <nav className="flex space-x-8">
              <button className="tab-btn px-4 py-2 text-primary border-b-2 border-primary font-medium">
                Home
              </button>
              <button className="tab-btn px-4 py-2 text-gray-600 hover:text-primary">
                Goods/Services
              </button>
              <button className="tab-btn px-4 py-2 text-gray-600 hover:text-primary">
                News
              </button>
              <button className="tab-btn px-4 py-2 text-gray-600 hover:text-primary">
                Contact
              </button>
              <button className="tab-btn px-4 py-2 gradient-bg text-white rounded-lg">
                Chat now
              </button>
            </nav>
          </div>
          <div className="mb-6">
            <img
              className="w-full h-64 rounded-xl object-cover"
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/bfd5c2ff67-fee05dd31993ff88dc45.png"
              alt="modern technology company office building with glass facade and digital displays"
            />
          </div>
        </div>

        <div className="absolute right-8 top-20 float-animation">
          <div className="bg-white p-4 rounded-2xl shadow-xl border border-gray-100 max-w-xs">
            <div className="flex items-center mb-2">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
              <span className="text-sm font-medium">AI Agent</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Quick questions about TechPro Solutions?
            </p>
            <button className="gradient-bg text-white px-4 py-1 rounded-lg text-sm w-full">
              Ask AI
            </button>
          </div>
        </div>

        <div
          id="chat-box"
          className="fixed right-0 top-0 h-[56rem] w-96 bg-white shadow-2xl z-50 transform translate-x-full transition-transform duration-300"
        >
          <div className="p-4 border-b bg-gradient-to-r from-primary to-secondary text-white">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Chat with TechPro Solutions</h3>
              <button className="text-white hover:text-gray-200">
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
          <div className="flex-1 p-4 h-[56rem] overflow-y-auto">
            <div className="space-y-4">
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm">Hello! How can we help you today?</p>
              </div>
              <div className="bg-primary text-white p-3 rounded-lg ml-8">
                <p className="text-sm">
                  {"I'm interested in your AI solutions."}
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 border rounded-lg px-3 py-2 text-sm"
              />
              <button className="gradient-bg text-white px-4 py-2 rounded-lg">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
