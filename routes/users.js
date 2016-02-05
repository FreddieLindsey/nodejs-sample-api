var passport = require('passport');
var User = require('../models/user');

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({ user: req.user });
});

module.exports = router;
