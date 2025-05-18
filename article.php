<?php
$slug = $_GET['slug'] ?? '';
?>
<!DOCTYPE html>
<html lang="id">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Artikel</title>
  <!-- Header -->
  <div id="header"></div>
  <script src="components/header.js"></script>
  <script src="components/style.js"></script>

  <!-- Artikel -->
  <section class="py-16">
    <div class="max-w-4xl mx-auto px-4">
      <div id="article-content" class="space-y-6 text-lg leading-relaxed"></div>
    </div>
  </section>

  <!-- Footer -->
  <div id="footer"></div>
  <script src="components/footer.js"></script>

  <!-- Supabase Fetch -->
  <script type="module">
    import { supabase } from "./js/supabaseClient.js";

    const slug = "<?= htmlspecialchars($slug) ?>";
    const container = document.getElementById("article-content");

    if (!slug) {
      container.innerHTML = `<p class='text-red-500'>Slug tidak ditemukan di URL.</p>`;
      throw new Error("Slug missing");
    }

    const { data: articles, error } = await supabase
      .from("articles")
      .select("*")
      .eq("slug", slug)
      .limit(1);

    if (error || !articles || articles.length === 0) {
      container.innerHTML = `<p class='text-red-500'>Artikel tidak ditemukan.</p>`;
    } else {
      const article = articles[0];
      container.innerHTML = `
          <img src="${article.cover_image}" class="w-full h-72 object-cover rounded-lg shadow mb-4" alt="${article.title}">
          <h1 class="text-4xl font-bold text-primary-950">${article.title}</h1>
          <p class="text-sm text-gray-500">${new Date(article.created_at).toLocaleDateString()}</p>
          <div class="prose max-w-none mt-6">${article.content}</div>
        `;
    }
  </script>
  </body>

</html>