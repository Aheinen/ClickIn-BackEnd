var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sessionSchema = new Schema({
  code: String,
  created_at: Date,
  updated_at: Date
});

var Session = mongoose.model('Session', sessionSchema);

module.exports = Session;