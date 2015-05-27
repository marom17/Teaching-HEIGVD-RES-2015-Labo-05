<!DOCTYPE html>
<html>
<head>

<script src="./bouton.js"></script>

</head>
<body>
<h2>Quelle heure est-il?</h2>
<div id="div1"></div>
<p>
<button onclick="onClick();" id="bt1">Avoir l'heure</button>
</p>
<br/>
<p>Ce service vous est fourni par <b>
<?php
echo $_SERVER['SERVER_ADDR'];
?>
</b></p>

</body>
</html>
