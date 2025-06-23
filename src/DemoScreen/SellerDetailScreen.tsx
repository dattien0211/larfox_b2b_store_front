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
        .hero-mesh { background-image: radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(118, 75, 162, 0.1) 0%, transparent 50%); }
        .float-animation {animation: float 6s ease-in-out infinite;}
        @keyframes float {0 %, 100% {transform: translateY(0px);} 50% {transform: translateY(-10px);}}
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
      <div class="flex-1 max-w-2xl mx-8">
        <div class="relative">
          <input type="text" placeholder="Search box"
                 class="w-full px-6 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary pr-12">
            <i class="fas fa-search absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
        </div>
      </div>
      <div class="hidden lg:flex items-center space-x-6 text-sm font-medium">
        <span class="text-gray-700 hover:text-primary cursor-pointer">Language</span>
        <span class="text-gray-700 hover:text-primary cursor-pointer">Sign in</span>
        <span class="text-gray-700 hover:text-primary cursor-pointer">Sign up</span>
        <button class="gradient-bg text-white px-6 py-2 rounded-full hover:opacity-90 font-semibold">Get the app
        </button>
      </div>
    </div>
    <nav class="border-t border-gray-100 py-3">
      <div class="flex items-center space-x-8 text-sm font-medium overflow-x-auto">
        <span class="text-gray-700 hover:text-primary cursor-pointer whitespace-nowrap">All Categories</span>
        <span class="text-gray-700 hover:text-primary cursor-pointer whitespace-nowrap">AI Bidding/Selling Agent</span>
        <span class="text-gray-700 hover:text-primary cursor-pointer whitespace-nowrap">Financial Programs</span>
        <span class="text-gray-700 hover:text-primary cursor-pointer whitespace-nowrap">Daily News</span>
        <span class="text-gray-700 hover:text-primary cursor-pointer whitespace-nowrap">For Buyer</span>
        <span class="text-gray-700 hover:text-primary cursor-pointer whitespace-nowrap">For Supplier</span>
        <span class="text-gray-700 hover:text-primary cursor-pointer whitespace-nowrap">Help Center</span>
        <span class="text-gray-700 hover:text-primary cursor-pointer whitespace-nowrap">About Larfox</span>
      </div>
    </nav>
  </div>
</header>

<!-- Directory Section -->
<section id="directory" class="py-8 bg-gray-50 relative">
  <div class="container mx-auto px-4">
    <div class="flex items-center justify-between mb-6">
      <div class="flex space-x-6">
        <button class="px-6 py-2 bg-primary text-white rounded-full font-medium">Services</button>
        <button class="px-6 py-2 text-gray-600 hover:text-primary font-medium">Goods</button>
        <button class="px-6 py-2 text-gray-600 hover:text-primary font-medium">Suppliers</button>
        <button class="px-6 py-2 text-gray-600 hover:text-primary font-medium">Regions</button>
      </div>
    </div>

    <div class="flex gap-8">
      <!-- Sidebar Filters -->
      <div id="sidebar-filters" class="w-80 bg-white p-6 rounded-xl shadow-sm h-fit">
        <h3 class="font-semibold mb-4">Filters</h3>

        <div class="space-y-6">
          <div>
            <h4 class="font-medium mb-2">Categories</h4>
            <div class="space-y-2">
              <label class="flex items-center"><input type="checkbox" class="mr-2"> Technology</label>
              <label class="flex items-center"><input type="checkbox" class="mr-2"> Manufacturing</label>
              <label class="flex items-center"><input type="checkbox" class="mr-2"> Logistics</label>
            </div>
          </div>

          <div>
            <h4 class="font-medium mb-2">Verified Suppliers</h4>
            <label class="flex items-center"><input type="checkbox" class="mr-2"> Verified only</label>
          </div>

          <div>
            <h4 class="font-medium mb-2">Regions</h4>
            <select class="w-full p-2 border rounded">
              <option>All Regions</option>
              <option>Asia Pacific</option>
              <option>North America</option>
              <option>Europe</option>
            </select>
          </div>

          <div>
            <h4 class="font-medium mb-2">Recently Active</h4>
            <label class="flex items-center"><input type="checkbox" class="mr-2"> Last 7 days</label>
          </div>

          <div>
            <h4 class="font-medium mb-2">Experience</h4>
            <select class="w-full p-2 border rounded">
              <option>Any experience</option>
              <option>5+ years</option>
              <option>10+ years</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Supplier Cards -->
      <div class="flex-1">
        <div class="grid gap-4">
          <div class="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
            <div class="flex gap-4">
              <img class="w-20 h-20 rounded-lg object-cover"
                   src="https://storage.googleapis.com/uxpilot-auth.appspot.com/70c2ec516b-7d9ded3176c3830c89ef.png"
                   alt="modern technology company building">
                <div class="flex-1">
                  <div class="flex items-center justify-between mb-2">
                    <div class="flex items-center">
                      <h3 class="font-semibold text-lg">TechPro Solutions</h3>
                      <i class="fas fa-shield-check text-green-500 ml-2"></i>
                      <span class="text-sm text-gray-500 ml-2">Active 5 mins ago</span>
                    </div>
                  </div>
                  <p class="text-gray-600 mb-2">Singapore, Asia Pacific</p>
                  <div class="mb-3">
                    <span class="text-sm font-medium text-gray-700">Capabilities:</span>
                    <div class="flex flex-wrap gap-1 mt-1">
                      <span class="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Software Development</span>
                      <span class="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">AI Solutions</span>
                      <span class="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Cloud Services</span>
                    </div>
                  </div>
                  <div class="mb-4">
                    <span class="text-sm font-medium text-gray-700">Certifications:</span>
                    <div class="flex flex-wrap gap-1 mt-1">
                      <span class="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">ISO 27001</span>
                      <span class="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">SOC 2</span>
                    </div>
                  </div>
                  <div class="flex gap-3">
                    <button class="gradient-bg text-white px-4 py-2 rounded-lg text-sm hover:opacity-90">Contact
                      Supplier
                    </button>
                    <button class="border border-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-gray-50">
                      <i class="fas fa-eye"></i>
                    </button>
                  </div>
                </div>
            </div>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
            <div class="flex gap-4">
              <img class="w-20 h-20 rounded-lg object-cover"
                   src="https://storage.googleapis.com/uxpilot-auth.appspot.com/7881d9f9c8-fc7b39a07666aed261da.png"
                   alt="manufacturing facility industrial">
                <div class="flex-1">
                  <div class="flex items-center justify-between mb-2">
                    <div class="flex items-center">
                      <h3 class="font-semibold text-lg">Global Manufacturing Co.</h3>
                      <i class="fas fa-shield-check text-green-500 ml-2"></i>
                      <span class="text-sm text-gray-500 ml-2">Active 12 mins ago</span>
                    </div>
                  </div>
                  <p class="text-gray-600 mb-2">Shanghai, China</p>
                  <div class="mb-3">
                    <span class="text-sm font-medium text-gray-700">Capabilities:</span>
                    <div class="flex flex-wrap gap-1 mt-1">
                      <span class="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">CNC Machining</span>
                      <span class="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Injection Molding</span>
                      <span class="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Quality Control</span>
                    </div>
                  </div>
                  <div class="mb-4">
                    <span class="text-sm font-medium text-gray-700">Certifications:</span>
                    <div class="flex flex-wrap gap-1 mt-1">
                      <span class="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">ISO 9001</span>
                      <span class="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">TS 16949</span>
                    </div>
                  </div>
                  <div class="flex gap-3">
                    <button class="gradient-bg text-white px-4 py-2 rounded-lg text-sm hover:opacity-90">Contact
                      Supplier
                    </button>
                    <button class="border border-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-gray-50">
                      <i class="fas fa-eye"></i>
                    </button>
                  </div>
                </div>
            </div>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
            <div class="flex gap-4">
              <img class="w-20 h-20 rounded-lg object-cover"
                   src="https://storage.googleapis.com/uxpilot-auth.appspot.com/0703877279-b1ac71478aeb2dfc098f.png"
                   alt="logistics warehouse shipping">
                <div class="flex-1">
                  <div class="flex items-center justify-between mb-2">
                    <div class="flex items-center">
                      <h3 class="font-semibold text-lg">Swift Logistics Partners</h3>
                      <i class="fas fa-shield-check text-green-500 ml-2"></i>
                      <span class="text-sm text-gray-500 ml-2">Active 1 hour ago</span>
                    </div>
                  </div>
                  <p class="text-gray-600 mb-2">Los Angeles, USA</p>
                  <div class="mb-3">
                    <span class="text-sm font-medium text-gray-700">Capabilities:</span>
                    <div class="flex flex-wrap gap-1 mt-1">
                      <span class="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">International Shipping</span>
                      <span class="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Warehousing</span>
                      <span class="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Cold Chain</span>
                    </div>
                  </div>
                  <div class="mb-4">
                    <span class="text-sm font-medium text-gray-700">Certifications:</span>
                    <div class="flex flex-wrap gap-1 mt-1">
                      <span class="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">C-TPAT</span>
                      <span class="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">HACCP</span>
                    </div>
                  </div>
                  <div class="flex gap-3">
                    <button class="gradient-bg text-white px-4 py-2 rounded-lg text-sm hover:opacity-90">Contact
                      Supplier
                    </button>
                    <button class="border border-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-gray-50">
                      <i class="fas fa-eye"></i>
                    </button>
                  </div>
                </div>
            </div>
          </div>
        </div>

        <div class="flex justify-center mt-8">
          <div class="flex space-x-2">
            <button class="px-3 py-2 border rounded hover:bg-gray-50">1</button>
            <button class="px-3 py-2 bg-primary text-white rounded">2</button>
            <button class="px-3 py-2 border rounded hover:bg-gray-50">3</button>
            <button class="px-3 py-2 border rounded hover:bg-gray-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- AI Agent Pop-out -->
  <div class="absolute right-8 top-20 float-animation">
    <div class="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs">
      <div class="flex items-center mb-3">
        <div class="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
        <span class="text-sm font-medium">AI Agent</span>
      </div>
      <p class="text-sm text-gray-600">Need help finding the right suppliers? I can match you with verified partners
        based on your requirements.</p>
      <button class="mt-3 gradient-bg text-white px-4 py-2 rounded-lg text-sm w-full">Start Matching</button>
    </div>
  </div>
</section>

<!-- News Section -->
<section id="news" class="py-16 bg-white">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-light text-center mb-4">Customized <span
      class="gradient-text font-medium">Business News</span></h2>
    <p class="text-center text-gray-600 mb-12">Quick start everyday with news summary from our AI agent</p>
    <div class="grid md:grid-cols-5 gap-6">
      <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
        <i class="fas fa-university text-3xl text-blue-600 mb-4"></i>
        <h3 class="font-semibold mb-3">Government Policy Highlights</h3>
        <p class="text-sm text-gray-700 mb-4">New trade regulations affecting B2B commerce in Southeast Asia...</p>
        <span class="text-xs text-blue-600 font-medium">Policy Update</span>
      </div>
      <div class="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
        <i class="fas fa-chart-line text-3xl text-green-600 mb-4"></i>
        <h3 class="font-semibold mb-3">Financial News Highlights</h3>
        <p class="text-sm text-gray-700 mb-4">Interest rates impact on supply chain financing options...</p>
        <span class="text-xs text-green-600 font-medium">Financial Times</span>
      </div>
      <div class="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl">
        <i class="fas fa-lightbulb text-3xl text-yellow-600 mb-4"></i>
        <h3 class="font-semibold mb-3">Business Opportunities</h3>
        <p class="text-sm text-gray-700 mb-4">Emerging markets showing increased demand for tech services...</p>
        <span class="text-xs text-yellow-600 font-medium">Market Research</span>
      </div>
      <div class="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
        <i class="fas fa-trending-up text-3xl text-purple-600 mb-4"></i>
        <h3 class="font-semibold mb-3">Social Trends</h3>
        <p class="text-sm text-gray-700 mb-4">Sustainability requirements driving supplier selection...</p>
        <span class="text-xs text-purple-600 font-medium">Trend Analysis</span>
      </div>
      <div class="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl">
        <i class="fas fa-handshake text-3xl text-red-600 mb-4"></i>
        <h3 class="font-semibold mb-3">M&amp;A News</h3>
        <p class="text-sm text-gray-700 mb-4">Major logistics companies announce strategic partnerships...</p>
        <span class="text-xs text-red-600 font-medium">Business Wire</span>
      </div>
    </div>
  </div>
</section>

<!-- Footer -->
<footer id="footer" class="bg-gray-900 text-white py-12">
  <div class="container mx-auto px-4">
    <div class="grid md:grid-cols-4 gap-8 mb-8">
      <div>
        <h4 class="font-semibold mb-4">Policies and Rules</h4>
        <ul class="space-y-2 text-gray-400">
          <li><span class="hover:text-white cursor-pointer">Privacy Policy</span></li>
          <li><span class="hover:text-white cursor-pointer">User Guidelines</span></li>
          <li><span class="hover:text-white cursor-pointer">Community Standards</span></li>
        </ul>
      </div>
      <div>
        <h4 class="font-semibold mb-4">Terms of Use</h4>
        <ul class="space-y-2 text-gray-400">
          <li><span class="hover:text-white cursor-pointer">Service Agreement</span></li>
          <li><span class="hover:text-white cursor-pointer">Acceptable Use</span></li>
          <li><span class="hover:text-white cursor-pointer">Account Terms</span></li>
        </ul>
      </div>
      <div>
        <h4 class="font-semibold mb-4">Legal Terms</h4>
        <ul class="space-y-2 text-gray-400">
          <li><span class="hover:text-white cursor-pointer">Liability</span></li>
          <li><span class="hover:text-white cursor-pointer">Disputes</span></li>
          <li><span class="hover:text-white cursor-pointer">Intellectual Property</span></li>
        </ul>
      </div>
      <div>
        <h4 class="font-semibold mb-4">Help Center</h4>
        <ul class="space-y-2 text-gray-400">
          <li><span class="hover:text-white cursor-pointer">Contact Support</span></li>
          <li><span class="hover:text-white cursor-pointer">FAQ</span></li>
        </ul>
      </div>
    </div>
  </div>
</footer>
</body>
</html>
