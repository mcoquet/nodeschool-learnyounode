var http = require("http");
var url1 = process.argv[2];


http.get(url1,function(s){ 
	s.setEncoding("utf8");
	var str = "";
	s.on("data",function(d){
		str += d;
	})
	s.on("end",function(){
		console.log(str.length)
		console.log(str)
	})
});
