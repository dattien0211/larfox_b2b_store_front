<html><head>
  <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <script src="https://cdn.tailwindcss.com"></script>
      <script> window.FontAwesomeConfig = { autoReplaceSvg: 'nest'};</script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

      <style>
        ::-webkit-scrollbar { display: none;}
        body { font-family: 'Inter', sans-serif; }
        .gradient-text { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .gradient-bg { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
        .float-animation { animation: float 6s ease-in-out infinite; }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
      </style>
      <script>tailwind.config = {
        "theme": {
        "extend": {
        "colors": {
        "primary": "#667eea",
        "secondary": "#764ba2",
        "accent": "#f093fb"
      },
        "fontFamily": {
        "sans": [
        "Inter",
        "sans-serif"
        ]
      }
      }
      }
      };</script>
      <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=""><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;500;600;700;800;900&amp;display=swap"><style>
        .highlighted-section {
        outline: 2px solid #3F20FB;
        background-color: rgba(63, 32, 251, 0.1);
      }

        .edit-button {
        position: absolute;
        z-index: 1000;
      }

        ::-webkit-scrollbar {
        display: none;
      }

        html, body {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      </style></head>
<body class="bg-white">

<!-- Header -->
<header id="header" class="bg-white shadow-sm sticky top-0 z-50">
  <div class="container mx-auto px-4">
    <div class="flex items-center justify-between py-4">
      <div class="text-3xl font-bold gradient-text">LARFOX.COM</div>
      <div class="hidden lg:flex items-center space-x-6 text-sm font-medium">
        <span class="text-gray-700 hover:text-primary cursor-pointer">Language</span>
        <span class="text-gray-700 hover:text-primary cursor-pointer">Sign in</span>
        <span class="text-gray-700 hover:text-primary cursor-pointer">Sign up</span>
        <button class="gradient-bg text-white px-6 py-2 rounded-full hover:opacity-90 font-semibold">Get the app</button>
      </div>
    </div>
  </div>
</header>

<!-- Breadcrumb -->
<section id="breadcrumb" class="bg-gray-50 py-4">
  <div class="container mx-auto px-4">
    <div class="flex items-center text-sm text-gray-600">
      <span class="hover:text-primary cursor-pointer">Home</span>
      <i class="fas fa-chevron-right mx-2 text-xs"></i>
      <span class="hover:text-primary cursor-pointer">TechPro Solutions</span>
      <i class="fas fa-chevron-right mx-2 text-xs"></i>
      <span class="hover:text-primary cursor-pointer">Products</span>
      <i class="fas fa-chevron-right mx-2 text-xs"></i>
      <span class="text-gray-900 font-medium">Enterprise Software Suite</span>
    </div>
  </div>
</section>

<!-- Product Detail Header -->
<section id="product-header" class="py-8">
  <div class="container mx-auto px-4">
    <div class="grid lg:grid-cols-2 gap-12">
      <!-- Product Images -->
      <div class="space-y-4">
        <div class="relative">
          <img class="w-full h-96 rounded-xl object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/7ab3460e4c-c1e21866660c3accb069.png" alt="Enterprise Software Suite main view">
            <div class="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Available
            </div>
        </div>
        <div class="grid grid-cols-4 gap-2">
          <img class="w-full h-20 rounded-lg object-cover cursor-pointer border-2 border-primary" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/7ab3460e4c-c1e21866660c3accb069.png" alt="Dashboard view">
            <img class="w-full h-20 rounded-lg object-cover cursor-pointer hover:border-primary border-2 border-gray-200" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/366d0af397-2c33fcfa4407b188a22b.png" alt="Analytics view">
              <img class="w-full h-20 rounded-lg object-cover cursor-pointer hover:border-primary border-2 border-gray-200" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/eabac82177-878ee7ac43a00ff9da96.png" alt="Reports view">
                <img class="w-full h-20 rounded-lg object-cover cursor-pointer hover:border-primary border-2 border-gray-200" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/582c47ac7f-80a63ca0cc0963596508.png" alt="Settings view">
        </div>
      </div>

      <!-- Product Information -->
      <div class="space-y-6">
        <div>
          <h1 class="text-4xl font-bold mb-2">Enterprise Software Suite</h1>
          <p class="text-gray-600 text-lg">Comprehensive business management platform for modern enterprises</p>
        </div>

        <div class="bg-gray-50 p-4 rounded-lg">
          <div class="text-2xl font-bold text-primary mb-2">Custom Quote Required</div>
          <p class="text-sm text-gray-600">Pricing varies based on company size and requirements</p>
        </div>

        <div class="space-y-3">
          <div class="flex items-center">
            <i class="fas fa-check-circle text-green-500 mr-3"></i>
            <span>Full-stack enterprise solution</span>
          </div>
          <div class="flex items-center">
            <i class="fas fa-check-circle text-green-500 mr-3"></i>
            <span>Cloud-native architecture</span>
          </div>
          <div class="flex items-center">
            <i class="fas fa-check-circle text-green-500 mr-3"></i>
            <span>24/7 technical support included</span>
          </div>
          <div class="flex items-center">
            <i class="fas fa-check-circle text-green-500 mr-3"></i>
            <span>Custom integrations available</span>
          </div>
        </div>

        <div class="flex space-x-4">
          <button class="gradient-bg text-white px-8 py-3 rounded-lg font-semibold flex-1">
            <i class="fas fa-paper-plane mr-2"></i>Request Quote
          </button>
          <button class="border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white">
            <i class="fas fa-heart mr-2"></i>Save
          </button>
          <button class="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50">
            <i class="fas fa-share mr-2"></i>Share
          </button>
        </div>

        <div class="border-t pt-6">
          <div class="text-sm text-gray-600 space-y-2">
            <div class="flex justify-between">
              <span>Product Code:</span>
              <span class="font-medium">ESS-2024-001</span>
            </div>
            <div class="flex justify-between">
              <span>Category:</span>
              <span class="font-medium">Enterprise Software</span>
            </div>
            <div class="flex justify-between">
              <span>Delivery Time:</span>
              <span class="font-medium">3-6 months</span>
            </div>
            <div class="flex justify-between">
              <span>Minimum Order:</span>
              <span class="font-medium">1 License</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Supplier Information Card -->
<section id="supplier-info" class="py-8 bg-gray-900">
  <div class="container mx-auto px-4">
    <div class="bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700">
      <h2 class="text-2xl font-bold mb-6 text-white">Supplier Information</h2>
      <div class="grid lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2">
          <div class="flex items-start space-x-6">
            <img class="w-20 h-20 rounded-xl object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/70c2ec516b-7d9ded3176c3830c89ef.png" alt="TechPro Solutions">
              <div class="flex-1">
                <div class="flex items-center mb-2">
                  <h3 class="text-2xl font-bold mr-3 text-white">TechPro Solutions</h3>
                  <i class="fas fa-shield-check text-green-400 text-lg"></i>
                  <span class="ml-2 bg-green-900 text-green-300 px-2 py-1 rounded-full text-xs font-medium">Verified</span>
                </div>
                <div class="grid md:grid-cols-2 gap-4 text-sm text-gray-300 mb-4">
                  <div>
                    <i class="fas fa-map-marker-alt mr-2 text-primary"></i>
                    Singapore, Asia Pacific
                  </div>
                  <div>
                    <i class="fas fa-calendar mr-2 text-primary"></i>
                    Founded in 2015
                  </div>
                  <div>
                    <i class="fas fa-users mr-2 text-primary"></i>
                    200-500 employees
                  </div>
                  <div>
                    <i class="fas fa-chart-line mr-2 text-primary"></i>
                    $50M - $100M revenue
                  </div>
                </div>
                <p class="text-gray-300 leading-relaxed">
                  Leading technology solutions provider specializing in enterprise software development, AI implementation, and digital transformation services for Fortune 500 companies across Asia Pacific.
                </p>
              </div>
          </div>
        </div>
        <div class="space-y-4">
          <div class="text-center">
            <div class="text-green-400 font-semibold mb-1">
              <i class="fas fa-circle text-xs mr-2"></i>Active 5 mins ago
            </div>
            <div class="text-sm text-gray-400">Avg response time: 2 hours</div>
          </div>
          <div class="space-y-2">
            <button class="w-full gradient-bg text-white py-3 rounded-lg font-semibold hover:opacity-90">
              <i class="fas fa-comments mr-2"></i>Chat Now
            </button>
            <button class="w-full border border-primary text-primary py-3 rounded-lg font-semibold hover:bg-primary hover:text-white">
              <i class="fas fa-building mr-2"></i>View Company Profile
            </button>
            <button class="w-full border border-gray-600 text-gray-300 py-3 rounded-lg hover:bg-gray-700">
              <i class="fas fa-star mr-2"></i>Add to Watchlist
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Product Details Tabs -->
<section id="product-details" class="py-8">
  <div class="container mx-auto px-4">
    <div class="bg-white rounded-xl shadow-sm">
      <div class="border-b">
        <nav class="flex space-x-8 px-8">
          <button class="py-4 border-b-2 border-primary text-primary font-medium">Description</button>
          <button class="py-4 text-gray-600 hover:text-primary">Specifications</button>
          <button class="py-4 text-gray-600 hover:text-primary">Reviews</button>
          <button class="py-4 text-gray-600 hover:text-primary">FAQ</button>
        </nav>
      </div>
      <div class="p-8">
        <div class="prose max-w-none">
          <h3 class="text-xl font-bold mb-4">Product Overview</h3>
          <p class="text-gray-700 mb-6">
            Our Enterprise Software Suite is a comprehensive business management platform designed to streamline operations, enhance productivity, and drive digital transformation for modern enterprises. Built with cutting-edge technology and industry best practices.
          </p>

          <h4 class="text-lg font-semibold mb-3">Key Features</h4>
          <div class="grid md:grid-cols-2 gap-6 mb-6">
            <div class="space-y-3">
              <div class="flex items-start">
                <i class="fas fa-database text-primary mr-3 mt-1"></i>
                <div>
                  <div class="font-medium">Advanced Data Management</div>
                  <div class="text-sm text-gray-600">Real-time data processing and analytics</div>
                </div>
              </div>
              <div class="flex items-start">
                <i class="fas fa-users text-primary mr-3 mt-1"></i>
                <div>
                  <div class="font-medium">User Management</div>
                  <div class="text-sm text-gray-600">Role-based access control and permissions</div>
                </div>
              </div>
              <div class="flex items-start">
                <i class="fas fa-chart-bar text-primary mr-3 mt-1"></i>
                <div>
                  <div class="font-medium">Business Intelligence</div>
                  <div class="text-sm text-gray-600">Comprehensive reporting and dashboards</div>
                </div>
              </div>
            </div>
            <div class="space-y-3">
              <div class="flex items-start">
                <i class="fas fa-cloud text-primary mr-3 mt-1"></i>
                <div>
                  <div class="font-medium">Cloud Integration</div>
                  <div class="text-sm text-gray-600">Seamless cloud deployment and scaling</div>
                </div>
              </div>
              <div class="flex items-start">
                <i class="fas fa-mobile-alt text-primary mr-3 mt-1"></i>
                <div>
                  <div class="font-medium">Mobile Ready</div>
                  <div class="text-sm text-gray-600">Responsive design for all devices</div>
                </div>
              </div>
              <div class="flex items-start">
                <i class="fas fa-shield-alt text-primary mr-3 mt-1"></i>
                <div>
                  <div class="font-medium">Enterprise Security</div>
                  <div class="text-sm text-gray-600">Bank-level security and compliance</div>
                </div>
              </div>
            </div>
          </div>

          <h4 class="text-lg font-semibold mb-3">Technical Specifications</h4>
          <div class="bg-gray-50 p-4 rounded-lg">
            <div class="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <div class="font-medium text-gray-900 mb-1">Platform</div>
                <div class="text-gray-600">Web-based, Cloud Native</div>
              </div>
              <div>
                <div class="font-medium text-gray-900 mb-1">Database</div>
                <div class="text-gray-600">PostgreSQL, MongoDB</div>
              </div>
              <div>
                <div class="font-medium text-gray-900 mb-1">API</div>
                <div class="text-gray-600">RESTful, GraphQL</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Related Products -->
<section id="related-products" class="py-8 bg-gray-50">
  <div class="container mx-auto px-4">
    <h2 class="text-2xl font-bold mb-6">Related Products from TechPro Solutions</h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
        <img class="w-full h-32 rounded-lg object-cover mb-3" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/366d0af397-2c33fcfa4407b188a22b.png" alt="AI Analytics Platform">
          <h3 class="font-semibold mb-2">AI Analytics Platform</h3>
          <p class="text-sm text-gray-600 mb-3">Machine learning powered business intelligence</p>
          <button class="w-full gradient-bg text-white py-2 rounded-lg text-sm">View Details</button>
      </div>
      <div class="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
        <img class="w-full h-32 rounded-lg object-cover mb-3" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/eabac82177-878ee7ac43a00ff9da96.png" alt="Cloud Infrastructure">
          <h3 class="font-semibold mb-2">Cloud Infrastructure</h3>
          <p class="text-sm text-gray-600 mb-3">Scalable cloud computing solutions</p>
          <button class="w-full gradient-bg text-white py-2 rounded-lg text-sm">View Details</button>
      </div>
      <div class="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
        <img class="w-full h-32 rounded-lg object-cover mb-3" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/582c47ac7f-80a63ca0cc0963596508.png" alt="Mobile App Solutions">
          <h3 class="font-semibold mb-2">Mobile App Solutions</h3>
          <p class="text-sm text-gray-600 mb-3">Cross-platform mobile applications</p>
          <button class="w-full gradient-bg text-white py-2 rounded-lg text-sm">View Details</button>
      </div>
      <div class="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
        <img class="w-full h-32 rounded-lg object-cover mb-3" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/7c843d13d8-13e80a42db0adafc1de1.png" alt="Cybersecurity Suite">
          <h3 class="font-semibold mb-2">Cybersecurity Suite</h3>
          <p class="text-sm text-gray-600 mb-3">Advanced threat protection systems</p>
          <button class="w-full gradient-bg text-white py-2 rounded-lg text-sm">View Details</button>
      </div>
    </div>
  </div>
</section>

<!-- Footer -->
<footer id="footer" class="bg-gray-900 text-white py-12">
  <div class="container mx-auto px-4">
    <div class="grid md:grid-cols-4 gap-8">
      <div>
        <div class="text-2xl font-bold mb-4 gradient-text">LARFOX.COM</div>
        <p class="text-gray-400 text-sm">Easy-to-use B2B Commerce Platform for both services and goods</p>
      </div>
      <div>
        <h3 class="font-semibold mb-4">Policies and Rules</h3>
        <ul class="space-y-2 text-sm text-gray-400">
          <li><span class="hover:text-white cursor-pointer">Privacy Policy</span></li>
          <li><span class="hover:text-white cursor-pointer">User Agreement</span></li>
        </ul>
      </div>
      <div>
        <h3 class="font-semibold mb-4">Legal Terms</h3>
        <ul class="space-y-2 text-sm text-gray-400">
          <li><span class="hover:text-white cursor-pointer">Terms of Use</span></li>
          <li><span class="hover:text-white cursor-pointer">Legal Notice</span></li>
        </ul>
      </div>
      <div>
        <h3 class="font-semibold mb-4">Help Center</h3>
        <ul class="space-y-2 text-sm text-gray-400">
          <li><span class="hover:text-white cursor-pointer">Support</span></li>
          <li><span class="hover:text-white cursor-pointer">Contact Us</span></li>
        </ul>
      </div>
    </div>
  </div>
</footer>

</body></html>
