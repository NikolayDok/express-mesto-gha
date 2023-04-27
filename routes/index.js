const cardsRoutes = require('./cards');
const usersRoutes = require('./users');

const router = require('express').Router();

router.use('/users', usersRoutes);
router.use('/cards', cardsRoutes);

module.exports = router;
