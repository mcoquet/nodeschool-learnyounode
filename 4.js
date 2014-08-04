/*
	Write a program that uses a single asynchronous filesystem operation to read a file and print the number of newlines it contains to the console (stdout), similar to running cat file | wc -l.

	The full path to the file to read will be provided as the first command-line argument.
*/

var filename = process.argv[2];
var fs = require("fs");

function handler(err,x){
	var lines = x.split("\n");
	var size = lines.length-1;
	console.log(size);
}

fs.readFile(filename,{encoding:"utf-8"},handler);

