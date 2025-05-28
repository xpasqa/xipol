import { supabase } from './supabaseClient.js'

const params = new URLSearchParams(window.location.search)
const slug = params.get("slug")
const container = document.getElementById("article-content")

if (!slug) {
  container.innerHTML = `<p class="text-red-500">Slug tidak ditemukan di URL.</p>`
  throw new Error("Slug missing from query")
}

try {
  const { data: articles, error } = await supabase
    .from('articles')
    .select('title, author, content, cover_image, created_at')
    .eq('slug', slug)
    .limit(1)

  if (error) throw error
  if (!articles || articles.length === 0) {
    container.innerHTML = `<p class="text-red-500">Artikel tidak ditemukan.</p>`
    return
  }

  const article = articles[0]
  const publishedDate = new Date(article.created_at).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  container.innerHTML = `
    <img src="${article.cover_image}" class="w-full h-64 object-cover rounded mb-4" alt="${article.title}" />
    <h1 class="text-3xl font-bold mb-2">${article.title}</h1>
    <p class="text-sm text-gray-600 mb-4">Ditulis oleh <strong>${article.author || 'Admin'}</strong> • ${publishedDate}</p>
    <div class="prose prose-lg max-w-none">${article.content}</div>
  `
} catch (err) {
  console.error("Error loading article:", err)
  container.innerHTML = `<p class="text-red-500">Terjadi kesalahan saat memuat artikel.</p>`
}