<html><head>
  <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://cdn.tailwindcss.com"></script>
    <script> window.FontAwesomeConfig = {autoReplaceSvg: 'nest'};</script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js" crossOrigin="anonymous"
            referrerpolicy="no-referrer"></script>

    <style>
      ::-webkit-scrollbar {display: none;}
      body {font - family: 'Inter', sans-serif;}
      .gradient-text {background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;}
      .gradient-bg {background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);}
      .float-animation {animation: float 6s ease-in-out infinite;}
      @keyframes float {0 %, 100% {transform: translateY(0px);} 50% {transform: translateY(-10px);}}
      .slide-in {animation: slideIn 0.3s ease-out; transform: translateX(0);}
      @keyframes slideIn {from {transform: translateX(100%);} to {transform: translateX(0);}}
      .chat-hidden {transform: translateX(100%);}
      .timeline-item {position: relative; padding-left: 2rem;}
      .timeline-item::before {content: ''; position: absolute; left: 0; top: 0.5rem; width: 12px; height: 12px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 50%;}
      .timeline-item::after {content: ''; position: absolute; left: 5px; top: 1.5rem; width: 2px; height: calc(100% - 1rem); background: #e5e7eb;}
      .timeline-item:last-child::after {display: none;}
      .overlay {backdrop - filter: blur(10px);}
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
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;500;600;700;800;900&amp;display=swap" />
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
             src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
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
        <button class="tab-btn px-4 py-2 text-primary border-b-2 border-primary font-medium"
                onclick="showTab('home')">Home
        </button>
        <button class="tab-btn px-4 py-2 text-gray-600 hover:text-primary" onclick="showTab('goods')">Goods/Services
        </button>
        <button class="tab-btn px-4 py-2 text-gray-600 hover:text-primary" onclick="showTab('news')">News</button>
        <button class="tab-btn px-4 py-2 text-gray-600 hover:text-primary" onclick="showTab('contact')">Contact</button>
        <button class="tab-btn px-4 py-2 gradient-bg text-white rounded-lg" onclick="toggleChat()">Chat now</button>
      </nav>
    </div>
    <div class="mb-6">
      <img class="w-full h-64 rounded-xl object-cover"
           src="https://storage.googleapis.com/uxpilot-auth.appspot.com/bfd5c2ff67-fee05dd31993ff88dc45.png"
           alt="modern technology company office building with glass facade and digital displays">
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

  <!-- Chat Box -->
  <div id="chat-box"
       class="fixed right-0 top-0 h-[56rem] w-96 bg-white shadow-2xl z-50 transform translate-x-full transition-transform duration-300">
    <div class="p-4 border-b bg-gradient-to-r from-primary to-secondary text-white">
      <div class="flex items-center justify-between">
        <h3 class="font-semibold">Chat with TechPro Solutions</h3>
        <button onclick="toggleChat()" class="text-white hover:text-gray-200">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
    <div class="flex-1 p-4 h-[56rem] overflow-y-auto">
      <div class="space-y-4">
        <div class="bg-gray-100 p-3 rounded-lg">
          <p class="text-sm">Hello! How can we help you today?</p>
        </div>
        <div class="bg-primary text-white p-3 rounded-lg ml-8">
          <p class="text-sm">I'm interested in your AI solutions.</p>
        </div>
      </div>
    </div>
    <div class="p-4 border-t">
      <div class="flex space-x-2">
        <input type="text" placeholder="Type your message..." class="flex-1 border rounded-lg px-3 py-2 text-sm">
          <button class="gradient-bg text-white px-4 py-2 rounded-lg">
            <i class="fas fa-paper-plane"></i>
          </button>
      </div>
    </div>
  </div>
</section>

<!-- News Timeline -->
<section id="news-timeline" class="py-12">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold mb-8">Company <span class="gradient-text">News Timeline</span></h2>
    <div class="max-w-4xl mx-auto">
      <div class="space-y-8">
        <div class="timeline-item cursor-pointer hover:bg-gray-50 p-4 rounded-lg transition-colors"
             onclick="openNewsArticle('news1')">
          <div class="flex justify-between items-start mb-2">
            <h3 class="font-semibold text-lg text-gray-900">TechPro Solutions Launches Revolutionary AI Platform</h3>
            <span class="text-sm text-gray-500 whitespace-nowrap ml-4">Dec 15, 2024</span>
          </div>
          <p class="text-gray-700">Our new AI-powered business intelligence platform revolutionizes how enterprises
            analyze data and make strategic decisions...</p>
        </div>

        <div class="timeline-item cursor-pointer hover:bg-gray-50 p-4 rounded-lg transition-colors"
             onclick="openNewsArticle('news2')">
          <div class="flex justify-between items-start mb-2">
            <h3 class="font-semibold text-lg text-gray-900">Strategic Partnership with Global Tech Giant</h3>
            <span class="text-sm text-gray-500 whitespace-nowrap ml-4">Dec 8, 2024</span>
          </div>
          <p class="text-gray-700">Partnership announcement that will expand our cloud services to 15 new markets across
            Asia Pacific region...</p>
        </div>

        <div class="timeline-item cursor-pointer hover:bg-gray-50 p-4 rounded-lg transition-colors"
             onclick="openNewsArticle('news3')">
          <div class="flex justify-between items-start mb-2">
            <h3 class="font-semibold text-lg text-gray-900">ISO 27001 Certification Achieved</h3>
            <span class="text-sm text-gray-500 whitespace-nowrap ml-4">Nov 28, 2024</span>
          </div>
          <p class="text-gray-700">TechPro Solutions successfully achieves ISO 27001 certification, reinforcing our
            commitment to information security...</p>
        </div>

        <div class="timeline-item cursor-pointer hover:bg-gray-50 p-4 rounded-lg transition-colors"
             onclick="openNewsArticle('news4')">
          <div class="flex justify-between items-start mb-2">
            <h3 class="font-semibold text-lg text-gray-900">Q3 2024 Growth Report Released</h3>
            <span class="text-sm text-gray-500 whitespace-nowrap ml-4">Oct 30, 2024</span>
          </div>
          <p class="text-gray-700">Company reports 45% year-over-year growth in Q3 2024, driven by increased demand for
            AI and cloud solutions...</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- News Article Overlay -->
<div id="news-overlay" class="fixed inset-0 bg-black bg-opacity-50 overlay z-50 hidden">
  <div class="flex items-center justify-center h-[800px] p-4">
    <div class="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
      <div class="sticky top-0 bg-white border-b p-6 flex justify-between items-center">
        <h2 id="article-title" class="text-2xl font-bold gradient-text"></h2>
        <button onclick="closeNewsArticle()" class="text-gray-500 hover:text-gray-700 text-2xl">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="p-6">
        <div id="article-content" class="prose max-w-none mb-8"></div>

        <!-- Comments Section -->
        <div class="border-t pt-6">
          <h3 class="text-xl font-semibold mb-4">Comments</h3>
          <div class="space-y-4 mb-6">
            <div class="bg-gray-50 p-4 rounded-lg">
              <div class="flex items-center mb-2">
                <img class="w-8 h-8 rounded-full mr-3"
                     src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"
                     alt="User avatar">
                  <span class="font-medium">Sarah Chen</span>
                  <span class="text-sm text-gray-500 ml-2">2 hours ago</span>
              </div>
              <p class="text-gray-700">This is exciting news! Looking forward to seeing how this AI platform will
                transform our industry.</p>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <div class="flex items-center mb-2">
                <img class="w-8 h-8 rounded-full mr-3"
                     src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
                     alt="User avatar">
                  <span class="font-medium">Mike Johnson</span>
                  <span class="text-sm text-gray-500 ml-2">5 hours ago</span>
              </div>
              <p class="text-gray-700">Congratulations on this milestone! When will the platform be available for beta
                testing?</p>
            </div>
          </div>
          <div class="border-t pt-4">
            <h4 class="font-medium mb-3">Add a comment</h4>
            <div class="space-y-3">
              <textarea class="w-full border rounded-lg p-3 h-24 resize-none"
                        placeholder="Write your comment..."></textarea>
              <button class="gradient-bg text-white px-6 py-2 rounded-lg font-medium">Post Comment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
  function toggleChat() {
  const chatBox = document.getElementById('chat-box');
  chatBox.classList.toggle('translate-x-full');
}

  function showTab(tab) {
  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(btn => {
  btn.classList.remove('text-primary', 'border-b-2', 'border-primary');
  btn.classList.add('text-gray-600');
});
  event.target.classList.add('text-primary', 'border-b-2', 'border-primary');
  event.target.classList.remove('text-gray-600');
}

  function openNewsArticle(newsId) {
  const overlay = document.getElementById('news-overlay');
  const title = document.getElementById('article-title');
  const content = document.getElementById('article-content');

  const articles = {
  news1: {
  title: 'TechPro Solutions Launches Revolutionary AI Platform',
  content: `
                <p class="text-gray-600 mb-4">December 15, 2024</p>
                <p class="mb-4">TechPro Solutions today announced the launch of its groundbreaking AI-powered business intelligence platform, marking a significant milestone in the company's journey to revolutionize enterprise data analytics.</p>
                <p class="mb-4">The new platform leverages advanced machine learning algorithms to provide real-time insights and predictive analytics, enabling businesses to make data-driven decisions with unprecedented accuracy and speed.</p>
                <p class="mb-4">"This platform represents the future of business intelligence," said CEO Sarah Chen. "We've combined years of research and development to create a solution that not only analyzes data but truly understands business context."</p>
                <p>The platform is now available for enterprise clients and includes features such as automated reporting, predictive modeling, and natural language querying capabilities.</p>
            `
},
  news2: {
  title: 'Strategic Partnership with Global Tech Giant',
  content: `
                <p class="text-gray-600 mb-4">December 8, 2024</p>
                <p class="mb-4">TechPro Solutions has entered into a strategic partnership with a leading global technology company to expand cloud services across 15 new markets in the Asia Pacific region.</p>
                <p class="mb-4">This partnership will enable TechPro Solutions to leverage advanced cloud infrastructure and reach new customers across emerging markets, significantly expanding the company's global footprint.</p>
                <p class="mb-4">The collaboration focuses on delivering scalable cloud solutions, enhanced security protocols, and localized support services to meet the diverse needs of businesses in the region.</p>
                <p>"This partnership aligns perfectly with our vision of making advanced technology accessible to businesses worldwide," commented CTO Michael Wong.</p>
            `
},
  news3: {
  title: 'ISO 27001 Certification Achieved',
  content: `
                <p class="text-gray-600 mb-4">November 28, 2024</p>
                <p class="mb-4">TechPro Solutions has successfully achieved ISO 27001 certification, demonstrating our unwavering commitment to information security and data protection.</p>
                <p class="mb-4">This internationally recognized certification validates our comprehensive information security management system and reinforces trust with our clients and partners.</p>
                <p class="mb-4">The certification process involved rigorous auditing of our security policies, procedures, and technical controls across all business operations.</p>
                <p>"Achieving ISO 27001 certification is a testament to our team's dedication to maintaining the highest security standards," said Chief Security Officer David Liu.</p>
            `
},
  news4: {
  title: 'Q3 2024 Growth Report Released',
  content: `
                <p class="text-gray-600 mb-4">October 30, 2024</p>
                <p class="mb-4">TechPro Solutions reports exceptional growth in Q3 2024, with a 45% year-over-year increase in revenue driven by strong demand for AI and cloud solutions.</p>
                <p class="mb-4">The company's AI services division showed particularly strong performance, growing by 65% compared to the same period last year, while cloud services expanded by 38%.</p>
                <p class="mb-4">Key growth drivers included new enterprise clients in the financial services and healthcare sectors, as well as expansion into three new geographical markets.</p>
                <p>"These results reflect our team's hard work and our clients' trust in our innovative solutions," stated CFO Jennifer Park.</p>
            `
}
};

  title.textContent = articles[newsId].title;
  content.innerHTML = articles[newsId].content;
  overlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

  function closeNewsArticle() {
  const overlay = document.getElementById('news-overlay');
  overlay.classList.add('hidden');
  document.body.style.overflow = 'auto';
}
</script>


</body>
</html>
