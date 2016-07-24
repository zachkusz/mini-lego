'use strict';

var express = require('express');
var path = require('path');
var exphbs  = require('express-handlebars');
var bodyParser = require('body-parser');
var mongoose = require('mongoose'); //youtube guy also required mongodb why?

var app = express();

//handlebar stuffs
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('index'); //automaticly looks for .handlebars extension
});

app.get('/browse/', function (req, res) {
  res.render('browse');
});

// Serve back static files
//app.use(express.static(path.join(__dirname, '/public')));// primes way
app.use('/public', express.static('public')); //tutorial way

//set port and listen
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function() {
  console.log('Listening on port: ', app.get('port'));
});
