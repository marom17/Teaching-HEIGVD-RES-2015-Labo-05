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
http.open('get', 'http://192.168.42.42/api/', true);
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
			document.getElementById('div1').innerHTML="Probleme serveur";
		}
		document.getElementById('bt1').innerHTML="Avoir l'heure";
    }
}