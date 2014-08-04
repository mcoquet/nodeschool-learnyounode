var http = require("http");
var url = process.argv[2];
function handler(stream){
	stream.setEncoding("utf8");
	stream.on("data",console.log);
}
http.get(url,handler)
