'use strict';

var express = require('express');
var router = express.Router();
var path = require('path');
var request = require('request');
require('request').debug = true;
var key = 'HA5BBnZJvF'; //rebrickable api key


//!!!test call to get one set - not a true search call!!!
router.get('/search/:data', function(req, res) {
  var search = req.params.data;
  var options = {
    key: 'HA5BBnZJvF',
    url: 'https://rebrickable.com/api/get_set',
    format: 'json',
    set_id: 'SDCC2015-2'
  };

  function callback(err, res, body) {
    if (!err) {
      var info = JSON.parse(body);
      console.log(body);
    } else if (err) {
      console.log('error response from lego ' + err);
    } else {
      console.log('no error but no response???');
    }
  }
  request(options, callback);

});


module.exports = router;
