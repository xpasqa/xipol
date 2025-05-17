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
    container.innerHTML += `
      <a href="article.html?slug=${article.slug}" class="block p-4 border rounded mb-4">
        <img src="${article.cover_image}" class="h-48 w-full object-cover rounded mb-2">
        <h2 class="text-xl font-semibold">${article.title}</h2>
      </a>
    `
  })
}
