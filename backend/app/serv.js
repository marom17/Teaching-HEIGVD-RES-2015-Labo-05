var http = require('http');
var fs = require('fs');
var i=0;
var mot=["la raison du plus fort est toujours la meilleur","Ne t'attends qu'à toi seul, c'est un commun Proverbe",
"Il se faut entr'aider, c'est la loi de nature"]
//var index = fs.readFileSync('index.html');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var os = require("os");
  networkInterfaces = os.networkInterfaces();
  var i=0;
  var index="Le mot de jours vous est servis par ";
for (var itf in networkInterfaces) {
	i++;
	for (var addressIndex in networkInterfaces[itf]) {
		var address = networkInterfaces[itf][addressIndex];
		if(i==2){
		index+=address.address;
		break;
		}
	}
}
  index+=" "+mot[i%mot.length];
  i++;
  res.end(index);
}).listen(80);