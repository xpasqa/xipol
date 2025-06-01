import { supabase } from "./supabaseClient.js";

const container = document.getElementById("news-list");

const { data: articles, error } = await supabase
  .from("articles")
  .select("title, slug, cover_image, created_at, author, category")
  .order("created_at", { ascending: false });

if (error) {
  container.innerHTML = `<p class="text-red-500">Gagal memuat artikel: ${error.message}</p>`;
  throw error;
}

if (!articles || articles.length === 0) {
  container.innerHTML = `<p class="text-gray-500">Belum ada artikel yang tersedia.</p>`;
} else {
  articles.forEach((article) => {
    const date = new Date(article.created_at).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    container.innerHTML += `
  <a href="article.html?slug=${article.slug}" class="block bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden">
    <img src="${article.cover_image}" alt="${article.title}" class="w-full h-48 object-cover" />
    <div class="p-4">
      <p class="text-sm text-primary-950 mb-1">${article.category || "Umum"}</p>
      <h2 class="text-xl font-semibold text-primary-950 mb-1">${article.title}</h2>
      <p class="text-sm text-gray-600">${article.author || 'Admin'} • ${date}</p>
    </div>
  </a>
    `;
  });
}
