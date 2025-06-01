document.getElementById("sidebar").innerHTML = `
  <aside class="w-64 bg-gray-100 shadow-lg border-r min-h-screen">
    <div class="p-6 border-b">
      <a href="/" target="_blank" class="text-2xl font-bold text-primary-950 hover:underline block">
        Ilmu Politik
      </a>
    </div>
    <nav class="p-4 space-y-2">
      <a href="index.html" class="block px-4 py-2 rounded hover:bg-gray-200 text-gray-800 font-medium">Artikel</a>
      <a href="dosen.html" class="block px-4 py-2 rounded hover:bg-gray-200 text-gray-800 font-medium">Dosen</a>
         <a href="skripsi.html" class="block px-4 py-2 rounded hover:bg-gray-200 text-gray-800 font-medium">Skripsi</a>
   
      <a href="#" id="logout-link" class="block px-4 py-2 rounded text-red-600 hover:bg-gray-200 font-medium">Logout</a>
    </nav>
  </aside>
`;

import { supabase } from '../js/supabaseClient.js';

document.addEventListener("DOMContentLoaded", () => {
  const logoutLink = document.getElementById("logout-link");
  if (logoutLink) {
    logoutLink.addEventListener("click", async (e) => {
      e.preventDefault();
      await supabase.auth.signOut();
      window.location.href = "/login.html";
    });
  }
});