var express = require('express');
var logger = require('morgan');
var app = express();

//set logger
app.use(logger());

//this will return a json object with desired fields no matter what is asked of it, as long as method it GET
app.use(function(req,res) {

	if (req.method === 'GET') {
		//lifted from https://stackoverflow.com/questions/8107856/how-to-determine-a-users-ip-address-in-node
		var ip = (req.headers['x-forwarded-for'] ||
		req.connection.remoteAddress ||
     	req.socket.remoteAddress ||
     	req.connection.socket.remoteAddress).split(",")[0];


		var obj = {
			ipaddress: ip,
			language: req.headers['accept-language'].split(',')[0],
			software: req.headers['user-agent'].split('(')[1].split(')')[0]
		};

		res.status(200).json(obj);
	} else {
		//if method is not GET, return error and empty object
		res.status(405).json({});
	}
})

//listen on port passed in arg if not null, otherwise listen on port 1337
if (process.argv[2]) {
	app.listen(process.argv[2]);
} else {
	app.listen(1337);
}