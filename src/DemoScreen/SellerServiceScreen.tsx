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
        .slide-in { animation: slideIn 0.3s ease-out; }
        @keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }
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
      };
      </script>
      <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
          <link rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;500;600;700;800;900&amp;display=swap">
            <style>
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
              -ms - overflow - style: none;
              scrollbar-width: none;
            }
            </style>
</head>
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
        <button class="gradient-bg text-white px-6 py-2 rounded-full hover:opacity-90 font-semibold">Get the app
        </button>
      </div>
    </div>
  </div>
</header>

<!-- Supplier Summary Bar -->
<section id="supplier-summary" class="bg-gray-50 py-6">
  <div class="container mx-auto px-4">
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-6">
        <img class="w-16 h-16 rounded-lg object-cover"
             src="https://storage.googleapis.com/uxpilot-auth.appspot.com/70c2ec516b-7d9ded3176c3830c89ef.png"
             alt="TechPro Solutions logo">
          <div>
            <div class="flex items-center mb-1">
              <h1 class="text-2xl font-bold mr-3">TechPro Solutions</h1>
              <i class="fas fa-shield-check text-green-500 text-lg"></i>
            </div>
            <div class="flex items-center space-x-4 text-sm text-gray-600">
              <span>Annual Revenue: $50M - $100M</span>
              <span class="text-green-600">Active 5 mins ago</span>
              <span>Founded: 2015</span>
              <span>Singapore, Asia Pacific</span>
            </div>
          </div>
      </div>
      <button class="gradient-bg text-white px-6 py-2 rounded-lg hover:opacity-90 font-medium">
        <i class="fas fa-star mr-2"></i>Add to Watch List
      </button>
    </div>
  </div>
</section>

<!-- Navigation & AI Chat -->
<section id="navigation" class="bg-white border-b relative">
  <div class="container mx-auto px-4">
    <div class="flex items-center justify-between py-4">
      <nav class="flex space-x-8">
        <button class="tab-btn px-4 py-2 text-gray-600 hover:text-primary" onclick="showTab('home')">Home</button>
        <button class="tab-btn px-4 py-2 text-primary border-b-2 border-primary font-medium"
                onclick="showTab('goods')">Goods/Services
        </button>
        <button class="tab-btn px-4 py-2 text-gray-600 hover:text-primary" onclick="showTab('news')">News</button>
        <button class="tab-btn px-4 py-2 text-gray-600 hover:text-primary" onclick="showTab('contact')">Contact</button>
        <button class="tab-btn px-4 py-2 gradient-bg text-white rounded-lg" onclick="toggleChat()">Chat now</button>
      </nav>
    </div>
  </div>

  <!-- AI Agent Pop-out -->
  <div class="absolute right-8 top-20 float-animation">
    <div class="bg-white p-4 rounded-2xl shadow-xl border border-gray-100 max-w-xs">
      <div class="flex items-center mb-2">
        <div class="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
        <span class="text-sm font-medium">AI Agent</span>
      </div>
      <p class="text-sm text-gray-600 mb-3">Need help finding specific products or services?</p>
      <button class="gradient-bg text-white px-4 py-1 rounded-lg text-sm w-full">Ask AI</button>
    </div>
  </div>
</section>

<!-- Goods/Services Main Content -->
<section id="goods-services-content" class="py-12">
  <div class="container mx-auto px-4">

    <!-- Filter and Search Bar -->
    <div class="mb-8">
      <div class="flex flex-col lg:flex-row gap-4 items-center justify-between">
        <div class="flex items-center space-x-4">
          <h1 class="text-3xl font-bold">Our <span class="gradient-text">Products &amp; Services</span></h1>
          <span class="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600">127 items</span>
        </div>
        <div class="flex items-center space-x-4">
          <div class="relative">
            <input type="text" placeholder="Search products &amp; services..."
                   class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-80 focus:outline-none focus:border-primary">
              <i class="fas fa-search absolute left-3 top-3 text-gray-400"></i>
          </div>
          <select class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary">
            <option>All Categories</option>
            <option>Products</option>
            <option>Services</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Category Tabs -->
    <div class="mb-8">
      <div class="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
        <button class="category-tab px-6 py-2 rounded-md bg-white text-primary font-medium shadow-sm"
                onclick="showCategory('all')">All
        </button>
        <button class="category-tab px-6 py-2 rounded-md text-gray-600 hover:text-primary"
                onclick="showCategory('products')">Products
        </button>
        <button class="category-tab px-6 py-2 rounded-md text-gray-600 hover:text-primary"
                onclick="showCategory('services')">Services
        </button>
      </div>
    </div>

    <!-- Products Section -->
    <div id="products-section" class="mb-12">
      <h2 class="text-2xl font-bold mb-6 flex items-center">
        <i class="fas fa-cube text-primary mr-3"></i>
        Products Portfolio
      </h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
          <img class="w-full h-40 rounded-lg object-cover mb-4"
               src="https://storage.googleapis.com/uxpilot-auth.appspot.com/7ab3460e4c-c1e21866660c3accb069.png"
               alt="enterprise software dashboard">
            <div class="space-y-2">
              <h3 class="font-semibold text-lg">Enterprise Software Suite</h3>
              <p class="text-gray-600 text-sm">Comprehensive business management platform</p>
              <div class="flex items-center justify-between">
                <span class="text-primary font-medium">Custom Quote</span>
                <button class="gradient-bg text-white px-4 py-1 rounded-lg text-sm">Inquire</button>
              </div>
            </div>
        </div>

        <div class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
          <img class="w-full h-40 rounded-lg object-cover mb-4"
               src="https://storage.googleapis.com/uxpilot-auth.appspot.com/366d0af397-2c33fcfa4407b188a22b.png"
               alt="AI solutions interface">
            <div class="space-y-2">
              <h3 class="font-semibold text-lg">AI Analytics Platform</h3>
              <p class="text-gray-600 text-sm">Machine learning powered business intelligence</p>
              <div class="flex items-center justify-between">
                <span class="text-primary font-medium">Custom Quote</span>
                <button class="gradient-bg text-white px-4 py-1 rounded-lg text-sm">Inquire</button>
              </div>
            </div>
        </div>

        <div class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
          <img class="w-full h-40 rounded-lg object-cover mb-4"
               src="https://storage.googleapis.com/uxpilot-auth.appspot.com/eabac82177-878ee7ac43a00ff9da96.png"
               alt="cloud infrastructure">
            <div class="space-y-2">
              <h3 class="font-semibold text-lg">Cloud Infrastructure</h3>
              <p class="text-gray-600 text-sm">Scalable cloud computing solutions</p>
              <div class="flex items-center justify-between">
                <span class="text-primary font-medium">Custom Quote</span>
                <button class="gradient-bg text-white px-4 py-1 rounded-lg text-sm">Inquire</button>
              </div>
            </div>
        </div>

        <div class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
          <img class="w-full h-40 rounded-lg object-cover mb-4"
               src="https://storage.googleapis.com/uxpilot-auth.appspot.com/582c47ac7f-80a63ca0cc0963596508.png"
               alt="mobile applications">
            <div class="space-y-2">
              <h3 class="font-semibold text-lg">Mobile App Solutions</h3>
              <p class="text-gray-600 text-sm">Cross-platform mobile applications</p>
              <div class="flex items-center justify-between">
                <span class="text-primary font-medium">Custom Quote</span>
                <button class="gradient-bg text-white px-4 py-1 rounded-lg text-sm">Inquire</button>
              </div>
            </div>
        </div>

        <div class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
          <img class="w-full h-40 rounded-lg object-cover mb-4"
               src="https://storage.googleapis.com/uxpilot-auth.appspot.com/7c843d13d8-13e80a42db0adafc1de1.png"
               alt="cybersecurity software interface with shield icons and security dashboard">
            <div class="space-y-2">
              <h3 class="font-semibold text-lg">Cybersecurity Suite</h3>
              <p class="text-gray-600 text-sm">Advanced threat protection systems</p>
              <div class="flex items-center justify-between">
                <span class="text-primary font-medium">Custom Quote</span>
                <button class="gradient-bg text-white px-4 py-1 rounded-lg text-sm">Inquire</button>
              </div>
            </div>
        </div>

        <div class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
          <img class="w-full h-40 rounded-lg object-cover mb-4"
               src="https://storage.googleapis.com/uxpilot-auth.appspot.com/9ac7b77e8b-629e7c4b479377babb81.png"
               alt="IoT devices and sensors connected in smart office environment">
            <div class="space-y-2">
              <h3 class="font-semibold text-lg">IoT Device Solutions</h3>
              <p class="text-gray-600 text-sm">Smart connected device ecosystem</p>
              <div class="flex items-center justify-between">
                <span class="text-primary font-medium">Custom Quote</span>
                <button class="gradient-bg text-white px-4 py-1 rounded-lg text-sm">Inquire</button>
              </div>
            </div>
        </div>
      </div>
    </div>

    <!-- Services Section -->
    <div id="services-section">
      <h2 class="text-2xl font-bold mb-6 flex items-center">
        <i class="fas fa-handshake text-primary mr-3"></i>
        Service Offerings
      </h2>
      <div class="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-200 rounded-xl p-8">
          <div class="flex items-start space-x-4">
            <div class="bg-white p-3 rounded-lg">
              <i class="fas fa-code text-3xl text-primary"></i>
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-xl mb-2">Custom Software Development</h3>
              <p class="text-gray-700 mb-4">End-to-end software development from concept to deployment. Our team of 50+
                developers specializes in enterprise-grade applications.</p>
              <div class="space-y-2">
                <div class="flex items-center text-sm text-gray-600">
                  <i class="fas fa-check-circle text-green-500 mr-2"></i>
                  Full-stack development (React, Node.js, Python)
                </div>
                <div class="flex items-center text-sm text-gray-600">
                  <i class="fas fa-check-circle text-green-500 mr-2"></i>
                  Agile methodology with 2-week sprints
                </div>
                <div class="flex items-center text-sm text-gray-600">
                  <i class="fas fa-check-circle text-green-500 mr-2"></i>
                  24/7 post-launch support included
                </div>
              </div>
              <div class="flex items-center justify-between mt-4">
                <span class="text-primary font-semibold">Starting from $50,000</span>
                <button class="gradient-bg text-white px-6 py-2 rounded-lg">Get Quote</button>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-purple-50 to-pink-50 border border-gray-200 rounded-xl p-8">
          <div class="flex items-start space-x-4">
            <div class="bg-white p-3 rounded-lg">
              <i class="fas fa-robot text-3xl text-primary"></i>
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-xl mb-2">AI &amp; Machine Learning Solutions</h3>
              <p class="text-gray-700 mb-4">Transform your business with cutting-edge AI technologies. From predictive
                analytics to natural language processing.</p>
              <div class="space-y-2">
                <div class="flex items-center text-sm text-gray-600">
                  <i class="fas fa-check-circle text-green-500 mr-2"></i>
                  Custom AI model development
                </div>
                <div class="flex items-center text-sm text-gray-600">
                  <i class="fas fa-check-circle text-green-500 mr-2"></i>
                  Data pipeline setup and optimization
                </div>
                <div class="flex items-center text-sm text-gray-600">
                  <i class="fas fa-check-circle text-green-500 mr-2"></i>
                  MLOps implementation and monitoring
                </div>
              </div>
              <div class="flex items-center justify-between mt-4">
                <span class="text-primary font-semibold">Starting from $75,000</span>
                <button class="gradient-bg text-white px-6 py-2 rounded-lg">Get Quote</button>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-green-50 to-blue-50 border border-gray-200 rounded-xl p-8">
          <div class="flex items-start space-x-4">
            <div class="bg-white p-3 rounded-lg">
              <i class="fas fa-cloud text-3xl text-primary"></i>
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-xl mb-2">Cloud Migration &amp; Management</h3>
              <p class="text-gray-700 mb-4">Seamlessly migrate your infrastructure to the cloud with zero downtime. AWS,
                Azure, and GCP certified experts.</p>
              <div class="space-y-2">
                <div class="flex items-center text-sm text-gray-600">
                  <i class="fas fa-check-circle text-green-500 mr-2"></i>
                  Infrastructure assessment and planning
                </div>
                <div class="flex items-center text-sm text-gray-600">
                  <i class="fas fa-check-circle text-green-500 mr-2"></i>
                  Zero-downtime migration strategy
                </div>
                <div class="flex items-center text-sm text-gray-600">
                  <i class="fas fa-check-circle text-green-500 mr-2"></i>
                  Ongoing cloud optimization and cost management
                </div>
              </div>
              <div class="flex items-center justify-between mt-4">
                <span class="text-primary font-semibold">Starting from $30,000</span>
                <button class="gradient-bg text-white px-6 py-2 rounded-lg">Get Quote</button>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-orange-50 to-red-50 border border-gray-200 rounded-xl p-8">
          <div class="flex items-start space-x-4">
            <div class="bg-white p-3 rounded-lg">
              <i class="fas fa-shield-alt text-3xl text-primary"></i>
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-xl mb-2">Cybersecurity Consulting</h3>
              <p class="text-gray-700 mb-4">Protect your business with comprehensive security audits, penetration
                testing, and compliance consulting.</p>
              <div class="space-y-2">
                <div class="flex items-center text-sm text-gray-600">
                  <i class="fas fa-check-circle text-green-500 mr-2"></i>
                  Security assessment and vulnerability testing
                </div>
                <div class="flex items-center text-sm text-gray-600">
                  <i class="fas fa-check-circle text-green-500 mr-2"></i>
                  Compliance framework implementation
                </div>
                <div class="flex items-center text-sm text-gray-600">
                  <i class="fas fa-check-circle text-green-500 mr-2"></i>
                  24/7 security monitoring and incident response
                </div>
              </div>
              <div class="flex items-center justify-between mt-4">
                <span class="text-primary font-semibold">Starting from $25,000</span>
                <button class="gradient-bg text-white px-6 py-2 rounded-lg">Get Quote</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="mt-16 text-center">
      <div class="gradient-bg rounded-2xl p-12">
        <h2 class="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
        <p class="text-white/90 text-lg mb-8">Let's discuss how our solutions can accelerate your digital transformation
          journey.</p>
      </div>
    </div>
  </div>
</section>
</body>
</html>
