'use strict';

var express = require('express');
var path = require('path');
var exphbs  = require('express-handlebars');
var bodyParser = require('body-parser');
var mongoose = require('mongoose'); //youtube guy also required mongodb why?
var idea = require('./routes/idea');

var app = express();

// mongoose connection
var databaseURI = 'mongodb://localhost:27017/lego';

mongoose.connect(databaseURI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connection open ', databaseURI);
});
mongoose.connection.on('error', function (err) {
  console.log('Mongoose error connecting ', err);
});

//handlebar view engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve back static files
app.use(express.static(path.join(__dirname, 'public')));// primes way
//app.use('/public', express.static('public')); //tutorial way

app.get('/', function (req, res) {
  res.render('index'); //automaticly looks for .handlebars extension
});

app.get('/browse/', function (req, res) {
  res.render('browse');
});

app.use('/idea', idea);

//set port and listen
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function() {
  console.log('Listening on port: ', app.get('port'));
});
