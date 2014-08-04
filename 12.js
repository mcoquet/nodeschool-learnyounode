var http = require("http");

var server = http.createServer(function(req,res){

	if (req.method != "POST"){ return res.end("POST please"); }


	req.setEncoding("utf8");
	var reqBody = "";

	req.on("data",function(d){ reqBody += d; });

	req.on("end", function(){  
		res.end(reqBody.toUpperCase())
	})
	
});

server.listen(process.argv[2]);
