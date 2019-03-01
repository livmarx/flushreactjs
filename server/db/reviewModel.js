const Sequelize = require('sequelize');

const db = require('./db');

const Review = db.define('page', {
  rating: {
    type: Sequelize.INTEGER,
    allowNull: true,
    defaultValue: null,
    validate: { min: 1, max: 5 },
  },
});

module.exports = Review;
