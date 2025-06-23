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
        .gradient-bg {background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);}
        .hero-mesh {background - image: radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(118, 75, 162, 0.1) 0%, transparent 50%);}
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
      <div class="flex items-center">
        <div class="text-3xl font-bold gradient-text mr-2">LARFOX</div>
        <span class="text-lg font-medium text-gray-700">.COM</span>
      </div>
      <div class="hidden lg:flex items-center space-x-8 text-sm font-medium">
        <span class="text-gray-700 hover:text-primary cursor-pointer">Language</span>
        <span class="text-gray-700 hover:text-primary cursor-pointer">Sign in</span>
        <button class="gradient-bg text-white px-6 py-2 rounded-full hover:opacity-90">Sign up</button>
        <button class="border border-primary text-primary px-6 py-2 rounded-full hover:bg-primary hover:text-white">Get
          the app
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

<!-- Hero Section -->
<section id="hero" class="relative hero-mesh h-[600px] flex items-center overflow-hidden">
  <div class="container mx-auto px-4 relative z-10">
    <div class="max-w-4xl">
      <div class="text-sm text-gray-600 mb-2">Connecting 5 continents</div>
      <h1 class="text-6xl font-extralight mb-6 leading-tight">Easy-to-use <span class="gradient-text font-medium">B2B Commerce Platform</span> for
        both services and goods</h1>
      <div class="flex max-w-2xl mb-8">
        <input type="text" placeholder="Search products, services..."
               class="flex-1 px-6 py-4 rounded-l-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary">
          <button class="gradient-bg px-8 py-4 rounded-r-full hover:opacity-90">
            <i class="fas fa-search text-white"></i>
          </button>
      </div>
    </div>
  </div>
  <div class="absolute right-8 top-1/2 transform -translate-y-1/2 float-animation">
    <div class="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs">
      <div class="flex items-center mb-3">
        <div class="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
        <span class="text-sm font-medium">AI Agent</span>
      </div>
      <p class="text-sm text-gray-600">How can I help you find the perfect business partner today?</p>
      <div class="mt-4 flex space-x-2">
        <div class="w-2 h-2 bg-gray-300 rounded-full animate-pulse"></div>
        <div class="w-2 h-2 bg-gray-300 rounded-full animate-pulse" style="animation-delay: 0.2s"></div>
        <div class="w-2 h-2 bg-gray-300 rounded-full animate-pulse" style="animation-delay: 0.4s"></div>
      </div>
    </div>
  </div>
</section>

<!-- Future Section -->
<section id="future" class="py-20 bg-white">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-light text-center mb-16">The future of <span class="gradient-text font-medium">B2B is here now</span>
    </h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div class="text-center group">
        <div
          class="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
          <i class="fas fa-shield-alt text-2xl text-white"></i>
        </div>
        <h3 class="text-xl font-semibold mb-4">Secure Financial Programs</h3>
        <p class="text-gray-600 text-sm leading-relaxed">Transact with confidence using our secure and reliable
          financial programs backed by trusted banks</p>
      </div>
      <div class="text-center group">
        <div
          class="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
          <i class="fas fa-robot text-2xl text-white"></i>
        </div>
        <h3 class="text-xl font-semibold mb-4">The 1st AI Bidding/Selling Agent</h3>
        <p class="text-gray-600 text-sm leading-relaxed">Find the best total value partners effortlessly fast with our
          1st ever AI bidding/selling with culture matching solutions</p>
      </div>
      <div class="text-center group">
        <div
          class="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
          <i class="fas fa-tools text-2xl text-white"></i>
        </div>
        <h3 class="text-xl font-semibold mb-4">Very Simple Tool</h3>
        <p class="text-gray-600 text-sm leading-relaxed">Require no public price listing, this is B2B services and goods
          commerce on digitalized environment</p>
      </div>
      <div class="text-center group">
        <div
          class="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
          <i class="fas fa-newspaper text-2xl text-white"></i>
        </div>
        <h3 class="text-xl font-semibold mb-4">The 1st Business News AI Agent</h3>
        <p class="text-gray-600 text-sm leading-relaxed">Get top 5 customized business news impacting your business
          daily from our AI agent</p>
      </div>
    </div>
  </div>
</section>

<!-- Explore Section -->
<section id="explore" class="py-20 bg-white">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-light text-center mb-16">Explore <span class="gradient-text font-medium">services and goods sellers</span>
    </h2>
    <div class="relative">
      <button id="prevBtn"
              class="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-gray-200 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-300">
        <i class="fas fa-chevron-left text-gray-600"></i>
      </button>
      <button id="nextBtn"
              class="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-gray-200 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-300">
        <i class="fas fa-chevron-right text-gray-600"></i>
      </button>
      <div class="overflow-hidden">
        <div id="categorySlider" class="transition-transform duration-300 ease-in-out">
          <div class="space-y-8">
            <div class="grid grid-cols-4 md:grid-cols-8 gap-4">
              <div
                class="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-200 hover:border-primary">
                <i class="fas fa-laptop-code text-2xl text-primary mb-3"></i>
                <p class="text-sm font-medium text-gray-800">Technology Outsourcing</p>
              </div>
              <div
                class="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-200 hover:border-primary">
                <i class="fas fa-cog text-2xl text-secondary mb-3"></i>
                <p class="text-sm font-medium text-gray-800">Spare Parts</p>
              </div>
              <div
                class="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-200 hover:border-primary">
                <i class="fas fa-microscope text-2xl text-primary mb-3"></i>
                <p class="text-sm font-medium text-gray-800">Clean Room</p>
              </div>
              <div
                class="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-200 hover:border-primary">
                <i class="fas fa-robot text-2xl text-secondary mb-3"></i>
                <p class="text-sm font-medium text-gray-800">Automation</p>
              </div>
              <div
                class="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-200 hover:border-primary">
                <i class="fas fa-bolt text-2xl text-primary mb-3"></i>
                <p class="text-sm font-medium text-gray-800">ESD</p>
              </div>
              <div
                class="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-200 hover:border-primary">
                <i class="fas fa-bullhorn text-2xl text-secondary mb-3"></i>
                <p class="text-sm font-medium text-gray-800">Marketing</p>
              </div>
              <div
                class="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-200 hover:border-primary">
                <i class="fas fa-shipping-fast text-2xl text-primary mb-3"></i>
                <p class="text-sm font-medium text-gray-800">Logistics</p>
              </div>
              <div
                class="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-200 hover:border-primary">
                <i class="fas fa-seedling text-2xl text-secondary mb-3"></i>
                <p class="text-sm font-medium text-gray-800">Agriculture</p>
              </div>
            </div>
            <div class="grid grid-cols-4 md:grid-cols-8 gap-4">
              <div
                class="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-200 hover:border-primary">
                <i class="fas fa-couch text-2xl text-primary mb-3"></i>
                <p class="text-sm font-medium text-gray-800">Furniture</p>
              </div>
              <div
                class="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-200 hover:border-primary">
                <i class="fas fa-tshirt text-2xl text-secondary mb-3"></i>
                <p class="text-sm font-medium text-gray-800">Textiles</p>
              </div>
              <div
                class="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-200 hover:border-primary">
                <i class="fas fa-gem text-2xl text-primary mb-3"></i>
                <p class="text-sm font-medium text-gray-800">Jewelry</p>
              </div>
              <div
                class="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-200 hover:border-primary">
                <i class="fas fa-utensils text-2xl text-secondary mb-3"></i>
                <p class="text-sm font-medium text-gray-800">Food</p>
              </div>
              <div
                class="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-200 hover:border-primary">
                <i class="fas fa-wine-bottle text-2xl text-primary mb-3"></i>
                <p class="text-sm font-medium text-gray-800">Beverages</p>
              </div>
              <div
                class="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-200 hover:border-primary">
                <i class="fas fa-heartbeat text-2xl text-secondary mb-3"></i>
                <p class="text-sm font-medium text-gray-800">Medical Services</p>
              </div>
              <div
                class="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-200 hover:border-primary">
                <i class="fas fa-plane text-2xl text-primary mb-3"></i>
                <p class="text-sm font-medium text-gray-800">Travel</p>
              </div>
              <div
                class="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-200 hover:border-primary">
                <i class="fas fa-calendar-alt text-2xl text-secondary mb-3"></i>
                <p class="text-sm font-medium text-gray-800">Event</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Finance Section -->
<section id="finance" class="py-20 bg-gray-800 text-white">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-light text-center mb-16">Protect your <span
      class="gradient-text font-medium">transaction</span> and improve your <span
      class="gradient-text font-medium">cashflow</span></h2>
    <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <div class="bg-gradient-to-br from-gray-700 to-gray-800 p-8 rounded-2xl border border-gray-600">
        <div class="flex items-center mb-6">
          <i class="fas fa-shield-alt text-3xl text-emerald-400 mr-4"></i>
          <h3 class="text-2xl font-semibold">Escrow</h3>
        </div>
        <p class="text-gray-300">No service fee, Buyers get deposit interest rate</p>
      </div>
      <div class="bg-gradient-to-br from-gray-700 to-gray-800 p-8 rounded-2xl border border-gray-600">
        <div class="flex items-center mb-6">
          <i class="fas fa-chart-line text-3xl text-blue-400 mr-4"></i>
          <h3 class="text-2xl font-semibold">Supply Chain Finance</h3>
        </div>
        <p class="text-gray-300">Under favorable financing fee, Sellers get payment earlier than payment term</p>
      </div>
    </div>
  </div>
</section>

<!-- Process Section -->
<section id="process" class="py-20 bg-gray-50">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-light text-center mb-16"><span class="gradient-text font-medium">Seamless</span> process
    </h2>
    <div class="space-y-12">
      <div class="bg-white p-8 rounded-2xl shadow-sm">
        <h3 class="text-2xl font-semibold mb-8 text-center">Source-to-Pay on Larfox</h3>
        <div class="grid md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="font-bold text-white text-xl">1</span>
            </div>
            <h4 class="font-semibold mb-3">Prompt business need</h4>
            <p class="text-sm text-gray-600">Mô tả nhu cầu kinh doanh rõ ràng với sự trợ giúp của AI Agent</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="font-bold text-white text-xl">2</span>
            </div>
            <h4 class="font-semibold mb-3">Xác nhận AI Agent đấu thầu</h4>
            <p class="text-sm text-gray-600">Xác nhận danh sách nhà cung cấp phù hợp, điều khoản và điều kiện</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="font-bold text-white text-xl">3</span>
            </div>
            <h4 class="font-semibold mb-3">Thiết lập thanh toán</h4>
            <p class="text-sm text-gray-600">Xác nhận điều khoản thanh toán và chương trình tài chính</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="font-bold text-white text-xl">4</span>
            </div>
            <h4 class="font-semibold mb-3">Hoàn thành và đánh giá</h4>
            <p class="text-sm text-gray-600">Xác nhận chất lượng hàng hóa/dịch vụ và đánh giá nhà cung cấp</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- News Section -->
<section id="news" class="py-16 bg-white">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-12">Tin tức kinh doanh tùy chỉnh</h2>
    <p class="text-center text-gray-600 mb-8">Bắt đầu nhanh chóng mỗi ngày với bản tóm tắt tin tức từ AI agent của chúng
      tôi</p>
    <div class="grid md:grid-cols-5 gap-4 mb-8">
      <div class="bg-blue-100 p-4 rounded-lg text-center">
        <i class="fas fa-university text-2xl text-blue-600 mb-2"></i>
        <p class="font-medium">Chính sách chính phủ</p>
      </div>
      <div class="bg-green-100 p-4 rounded-lg text-center">
        <i class="fas fa-chart-line text-2xl text-green-600 mb-2"></i>
        <p class="font-medium">Tin tức tài chính</p>
      </div>
      <div class="bg-yellow-100 p-4 rounded-lg text-center">
        <i class="fas fa-lightbulb text-2xl text-yellow-600 mb-2"></i>
        <p class="font-medium">Cơ hội kinh doanh</p>
      </div>
      <div class="bg-purple-100 p-4 rounded-lg text-center">
        <i class="fas fa-trending-up text-2xl text-purple-600 mb-2"></i>
        <p class="font-medium">Xu hướng xã hội</p>
      </div>
      <div class="bg-red-100 p-4 rounded-lg text-center">
        <i class="fas fa-handshake text-2xl text-red-600 mb-2"></i>
        <p class="font-medium">Tin tức M&amp;A</p>
      </div>
    </div>
  </div>
</section>

<!-- About Section -->
<section id="about" class="py-16 bg-gray-100">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-12">Về Larfox</h2>
    <div class="grid md:grid-cols-3 gap-8">
      <div class="bg-white p-8 rounded-xl text-center">
        <i class="fas fa-bullseye text-4xl text-blue-600 mb-4"></i>
        <h3 class="text-xl font-bold mb-4">Sứ mệnh &amp; Mục đích</h3>
        <p class="text-gray-600">Kết nối doanh nghiệp toàn cầu thông qua nền tảng thương mại điện tử B2B tiên tiến</p>
      </div>
      <div class="bg-white p-8 rounded-xl text-center">
        <i class="fas fa-heart text-4xl text-red-600 mb-4"></i>
        <h3 class="text-xl font-bold mb-4">Giá trị &amp; Cam kết</h3>
        <p class="text-gray-600">Cam kết mang lại giá trị tối đa cho khách hàng với sự tin cậy và chất lượng dịch vụ</p>
      </div>
      <div class="bg-white p-8 rounded-xl text-center">
        <i class="fas fa-users text-4xl text-green-600 mb-4"></i>
        <h3 class="text-xl font-bold mb-4">Nghề nghiệp tại Larfox</h3>
        <p class="text-gray-600">Tham gia đội ngũ chuyên nghiệp và phát triển sự nghiệp trong môi trường công nghệ hiện
          đại</p>
      </div>
    </div>
  </div>
</section>

<!-- Footer -->
<footer id="footer" class="bg-gray-800 text-white py-12">
  <div class="container mx-auto px-4">
    <div class="flex flex-col items-center justify-center mb-8">
      <div class="mb-6">
        <svg class="w-64 h-20" viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="logoGradientFooter" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style="stop-color:#667eea;stop-opacity:1"></stop>
              <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1"></stop>
            </linearGradient>
          </defs>
          <!-- L -->
          <rect x="40" y="40" width="8" height="120" fill="url(#logoGradientFooter)"></rect>
          <rect x="40" y="152" width="60" height="8" fill="url(#logoGradientFooter)"></rect>
          <rect x="48" y="48" width="44" height="8" fill="none" stroke="url(#logoGradientFooter)"
                stroke-width="2"></rect>
          <rect x="48" y="56" width="36" height="8" fill="none" stroke="url(#logoGradientFooter)"
                stroke-width="2"></rect>
          <rect x="48" y="64" width="28" height="8" fill="none" stroke="url(#logoGradientFooter)"
                stroke-width="2"></rect>

          <!-- A -->
          <polygon points="140,160 160,40 180,40 200,160 192,160 188,140 152,140 148,160"
                   fill="url(#logoGradientFooter)"></polygon>
          <rect x="156" y="110" width="28" height="8" fill="white"></rect>
          <polygon points="164,48 156,88 184,88 176,48" fill="none" stroke="url(#logoGradientFooter)"
                   stroke-width="2"></polygon>

          <!-- R -->
          <rect x="240" y="40" width="8" height="120" fill="url(#logoGradientFooter)"></rect>
          <path d="M248 40 L248 100 L288 100 Q308 100 308 70 Q308 40 288 40 Z" fill="url(#logoGradientFooter)"></path>
          <line x1="248" y1="100" x2="308" y2="160" stroke="url(#logoGradientFooter)" stroke-width="8"></line>
          <rect x="256" y="48" width="24" height="8" fill="none" stroke="url(#logoGradientFooter)"
                stroke-width="2"></rect>
          <rect x="256" y="56" width="20" height="8" fill="none" stroke="url(#logoGradientFooter)"
                stroke-width="2"></rect>

          <!-- F -->
          <rect x="340" y="40" width="8" height="120" fill="url(#logoGradientFooter)"></rect>
          <rect x="348" y="40" width="50" height="8" fill="url(#logoGradientFooter)"></rect>
          <rect x="348" y="95" width="40" height="8" fill="url(#logoGradientFooter)"></rect>
          <rect x="356" y="48" width="34" height="8" fill="none" stroke="url(#logoGradientFooter)"
                stroke-width="2"></rect>
          <rect x="356" y="56" width="26" height="8" fill="none" stroke="url(#logoGradientFooter)"
                stroke-width="2"></rect>

          <!-- O -->
          <circle cx="460" cy="100" r="60" fill="none" stroke="url(#logoGradientFooter)" stroke-width="8"></circle>
          <circle cx="460" cy="100" r="44" fill="none" stroke="url(#logoGradientFooter)" stroke-width="2"></circle>
          <circle cx="460" cy="100" r="36" fill="none" stroke="url(#logoGradientFooter)" stroke-width="2"></circle>
          <circle cx="460" cy="100" r="28" fill="none" stroke="url(#logoGradientFooter)" stroke-width="2"></circle>
          <circle cx="460" cy="100" r="20" fill="none" stroke="url(#logoGradientFooter)" stroke-width="2"></circle>

          <!-- X -->
          <line x1="560" y1="40" x2="640" y2="160" stroke="url(#logoGradientFooter)" stroke-width="8"></line>
          <line x1="640" y1="40" x2="560" y2="160" stroke="url(#logoGradientFooter)" stroke-width="8"></line>
          <line x1="572" y1="52" x2="628" y2="148" stroke="url(#logoGradientFooter)" stroke-width="2"></line>
          <line x1="628" y1="52" x2="572" y2="148" stroke="url(#logoGradientFooter)" stroke-width="2"></line>
          <line x1="584" y1="64" x2="616" y2="136" stroke="url(#logoGradientFooter)" stroke-width="2"></line>
          <line x1="616" y1="64" x2="584" y2="136" stroke="url(#logoGradientFooter)" stroke-width="2"></line>
        </svg>
      </div>
      <div class="text-center">
        <div class="text-3xl font-bold mb-2">LARFOX.COM</div>
        <p class="text-gray-400">Easy-to-use B2B Commerce Platform for both services and goods</p>
      </div>
    </div>

    <div class="grid md:grid-cols-4 gap-8">
      <div>
        <h4 class="font-bold mb-4">Policies and Rules</h4>
        <ul class="space-y-2 text-gray-400">
          <li><span class="hover:text-white cursor-pointer">Privacy Policy</span></li>
          <li><span class="hover:text-white cursor-pointer">Terms of Service</span></li>
          <li><span class="hover:text-white cursor-pointer">Community Guidelines</span></li>
        </ul>
      </div>
      <div>
        <h4 class="font-bold mb-4">Terms of Use</h4>
        <ul class="space-y-2 text-gray-400">
          <li><span class="hover:text-white cursor-pointer">User Agreement</span></li>
          <li><span class="hover:text-white cursor-pointer">Service Terms</span></li>
          <li><span class="hover:text-white cursor-pointer">Payment Terms</span></li>
        </ul>
      </div>
      <div>
        <h4 class="font-bold mb-4">Legal Terms</h4>
        <ul class="space-y-2 text-gray-400">
          <li><span class="hover:text-white cursor-pointer">Legal Notice</span></li>
          <li><span class="hover:text-white cursor-pointer">Disclaimer</span></li>
          <li><span class="hover:text-white cursor-pointer">Compliance</span></li>
        </ul>
      </div>
      <div>
        <h4 class="font-bold mb-4">Help Center</h4>
        <ul class="space-y-2 text-gray-400">
          <li><span class="hover:text-white cursor-pointer">Support</span></li>
          <li><span class="hover:text-white cursor-pointer">Contact Us</span></li>
          <li><span class="hover:text-white cursor-pointer">FAQ</span></li>
        </ul>
      </div>
    </div>

    <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
      <p>© 2024 Larfox.com. All rights reserved.</p>
    </div>
  </div>
</footer>

<script>
  let currentSlide = 0;
  const slider = document.getElementById('categorySlider');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const totalSlides = 2;

  prevBtn.addEventListener('click', () => {
  currentSlide = currentSlide > 0 ? currentSlide - 1 : totalSlides - 1;
  updateSlider();
});

  nextBtn.addEventListener('click', () => {
  currentSlide = currentSlide < totalSlides - 1 ? currentSlide + 1 : 0;
  updateSlider();
});

  function updateSlider() {
  slider.style.transform = `translateY(-${currentSlide * 50}%)`;
}
</script>


</body>
</html>
