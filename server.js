/*
	Start server with server-rendering: env NODE_ENV=production node server
	Start server without server-rendering: node server
*/

const express = require("express");
const app = express();
const document = require('./src/document.js');

app.use(express.static(__dirname+"/public", {index: false}));

app.get("/*", function(req, res) {
	res.send(document);
});

var server = app.listen(3333, function() {
	console.log('Listening on port %d', server.address().port);
});

server.on('uncaughtException', function(req, res, err) {
	console.log(err);
	
	req.log.error({
		req: req,
		res: res,
		route: route,
		err: err
	}, 'uncaught exception');

	if (!res.headersSent) {
		req.log.error('sending error response from uncaught exception');
		res.send(err);
	}
})
