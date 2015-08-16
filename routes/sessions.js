var express = require('express');
var router = express.Router();

/* GET sessions listing. */
router.get('/', function(req, res, next) {
  res.json({code: "sessions listing"});
});

/* GET session by code */
router.get('/:session_code', function(req, res, next) {

  res.json({code: req.params.session_code});
});

module.exports = router;