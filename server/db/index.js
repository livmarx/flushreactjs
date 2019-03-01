'use strict';
const db = require('./db');
const Toilet = require('./toiletModel');
const User = require('./userModel');
const Review = require('./reviewModel');

Toilet.hasMany(Review);
Review.belongsTo(Toilet);

User.hasMany(Review);
Review.belongsTo(User);

module.exports = {
  db,
  Toilet,
  User,
  Review,
};
