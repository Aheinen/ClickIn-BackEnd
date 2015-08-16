var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sessionSchema = new Schema({
  code: String,
  poll: {
    question: {content: String, count: Number},
    answers: [{id: Number, content: String, count: Number},
    {id: Number, content: String, count: Number},
    {id: Number, content: String, count: Number},
    {id: Number, content: String, count: Number}]
  },
  created_at: Date,
  updated_at: Date
});

var Session = mongoose.model('Session', sessionSchema);

module.exports = Session;