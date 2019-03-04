const Sequelize = require('sequelize');
const db = require('./db');

const Toilet = db.define('toilet', {
  name: { type: Sequelize.STRING },
  type: {
    type: Sequelize.STRING,
    values: ['in-store', 'public', 'in-home'],
  },
  address: {
    type: Sequelize.STRING,
  },
  latitude: {
    type: Sequelize.INTEGER,
    allowNull: true,
    defaultValue: null,
    validate: { min: -90, max: 90 },
  },
  longitude: {
    type: Sequelize.INTEGER,
    allowNull: true,
    defaultValue: null,
    validate: { min: -180, max: 180 },
  },
  rating: {
    type: Sequelize.INTEGER,
    allowNull: true,
    defaultValue: null,
    validate: { min: 1, max: 5 },
  },
});

module.exports = Toilet;
