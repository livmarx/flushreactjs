const router = require('express').Router();

router.use('/toilets', require('./toiletRoutes'));
router.use('/users', require('./userRoutes'));
router.use('/reviews', require('./reviewRoutes'));

module.exports = router;
