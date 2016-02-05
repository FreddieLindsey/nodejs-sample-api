var express = require('express');
var router = express.Router();

// Database connection
var db = require("../models/user");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ title: 'nodejs sample api' });
});

module.exports = router;
