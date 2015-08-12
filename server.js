/*
  intrik8-core

*/
'use strict';
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var router = express.Router();

router.use(function(req, res, next) {

    // log each request to the console
    console.log(req.method, req.url);

    // continue doing what we were doing and go to the route
    next();
});


router.get('/', function(req, res){
  res.send('this is a test');
});

app.listen(port);
console.log('Server started at port ' + port)
