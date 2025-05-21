import { supabase } from "./supabaseClient.js";

const container = document.getElementById("news-list");

const { data: articles, error } = await supabase
  .from("articles")
  .select("*")
  .order("created_at", { ascending: false });

if (error || !articles) {
  container.innerHTML = `<p class="text-red-500">Gagal mengambil data: ${error?.message || "Unknown error"}</p>`;
} else if (articles.length === 0) {
  container.innerHTML = `<p class="text-gray-600">Belum ada artikel yang tersedia.</p>`;
} else {
  articles.forEach((article) => {
    const publishedDate = new Date(article.created_at).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    container.innerHTML += `
      <a href="/${article.slug}" class="bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition hover:scale-[1.02] duration-300 block">
        <img src="${article.cover_image}" alt="${article.title}" class="w-full h-48 object-cover" />
        <div class="p-4">
          <h3 class="text-lg font-semibold text-primary-700 mb-2">${article.title}</h3>
          <p class="text-sm text-gray-600 mb-2">
            <strong>${article.author || "Admin"}</strong> • ${publishedDate}
          </p>
        </div>
      </a>
    `;
  });
}
