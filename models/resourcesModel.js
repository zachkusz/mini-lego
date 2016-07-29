var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ResourceSchema = new Schema({
  type: String,
  user: { type: String, default: 'anon' },
  title: String,
  url: String,
  featured: { type: Boolean, default: false }
});

var Resource = mongoose.model('Resource', ResourceSchema);

module.exports = Resource;
