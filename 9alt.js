var http = require("http");

var orderedList = [];
var doneCounter = 1;

function checkresults(){
	if (doneCounter == (process.argv.length-2)){
		orderedList.forEach(function(i){console.log(i)})
	}	
	else{ doneCounter++; }
}

function genericHandler(stream,index){
	var totalstring = ""
	stream.setEncoding("utf8")
	stream.on("data",function(data){
		totalstring += data;
	})
	stream.on("end",function(){
		orderedList[index] = totalstring;		
		checkresults();
	})
	stream.on("error",console.error);
}

process.argv.forEach(function(url,index){
	if (index < 2) { return false; }
	http.get(url,function(s){ genericHandler(s,index-2); });
})

