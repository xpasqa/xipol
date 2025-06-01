document.addEventListener("DOMContentLoaded", function () {
  const header = `
      <header class="bg-primary-950 shadow-sm relative z-50 text-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 items-center justify-between">

      <!-- Logo -->
      <a href="/index.html" class="font-semibold text-xl text-white">Ilmu Politik</a>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex space-x-6 text-sm">

              <a href="/index.html" class="hover:text-teal-400 transition">Home</a>


        <!-- About dengan Dropdown -->
        <div class="relative group">
          <a href="/about.html"
             class="inline-flex items-center hover:text-teal-400 transition">
            Profil
            <svg class="w-4 h-4 ml-1 fill-current" viewBox="0 0 20 20">
              <path d="M5.25 7.5l4.5 4.5 4.5-4.5H5.25z"/>
            </svg>
          </a>
          <div
            class="absolute left-0 top-full mt-2 w-48 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
            <a href="/about.html#home" class="block px-4 py-2 hover:bg-teal-100">Tentang Ilmu Politik</a>
            <a href="/about.html#home" class="block px-4 py-2 hover:bg-teal-100">Sejarah Prodi</a>
            <a href="/about.html#visimisi" class="block px-4 py-2 hover:bg-teal-100">Visi, Misi dan Tujuan</a>
            <a href="/about.html#tridharma" class="block px-4 py-2 hover:bg-teal-100">Tridharma Perguruan Tinggi</a>
            <a href="/about.html#profil" class="block px-4 py-2 hover:bg-teal-100">Profil Lulusan</a>
            <a href="/about.html#fasilitas" class="block px-4 py-2 hover:bg-teal-100">Fasilitas dan Sarana</a>
            <a href="/about.html#alumni" class="block px-4 py-2 hover:bg-teal-100">Kiprah Alumni</a>
            <a href="/akreditasi.html" class="block px-4 py-2 hover:bg-teal-100">Sertifikat Akreditasi</a>
          </div>
        </div>

         <div class="relative group">
          <a href="#"
             class="inline-flex items-center hover:text-teal-400 transition">
            Akademik
            <svg class="w-4 h-4 ml-1 fill-current" viewBox="0 0 20 20">
              <path d="M5.25 7.5l4.5 4.5 4.5-4.5H5.25z"/>
            </svg>
          </a>
          <div
            class="absolute left-0 top-full mt-2 w-48 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
            <a href="/kurikulum.html" class="block px-4 py-2 hover:bg-teal-100">Matrik Kurikulum</a>
            <a href="/panduan-akademik.html" class="block px-4 py-2 hover:bg-teal-100">Panduan Akademik</a>
            <a href="/cek-plagiarisme.html" class="block px-4 py-2 hover:bg-teal-100">Cek Plagiarisme</a>
            <a href="/cek-judul.html" class="block px-4 py-2 hover:bg-teal-100">Cek Judul Skripsi</a>
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
            <a href="/dosen.html" class="block px-4 py-2 hover:bg-teal-100">Dosen</a>
            <a href="/himapol.html" class="block px-4 py-2 hover:bg-teal-100">Himpunan Mahasiswa</a>
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
            <a href="/publikasi-ilmiah.html" class="block px-4 py-2 hover:bg-teal-100">Publikasi Ilmiah</a>
            <a href="/pengabdian-masyarakat.html" class="block px-4 py-2 hover:bg-teal-100">Pengabdian Masyarakat</a>
            <a href="https://journal.uinsgd.ac.id/index.php/politicon" class="block px-4 py-2 hover:bg-teal-100">Jurnal Politcon</a>
            <a href="https://journal.uinsgd.ac.id/index.php/candidate" class="block px-4 py-2 hover:bg-teal-100">Jurnal Candidate</a>            
            </div>
        </div>

        <a href="/news.html" class="hover:text-teal-400 transition">Berita</a>
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
        <a href="/register.html"
           class="hidden sm:inline-block px-4 py-2 text-sm border border-white rounded-md hover:bg-white hover:text-black transition">Register</a>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="md:hidden mt-4 space-y-2 hidden text-white">
      <a href="/index.html" class="block hover:text-teal-400">Home</a>

      <!-- About dengan Sub-items -->
      <div>
        <button
          class="w-full text-left flex items-center justify-between hover:text-teal-400 transition focus:outline-none"
          onclick="this.nextElementSibling.classList.toggle('hidden')">
          About
          <svg class="w-4 h-4 ml-1 fill-current" viewBox="0 0 20 20">
            <path d="M5.25 7.5l4.5 4.5 4.5-4.5H5.25z"/>
          </svg>
        </button>
        <div class="mt-1 ml-4 space-y-1 hidden">
          <a href="/about.html#home" class="block px-4 py-2 hover:bg-teal-100">Tentang Ilmu Politik</a>
            <a href="/about.html#home" class="block px-4 py-2 hover:bg-teal-100">Sejarah Prodi</a>
            <a href="/about.html#visimisi" class="block px-4 py-2 hover:bg-teal-100">Visi, Misi dan Tujuan</a>
            <a href="/about.html#tridharma" class="block px-4 py-2 hover:bg-teal-100">Tridharma Perguruan Tinggi</a>
            <a href="/about.html#profil" class="block px-4 py-2 hover:bg-teal-100">Profil Lulusan</a>
            <a href="/about.html#fasilitas" class="block px-4 py-2 hover:bg-teal-100">Fasilitas dan Sarana</a>
            <a href="/about.html#alumni" class="block px-4 py-2 hover:bg-teal-100">Kiprah Alumni</a>
            <a href="/akreditasi.html" class="block px-4 py-2 hover:bg-teal-100">Sertifikat Akreditasi</a>
        </div>
      </div>

      <div>
        <button
          class="w-full text-left flex items-center justify-between hover:text-teal-400 transition focus:outline-none"
          onclick="this.nextElementSibling.classList.toggle('hidden')">
          Akademik
          <svg class="w-4 h-4 ml-1 fill-current" viewBox="0 0 20 20">
            <path d="M5.25 7.5l4.5 4.5 4.5-4.5H5.25z"/>
          </svg>
        </button>
        <div class="mt-1 ml-4 space-y-1 hidden">
         <a href="/kurikulum.html" class="block px-4 py-2 hover:bg-teal-100">Matrik Kurikulum</a>
            <a href="/panduan-akademik.html" class="block px-4 py-2 hover:bg-teal-100">Panduan Akademik</a>
            <a href="/cek-plagiarisme.html" class="block px-4 py-2 hover:bg-teal-100">Cek Plagiarisme</a>
            <a href="/cek-judul.html" class="block px-4 py-2 hover:bg-teal-100">Cek Judul Skripsi</a>
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
           <a href="/dosen.html" class="block px-4 py-2 hover:bg-teal-100">Dosen</a>
            <a href="/himapol.html" class="block px-4 py-2 hover:bg-teal-100">Himpunan Mahasiswa</a>
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
            <a href="/publikasi-ilmiah.html" class="block px-4 py-2 hover:bg-teal-100">Publikasi Ilmiah</a>
            <a href="/pengabdian-masyarakat.html" class="block px-4 py-2 hover:bg-teal-100">Pengabdian Masyarakat</a>
            <a href="https://journal.uinsgd.ac.id/index.php/politicon" class="block px-4 py-2 hover:bg-teal-100">Jurnal Politcon</a>
            <a href="https://journal.uinsgd.ac.id/index.php/candidate" class="block px-4 py-2 hover:bg-teal-100">Jurnal Candidate</a>   
        </div>
      </div>

      <a href="/news.html" class="block hover:text-teal-400">News</a>
      <a href="/survey.html" class="block hover:text-teal-400">Survey</a>
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
