<?php
$data = json_decode(file_get_contents("php://input"), true);
$template = file_get_contents("template-article.html");

foreach ($data as $key => $value) {
    $template = str_replace("{{" . $key . "}}", $value, $template);
}

$slug = preg_replace('/[^a-zA-Z0-9\-]/', '', $data['slug']);
$targetFile = __DIR__ . "/{$slug}.html";

file_put_contents($targetFile, $template);
echo json_encode(["status" => "success", "file" => "{$slug}.html"]);