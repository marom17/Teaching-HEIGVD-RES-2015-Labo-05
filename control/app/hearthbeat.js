/*
* Author: Romain Maillard
* Date: 20/05/2015
* But: ce programme envoit régulièrement un paquet contenant quel type de serveur c'est
*/

var hearthprotocol = require('./hearthbeat-protocol');
var updateprotocol = require('./updateConf-protocol');
var dgram = require('dgram');
var s = dgram.createSocket('udp4');
var up=dgram.createSocket('udp4');

var tabFrontEnd = [];
var tabBackEnd = [];

s.bind(hearthprotocol.PROTOCOL_PORT, function() {
  console.log("Joining multicast group");
  s.addMembership(hearthprotocol.PROTOCOL_MULTICAST_ADDRESS);
});

// This call back is invoked when a new datagram has arrived.
s.on('message', function(msg, source) {
	var type=msg.toString();
	var adresse=source.address.toString();
	if(type==="frontend"){
		if(tabFrontEnd.length==0){
			tabFrontEnd.push(adresse);
		}
		else{
		if(tabFrontEnd.indexOf(adresse)==-1){
			tabFrontEnd.push(adresse);
		}
		}
		
	}
	else if(type==="backend"){
		if(tabBackEnd.length==0){
			tabBackEnd.push(adresse);
		}
		else{
		if(tabBackEnd.indexOf(adresse)==-1){
			tabBackEnd.push(adresse);
		}
		}
	}
});

function updateConf(){
	var that=this;
	updateConf.prototype.update=function(){
	var fs =require('fs');
	var i=0;
	var text;
	var config = new Object();
	text=fs.readFileSync('/app/head.txt','utf8')+"\n";
	
	for(i=1;i<=tabBackEnd.length;i++){
		text+="\t\tBalancerMember \"http://";
		text+=tabBackEnd[i-1]+":80\"\n"
	}
	
	text+=fs.readFileSync('/app/mid.txt','utf8')+"\n";
	
	for(i=1;i<=tabFrontEnd.length;i++){
		text+="\t\tBalancerMember \"http://";
		text+=tabFrontEnd[i-1];
		text+=":80\" route="+i+"\n"
	}
	text+=fs.readFileSync('/app/end.txt','utf8')+"\n";;
	message=new Buffer(text);
	up.send(message,0,message.length,updateprotocol.PROTOCOL_PORT,updateprotocol.PROTOCOL_MULTICAST_ADDRESS, function(err,bytes){});
	}
	setInterval(that.update,10000);
}

var init=new updateConf();