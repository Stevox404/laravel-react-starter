<?php
$build_html = "build/index.html";
if (file_exists($build_html)) {
    include $build_html;
} else {
    include "fallback.php";
}
?>
