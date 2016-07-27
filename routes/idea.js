'use strict';

var express = require('express');
var router = express.Router();
var path = require('path');
var Resource = require('../models/resourcesModel');


router.post('/', function (req, res) {
  console.log(req.body);
  var resource = new Resource(req.body);
  resource.save(function (err) {
    if (err) {
      res.sendStatus(500);
      return;
    }
    res.sendStatus(201);
  });
});

module.exports = router;
