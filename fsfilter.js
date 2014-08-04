module.exports = function(dir,extension,callback){
	var fs = require("fs");
	function Handler(err,list){
		if(err){ return callback(err); }

		var filteredList = list.filter(function(file){
			var f = file.split(".");
			var ext = f[1] || null;
	
			if (ext == extension){
				return file;
			}
		});

		callback(null,filteredList);
	}

	fs.readdir(dir,Handler);
}
