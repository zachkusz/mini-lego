'use strict';

var express = require('express');
var router = express.Router();
var path = require('path');
var request = require('request');
require('request').debug = true;

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
    if (res) {
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

//trying a new api
router.get('/searchByName/:data', function(req, res) {
  var search = req.params.data;
  var options = {
    url: 'http://brickset.com/api/v2.asmx',
    apiKey: '94qE-3s9L-00lU',
    //query: search,
    method: 'checkKey'//,
    //pageSize: 20
  };

  function callback(err, res, body) {
    if (res) {
      console.log(body);
      return body;
    } else if (err) {
      console.log('error response from lego ' + err);
      return err;
    }
  }
  request(options, callback);
});


module.exports = router;
