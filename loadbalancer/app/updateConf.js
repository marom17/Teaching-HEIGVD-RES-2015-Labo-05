/*

*/
var protocol = require('./updateConf-protocol');
var dgram = require('dgram');
var s = dgram.createSocket('udp4');

s.bind(protocol.PROTOCOL_PORT, function() {
  console.log("Joining multicast group");
  s.addMembership(protocol.PROTOCOL_MULTICAST_ADDRESS);
});

// This call back is invoked when a new datagram has arrived.
s.on('message', function(msg, source) {
	var sys=require('sys');
	var exec=require('child_process').exec;
	var child;
	var fs=require('fs');
	var json = JSON.parse(msg);
	console.log(msg.toString());
	if(json.num==1){
	fs.writeFileSync('/usr/local/apache2/conf/extra/balancerfront.conf',json.text);
	child=exec('chgrp www-data /usr/local/apache2/conf/extra/balancerfront.conf');
	console.log("front");
	}
	else{
	fs.writeFileSync('/usr/local/apache2/conf/extra/balancerback.conf',json.text);
	child=exec('chgrp www-data /usr/local/apache2/conf/extra/balancerback.conf');
	console.log("back");
	}
	child=exec("/usr/local/apache2/bin/apachectl restart",function (error, stdout, stderr){
  sys.print('stdout: ' + stdout);
  sys.print('stderr: ' + stderr);
  if (error !== null) {
    console.log('exec error: ' + error);
  }
});
	console.log("Update");
});