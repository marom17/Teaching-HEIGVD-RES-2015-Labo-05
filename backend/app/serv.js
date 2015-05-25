var http = require('http');
var fs = require('fs');
var i=0;
var mot=["la raison du plus fort est toujours la meilleur","Ne t'attends qu'à toi seul, c'est un commun Proverbe",
"Il se faut entr'aider, c'est la loi de nature"]
//var index = fs.readFileSync('index.html');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var index="Le mot de jours vous est servis par ";
  //index+=ip.address();
  index+=" "+mot[i%mot.length];
  i++;
  res.end(index);
}).listen(80);