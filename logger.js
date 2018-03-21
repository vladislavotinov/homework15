var event = require('events').EventEmitter;
var http = require('http');
var port = 3000;

var logger = new event();

logger.on('logIn',function(req){

	
	console.log("\nUser log in!\n");
	console.log(req.headers);
});

logger.on('someAction',function(req){
	console.log(req.method);
	console.log("User do");
});

logger.on('logOut', function(req){
	console.log(req.headers);
	console.log("User logOut");
});

var server = http.createServer(function(req,res){
	
	if (req.url == '/')
	{
		logger.emit('logIn',req);
		res.end();
	}
	
	else if (req.url == '/registr')
	{
		logger.emit('someAction',req);
		res.end();
	}

	else if (req.url == '/out')
	{
		logger.emit('logOut',req);
		res.end();
	}

}).listen(port,function()
{
	console.log('go to localhost:3000');
})

