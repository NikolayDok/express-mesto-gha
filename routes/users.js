const usersRoutes = require('express').Router();

const {
  createUser,
  getUser,
  getUsers,
  updateAvatar,
  updateProfile,
} = require('../controllers/users');

usersRoutes.get('/', getUsers);

usersRoutes.get('/:userId', getUser);

usersRoutes.post('/', createUser);

usersRoutes.patch('/me', updateProfile);

usersRoutes.patch('/me/avatar', updateAvatar);

module.exports = usersRoutes;
