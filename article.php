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

  <!-- OG Meta Tags -->
  <meta property="og:title" content="<?= htmlspecialchars($title) ?>" />
  <meta property="og:description" content="<?= htmlspecialchars($description) ?>" />
  <meta property="og:image" content="<?= htmlspecialchars($image) ?>" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://ilmupolitik.uinsgd.ac.id/<?= $slug ?>.html" />
  <meta name="twitter:card" content="summary_large_image" />

  <!-- Open Graph Metadata -->
  <meta property="og:title" content="<?= $title ?>">
  <meta property="og:description" content="<?= $description ?>">
  <meta property="og:image" content="<?= $image ?>">
  <meta property="og:url" content="<?= $url ?>">
  <meta property="og:type" content="article">
  <meta property="article:published_time" content="<?= $published_time ?>">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="<?= $title ?>">
  <meta name="twitter:description" content="<?= $description ?>">
  <meta name="twitter:image" content="<?= $image ?>">

  <!-- Canonical URL -->
  <link rel="canonical" href="<?= $url ?>">

  <!-- Schema JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "<?= $title ?>",
    "image": ["<?= $image ?>"],
    "author": {
      "@type": "Organization",
      "name": "Ilmu Politik UIN Bandung"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ilmu Politik UIN Bandung",
      "logo": {
        "@type": "ImageObject",
        "url": "https://xipol.site/img/logo.png"
      }
    },
    "datePublished": "<?= $published_time ?>",
    "url": "<?= $url ?>",
    "description": "<?= $description ?>"
  }
  </script>

  <!-- Tailwind CSS + Config -->
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            onest: ["Onest", "sans-serif"],
          },
          colors: {
            primary: {
              950: "#450a0a",
              900: "#7f1d1d",
              700: "#b91c1c",
              300: "#fca5a5",
              400: "#f87171",
              600: "#dc2626",
            },
          },
        },
      },
    };
  </script>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Onest:wght@100;200;300;400;500;600;700;800;900&display=swap"
    rel="stylesheet" />
  <style>
    body {
      font-family: "Onest", sans-serif;
    }

    :root {
      --primary-color: #450a0a;
      --secondary-color: #7f1d1d;
      --accent-color: #b91c1c;
      --text-light: #fef2f2;
    }

    .bg-custom-primary {
      background-color: var(--primary-color);
    }

    .bg-custom-secondary {
      background-color: var(--secondary-color);
    }

    .bg-custom-accent {
      background-color: var(--accent-color);
    }

    .text-custom-light {
      color: var(--text-light);
    }

    .border-custom {
      border-color: var(--accent-color);
    }

    .hero-pattern {
      background-image: url("/api/placeholder/1600/900");
      background-size: cover;
      background-position: center;
      position: relative;
    }

    .hero-pattern::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(69, 10, 10, 0.95) 0%, rgba(69, 10, 10, 0.8) 50%, rgba(69, 10, 10, 0.6) 100%);
    }

    .hover-scale {
      transition: transform 0.3s ease;
    }

    .hover-scale:hover {
      transform: scale(1.03);
    }
  </style>
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