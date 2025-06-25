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
        .marquee { animation: marquee 20s linear infinite; }
        @keyframes marquee { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } }
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

<!-- Supplier Summary Bar -->
<section id="supplier-summary" class="bg-gray-50 py-6">
  <div class="container mx-auto px-4">
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-6">
        <img class="w-16 h-16 rounded-lg object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/70c2ec516b-7d9ded3176c3830c89ef.png" alt="TechPro Solutions logo">
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
        <button class="tab-btn px-4 py-2 text-primary border-b-2 border-primary font-medium" onclick="showTab('home')">Home</button>
        <button class="tab-btn px-4 py-2 text-gray-600 hover:text-primary" onclick="showTab('goods')">Goods/Services</button>
        <button class="tab-btn px-4 py-2 text-gray-600 hover:text-primary" onclick="showTab('news')">News</button>
        <button class="tab-btn px-4 py-2 text-gray-600 hover:text-primary" onclick="showTab('contact')">Contact</button>
        <button class="tab-btn px-4 py-2 gradient-bg text-white rounded-lg" onclick="toggleChat()">Chat now</button>
      </nav>
    </div>
    <div class="mb-6">
      <img class="w-full h-64 rounded-xl object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/bfd5c2ff67-d4fe17ba76354bb15154.png" alt="modern technology company office building with glass facade and digital displays">
    </div>
  </div>

  <!-- AI Agent Pop-out -->
  <div class="absolute right-8 top-20 float-animation">
    <div class="bg-white p-4 rounded-2xl shadow-xl border border-gray-100 max-w-xs">
      <div class="flex items-center mb-2">
        <div class="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
        <span class="text-sm font-medium">AI Agent</span>
      </div>
      <p class="text-sm text-gray-600 mb-3">Quick questions about TechPro Solutions?</p>
      <button class="gradient-bg text-white px-4 py-1 rounded-lg text-sm w-full">Ask AI</button>
    </div>
  </div>
</section>

<!-- Company Overview -->
<section id="company-overview" class="py-12">
  <div class="container mx-auto px-4">
    <div class="grid lg:grid-cols-2 gap-12">
      <div class="space-y-6">
        <div class="grid grid-cols-2 gap-4">
          <img class="w-full h-40 rounded-lg object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/2fbf94c9e1-a8537556d41b782dd0dc.png" alt="modern tech office workspace with employees collaborating">
            <img class="w-full h-40 rounded-lg object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/30d734b0ae-4898564a831f71a274b0.png" alt="high-tech server room with blue lighting">
              <img class="w-full h-40 rounded-lg object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/391b4efbbd-27751d01e1cc4382ff58.png" alt="software development team coding on multiple monitors">
                <img class="w-full h-40 rounded-lg object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/8e5deaf89c-59f67bd44e48ea464761.png" alt="modern conference room with video call setup">
        </div>
      </div>
      <div>
        <h2 class="text-3xl font-bold mb-4">TechPro Solutions <span class="text-gray-500 text-xl">(Founded 2015)</span></h2>
        <p class="text-lg text-gray-700 mb-4">Leading provider of innovative technology solutions for global enterprises.</p>
        <div class="bg-green-50 border border-green-200 rounded-lg p-3 mb-6">
          <span class="text-green-700 font-medium">Avg response time: 15 minutes</span>
        </div>
        <div class="space-y-4">
          <p class="text-gray-700">With over 8 years of experience in the technology sector, TechPro Solutions specializes in delivering cutting-edge software development, AI solutions, and cloud services to Fortune 500 companies worldwide.</p>
          <div>
            <h3 class="font-semibold mb-2">Top 3 Competitive Advantages:</h3>
            <ul class="list-disc list-inside space-y-1 text-gray-700">
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

<!-- Goods Listing -->
<section id="goods-listing" class="py-12 bg-gray-50">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold mb-8">Our <span class="gradient-text">Products</span></h2>
    <div class="grid md:grid-cols-4 gap-6">
      <div class="bg-white p-4 rounded-lg shadow-sm">
        <img class="w-full h-32 rounded-lg object-cover mb-3" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/7ab3460e4c-c1e21866660c3accb069.png" alt="enterprise software dashboard interface">
          <h3 class="font-medium">Enterprise Software</h3>
      </div>
      <div class="bg-white p-4 rounded-lg shadow-sm">
        <img class="w-full h-32 rounded-lg object-cover mb-3" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/366d0af397-2c33fcfa4407b188a22b.png" alt="AI artificial intelligence neural network visualization">
          <h3 class="font-medium">AI Solutions</h3>
      </div>
      <div class="bg-white p-4 rounded-lg shadow-sm">
        <img class="w-full h-32 rounded-lg object-cover mb-3" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/eabac82177-878ee7ac43a00ff9da96.png" alt="cloud computing servers in data center">
          <h3 class="font-medium">Cloud Platforms</h3>
      </div>
      <div class="bg-white p-4 rounded-lg shadow-sm">
        <img class="w-full h-32 rounded-lg object-cover mb-3" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/582c47ac7f-80a63ca0cc0963596508.png" alt="mobile app development coding screen">
          <h3 class="font-medium">Mobile Apps</h3>
      </div>
    </div>
  </div>
</section>

<!-- Services Listing -->
<section id="services-listing" class="py-12">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold mb-8">Our <span class="gradient-text">Services</span></h2>
    <div class="grid md:grid-cols-3 gap-6">
      <div class="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
        <i class="fas fa-code text-3xl text-primary"></i>
        <span class="font-medium">Custom Software Development</span>
      </div>
      <div class="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
        <i class="fas fa-robot text-3xl text-primary"></i>
        <span class="font-medium">AI &amp; Machine Learning</span>
      </div>
      <div class="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
        <i class="fas fa-cloud text-3xl text-primary"></i>
        <span class="font-medium">Cloud Migration</span>
      </div>
      <div class="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
        <i class="fas fa-mobile-alt text-3xl text-primary"></i>
        <span class="font-medium">Mobile Development</span>
      </div>
      <div class="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
        <i class="fas fa-shield-alt text-3xl text-primary"></i>
        <span class="font-medium">Cybersecurity</span>
      </div>
      <div class="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
        <i class="fas fa-headset text-3xl text-primary"></i>
        <span class="font-medium">24/7 Support</span>
      </div>
    </div>
  </div>
</section>

<!-- Clients & Logos -->
<section id="clients" class="py-12 bg-gray-50">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-8">Trusted by <span class="gradient-text">Leading Companies</span></h2>
    <div class="overflow-hidden">
      <div class="flex space-x-12 marquee">
        <img class="h-12 object-contain grayscale hover:grayscale-0 transition-all" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/a82f8fe53b-6e70df87c543b4a80995.png" alt="Microsoft company logo">
          <img class="h-12 object-contain grayscale hover:grayscale-0 transition-all" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/7bf692ff59-860a0fd00ac74c0fe67e.png" alt="Google company logo">
            <img class="h-12 object-contain grayscale hover:grayscale-0 transition-all" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/6f4ac3d119-11364877653808da73c6.png" alt="Amazon company logo">
              <img class="h-12 object-contain grayscale hover:grayscale-0 transition-all" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/8f37f1d0e4-e76018d8d3c2e1fd06c9.png" alt="IBM company logo">
                <img class="h-12 object-contain grayscale hover:grayscale-0 transition-all" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/afa6dbea18-a17946f4d1d40750bd10.png" alt="Oracle company logo">
                  <img class="h-12 object-contain grayscale hover:grayscale-0 transition-all" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/0f4e54031a-88c77bd6b5de62fddc79.png" alt="Salesforce company logo">
      </div>
    </div>
  </div>
</section>

<!-- Capabilities -->
<section id="capabilities" class="py-12">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold mb-8">Core <span class="gradient-text">Capabilities</span></h2>
    <div class="grid md:grid-cols-4 gap-6">
      <div class="text-center p-4">
        <i class="fas fa-cogs text-4xl text-primary mb-3"></i>
        <span class="font-medium">DevOps</span>
      </div>
      <div class="text-center p-4">
        <i class="fas fa-database text-4xl text-primary mb-3"></i>
        <span class="font-medium">Big Data</span>
      </div>
      <div class="text-center p-4">
        <i class="fas fa-chart-line text-4xl text-primary mb-3"></i>
        <span class="font-medium">Analytics</span>
      </div>
      <div class="text-center p-4">
        <i class="fas fa-network-wired text-4xl text-primary mb-3"></i>
        <span class="font-medium">IoT</span>
      </div>
    </div>
  </div>
</section>

<!-- Certifications -->
<section id="certifications" class="py-12 bg-gray-50">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold mb-8">Our <span class="gradient-text">Certifications</span></h2>
    <div class="grid md:grid-cols-4 gap-6">
      <div class="bg-white p-6 rounded-lg text-center">
        <img class="w-20 h-20 mx-auto mb-3 object-contain" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/fa15fb3620-222210d0ad09aea2a36a.png" alt="ISO 27001 certification badge">
          <span class="font-medium">ISO 27001</span>
      </div>
      <div class="bg-white p-6 rounded-lg text-center">
        <img class="w-20 h-20 mx-auto mb-3 object-contain" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/04d078867a-d8422c041d31e30789ac.png" alt="SOC 2 compliance certificate">
          <span class="font-medium">SOC 2</span>
      </div>
      <div class="bg-white p-6 rounded-lg text-center">
        <img class="w-20 h-20 mx-auto mb-3 object-contain" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/a2f53ee49f-164b9cf4f26dc0b16204.png" alt="AWS partner certification logo">
          <span class="font-medium">AWS Partner</span>
      </div>
      <div class="bg-white p-6 rounded-lg text-center">
        <img class="w-20 h-20 mx-auto mb-3 object-contain" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/e4dbc02a6a-a988aab8f4ca6a2ae30c.png" alt="Microsoft Azure certified partner badge">
          <span class="font-medium">Azure Certified</span>
      </div>
    </div>
  </div>
</section>

<!-- Company Culture -->
<section id="culture" class="py-12">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold mb-8">Company <span class="gradient-text">Culture</span></h2>
    <div class="grid md:grid-cols-3 gap-6">
      <div class="text-center p-6">
        <i class="fas fa-users text-4xl text-primary mb-4"></i>
        <h3 class="font-semibold mb-2">Collaborative</h3>
        <p class="text-gray-600">Team-first approach</p>
      </div>
      <div class="text-center p-6">
        <i class="fas fa-lightbulb text-4xl text-primary mb-4"></i>
        <h3 class="font-semibold mb-2">Innovative</h3>
        <p class="text-gray-600">Cutting-edge solutions</p>
      </div>
      <div class="text-center p-6">
        <i class="fas fa-leaf text-4xl text-primary mb-4"></i>
        <h3 class="font-semibold mb-2">Sustainable</h3>
        <p class="text-gray-600">Environmental responsibility</p>
      </div>
    </div>
  </div>
</section>

<!-- Awards -->
<section id="awards" class="py-12 bg-gray-50">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold mb-8">Recognition &amp; <span class="gradient-text">Awards</span></h2>
    <div class="grid md:grid-cols-3 gap-6">
      <div class="bg-white p-6 rounded-lg text-center">
        <img class="w-16 h-16 mx-auto mb-3 object-contain" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/4c9a889949-905c0bf07843966c5e03.png" alt="tech innovation award trophy">
          <h3 class="font-semibold">Tech Innovation Award 2023</h3>
      </div>
      <div class="bg-white p-6 rounded-lg text-center">
        <img class="w-16 h-16 mx-auto mb-3 object-contain" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/25f7bb2e7d-5d4d45a0c8331d4ab25a.png" alt="best employer award certificate">
          <h3 class="font-semibold">Best Employer 2022</h3>
      </div>
      <div class="bg-white p-6 rounded-lg text-center">
        <img class="w-16 h-16 mx-auto mb-3 object-contain" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/93fcb104ae-9918edae1f6b4cc4da0a.png" alt="customer satisfaction award medal">
          <h3 class="font-semibold">Customer Excellence 2023</h3>
      </div>
    </div>
  </div>
</section>

<!-- News -->
<section id="company-news" class="py-12">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold mb-8">Latest <span class="gradient-text">News</span></h2>
    <div class="space-y-6">
      <div class="bg-white p-6 rounded-lg border hover:shadow-md transition-shadow">
        <div class="flex justify-between items-start mb-3">
          <h3 class="font-semibold text-lg">TechPro Solutions Launches New AI Platform</h3>
          <span class="text-sm text-gray-500">2 days ago</span>
        </div>
        <p class="text-gray-700 mb-3">Revolutionary AI-powered business intelligence platform now available for enterprise clients...</p>
        <span class="text-primary text-sm font-medium">Read more</span>
      </div>
      <div class="bg-white p-6 rounded-lg border hover:shadow-md transition-shadow">
        <div class="flex justify-between items-start mb-3">
          <h3 class="font-semibold text-lg">Partnership with Global Tech Giant Announced</h3>
          <span class="text-sm text-gray-500">1 week ago</span>
        </div>
        <p class="text-gray-700 mb-3">Strategic partnership will expand cloud services to 15 new markets across Asia Pacific...</p>
        <span class="text-primary text-sm font-medium">Read more</span>
      </div>
    </div>
  </div>
</section>

<!-- Contact Details -->
<section id="contact-details" class="py-12 bg-gray-50">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold mb-8">Contact <span class="gradient-text">Information</span></h2>
    <div class="grid lg:grid-cols-2 gap-12">
      <div class="space-y-4">
        <div>
          <h3 class="font-semibold text-xl mb-4">TechPro Solutions</h3>
          <div class="space-y-3">
            <p class="flex items-center"><i class="fas fa-map-marker-alt text-primary mr-3"></i>123 Tech Hub Drive, Singapore 138588</p>
            <p class="flex items-center"><i class="fas fa-globe text-primary mr-3"></i>www.techprosolutions.com</p>
            <p class="flex items-center"><i class="fas fa-envelope text-primary mr-3"></i>contact@techprosolutions.com</p>
            <p class="flex items-center"><i class="fas fa-phone text-primary mr-3"></i>+65 6123 4567</p>
          </div>
        </div>
        <div class="border-t pt-4">
          <h4 class="font-medium mb-2">Company Admin</h4>
          <p class="text-gray-700">Sarah Chen - Business Development Director</p>
        </div>
      </div>
      <div class="flex items-center justify-center">
      </div></div></div></section></body></html>