var http = require("http");
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var urls = {url1:false,url2:false,url3:false};


function checkresults(){
	if (urls.url1 && urls.url2 && urls.url3 )
	{
		console.log(urls.url1);
		console.log(urls.url2);
		console.log(urls.url3);
	}
}

function genericHandler(stream,index){
	var totalstring = ""
	stream.setEncoding("utf8")
	stream.on("data",function(data){
		totalstring += data;
	})
	stream.on("end",function(){
		urls[index] = totalstring;		
		checkresults();
	})
	stream.on("error",console.error);
}

http.get(url1,function(s){ genericHandler(s,"url1"); });
http.get(url2,function(s){ genericHandler(s,"url2"); });
http.get(url3,function(s){ genericHandler(s,"url3"); });
