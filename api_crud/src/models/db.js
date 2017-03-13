const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_SCHEMA,
  port: process.env.DB_PORT,

  // connections happening to the system
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  logging: false,
});

// Sequelize will create the table
const url = sequelize.define('url', {
  name: {
    type: Sequelize.STRING,
  },
  longurl: {
    type: Sequelize.STRING,
  },
  shorturl: {
    type: Sequelize.STRING,
  },
});

sequelize.sync();

// Export Sequelize and URL

exports.sequelize = sequelize;
exports.url = url;
