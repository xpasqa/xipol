<?php
$slug = $_GET['slug'] ?? basename($_SERVER['REQUEST_URI'], ".html");

// Ambil metadata dari Supabase
$apiUrl = "https://zpniygdnkrrgllgxfjiv.supabase.co/rest/v1/articles?slug=eq.$slug&select=title,cover_image,content";
$headers = [
  "apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpwbml5Z2Rua3JyZ2xsZ3hmaml2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0OTQ4NDQsImV4cCI6MjA2MzA3MDg0NH0.zRa40N2t-uENazXYk46O0WJoOhAzk5McKmapofv5Lpk",
  "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpwbml5Z2Rua3JyZ2xsZ3hmaml2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0OTQ4NDQsImV4cCI6MjA2MzA3MDg0NH0.zRa40N2t-uENazXYk46O0WJoOhAzk5McKmapofv5Lpk"
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $apiUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
$response = curl_exec($ch);
curl_close($ch);

$data = json_decode($response, true);
$article = $data[0] ?? null;

$title = $article["title"] ?? "Artikel";
$description = isset($article["content"]) ? strip_tags(substr($article["content"], 0, 160)) : "Artikel dari Ilmu Politik UIN Bandung.";
$cover_image = $article["cover_image"] ?? "/img/default.jpg";
?>
<!DOCTYPE html>
<html lang="id">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title><?= htmlspecialchars($title) ?> | Ilmu Politik UIN Bandung</title>
  <meta name="description" content="<?= htmlspecialchars($description) ?>" />
</head>

<body class="bg-gray-50 text-gray-800 font-onest">
  <div id="header"></div>
  <script src="components/header.js"></script>
  <script src="components/style.js"></script>

  <div class="max-w-4xl mx-auto px-4 pt-6">
    <a href="/news.html" class="text-sm text-primary-900 hover:underline">← Kembali ke Semua Artikel</a>
  </div>

  <section class="py-12">
    <div class="max-w-4xl mx-auto px-4">
      <div id="article-content" class="space-y-6 text-lg leading-relaxed"></div>
    </div>
  </section>

  <div id="footer"></div>
  <script src="components/footer.js"></script>

  <script type="module">
    import { supabase } from './js/supabaseClient.js'

    const slug = window.location.pathname.split("/").pop().replace(".html", "")
    const container = document.getElementById("article-content")

    if (!slug) {
      container.innerHTML = `<p class="text-red-500">Slug tidak ditemukan.</p>`
      throw new Error("Slug missing")
    }

    const { data: articles, error } = await supabase
      .from("articles")
      .select("title, author, content, cover_image, created_at")
      .eq("slug", slug)
      .limit(1)

    if (error || !articles || articles.length === 0) {
      container.innerHTML = `<p class="text-red-500">Artikel tidak ditemukan.</p>`
    } else {
      const article = articles[0]
      const publishedDate = new Date(article.created_at).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })

      container.innerHTML = `
        <img src="${article.cover_image}" alt="${article.title}" class="w-full h-64 object-cover rounded-lg mb-4 shadow" />
        <h1 class="text-4xl font-bold text-primary-950 mb-2">${article.title}</h1>
        <p class="text-sm text-gray-500 mb-4">Ditulis oleh <strong>${article.author || 'Admin'}</strong> • ${publishedDate}</p>
        <div class="prose max-w-none mt-6">${article.content}</div>
      `
    }
  </script>
</body>

</html>