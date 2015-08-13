/*
  intrik8-core

*/
'use strict';
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var app = express();
var port = process.env.PORT || 8080;
var router = express.Router();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
  extended: true
  }));
app.use(bodyParser.json());

router.use(function(req, res, next) {
    console.log(req.method, req.url);
    next();
});


router.get('/', function(req, res){
  res.render('main/index', {title: 'hey', message: 'Hello'});
});
app.use('/', router);

app.listen(port);
console.log('Server started at port ' + port)
