var args = process.argv;
var total = args.reduce(function(prev,curr,index)
	{ 
		if(index<2){ return 0; } 
		return prev+Number(curr);
	});
console.log(total);

