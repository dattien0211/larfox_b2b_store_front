"use client"
import { useState } from "react"
import clsx from "clsx"

type Props = {
  params: { countryCode: string; handle: string }
}
export default function SellerGoods({ params }: Props) {
  const [tabName, setTabName] = useState<string>("All")
  return (
    <section id="goods-services-content" className="py-12">
      <div className="container mx-auto">
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-3xl font-bold">
                Our{" "}
                <span className="gradient-text">Products &amp; Services</span>
              </h1>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600">
                127 items
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products &amp; services..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-80 focus:outline-none focus:border-primary"
                />
                <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
              </div>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary">
                <option>All Categories</option>
                <option>Products</option>
                <option>Services</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
            <button
              className={clsx(
                "category-tab px-6 py-2 rounded-md",
                tabName === "All"
                  ? "bg-white text-primary font-medium shadow-sm"
                  : "text-gray-600 hover:text-primary"
              )}
              onClick={() => setTabName("All")}
            >
              All
            </button>
            <button
              className={clsx(
                "category-tab px-6 py-2 rounded-md",
                tabName === "Products"
                  ? "bg-white text-primary font-medium shadow-sm"
                  : "text-gray-600 hover:text-primary"
              )}
              onClick={() => setTabName("Products")}
            >
              Products
            </button>
            <button
              className={clsx(
                "category-tab px-6 py-2 rounded-md",
                tabName === "Services"
                  ? "bg-white text-primary font-medium shadow-sm"
                  : "text-gray-600 hover:text-primary"
              )}
              onClick={() => setTabName("Services")}
            >
              Services
            </button>
          </div>
        </div>

        <div id="products-section" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <i className="fas fa-cube text-primary mr-3"></i>
            Products Portfolio
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <img
                className="w-full h-40 rounded-lg object-cover mb-4"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/7ab3460e4c-c1e21866660c3accb069.png"
                alt="enterprise software dashboard"
              />
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">
                  Enterprise Software Suite
                </h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive business management platform
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-medium">Custom Quote</span>
                  <button className="gradient-bg text-white px-4 py-1 rounded-lg text-sm">
                    Inquire
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <img
                className="w-full h-40 rounded-lg object-cover mb-4"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/366d0af397-2c33fcfa4407b188a22b.png"
                alt="AI solutions interface"
              />
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">AI Analytics Platform</h3>
                <p className="text-gray-600 text-sm">
                  Machine learning powered business intelligence
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-medium">Custom Quote</span>
                  <button className="gradient-bg text-white px-4 py-1 rounded-lg text-sm">
                    Inquire
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <img
                className="w-full h-40 rounded-lg object-cover mb-4"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/eabac82177-878ee7ac43a00ff9da96.png"
                alt="cloud infrastructure"
              />
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Cloud Infrastructure</h3>
                <p className="text-gray-600 text-sm">
                  Scalable cloud computing solutions
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-medium">Custom Quote</span>
                  <button className="gradient-bg text-white px-4 py-1 rounded-lg text-sm">
                    Inquire
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <img
                className="w-full h-40 rounded-lg object-cover mb-4"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/582c47ac7f-80a63ca0cc0963596508.png"
                alt="mobile applications"
              />
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Mobile App Solutions</h3>
                <p className="text-gray-600 text-sm">
                  Cross-platform mobile applications
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-medium">Custom Quote</span>
                  <button className="gradient-bg text-white px-4 py-1 rounded-lg text-sm">
                    Inquire
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <img
                className="w-full h-40 rounded-lg object-cover mb-4"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/7c843d13d8-13e80a42db0adafc1de1.png"
                alt="cybersecurity software interface with shield icons and security dashboard"
              />
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Cybersecurity Suite</h3>
                <p className="text-gray-600 text-sm">
                  Advanced threat protection systems
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-medium">Custom Quote</span>
                  <button className="gradient-bg text-white px-4 py-1 rounded-lg text-sm">
                    Inquire
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <img
                className="w-full h-40 rounded-lg object-cover mb-4"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/9ac7b77e8b-629e7c4b479377babb81.png"
                alt="IoT devices and sensors connected in smart office environment"
              />
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">IoT Device Solutions</h3>
                <p className="text-gray-600 text-sm">
                  Smart connected device ecosystem
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-medium">Custom Quote</span>
                  <button className="gradient-bg text-white px-4 py-1 rounded-lg text-sm">
                    Inquire
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="services-section">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <i className="fas fa-handshake text-primary mr-3"></i>
            Service Offerings
          </h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-200 rounded-xl p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-lg">
                  <i className="fas fa-code text-3xl text-primary"></i>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-2">
                    Custom Software Development
                  </h3>
                  <p className="text-gray-700 mb-4">
                    End-to-end software development from concept to deployment.
                    Our team of 50+ developers specializes in enterprise-grade
                    applications.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <i className="fas fa-check-circle text-green-500 mr-2"></i>
                      Full-stack development (React, Node.js, Python)
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <i className="fas fa-check-circle text-green-500 mr-2"></i>
                      Agile methodology with 2-week sprints
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <i className="fas fa-check-circle text-green-500 mr-2"></i>
                      24/7 post-launch support included
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-primary font-semibold">
                      Starting from $50,000
                    </span>
                    <button className="gradient-bg text-white px-6 py-2 rounded-lg">
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-gray-200 rounded-xl p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-lg">
                  <i className="fas fa-robot text-3xl text-primary"></i>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-2">
                    AI &amp; Machine Learning Solutions
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Transform your business with cutting-edge AI technologies.
                    From predictive analytics to natural language processing.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <i className="fas fa-check-circle text-green-500 mr-2"></i>
                      Custom AI model development
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <i className="fas fa-check-circle text-green-500 mr-2"></i>
                      Data pipeline setup and optimization
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <i className="fas fa-check-circle text-green-500 mr-2"></i>
                      MLOps implementation and monitoring
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-primary font-semibold">
                      Starting from $75,000
                    </span>
                    <button className="gradient-bg text-white px-6 py-2 rounded-lg">
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-gray-200 rounded-xl p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-lg">
                  <i className="fas fa-cloud text-3xl text-primary"></i>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-2">
                    Cloud Migration &amp; Management
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Seamlessly migrate your infrastructure to the cloud with
                    zero downtime. AWS, Azure, and GCP certified experts.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <i className="fas fa-check-circle text-green-500 mr-2"></i>
                      Infrastructure assessment and planning
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <i className="fas fa-check-circle text-green-500 mr-2"></i>
                      Zero-downtime migration strategy
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <i className="fas fa-check-circle text-green-500 mr-2"></i>
                      Ongoing cloud optimization and cost management
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-primary font-semibold">
                      Starting from $30,000
                    </span>
                    <button className="gradient-bg text-white px-6 py-2 rounded-lg">
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-gray-200 rounded-xl p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-lg">
                  <i className="fas fa-shield-alt text-3xl text-primary"></i>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-2">
                    Cybersecurity Consulting
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Protect your business with comprehensive security audits,
                    penetration testing, and compliance consulting.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <i className="fas fa-check-circle text-green-500 mr-2"></i>
                      Security assessment and vulnerability testing
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <i className="fas fa-check-circle text-green-500 mr-2"></i>
                      Compliance framework implementation
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <i className="fas fa-check-circle text-green-500 mr-2"></i>
                      24/7 security monitoring and incident response
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-primary font-semibold">
                      Starting from $25,000
                    </span>
                    <button className="gradient-bg text-white px-6 py-2 rounded-lg">
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="gradient-bg rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              {
                "Let's discuss how our solutions can accelerate your digital transformation journey."
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
