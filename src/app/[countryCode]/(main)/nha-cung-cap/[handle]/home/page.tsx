type Props = {
  params: { countryCode: string; handle: string }
}
export default async function SellerHome({ params }: Props) {
  return (
    <>
      <div className="border-b">
        <div className="container mx-auto mb-6">
          <img
            className="w-full h-64 rounded-xl object-cover"
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/bfd5c2ff67-d4fe17ba76354bb15154.png"
            alt="modern technology company office building with glass facade and digital displays"
          />
        </div>
      </div>
      <section id="company-overview" className="py-12">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <img
                  className="w-full h-40 rounded-lg object-cover"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/2fbf94c9e1-a8537556d41b782dd0dc.png"
                  alt="modern tech office workspace with employees collaborating"
                />
                <img
                  className="w-full h-40 rounded-lg object-cover"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/30d734b0ae-4898564a831f71a274b0.png"
                  alt="high-tech server room with blue lighting"
                />
                <img
                  className="w-full h-40 rounded-lg object-cover"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/391b4efbbd-27751d01e1cc4382ff58.png"
                  alt="software development team coding on multiple monitors"
                />
                <img
                  className="w-full h-40 rounded-lg object-cover"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/8e5deaf89c-59f67bd44e48ea464761.png"
                  alt="modern conference room with video call setup"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">
                TechPro Solutions{" "}
                <span className="text-gray-500 text-xl">(Founded 2015)</span>
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Leading provider of innovative technology solutions for global
                enterprises.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-6">
                <span className="text-green-700 font-medium">
                  Avg response time: 15 minutes
                </span>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700">
                  With over 8 years of experience in the technology sector,
                  TechPro Solutions specializes in delivering cutting-edge
                  software development, AI solutions, and cloud services to
                  Fortune 500 companies worldwide.
                </p>
                <div>
                  <h3 className="font-semibold mb-2">
                    Top 3 Competitive Advantages:
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>24/7 global support with multilingual teams</li>
                    <li>ISO 27001 certified security protocols</li>
                    <li>98.9% project delivery success rate</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="goods-listing" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">
            Our <span className="gradient-text">Products</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <img
                className="w-full h-32 rounded-lg object-cover mb-3"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/7ab3460e4c-c1e21866660c3accb069.png"
                alt="enterprise software dashboard interface"
              />
              <h3 className="font-medium">Enterprise Software</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <img
                className="w-full h-32 rounded-lg object-cover mb-3"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/366d0af397-2c33fcfa4407b188a22b.png"
                alt="AI artificial intelligence neural network visualization"
              />
              <h3 className="font-medium">AI Solutions</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <img
                className="w-full h-32 rounded-lg object-cover mb-3"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/eabac82177-878ee7ac43a00ff9da96.png"
                alt="cloud computing servers in data center"
              />
              <h3 className="font-medium">Cloud Platforms</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <img
                className="w-full h-32 rounded-lg object-cover mb-3"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/582c47ac7f-80a63ca0cc0963596508.png"
                alt="mobile app development coding screen"
              />
              <h3 className="font-medium">Mobile Apps</h3>
            </div>
          </div>
        </div>
      </section>

      <section id="services-listing" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">
            Our <span className="gradient-text">Services</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <i className="fas fa-code text-3xl text-primary"></i>
              <span className="font-medium">Custom Software Development</span>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <i className="fas fa-robot text-3xl text-primary"></i>
              <span className="font-medium">AI &amp; Machine Learning</span>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <i className="fas fa-cloud text-3xl text-primary"></i>
              <span className="font-medium">Cloud Migration</span>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <i className="fas fa-mobile-alt text-3xl text-primary"></i>
              <span className="font-medium">Mobile Development</span>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <i className="fas fa-shield-alt text-3xl text-primary"></i>
              <span className="font-medium">Cybersecurity</span>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <i className="fas fa-headset text-3xl text-primary"></i>
              <span className="font-medium">24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      <section id="clients" className="py-12 bg-gray-50">
        <div className="">
          <h2 className="text-3xl font-bold text-center mb-8 container mx-auto">
            Trusted by <span className="gradient-text">Leading Companies</span>
          </h2>
          <div className="overflow-hidden">
            <div className="flex space-x-12 animate-marquee">
              <img
                className="h-12 object-contain grayscale hover:grayscale-0 transition-all"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/a82f8fe53b-6e70df87c543b4a80995.png"
                alt="Microsoft company logo"
              />
              <img
                className="h-12 object-contain grayscale hover:grayscale-0 transition-all"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/7bf692ff59-860a0fd00ac74c0fe67e.png"
                alt="Google company logo"
              />
              <img
                className="h-12 object-contain grayscale hover:grayscale-0 transition-all"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/6f4ac3d119-11364877653808da73c6.png"
                alt="Amazon company logo"
              />
              <img
                className="h-12 object-contain grayscale hover:grayscale-0 transition-all"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/8f37f1d0e4-e76018d8d3c2e1fd06c9.png"
                alt="IBM company logo"
              />
              <img
                className="h-12 object-contain grayscale hover:grayscale-0 transition-all"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/afa6dbea18-a17946f4d1d40750bd10.png"
                alt="Oracle company logo"
              />
              <img
                className="h-12 object-contain grayscale hover:grayscale-0 transition-all"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/0f4e54031a-88c77bd6b5de62fddc79.png"
                alt="Salesforce company logo"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">
            Core <span className="gradient-text">Capabilities</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <i className="fas fa-cogs text-4xl text-primary mb-3"></i>
              <span className="font-medium">DevOps</span>
            </div>
            <div className="text-center p-4">
              <i className="fas fa-database text-4xl text-primary mb-3"></i>
              <span className="font-medium">Big Data</span>
            </div>
            <div className="text-center p-4">
              <i className="fas fa-chart-line text-4xl text-primary mb-3"></i>
              <span className="font-medium">Analytics</span>
            </div>
            <div className="text-center p-4">
              <i className="fas fa-network-wired text-4xl text-primary mb-3"></i>
              <span className="font-medium">IoT</span>
            </div>
          </div>
        </div>
      </section>
      <section id="certifications" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">
            Our <span className="gradient-text">Certifications</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center">
              <img
                className="w-20 h-20 mx-auto mb-3 object-contain"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/fa15fb3620-222210d0ad09aea2a36a.png"
                alt="ISO 27001 certification badge"
              />
              <span className="font-medium">ISO 27001</span>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <img
                className="w-20 h-20 mx-auto mb-3 object-contain"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/04d078867a-d8422c041d31e30789ac.png"
                alt="SOC 2 compliance certificate"
              />
              <span className="font-medium">SOC 2</span>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <img
                className="w-20 h-20 mx-auto mb-3 object-contain"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/a2f53ee49f-164b9cf4f26dc0b16204.png"
                alt="AWS partner certification logo"
              />
              <span className="font-medium">AWS Partner</span>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <img
                className="w-20 h-20 mx-auto mb-3 object-contain"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/e4dbc02a6a-a988aab8f4ca6a2ae30c.png"
                alt="Microsoft Azure certified partner badge"
              />
              <span className="font-medium">Azure Certified</span>
            </div>
          </div>
        </div>
      </section>

      <section id="culture" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">
            Company <span className="gradient-text">Culture</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <i className="fas fa-users text-4xl text-primary mb-4"></i>
              <h3 className="font-semibold mb-2">Collaborative</h3>
              <p className="text-gray-600">Team-first approach</p>
            </div>
            <div className="text-center p-6">
              <i className="fas fa-lightbulb text-4xl text-primary mb-4"></i>
              <h3 className="font-semibold mb-2">Innovative</h3>
              <p className="text-gray-600">Cutting-edge solutions</p>
            </div>
            <div className="text-center p-6">
              <i className="fas fa-leaf text-4xl text-primary mb-4"></i>
              <h3 className="font-semibold mb-2">Sustainable</h3>
              <p className="text-gray-600">Environmental responsibility</p>
            </div>
          </div>
        </div>
      </section>

      <section id="awards" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">
            Recognition &amp; <span className="gradient-text">Awards</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg text-center">
              <img
                className="w-16 h-16 mx-auto mb-3 object-contain"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/4c9a889949-905c0bf07843966c5e03.png"
                alt="tech innovation award trophy"
              />
              <h3 className="font-semibold">Tech Innovation Award 2023</h3>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <img
                className="w-16 h-16 mx-auto mb-3 object-contain"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/25f7bb2e7d-5d4d45a0c8331d4ab25a.png"
                alt="best employer award certificate"
              />
              <h3 className="font-semibold">Best Employer 2022</h3>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <img
                className="w-16 h-16 mx-auto mb-3 object-contain"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/93fcb104ae-9918edae1f6b4cc4da0a.png"
                alt="customer satisfaction award medal"
              />
              <h3 className="font-semibold">Customer Excellence 2023</h3>
            </div>
          </div>
        </div>
      </section>
      <section id="company-news" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">
            Latest <span className="gradient-text">News</span>
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold text-lg">
                  TechPro Solutions Launches New AI Platform
                </h3>
                <span className="text-sm text-gray-500">2 days ago</span>
              </div>
              <p className="text-gray-700 mb-3">
                Revolutionary AI-powered business intelligence platform now
                available for enterprise clients...
              </p>
              <span className="text-primary text-sm font-medium">
                Read more
              </span>
            </div>
            <div className="bg-white p-6 rounded-lg border hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold text-lg">
                  Partnership with Global Tech Giant Announced
                </h3>
                <span className="text-sm text-gray-500">1 week ago</span>
              </div>
              <p className="text-gray-700 mb-3">
                Strategic partnership will expand cloud services to 15 new
                markets across Asia Pacific...
              </p>
              <span className="text-primary text-sm font-medium">
                Read more
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-details" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">
            Contact <span className="gradient-text">Information</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-xl mb-4">
                  TechPro Solutions
                </h3>
                <div className="space-y-3">
                  <p className="flex items-center">
                    <i className="fas fa-map-marker-alt text-primary mr-3"></i>
                    123 Tech Hub Drive, Singapore 138588
                  </p>
                  <p className="flex items-center">
                    <i className="fas fa-globe text-primary mr-3"></i>
                    www.techprosolutions.com
                  </p>
                  <p className="flex items-center">
                    <i className="fas fa-envelope text-primary mr-3"></i>
                    contact@techprosolutions.com
                  </p>
                  <p className="flex items-center">
                    <i className="fas fa-phone text-primary mr-3"></i>+65 6123
                    4567
                  </p>
                </div>
              </div>
              <div className="border-t pt-4">
                <h4 className="font-medium mb-2">Company Admin</h4>
                <p className="text-gray-700">
                  Sarah Chen - Business Development Director
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  )
}
