var load = require('express-load');
var bodyParser = require('body-parser');
var express = require('express');

module.exports = function(){
	var app = express();

	//vars
	app.set('port', 3000);
	app.set('view engine', 'ejs');
	app.set('views', './app/views');

	//middleware
	app.use(express.static('./public'));
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(require('method-override')());
	// deprecated!
	// app.use(app.router);
	load('models', {cwd: 'app'})
		.then('controllers')
		.then('routes')
		.into(app);

	return app;
};