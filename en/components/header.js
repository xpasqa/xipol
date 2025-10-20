document.addEventListener("DOMContentLoaded", function () {
  const header = `
      <header class="bg-primary-950 shadow-sm sticky top-0 z-50 text-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 items-center justify-between">

     <!-- Logo -->
      <div class="flex items-center space-x-4">
        <a href="../index.html" class="flex items-center space-x-2 text-white">
          <img src="../img/logo-ilmu-politik-2.png" alt="Logo" class="h-10" />
          <span class="font-semibold text-xl">Political Science</span>
        </a>

        <!-- Language Dropdown -->
        <div class="relative group">
          <button class="flex items-center space-x-1 text-sm text-white hover:text-teal-400 transition px-2 py-1 rounded">
            <span class="text-xs">🇺🇸</span>
            <span>EN</span>
            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5.25 7.5l4.5 4.5 4.5-4.5H5.25z"/>
            </svg>
          </button>
          <div class="absolute left-0 top-full mt-1 w-20 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
            <a href="../index.html" class="flex items-center justify-center space-x-1 px-3 py-2 hover:bg-gray-100">
              <span class="text-xs">🇮🇩</span>
              <span>ID</span>
            </a>
            <a href="#" class="flex items-center justify-center space-x-1 px-3 py-2 hover:bg-gray-100 font-medium bg-gray-50">
              <span class="text-xs">🇺🇸</span>
              <span>EN</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex space-x-6 text-sm">

              <a href="../index.html" class="hover:text-teal-400 transition">Home</a>


        <!-- About dengan Dropdown -->
        <div class="relative group">
          <a href="about.html"
             class="inline-flex items-center hover:text-teal-400 transition">
            Profile
            <svg class="w-4 h-4 ml-1 fill-current" viewBox="0 0 20 20">
              <path d="M5.25 7.5l4.5 4.5 4.5-4.5H5.25z"/>
            </svg>
          </a>
          <div
            class="absolute left-0 top-full mt-2 w-48 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
            <a href="about.html#home" class="block px-4 py-2 hover:bg-teal-100">About Political Science</a>
            <a href="about.html#home" class="block px-4 py-2 hover:bg-teal-100">Program History</a>
            <a href="about.html#visimisi" class="block px-4 py-2 hover:bg-teal-100">Vision, Mission and Objectives</a>
            <a href="about.html#tridharma" class="block px-4 py-2 hover:bg-teal-100">Tridharma of Higher Education</a>
            <a href="about.html#profil" class="block px-4 py-2 hover:bg-teal-100">Graduate Profiles</a>
            <a href="about.html#fasilitas" class="block px-4 py-2 hover:bg-teal-100">Facilities and Infrastructure</a>
            <a href="about.html#alumni" class="block px-4 py-2 hover:bg-teal-100">Alumni Achievements</a>
            <a href="akreditasi.html" class="block px-4 py-2 hover:bg-teal-100">Accreditation Certificate</a>
          </div>
        </div>

         <div class="relative group">
          <a href="#"
             class="inline-flex items-center hover:text-teal-400 transition">
            Academic
            <svg class="w-4 h-4 ml-1 fill-current" viewBox="0 0 20 20">
              <path d="M5.25 7.5l4.5 4.5 4.5-4.5H5.25z"/>
            </svg>
          </a>
          <div
            class="absolute left-0 top-full mt-2 w-48 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
            <a href="../kurikulum.html" class="block px-4 py-2 hover:bg-teal-100">Curriculum Matrix</a>
            <a href="/panduan-akademik.html" class="block px-4 py-2 hover:bg-teal-100">Academic Guide</a>
            <a href="/cek-plagiarisme.html" class="block px-4 py-2 hover:bg-teal-100">Plagiarism Check</a>
            <a href="/cek-judul.html" class="block px-4 py-2 hover:bg-teal-100">Thesis Title Check</a>
            </div>
        </div>
      
        <div class="relative group">
          <a href="#"
             class="inline-flex items-center hover:text-teal-400 transition">
            Stakeholder
            <svg class="w-4 h-4 ml-1 fill-current" viewBox="0 0 20 20">
              <path d="M5.25 7.5l4.5 4.5 4.5-4.5H5.25z"/>
            </svg>
          </a>
          <div
            class="absolute left-0 top-full mt-2 w-48 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
            <div class="relative">
              <button
                onclick="this.nextElementSibling.classList.toggle('hidden')"
                class="w-full text-left px-4 py-2 hover:bg-teal-100 flex justify-between items-center">
                Faculty
                <svg class="w-4 h-4 ml-2 fill-current" viewBox="0 0 20 20">
                  <path d="M5.25 7.5l4.5 4.5 4.5-4.5H5.25z"/>
                </svg>
              </button>
              <div class="ml-4 mt-1 hidden">
                <a href="/infografis-dosen.html" class="block px-4 py-2 hover:bg-teal-100">Faculty Infographics</a>
                <a href="/dosen.html" class="block px-4 py-2 hover:bg-teal-100">Faculty Profiles</a>
                <a href="/rekognisi-dosen.html#rekognisi" class="block px-4 py-2 hover:bg-teal-100">Faculty Recognition</a>
                <a href="/kode-etik-dosen.html#kodeetik" class="block px-4 py-2 hover:bg-teal-100">Faculty and Staff Code of Ethics</a>
              </div>
            </div>
            <a href="/himapol.html" class="block px-4 py-2 hover:bg-teal-100">Student Association</a>
            <a href="/alumni.html" class="block px-4 py-2 hover:bg-teal-100">Alumni</a>
            <a href="/polabs.html" class="block px-4 py-2 hover:bg-teal-100">Political Labs</a>            
            </div>
        </div>

         <div class="relative group">
          <a href="#"
             class="inline-flex items-center hover:text-teal-400 transition">
            Tridharma
            <svg class="w-4 h-4 ml-1 fill-current" viewBox="0 0 20 20">
              <path d="M5.25 7.5l4.5 4.5 4.5-4.5H5.25z"/>
            </svg>
          </a>
          <div
            class="absolute left-0 top-full mt-2 w-48 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
           <div class="relative">
             <button
               onclick="this.nextElementSibling.classList.toggle('hidden')"
               class="w-full text-left px-4 py-2 hover:bg-teal-100 flex justify-between items-center">
               Faculty Academic Publications
               <svg class="w-4 h-4 ml-2 fill-current" viewBox="0 0 20 20">
                 <path d="M5.25 7.5l4.5 4.5 4.5-4.5H5.25z"/>
               </svg>
             </button>
             <div class="ml-4 mt-1 hidden">
               <a href="/citasi-karya-dosen.html" class="block px-4 py-2 hover:bg-teal-100">Faculty Citation Works</a>
               <a href="/hki-dosen.html" class="block px-4 py-2 hover:bg-teal-100">Faculty Intellectual Property</a>
               <a href="/produk-prodi.html" class="block px-4 py-2 hover:bg-teal-100">Program Products</a>
               <a href="/buku-isbn.html" class="block px-4 py-2 hover:bg-teal-100">Faculty ISBN Books</a>
               <a href="/integrasi-penelitian-pembelajaran.html#integrasi" class="block px-4 py-2 hover:bg-teal-100">Research & Learning Integration</a>
             </div>
           </div>
                       <a href="/pengabdian-masyarakat.html" class="block px-4 py-2 hover:bg-teal-100">Community Service</a>
           <div class="relative">
             <button
               onclick="this.nextElementSibling.classList.toggle('hidden')"
               class="w-full text-left px-4 py-2 hover:bg-teal-100 flex justify-between items-center">
               Journals
               <svg class="w-4 h-4 ml-2 fill-current" viewBox="0 0 20 20">
                 <path d="M5.25 7.5l4.5 4.5 4.5-4.5H5.25z"/>
               </svg>
             </button>
             <div class="ml-4 mt-1 hidden">
               <a href="https://journal.uinsgd.ac.id/index.php/politicon" class="block px-4 py-2 hover:bg-teal-100">Journals Politcon</a>
               <a href="https://journal.uinsgd.ac.id/index.php/candidate" class="block px-4 py-2 hover:bg-teal-100">Journals Candidate</a>
             </div>
           </div>
          
            </div>
        </div>

        <a href="/news.html" class="hover:text-teal-400 transition">News</a>
        <a href="/survey.html" class=" hover:text-teal-400">Survey</a>
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
        <a href="/login.html"
           class="px-4 py-2 text-sm text-black bg-white rounded-md hover:bg-teal-500 hover:text-white transition">Login</a>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="md:hidden mt-4 space-y-2 hidden text-white">
      <a href="../index.html" class="block hover:text-teal-400">Home</a>

      <!-- About dengan Sub-items -->
      <div>
        <button
          class="w-full text-left flex items-center justify-between hover:text-teal-400 transition focus:outline-none"
          onclick="this.nextElementSibling.classList.toggle('hidden')">
          Profile
          <svg class="w-4 h-4 ml-1 fill-current" viewBox="0 0 20 20">
            <path d="M5.25 7.5l4.5 4.5 4.5-4.5H5.25z"/>
          </svg>
        </button>
        <div class="mt-1 ml-4 space-y-1 hidden">
          <a href="about.html#home" class="block px-4 py-2 hover:bg-teal-100">About Political Science</a>
            <a href="about.html#home" class="block px-4 py-2 hover:bg-teal-100">Program History</a>
            <a href="about.html#visimisi" class="block px-4 py-2 hover:bg-teal-100">Vision, Mission and Objectives</a>
            <a href="about.html#tridharma" class="block px-4 py-2 hover:bg-teal-100">Tridharma of Higher Education</a>
            <a href="about.html#profil" class="block px-4 py-2 hover:bg-teal-100">Graduate Profiles</a>
            <a href="about.html#fasilitas" class="block px-4 py-2 hover:bg-teal-100">Facilities and Infrastructure</a>
            <a href="about.html#alumni" class="block px-4 py-2 hover:bg-teal-100">Alumni Achievements</a>
            <a href="akreditasi.html" class="block px-4 py-2 hover:bg-teal-100">Accreditation Certificate</a>
        </div>
      </div>

      <div>
        <button
          class="w-full text-left flex items-center justify-between hover:text-teal-400 transition focus:outline-none"
          onclick="this.nextElementSibling.classList.toggle('hidden')">
          Academic
          <svg class="w-4 h-4 ml-1 fill-current" viewBox="0 0 20 20">
            <path d="M5.25 7.5l4.5 4.5 4.5-4.5H5.25z"/>
          </svg>
        </button>
        <div class="mt-1 ml-4 space-y-1 hidden">
         <a href="../kurikulum.html" class="block px-4 py-2 hover:bg-teal-100">Curriculum Matrix</a>
            <a href="/panduan-akademik.html" class="block px-4 py-2 hover:bg-teal-100">Academic Guide</a>
            <a href="/cek-plagiarisme.html" class="block px-4 py-2 hover:bg-teal-100">Plagiarism Check</a>
            <a href="/cek-judul.html" class="block px-4 py-2 hover:bg-teal-100">Thesis Title Check</a>
        </div>
      </div>

      <div>
        <button
          class="w-full text-left flex items-center justify-between hover:text-teal-400 transition focus:outline-none"
          onclick="this.nextElementSibling.classList.toggle('hidden')">
          Stakeholder
          <svg class="w-4 h-4 ml-1 fill-current" viewBox="0 0 20 20">
            <path d="M5.25 7.5l4.5 4.5 4.5-4.5H5.25z"/>
          </svg>
        </button>
        <div class="mt-1 ml-4 space-y-1 hidden">
           <button
    class="w-full text-left px-4 py-2 hover:bg-teal-100 flex justify-between items-center"
    onclick="this.nextElementSibling.classList.toggle('hidden')">
    Faculty
    <svg class="w-4 h-4 ml-2 fill-current" viewBox="0 0 20 20">
      <path d="M5.25 7.5l4.5 4.5 4.5-4.5H5.25z"/>
    </svg>
  </button>
  <div class="ml-4 mt-1 hidden">
    <a href="/infografis-dosen.html" class="block px-4 py-2 hover:bg-teal-100">Faculty Infographics</a>
    <a href="/dosen.html" class="block px-4 py-2 hover:bg-teal-100">Faculty Profiles</a>
    <a href="/rekognisi-dosen.html" class="block px-4 py-2 hover:bg-teal-100">Faculty Recognition</a>
    <a href="/kode-etik-dosen.html" class="block px-4 py-2 hover:bg-teal-100">Faculty and Staff Code of Ethics</a>
  </div>
            <a href="/himapol.html" class="block px-4 py-2 hover:bg-teal-100">Student Association</a>
            <a href="/alumni.html" class="block px-4 py-2 hover:bg-teal-100">Alumni</a>
            <a href="/polabs.html" class="block px-4 py-2 hover:bg-teal-100">Political Labs</a>       
        </div>
      </div>

      <div>
        <button
          class="w-full text-left flex items-center justify-between hover:text-teal-400 transition focus:outline-none"
          onclick="this.nextElementSibling.classList.toggle('hidden')">
          Tridharma
          <svg class="w-4 h-4 ml-1 fill-current" viewBox="0 0 20 20">
            <path d="M5.25 7.5l4.5 4.5 4.5-4.5H5.25z"/>
          </svg>
        </button>
        <div class="mt-1 ml-4 space-y-1 hidden">
          <button
            class="w-full text-left px-4 py-2 hover:bg-teal-100 flex justify-between items-center"
            onclick="this.nextElementSibling.classList.toggle('hidden')">
            Faculty Academic Publications
            <svg class="w-4 h-4 ml-2 fill-current" viewBox="0 0 20 20">
              <path d="M5.25 7.5l4.5 4.5 4.5-4.5H5.25z"/>
            </svg>
          </button>
          <div class="ml-4 mt-1 hidden">
            <a href="/publikasi-ilmiah.html#citasi" class="block px-4 py-2 hover:bg-teal-100">Faculty Citation Works</a>
            <a href="/publikasi-ilmiah.html#hki" class="block px-4 py-2 hover:bg-teal-100">Faculty Intellectual Property</a>
            <a href="/publikasi-ilmiah.html#produk" class="block px-4 py-2 hover:bg-teal-100">Program Products</a>
            <a href="/publikasi-ilmiah.html#isbn" class="block px-4 py-2 hover:bg-teal-100">Faculty ISBN Books</a>
            <a href="/publikasi-ilmiah.html#integrasi" class="block px-4 py-2 hover:bg-teal-100">Research & Learning Integration</a>
          </div>

          <a href="/pengabdian-masyarakat.html" class="block px-4 py-2 hover:bg-teal-100">Community Service</a>

          <button
            class="w-full text-left px-4 py-2 hover:bg-teal-100 flex justify-between items-center"
            onclick="this.nextElementSibling.classList.toggle('hidden')">
            Journals
            <svg class="w-4 h-4 ml-2 fill-current" viewBox="0 0 20 20">
              <path d="M5.25 7.5l4.5 4.5 4.5-4.5H5.25z"/>
            </svg>
          </button>
          <div class="ml-4 mt-1 hidden">
            <a href="https://journal.uinsgd.ac.id/index.php/politicon" class="block px-4 py-2 hover:bg-teal-100">Journals Politcon</a>
            <a href="https://journal.uinsgd.ac.id/index.php/candidate" class="block px-4 py-2 hover:bg-teal-100">Journals Candidate</a>
          </div>
        </div>
      </div>

      <a href="/news.html" class="block hover:text-teal-400">News</a>
      <a href="/survey.html" class="block hover:text-teal-400">Survey</a>

      <!-- Mobile Language -->
      <div class="border-t border-gray-600 pt-4 mt-4 text-center">
        <div class="flex justify-center space-x-6">
          <a href="../index.html" class="flex items-center space-x-1 text-sm text-gray-400 hover:text-white">
            <span class="text-xs">🇮🇩</span>
            <span>ID</span>
          </a>
          <span class="flex items-center space-x-1 text-sm text-white font-medium">
            <span class="text-xs">🇺🇸</span>
            <span>EN</span>
          </span>
        </div>
      </div>
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
