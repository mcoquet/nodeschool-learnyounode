var http = require("http");
var url = require("url");
var dateformat = require("dateformat");
var server = http.createServer(function(req,res){
	if (req.method != "GET"){ res.end("send me GET please"); }
	var parsedUrl = url.parse(req.url);
	var params = parsedUrl.query.split("&");
	var dateString = params[0].split("=")[1];
	res.writeHead(200,{ 'Content-Type': 'application/json' });	

	if (parsedUrl.pathname == "/api/parsetime"){
		result = {
			hour: Number(dateformat(dateString,"HH")),
	 		minute: Number(dateformat(dateString,"MM")),
	 		second: Number(dateformat(dateString,"s"))
		};
	}
	if (parsedUrl.pathname == "/api/unixtime") {
		result = {unixtime: (new Date(dateString)).getTime() }
	}

	res.end(JSON.stringify(result));

});

server.listen(process.argv[2]);
