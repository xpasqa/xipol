document.addEventListener("DOMContentLoaded", function () {
  const footer = `
   <!-- Footer  -->
    <!-- Footer Section -->
    <footer class="bg-custom-primary text-white pt-16 pb-8">
     
      <div class="container max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
          <!-- About Column -->
          <div class="md:col-span-1">
            <div class="flex items-center space-x-2 mb-6">
              <div
                class="w-12 h-12 bg-{#7f1d1d} rounded-full flex items-center justify-center"
              ></div>
              <div>
                <h4 class="font-bold text-lg">Political Science</h4>
                <p class="text-gray-300 text-sm">
                  State Islamic University Sunan Gunung Djati Bandung
                </p>
              </div>
            </div>
            <p class="text-gray-300 mb-6"></p>
            <div class="flex space-x-4">
              <a
                href="#"
                class="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition duration-300"
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition duration-300"
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition duration-300"
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition duration-300"
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="md:col-span-1">
            <h4 class="text-lg font-bold mb-6 relative">
              <span class="relative z-10">Navigation</span>
              <span
                class="absolute left-0 bottom-0 w-16 h-1 bg-white opacity-60"
              ></span>
            </h4>
            <ul class="space-y-3">
              <li>
                <a
                  href="#"
                  class="text-gray-300 hover:text-white transition duration-300 flex items-center"
                >
                  <svg
                    class="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-300 hover:text-white transition duration-300 flex items-center"
                >
                  <svg
                    class="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                  Profile
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-300 hover:text-white transition duration-300 flex items-center"
                >
                  <svg
                    class="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                  Academic
                </a>
              </li>

              <li>
                <a
                  href="#"
                  class="text-gray-300 hover:text-white transition duration-300 flex items-center"
                >
                  <svg
                    class="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                  Publications
                </a>
              </li>
            </ul>
          </div>

          <!-- Contact Information -->
          <div class="md:col-span-1">
            <h4 class="text-lg font-bold mb-6 relative">
              <span class="relative z-10">Contact Us</span>
              <span
                class="absolute left-0 bottom-0 w-16 h-1 bg-white opacity-60"
              ></span>
            </h4>
            <ul class="space-y-4">
              <li class="flex items-start">
                <svg
                  class="w-5 h-5 mr-3 mt-1 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <span class="text-gray-300">
                  FISIP UIN Sunan Gunung<br />
                  Djati Bandung<br />
                  Jl. AH. Nasution No. 105,<br />
                  Cibiru, Bandung
                </span>
              </li>
              <li class="flex items-center">
                <svg
                  class="w-5 h-5 mr-3 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <span class="text-gray-300"> (022) 1234567</span>
              </li>
              <li class="flex items-center">
                <svg
                  class="w-5 h-5 mr-3 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <span class="text-gray-300">info.ilpol@uinbdg.ac.id</span>
              </li>
            </ul>
          </div>

          <!-- Newsletter -->
          <div class="md:col-span-1">
            <h4 class="text-lg font-bold mb-6 relative">
              <span class="relative z-10">Subscribe to Updates</span>
              <span
                class="absolute left-0 bottom-0 w-16 h-1 bg-white opacity-60"
              ></span>
            </h4>
            <p class="text-gray-300 mb-4">
              Stay connected with us through the latest information about
              research, academic activities, and opportunities for collaboration and
              professional development.
            </p>
            <form class="mb-4">
              <div class="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Enter Email"
                  class="bg-white bg-opacity-10 px-4 py-2 rounded-lg text-white placeholder-gray-300 border border-transparent focus:border-white focus:outline-none"
                />
                <button
                  type="submit"
                  class="bg-white text-[#7f1d1d] font-medium px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        <!-- Divider -->
        <div class="border-t border-gray-700 mt-12 pt-8">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <p class="text-gray-400 text-sm mb-4 md:mb-0 mx-auto">
              © 2025 Political Science FISIP UIN Bandung
            </p>
          </div>
        </div>
      </div>

  
    </footer>
  `;

  const footerContainer = document.getElementById("footer");
  if (footerContainer) {
    footerContainer.innerHTML = footer;
  }
});

function generateQuickLink(label) {
  return `
    <li>
      <a href="#" class="text-gray-300 hover:text-white transition duration-300 flex items-center">
        <span class="mr-2">›</span>${label}
      </a>
    </li>
  `;
}

function generateSocialIcons() {
  return `
    ${['facebook', 'twitter', 'linkedin', 'youtube'].map(icon =>
      `<a href="#" class="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition duration-300">
        <span class="text-white text-lg">${icon === 'youtube' ? '▶' : icon.charAt(0).toUpperCase()}</span>
      </a>`).join('')}
  `;
}
