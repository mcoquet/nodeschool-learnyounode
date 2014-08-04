/*
 * Create a program that prints a list of files in a given directory, filtered by the extension of the files. You will be provided a directory name as the first argument to your program (e.g. '/path/to/dir/') and a file extension to filter by as the second argument.
 *
 * For example, if you get 'txt' as the second argument then you will need to filter the list to only files that end with .txt.
 *
 * The list of files should be printed to the console, one file per line. You must use asynchronous I/O.
 *
 */

var path = process.argv[2];
var extension = process.argv[3];
var fs = require("fs");
function Handler(err,list){
	if(err){ console.error(err); return false;}
	list.map(function(file){
		var f = file.split(".");
		var ext = f[1] || null;
	
		if (ext == extension){
			console.log(file);
		}	
	});
}

fs.readdir(path,Handler);
	
