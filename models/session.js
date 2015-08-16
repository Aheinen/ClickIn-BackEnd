var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sessionSchema = new Schema({
  _id: Number,
  code: String,
  poll: {
    question: {content: String, count: Number},
    answer_1: {content: String, count: Number},
    answer_2: {content: String, count: Number},
    answer_3: {content: String, count: Number},
    answer_4: {content: String, count: Number}
  },
  created_at: Date,
  updated_at: Date
});

var Session = mongoose.model('Session', sessionSchema);

module.exports = Session;