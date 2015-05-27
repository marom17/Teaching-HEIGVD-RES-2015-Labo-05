<!DOCTYPE html>
<html>
<head>

<script>
var http;

function createRequestObject()
{
    if(window.XMLHttpRequest)
    { // Mozilla, Safari, ...
        http = new XMLHttpRequest();
    }
    else if(window.ActiveXObject)
    { // Internet Explorer
        http = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return http;
}

function onClick(){
document.getElementById('bt1').innerHTML="Chargement";
createRequestObject();
http.open('get', 'http://192.168.42.42/api', true);
http.onreadystatechange = handleAJAXReturn;
http.send(null);

}

function handleAJAXReturn()
{
    if(http.readyState == 4)
    {
        if(http.status == 200)
        {
            document.getElementById('div1').innerHTML=http.responseText;
			
        }
		else{
			document.getElementById('div1').innerHTML="Problème serveur";
		}
		document.getElementById('bt1').innerHTML="Get External Content";
    }
}
</script>

</head>
<body>

<div id="div1"><h2>Let jQuery AJAX Change This Text</h2></div>

<button onclick="onClick();" id="bt1">Get External Content</button>
<br/>
<p>Ce service vous est fourni par <b>
<?php
echo $_SERVER['SERVER_ADDR'];
?>
</b></p>

</body>
</html>
