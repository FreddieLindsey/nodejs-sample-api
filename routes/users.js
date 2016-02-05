var passport = require('passport');
var User = require('../models/user');

app = require('express').Router();

/* GET users listing. */
app.get('/', function(req, res, next) {
  res.json({ user: req.user });
});

/* POST users register */
app.post('/register', function(req, res, next) {
  return res.json({ message: 'Authentication succeeded' });
})

module.exports = app;
