<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Artikel - Xipol</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-gray-50 text-gray-900">
  <header class="bg-white shadow">
    <div class="max-w-4xl mx-auto py-4 px-6">
      <a href="news.html" class="text-blue-600 hover:underline">&larr; Back to News</a>
    </div>
  </header>

  <main class="max-w-4xl mx-auto py-6 px-6">
    <div id="article-content" class="space-y-4"></div>
  </main>

  <footer class="bg-white mt-10 py-4 text-center text-sm text-gray-500">
    &copy; 2025 Xipol. All rights reserved.
  </footer>

  <script type="module">
    import { supabase } from "./js/supabaseClient.js";

    const container = document.getElementById("article-content");
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("slug");

    if (!slug) {
      container.innerHTML = `<p class="text-red-500">Slug tidak ditemukan di URL</p>`;
      throw new Error("Slug not found");
    }

    const { data: articles, error } = await supabase
      .from("articles")
      .select("*")
      .eq("slug", slug);

    if (error || articles.length === 0) {
      container.innerHTML = `<p class="text-red-500">Artikel tidak ditemukan.</p>`;
    } else {
      const article = articles[0];
      container.innerHTML = `
          <img src="${article.cover_image}" class="w-full h-64 object-cover rounded mb-4" alt="${article.title}">
          <h1 class="text-3xl font-bold mb-2">${article.title}</h1>
          <p class="text-sm text-gray-500">${new Date(article.created_at).toLocaleDateString()}</p>
          <div class="prose prose-lg max-w-none">${article.content}</div>
        `;
    }
  </script>
</body>

</html>