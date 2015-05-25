<!DOCTYPE html>
<html>
<head>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        $.ajax({url: "http://192.168.42.42/api", success: function(result){
            $("#div1").html(result);
        }});
    });
});
</script>
</head>
<body>

<div id="div1"><h2>Let jQuery AJAX Change This Text</h2></div>

<button>Get External Content</button>
<br/>
<p>Ce service vous est fourni par <b>
<?php
echo $_SERVER['SERVER_ADDR'];
?>
</b></p>

</body>
</html>
