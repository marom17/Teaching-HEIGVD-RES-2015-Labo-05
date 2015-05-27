var http;

function createRequestObject()
{
    var http;
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
alert("Message");
document.getElementById('bt1').innerHTML="Chargement";
http.open('get', 'http://192.168.42.42/api', true);
http.onreadystatechange = handleAJAXReturn;
http.send(null);
alert("fin");

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
    }
}