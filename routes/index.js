const router = require('express').Router();
const NotFoundError = require('../errors/NotFoundError');

const cardsRoutes = require('./cards');
const usersRoutes = require('./users');

router.use('/users', usersRoutes);
router.use('/cards', cardsRoutes);

app.all('*', (req, res, next) => {
  next(new NotFoundError('Неверный адрес'));
});

module.exports = router;
