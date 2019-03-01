const Sequelize = require('sequelize');

const db = require('./db');

const User = db.define('page', {
  name: { type: Sequelize.STRING },
  email: {
    type: Sequelize.STRING,
    isEmail: true,
  },
});

module.exports = User;
