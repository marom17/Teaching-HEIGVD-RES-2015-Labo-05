<!DOCTYPE html>
<html>
<head>

</head>
<body>

<?php
echo "L'heure vous est presente par <b>";
echo $_SERVER['SERVER_ADDR'];
echo "</b>: ";
echo date("H:i:s");
?>

</body>
</html>
