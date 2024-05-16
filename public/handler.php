<?php
$build_html = public_path("build/index.html");
if (file_exists($build_html)) {
    include $build_html;
} else {
    include public_path("fallback.php");
}
?>

