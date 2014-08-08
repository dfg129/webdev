var express = require('express');
var app = express();
var router = express.Router();
var hbs = require('hbs');
 
app.set('view engine', 'html');
app.engine('html', hbs.__express);
 
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));
 
app.get('/', function(req, res) {
	res.sendfile('./dist/html/index.html');
});
 
app.listen(9000);