var fs = require("fs");
var http = require("http");
var filePath = process.argv[3];

var server = http.createServer(function(req,res){
	var fS = fs.createReadStream(filePath);
	fS.pipe(res);
});

server.listen(process.argv[2]);
