var Sequelize = require("sequelize");

var dbname = "nodejssampleapi";
if (process.env.NODE_ENV === 'development') {
  dbname += "dev";
} else if (process.env.NODE_ENV === 'test') {
  dbname += "test";
}

var db = new Sequelize(dbname, null, null, {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

console.log("Database connected:\t" + dbname);

module.exports = db;
