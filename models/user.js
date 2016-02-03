var db = require("../db");

var passport = require('passport-local-sequelize');

var User = passport.defineUser(db, {
  // No options
});

module.exports = User;
