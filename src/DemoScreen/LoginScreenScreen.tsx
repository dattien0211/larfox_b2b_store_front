<html><head>
  <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <script src="https://cdn.tailwindcss.com"></script>
      <script> window.FontAwesomeConfig = { autoReplaceSvg: 'nest'};</script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

      <style>
        ::-webkit-scrollbar { display: none;}
        body { font-family: 'Inter', sans-serif; }
        .gradient-text { background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .gradient-bg { background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%); }
        .gradient-glow { box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3); }
        .float-animation { animation: float 6s ease-in-out infinite; }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        .form-input:focus { box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1); border-color: #667eea; }
        .form-input { transition: all 0.3s ease; }
        .btn-hover:hover { transform: translateY(-2px); }
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
<body class="bg-white h-[800px]">

<!-- Header -->
<header id="header" class="bg-white shadow-sm">
  <div class="container mx-auto px-4">
    <div class="flex items-center justify-between py-6">
      <div class="text-3xl font-bold gradient-text">LARFOX.COM</div>
      <div class="relative">
        <select
          class="bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
          <option>English</option>
          <option>中文</option>
          <option>日本語</option>
          <option>한국어</option>
          <option>Tiếng Việt</option>
        </select>
      </div>
    </div>
  </div>
</header>

<!-- Registration Form Section -->
<section id="registration-form" class="py-12">
  <div class="container mx-auto px-4">
    <div class="max-w-2xl mx-auto">
      <!-- Title -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold mb-4">Join <span class="gradient-text">LARFOX.COM</span></h1>
        <p class="text-xl text-gray-600">Connect with global B2B partners and unlock new opportunities</p>
      </div>

      <!-- Registration Form -->
      <div class="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
        <form class="space-y-6">
          <!-- Country/Region -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Country / Region *</label>
            <select
              class="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none text-gray-700">
              <option value="">Select your country/region</option>
              <option value="SG">Singapore</option>
              <option value="US">United States</option>
              <option value="CN">China</option>
              <option value="JP">Japan</option>
              <option value="KR">South Korea</option>
              <option value="VN">Vietnam</option>
              <option value="TH">Thailand</option>
              <option value="MY">Malaysia</option>
              <option value="ID">Indonesia</option>
              <option value="PH">Philippines</option>
            </select>
          </div>

          <!-- Business Email -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Business Email *</label>
            <input type="email" class="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
                   placeholder="your.email@company.com" required="">
          </div>

          <!-- Password -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Password *</label>
            <div class="relative">
              <input type="password" id="password"
                     class="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none pr-12"
                     placeholder="Enter your password" required="">
                <button type="button" onclick="togglePassword('password')"
                        class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
                  <i class="fas fa-eye" id="password-eye"></i>
                </button>
            </div>
          </div>

          <!-- Confirm Password -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Confirm Password *</label>
            <div class="relative">
              <input type="password" id="confirm-password"
                     class="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none pr-12"
                     placeholder="Confirm your password" required="">
                <button type="button" onclick="togglePassword('confirm-password')"
                        class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
                  <i class="fas fa-eye" id="confirm-password-eye"></i>
                </button>
            </div>
          </div>

          <!-- Company Name -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Company Name *</label>
            <input type="text" class="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
                   placeholder="Your company name" required="">
          </div>

          <!-- Company Website -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Company Website</label>
            <input type="url" class="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
                   placeholder="https://www.yourcompany.com">
          </div>

          <!-- First Name -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
            <input type="text" class="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
                   placeholder="Your first name" required="">
          </div>

          <!-- Last Name -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
            <input type="text" class="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
                   placeholder="Your last name" required="">
          </div>

          <!-- Job Title -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Job Title *</label>
            <input type="text" class="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
                   placeholder="Your job title" required="">
          </div>

          <!-- Terms Checkbox -->
          <div class="pt-4">
            <label class="flex items-start space-x-3 cursor-pointer">
              <input type="checkbox"
                     class="mt-1 w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2"
                     required="">
                            <span class="text-sm text-gray-700 leading-relaxed">
                                I have read and agreed to all
                                <span
                                  class="text-primary hover:underline font-medium cursor-pointer">Policies and Rules</span>,
                                <span
                                  class="text-primary hover:underline font-medium cursor-pointer">Terms of Use</span>, and
                                <span class="text-primary hover:underline font-medium cursor-pointer">Legal Terms</span>
                                of Larfox.com, and to receive more information about its products and services.
                            </span>
            </label>
          </div>

          <!-- Sign Up Button -->
          <div class="pt-6">
            <button type="submit"
                    class="btn-hover w-full gradient-bg text-white font-semibold py-4 rounded-lg transition-all duration-300 hover:gradient-glow">
              <i class="fas fa-user-plus mr-2"></i>
              Sign Up
            </button>
          </div>
        </form>

        <!-- Sign In Link -->
        <div class="text-center mt-8 pt-6 border-t border-gray-200">
          <p class="text-gray-600">
            Already have an account?
            <span class="text-primary hover:underline font-medium cursor-pointer">Sign In</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Floating Elements -->
<div class="fixed top-1/4 right-8 float-animation opacity-20">
  <div class="w-20 h-20 gradient-bg rounded-full"></div>
</div>
<div class="fixed bottom-1/4 left-8 float-animation opacity-10" style="animation-delay: -3s;">
  <div class="w-16 h-16 bg-accent rounded-full"></div>
</div>

<script>
  function togglePassword(inputId) {
  const input = document.getElementById(inputId);
  const eye = document.getElementById(inputId + '-eye');

  if (input.type === 'password') {
  input.type = 'text';
  eye.classList.remove('fa-eye');
  eye.classList.add('fa-eye-slash');
} else {
  input.type = 'password';
  eye.classList.remove('fa-eye-slash');
  eye.classList.add('fa-eye');
}
}

  // Form validation
  document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();

  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (password !== confirmPassword) {
  alert('Passwords do not match. Please try again.');
  return;
}

  // Simulate successful registration
  alert('Registration successful! Welcome to LARFOX.COM');
});

  // Add floating animation to form on scroll
  window.addEventListener('scroll', function() {
  const form = document.querySelector('#registration-form .bg-white');
  const scrolled = window.pageYOffset;
  form.style.transform = `translateY(${scrolled * 0.02}px)`;
});
</script>


</body>
</html>
