var express = require('express'),
	app = express(),
	http = require('http').Server(app),
	port = 3000;

app.use(express.static('public'));

http.listen(port, function(){
	console.log('running on port '+port);
});