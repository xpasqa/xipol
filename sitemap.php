<?php
header('Content-Type: application/xml');

$apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpwbml5Z2Rua3JyZ2xsZ3hmaml2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0OTQ4NDQsImV4cCI6MjA2MzA3MDg0NH0.zRa40N2t-uENazXYk46O0WJoOhAzk5McKmapofv5Lpk";
$projectUrl = "https://zpniygdnkrrgllgxfjiv.supabase.co";
$siteUrl = "https://xipol.site";

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "$projectUrl/rest/v1/articles?select=slug,created_at");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "apikey: $apikey",
    "Authorization: Bearer $apikey",
    "Content-Type: application/json"
]);

$response = curl_exec($ch);
curl_close($ch);

$data = json_decode($response, true);

echo "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
echo "<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n";

// Homepage
echo "  <url>\n";
echo "    <loc>$siteUrl/</loc>\n";
echo "    <priority>1.0</priority>\n";
echo "  </url>\n";

// Artikel Pages
foreach ($data as $item) {
    $slug = htmlspecialchars($item['slug']);
    $updated = date('Y-m-d', strtotime($item['created_at']));
    echo "  <url>\n";
    echo "    <loc>$siteUrl/$slug.html</loc>\n";
    echo "    <lastmod>$updated</lastmod>\n";
    echo "    <priority>0.8</priority>\n";
    echo "  </url>\n";
}

echo "</urlset>";
