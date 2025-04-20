document.addEventListener("DOMContentLoaded", function () {
    const sidebar = `
      <aside class="w-64 bg-politik text-white flex flex-col p-6 min-h-screen">
        <h1 class="text-2xl font-bold mb-10">Ilmu Politik</h1>
        <nav class="flex-1">
          <ul class="space-y-4">
            <li>
              <a href="#" class="block py-2 px-4 rounded hover:bg-politik-light transition">Pages</a>
            </li>
            <li>
              <a href="#" class="block py-2 px-4 rounded hover:bg-politik-light transition">Article</a>
            </li>
            <li>
              <a href="#" class="block py-2 px-4 rounded hover:bg-politik-light transition">User</a>
            </li>
          </ul>
        </nav>
        <!-- User Info & Logout -->
        <div class="mt-10 border-t border-white/20 pt-6">
          <p class="text-sm">Masuk sebagai:</p>
          <p class="font-semibold">admin@ilpol.com</p>
          <button class="mt-2 text-sm bg-white text-politik px-3 py-1 rounded hover:bg-gray-100 transition">
            Logout
          </button>
        </div>
      </aside>
    `;
  
    const sidebarContainer = document.getElementById("sidebar");
    if (sidebarContainer) {
      sidebarContainer.innerHTML = sidebar;
    }
  });
  