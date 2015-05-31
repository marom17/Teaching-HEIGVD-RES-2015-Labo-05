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

var tabFrontEnd = {};
var tabBackEnd = {};
var serv=[];
var nbserv=0;
var update=false;

s.bind(hearthprotocol.PROTOCOL_PORT, function() {
  console.log("Joining multicast group");
  s.addMembership(hearthprotocol.PROTOCOL_MULTICAST_ADDRESS);
});

// This call back is invoked when a new datagram has arrived.
s.on('message', function(msg, source) {
	var type=msg.toString();
	var adresse=source.address.toString();
	if(type==="frontend"){
		tabFrontEnd[adresse]=new Date().getTime();
		if(serv.indexOf(adresse)==-1){
				serv.push(adresse);
		}
		
	}
	else if(type==="backend"){
		tabBackEnd[adresse]=new Date().getTime();
		if(serv.indexOf(adresse)==-1){
				serv.push(adresse);
		}
	}
});

function updateConf(){
	var that=this;
	updateConf.prototype.update=function(){		
		update=false;
		console.log("verif");
		if(serv.length!=nbserv){
			console.log("Changement du nombre de serveur");
			nbserv=0;
			update=true;
		}
		for( var key in tabFrontEnd){
			if((tabFrontEnd[key]!=-1)&&((new Date().getTime()-tabFrontEnd[key]) > 10000)){				
				tabFrontEnd[key]=-1;
				update=true;
				console.log(key+" ne répond plus");
			}
		}
		for( var key in tabBackEnd){
			if((tabBackEnd[key]!=-1)&&((new Date().getTime()-tabBackEnd[key]) > 10000)){
				tabBackEnd[key]=-1;
				update=true;
				console.log(key+" ne répond plus");
			}
		}
		
		if(update==true){
			var fs =require('fs');
			var text;
			text=fs.readFileSync('/app/head.txt','utf8')+"\n";
			nbserv=0;
			var i=1;
			for( var key in tabBackEnd){
				if(tabBackEnd[key]!=-1){
					nbserv++;
					text+="\t\tBalancerMember \"http://";
					text+=key+":80\"\n";
				}
				
			}
		
			text+=fs.readFileSync('/app/mid.txt','utf8')+"\n";

			for( var key in tabFrontEnd){
				if(tabFrontEnd[key]!=-1){
					nbserv++;
					text+="\t\tBalancerMember \"http://";
					text+=key;
					text+=":80\" route="+i+"\n";
					i++;
				}
			}
			text+=fs.readFileSync('/app/end.txt','utf8')+"\n";;
			message=new Buffer(text);
			up.send(message,0,message.length,updateprotocol.PROTOCOL_PORT,updateprotocol.PROTOCOL_MULTICAST_ADDRESS, function(err,bytes){});
			console.log("update");
			update=false;
		}
		serv=[];

	}
	setInterval(that.update,10000);
}

var init=new updateConf();