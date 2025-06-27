import { Metadata } from "next"
import { notFound } from "next/navigation"
import { getRegion, listRegions } from "@lib/data/regions"
import { getProductByHandle } from "@lib/data/products"
import { sdk } from "@lib/config"
import { getToken } from "@lib/data/cookies"
import { getCustomer } from "@lib/data/customer"
import Link from "next/link"

type Props = {
  params: { countryCode: string; handle: string }
}

export async function generateStaticParams() {
  try {
    const countryCodes = await listRegions().then((regions) =>
      regions?.map((r) => r.countries?.map((c) => c.iso_2)).flat()
    )

    if (!countryCodes) {
      return []
    }

    const { products } = await sdk.store.product.list(
      { fields: "handle" },
      { next: { tags: ["products"] } }
    )

    return countryCodes
      .map((countryCode) =>
        products.map((product) => ({
          countryCode,
          handle: product.handle,
        }))
      )
      .flat()
      .filter((param) => param.handle)
  } catch (error) {
    console.error(
      `Failed to generate static paths for product pages: ${
        error instanceof Error ? error.message : "Unknown error"
      }.`
    )
    return []
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Fetch region first since product fetch depends on it
  const region = await getRegion(params.countryCode)
  if (!region) {
    notFound()
  }

  const product = await getProductByHandle(params.handle, region.id)
  if (!product) {
    notFound()
  }

  const formattedTitle = product.title
    ? product.title.toLowerCase().replace(/^\w/, (c) => c.toUpperCase())
    : ""

  return {
    title: `${formattedTitle} | Larfox`,
    description: `${formattedTitle}`,
    openGraph: {
      title: `${formattedTitle} | Larfox`,
      description: `${formattedTitle}`,
      images: product.thumbnail ? [product.thumbnail] : [],
    },
  }
}

export default async function ProductPage({ params }: Props) {
  const region = await getRegion(params.countryCode)
  if (!region) notFound()

  // Run product and customer fetches concurrently after region is available
  const [product, customer] = await Promise.all([
    getProductByHandle(params.handle, region.id),
    getCustomer().catch(() => null),
  ])

  if (!product) notFound()

  const token = getToken()

  return (
    <>
      <section id="breadcrumb" className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <span className="hover:text-primary cursor-pointer">Home</span>
            <i className="fas fa-chevron-right mx-2 text-xs"></i>
            {product?.seller ? (
              <span className="hover:text-primary cursor-pointer">
                {product.seller.name}
              </span>
            ) : (
              <></>
            )}
            <i className="fas fa-chevron-right mx-2 text-xs"></i>
            <span className="hover:text-primary cursor-pointer">Products</span>
            <i className="fas fa-chevron-right mx-2 text-xs"></i>
            <span className="text-gray-900 font-medium">{product.title}</span>
          </div>
        </div>
      </section>

      <section id="product-header" className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="relative">
                <img
                  className="w-full h-96 rounded-xl object-cover"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/7ab3460e4c-c1e21866660c3accb069.png"
                  alt="Enterprise Software Suite main view"
                />
                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Available
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2">
                <img
                  className="w-full h-20 rounded-lg object-cover cursor-pointer border-2 border-primary"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/7ab3460e4c-c1e21866660c3accb069.png"
                  alt="Dashboard view"
                />
                <img
                  className="w-full h-20 rounded-lg object-cover cursor-pointer hover:border-primary border-2 border-gray-200"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/366d0af397-2c33fcfa4407b188a22b.png"
                  alt="Analytics view"
                />
                <img
                  className="w-full h-20 rounded-lg object-cover cursor-pointer hover:border-primary border-2 border-gray-200"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/eabac82177-878ee7ac43a00ff9da96.png"
                  alt="Reports view"
                />
                <img
                  className="w-full h-20 rounded-lg object-cover cursor-pointer hover:border-primary border-2 border-gray-200"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/582c47ac7f-80a63ca0cc0963596508.png"
                  alt="Settings view"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold mb-2">{product.title}</h1>
                <p className="text-gray-600 text-lg">{product.description}</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">
                  Custom Quote Required
                </div>
                <p className="text-sm text-gray-600">
                  Pricing varies based on company size and requirements
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span>Full-stack enterprise solution</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span>Cloud-native architecture</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span>24/7 technical support included</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  <span>Custom integrations available</span>
                </div>
              </div>

              <div className="flex space-x-4">
                <button className="gradient-bg text-white px-8 py-3 rounded-lg font-semibold flex-1">
                  <i className="fas fa-paper-plane mr-2"></i>Request Quote
                </button>
                <button className="border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white">
                  <i className="fas fa-heart mr-2"></i>Save
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50">
                  <i className="fas fa-share mr-2"></i>Share
                </button>
              </div>

              <div className="border-t pt-6">
                <div className="text-sm text-gray-600 space-y-2">
                  <div className="flex justify-between">
                    <span>Product Code:</span>
                    <span className="font-medium">ESS-2024-001</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Category:</span>
                    <span className="font-medium">Enterprise Software</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Time:</span>
                    <span className="font-medium">3-6 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Minimum Order:</span>
                    <span className="font-medium">1 License</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {product?.seller ? (
        <section id="supplier-info" className="py-8 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700">
              <h2 className="text-2xl font-bold mb-6 text-white">
                Supplier Information
              </h2>
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-start space-x-6">
                    <img
                      className="w-20 h-20 rounded-xl object-cover"
                      src={product.seller.photo}
                      alt="Seller"
                    />
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="text-2xl font-bold mr-3 text-white">
                          {product.seller.name}
                        </h3>
                        <i className="fas fa-shield-check text-green-400 text-lg"></i>
                        <span className="ml-2 bg-green-900 text-green-300 px-2 py-1 rounded-full text-xs font-medium">
                          Verified
                        </span>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300 mb-4">
                        <div>
                          <i className="fas fa-map-marker-alt mr-2 text-primary"></i>
                          Singapore, Asia Pacific
                        </div>
                        <div>
                          <i className="fas fa-calendar mr-2 text-primary"></i>
                          Founded in 2015
                        </div>
                        <div>
                          <i className="fas fa-users mr-2 text-primary"></i>
                          200-500 employees
                        </div>
                        <div>
                          <i className="fas fa-chart-line mr-2 text-primary"></i>
                          $50M - $100M revenue
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        Leading technology solutions provider specializing in
                        enterprise software development, AI implementation, and
                        digital transformation services for Fortune 500
                        companies across Asia Pacific.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-green-400 font-semibold mb-1">
                      <i className="fas fa-circle text-xs mr-2"></i>Active 5
                      mins ago
                    </div>
                    <div className="text-sm text-gray-400">
                      Avg response time: 2 hours
                    </div>
                  </div>
                  <div className="space-y-2">
                    <button className="w-full gradient-bg text-white py-3 rounded-lg font-semibold hover:opacity-90">
                      <i className="fas fa-comments mr-2"></i>Chat Now
                    </button>
                    <button className="w-full border border-primary text-primary py-3 rounded-lg font-semibold hover:bg-primary hover:text-white">
                      <i className="fas fa-building mr-2"></i>View Company
                      Profile
                    </button>
                    <button className="w-full border border-gray-600 text-gray-300 py-3 rounded-lg hover:bg-gray-700">
                      <i className="fas fa-star mr-2"></i>Add to Watchlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <></>
      )}

      <section id="product-details" className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-sm">
            <div className="border-b">
              <nav className="flex space-x-8 px-8">
                <button className="py-4 border-b-2 border-primary text-primary font-medium">
                  Description
                </button>
                <button className="py-4 text-gray-600 hover:text-primary">
                  Specifications
                </button>
                <button className="py-4 text-gray-600 hover:text-primary">
                  Reviews
                </button>
                <button className="py-4 text-gray-600 hover:text-primary">
                  FAQ
                </button>
              </nav>
            </div>
            <div className="p-8">
              <div className="prose max-w-none">
                <h3 className="text-xl font-bold mb-4">Product Overview</h3>
                <p className="text-gray-700 mb-6">
                  Our Enterprise Software Suite is a comprehensive business
                  management platform designed to streamline operations, enhance
                  productivity, and drive digital transformation for modern
                  enterprises. Built with cutting-edge technology and industry
                  best practices.
                </p>

                <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <i className="fas fa-database text-primary mr-3 mt-1"></i>
                      <div>
                        <div className="font-medium">
                          Advanced Data Management
                        </div>
                        <div className="text-sm text-gray-600">
                          Real-time data processing and analytics
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <i className="fas fa-users text-primary mr-3 mt-1"></i>
                      <div>
                        <div className="font-medium">User Management</div>
                        <div className="text-sm text-gray-600">
                          Role-based access control and permissions
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <i className="fas fa-chart-bar text-primary mr-3 mt-1"></i>
                      <div>
                        <div className="font-medium">Business Intelligence</div>
                        <div className="text-sm text-gray-600">
                          Comprehensive reporting and dashboards
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <i className="fas fa-cloud text-primary mr-3 mt-1"></i>
                      <div>
                        <div className="font-medium">Cloud Integration</div>
                        <div className="text-sm text-gray-600">
                          Seamless cloud deployment and scaling
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <i className="fas fa-mobile-alt text-primary mr-3 mt-1"></i>
                      <div>
                        <div className="font-medium">Mobile Ready</div>
                        <div className="text-sm text-gray-600">
                          Responsive design for all devices
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <i className="fas fa-shield-alt text-primary mr-3 mt-1"></i>
                      <div>
                        <div className="font-medium">Enterprise Security</div>
                        <div className="text-sm text-gray-600">
                          Bank-level security and compliance
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h4 className="text-lg font-semibold mb-3">
                  Technical Specifications
                </h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="font-medium text-gray-900 mb-1">
                        Platform
                      </div>
                      <div className="text-gray-600">
                        Web-based, Cloud Native
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 mb-1">
                        Database
                      </div>
                      <div className="text-gray-600">PostgreSQL, MongoDB</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 mb-1">API</div>
                      <div className="text-gray-600">RESTful, GraphQL</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="related-products" className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">
            Related Products from TechPro Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <img
                className="w-full h-32 rounded-lg object-cover mb-3"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/366d0af397-2c33fcfa4407b188a22b.png"
                alt="AI Analytics Platform"
              />
              <h3 className="font-semibold mb-2">AI Analytics Platform</h3>
              <p className="text-sm text-gray-600 mb-3">
                Machine learning powered business intelligence
              </p>
              <button className="w-full gradient-bg text-white py-2 rounded-lg text-sm">
                View Details
              </button>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <img
                className="w-full h-32 rounded-lg object-cover mb-3"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/eabac82177-878ee7ac43a00ff9da96.png"
                alt="Cloud Infrastructure"
              />
              <h3 className="font-semibold mb-2">Cloud Infrastructure</h3>
              <p className="text-sm text-gray-600 mb-3">
                Scalable cloud computing solutions
              </p>
              <button className="w-full gradient-bg text-white py-2 rounded-lg text-sm">
                View Details
              </button>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <img
                className="w-full h-32 rounded-lg object-cover mb-3"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/582c47ac7f-80a63ca0cc0963596508.png"
                alt="Mobile App Solutions"
              />
              <h3 className="font-semibold mb-2">Mobile App Solutions</h3>
              <p className="text-sm text-gray-600 mb-3">
                Cross-platform mobile applications
              </p>
              <button className="w-full gradient-bg text-white py-2 rounded-lg text-sm">
                View Details
              </button>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <img
                className="w-full h-32 rounded-lg object-cover mb-3"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/7c843d13d8-13e80a42db0adafc1de1.png"
                alt="Cybersecurity Suite"
              />
              <h3 className="font-semibold mb-2">Cybersecurity Suite</h3>
              <p className="text-sm text-gray-600 mb-3">
                Advanced threat protection systems
              </p>
              <Link
                className="flex justify-center gradient-bg text-white py-2 rounded-lg text-sm"
                href={`/san-pham/${product.handle}`}
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export const revalidate = 30
