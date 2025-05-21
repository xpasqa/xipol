import { supabase } from './supabaseClient.js'

const container = document.getElementById("latest-articles")

const { data: articles, error } = await supabase
  .from('articles')
  .select('*')
  .order('created_at', { ascending: false })
  .limit(3)

if (error) {
  container.innerHTML = `<p class="text-red-500">Gagal ambil artikel</p>`
} else {
  articles.forEach(article => {
    const publishedDate = new Date(article.created_at).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric"
    })

    container.innerHTML += `
      <a href="${article.slug}.html" class="block bg-white border border-gray-200 rounded-lg overflow-hidden shadow hover:shadow-md transition-all duration-300 mb-6">
        <img src="${article.cover_image}" alt="${article.title}" class="w-full h-48 object-cover" />
        <div class="p-4">
          <h2 class="text-2xl font-bold text-primary-950 mb-2">${article.title}</h2>
          <p class="text-sm text-gray-600 mb-4">Ditulis oleh <strong>${article.author || 'Admin'}</strong> • ${publishedDate}</p>
        </div>
      </a>
    `
  })
}
