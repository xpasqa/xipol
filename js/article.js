import { supabase } from './supabaseClient.js'

const params = new URLSearchParams(window.location.search)
const slug = params.get("slug")

const container = document.getElementById("article-content")

const { data: articles, error } = await supabase
  .from('articles')
  .select('*')
  .eq('slug', slug)

if (error || articles.length === 0) {
  container.innerHTML = `<p class="text-red-500">Artikel tidak ditemukan.</p>`
} else {
  const article = articles[0]
  container.innerHTML = `
    <img src="${article.cover_image}" class="w-full h-64 object-cover rounded mb-4">
    <h1 class="text-3xl font-bold mb-2">${article.title}</h1>
    <div class="prose prose-lg">${article.content}</div>
  `
}
