var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ResourceSchema = new Schema({
  type: String,
  user: String,
  title: String,
  url: String,
  featured: { type: Boolean, default: false }
});

var Resource = mongoose.model('Resource', ResourceSchema);

module.exports = Resource;

//add mongodbroute to app.js
//add routes setup in app.js and maybe models somehow?
//make basic submit form on clinetside
