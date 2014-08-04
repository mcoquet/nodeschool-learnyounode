var path = process.argv[2];
var extension = process.argv[3];
require("./fsfilter.js")(path,extension,function(err,list){
	if (err) { return console.error(err); }
	list.forEach(function(f){ console.log(f)});
});

