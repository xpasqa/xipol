document.addEventListener("DOMContentLoaded", function () {
    const header = `
      <header class="bg-primary-950 shadow-sm relative z-50 text-white">
        <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex h-16 items-center justify-between">
  
            <!-- Logo -->
            <a href="/index.html" class="font-semibold text-xl text-white">Ilmu Politik</a>
  
            <!-- Desktop Navigation -->
            <nav class="hidden md:flex space-x-6 text-sm">
              <a href="/index.html" class="hover:text-teal-400 transition">Home</a>
              <a href="/about.html" class="hover:text-teal-400 transition">About</a>
              <a href="/dosen.html" class="hover:text-teal-400 transition">Dosen</a>
              <a href="/faculty.html" class="hover:text-teal-400 transition">Faculty</a>
              <a href="/research.html" class="hover:text-teal-400 transition">Research</a>
              <a href="/contact.html" class="hover:text-teal-400 transition">Contact</a>
            </nav>
  
            <!-- Mobile Toggle -->
            <div class="md:hidden">
              <button id="menu-toggle" class="text-white focus:outline-none">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
  
            <!-- Actions -->
            <div class="hidden md:flex items-center gap-4">
              <a href="/login.html" class="px-4 py-2 text-sm text-black bg-white rounded-md hover:bg-teal-500 hover:text-white transition">Login</a>
              <a href="/register.html" class="hidden sm:inline-block px-4 py-2 text-sm border border-white rounded-md hover:bg-white hover:text-black transition">Register</a>
            </div>
          </div>
  
          <!-- Mobile Menu -->
          <div id="mobile-menu" class="md:hidden mt-4 space-y-2 hidden text-white">
            <a href="/index.html" class="block hover:text-teal-400">Home</a>
            <a href="/about.html" class="block hover:text-teal-400">About</a>
            <a href="/programs.html" class="block hover:text-teal-400">Programs</a>
            <a href="/faculty.html" class="block hover:text-teal-400">Faculty</a>
            <a href="/research.html" class="block hover:text-teal-400">Research</a>
            <a href="/contact.html" class="block hover:text-teal-400">Contact</a>
            <a href="/login.html" class="block hover:text-teal-400">Login</a>
            <a href="/register.html" class="block hover:text-teal-400">Register</a>
          </div>
        </div>
      </header>
    `;
  
    const headerContainer = document.getElementById("header");
    if (headerContainer) {
      headerContainer.innerHTML = header;
  
      const toggleBtn = document.getElementById("menu-toggle");
      const mobileMenu = document.getElementById("mobile-menu");
  
      if (toggleBtn && mobileMenu) {
        toggleBtn.addEventListener("click", () => {
          mobileMenu.classList.toggle("hidden");
        });
      }
    }
  });
  