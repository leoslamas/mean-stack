var load = require('express-load');
var express = require('express');

module.exports = function(){
	var app = express();

	//vars
	app.set('port', 3000);
	app.set('view engine', 'ejs');
	app.set('views', './app/views');

	//middleware
	app.use(express.static('./public'));
	
	// deprecated!
	// app.use(app.router);

	load('models', {cwd: 'app'})
		.then('controllers')
		.then('routes')
		.into(app);

	return app;
};