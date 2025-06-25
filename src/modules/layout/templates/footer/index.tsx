import FooterContact from "./contact"
import FooterAbout from "./about"
import FooterPolicy from "./policy"
import FooterOfferForm from "./offer-form"

export default async function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="mb-6">
            <svg
              className="w-64 h-20"
              viewBox="0 0 800 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="logoGradientFooter"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#667eea" stopOpacity={1}></stop>
                  <stop
                    offset="100%"
                    stopColor="#764ba2"
                    stopOpacity={1}
                  ></stop>
                </linearGradient>
              </defs>
              <rect
                x="40"
                y="40"
                width="8"
                height="120"
                fill="url(#logoGradientFooter)"
              ></rect>
              <rect
                x="40"
                y="152"
                width="60"
                height="8"
                fill="url(#logoGradientFooter)"
              ></rect>
              <rect
                x="48"
                y="48"
                width="44"
                height="8"
                fill="none"
                stroke="url(#logoGradientFooter)"
                stroke-width="2"
              ></rect>
              <rect
                x="48"
                y="56"
                width="36"
                height="8"
                fill="none"
                stroke="url(#logoGradientFooter)"
                stroke-width="2"
              ></rect>
              <rect
                x="48"
                y="64"
                width="28"
                height="8"
                fill="none"
                stroke="url(#logoGradientFooter)"
                stroke-width="2"
              ></rect>

              <polygon
                points="140,160 160,40 180,40 200,160 192,160 188,140 152,140 148,160"
                fill="url(#logoGradientFooter)"
              ></polygon>
              <rect x="156" y="110" width="28" height="8" fill="white"></rect>
              <polygon
                points="164,48 156,88 184,88 176,48"
                fill="none"
                stroke="url(#logoGradientFooter)"
                stroke-width="2"
              ></polygon>

              <rect
                x="240"
                y="40"
                width="8"
                height="120"
                fill="url(#logoGradientFooter)"
              ></rect>
              <path
                d="M248 40 L248 100 L288 100 Q308 100 308 70 Q308 40 288 40 Z"
                fill="url(#logoGradientFooter)"
              ></path>
              <line
                x1="248"
                y1="100"
                x2="308"
                y2="160"
                stroke="url(#logoGradientFooter)"
                stroke-width="8"
              ></line>
              <rect
                x="256"
                y="48"
                width="24"
                height="8"
                fill="none"
                stroke="url(#logoGradientFooter)"
                stroke-width="2"
              ></rect>
              <rect
                x="256"
                y="56"
                width="20"
                height="8"
                fill="none"
                stroke="url(#logoGradientFooter)"
                stroke-width="2"
              ></rect>

              <rect
                x="340"
                y="40"
                width="8"
                height="120"
                fill="url(#logoGradientFooter)"
              ></rect>
              <rect
                x="348"
                y="40"
                width="50"
                height="8"
                fill="url(#logoGradientFooter)"
              ></rect>
              <rect
                x="348"
                y="95"
                width="40"
                height="8"
                fill="url(#logoGradientFooter)"
              ></rect>
              <rect
                x="356"
                y="48"
                width="34"
                height="8"
                fill="none"
                stroke="url(#logoGradientFooter)"
                stroke-width="2"
              ></rect>
              <rect
                x="356"
                y="56"
                width="26"
                height="8"
                fill="none"
                stroke="url(#logoGradientFooter)"
                stroke-width="2"
              ></rect>

              <circle
                cx="460"
                cy="100"
                r="60"
                fill="none"
                stroke="url(#logoGradientFooter)"
                stroke-width="8"
              ></circle>
              <circle
                cx="460"
                cy="100"
                r="44"
                fill="none"
                stroke="url(#logoGradientFooter)"
                stroke-width="2"
              ></circle>
              <circle
                cx="460"
                cy="100"
                r="36"
                fill="none"
                stroke="url(#logoGradientFooter)"
                stroke-width="2"
              ></circle>
              <circle
                cx="460"
                cy="100"
                r="28"
                fill="none"
                stroke="url(#logoGradientFooter)"
                stroke-width="2"
              ></circle>
              <circle
                cx="460"
                cy="100"
                r="20"
                fill="none"
                stroke="url(#logoGradientFooter)"
                stroke-width="2"
              ></circle>

              <line
                x1="560"
                y1="40"
                x2="640"
                y2="160"
                stroke="url(#logoGradientFooter)"
                stroke-width="8"
              ></line>
              <line
                x1="640"
                y1="40"
                x2="560"
                y2="160"
                stroke="url(#logoGradientFooter)"
                stroke-width="8"
              ></line>
              <line
                x1="572"
                y1="52"
                x2="628"
                y2="148"
                stroke="url(#logoGradientFooter)"
                stroke-width="2"
              ></line>
              <line
                x1="628"
                y1="52"
                x2="572"
                y2="148"
                stroke="url(#logoGradientFooter)"
                stroke-width="2"
              ></line>
              <line
                x1="584"
                y1="64"
                x2="616"
                y2="136"
                stroke="url(#logoGradientFooter)"
                stroke-width="2"
              ></line>
              <line
                x1="616"
                y1="64"
                x2="584"
                y2="136"
                stroke="url(#logoGradientFooter)"
                stroke-width="2"
              ></line>
            </svg>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">LARFOX.COM</div>
            <p className="text-gray-400">
              Easy-to-use B2B Commerce Platform for both services and goods
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          <FooterContact />
          <FooterAbout />
          <FooterPolicy />
          <FooterOfferForm />
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          © 2024 Larfox.com. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
