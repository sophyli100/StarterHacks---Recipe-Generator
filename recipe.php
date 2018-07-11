<?php
if (isset($_POST['Submit']))
{

    $ingredients = $_POST['ingredients'];
    $file = fopen("recipe.txt", "w+") or die ("file not open");

    $s = $ingredients;
    fputs($file,$s) or die ("Data not write");

    fclose($file);
}
?>
