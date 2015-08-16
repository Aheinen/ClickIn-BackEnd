var express = require('express');
var router = express.Router();
var Session = require('../models/session');

// var Session = require('./models/session');

// var testSessionHIMom = new Session({
//   code: 'testhimom',
// });

// testSessionHIMom.save(function(err) {
//   if (err) throw err;
//   console.log('Session was saved successfully!');
// });

// GET sessions listing
router.get('/', function(req, res, next) {

  Session.find({}, function(err, sessions) {
    if (err) throw err;

    res.json(sessions);
  });

});

// GET session by code
router.get('/:session_code', function(req, res, next) {

  Session.find({ code: req.params.session_code }, function(err, sessions) {
    if (err) throw err;

    res.json(sessions);
  });

});

// Post new session
router.post('/', function(req, res, next) {

  var newSession = new Session(req.body);

  console.log(req.body);
  console.log("hi");

  newSession.save(function(err) {
    if (err) throw err;

    res.json({ result: "success" });
  });

});

module.exports = router;