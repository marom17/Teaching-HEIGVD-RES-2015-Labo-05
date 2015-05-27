/*
* Author: Romain Maillard
* Date: 20/05/2015
* But: ce programme envoit régulièrement un paquet contenant quel type de serveur c'est
*/
var protocol = require('./hearthbeat-protocol');

//Import du module pour l'utilisation de UDP
var dgram = require('dgram');

//Création d'un socket pour envoyer le datagramme UDP
var s = dgram.createSocket('udp4');

function HearthBeat(){

	var that = this;
	HearthBeat.prototype.update = function() {
		var payload = "backend";
		message = new Buffer(payload);
		s.send(message, 0, message.length, protocol.PROTOCOL_PORT, protocol.PROTOCOL_MULTICAST_ADDRESS, function(err, bytes){});
	}
    setInterval(that.update, 200);
}

var hb = new HearthBeat();


