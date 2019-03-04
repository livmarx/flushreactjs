const express = require('express');
const router = express.Router();
const { Toilet, User, Review } = require('../db/index');

// Get all toilets
router.get('/', async function(req, res, next) {
  console.log('in get all toilets');
  try {
    const allToilet = await Toilet.findAll();
    res.status(200).send(allToilet);
  } catch (error) {
    next(error);
  }
});

// Get particular toilet
router.get('/:toiletId', async function(req, res, next) {
  try {
    const id = req.params.toiletId;
    const particularUsersToilet = await Toilet.findById(id);
    console.log('Particular Toilet!');
    res.status(200).send(particularUsersToilet);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
