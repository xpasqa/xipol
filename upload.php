<?php
$target_dir = "img/uploads/";
$target_file = $target_dir . basename($_FILES["file"]["name"]);

if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
    echo json_encode([
        "success" => true,
        "url" => $target_file
    ]);
} else {
    echo json_encode([
        "success" => false,
        "message" => "Upload gagal"
    ]);
}
?>