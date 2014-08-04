var net = require("net");
var dateformat = require("dateformat");

var server = net.createServer(function(socket){
	var D = new Date();
	socket.end(dateformat(D,"yyyy-mm-dd HH:MM")+"\n");
});

server.listen(process.argv[2]);
