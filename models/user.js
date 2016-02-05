var db = require("../db");

var Sequelize = require('sequelize');

var User = db.define('user', {
  email: { type: Sequelize.STRING, allowNull: false },
  hash: { type: Sequelize.STRING, allowNull: false }
});

User.sync();

module.exports = User;
