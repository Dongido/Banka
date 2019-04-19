const express = require('express');
const userController = require('../controllers/user');

const router = express.Router();

router.get('/api/v1/users', userController.getAllUsers);
router.post('/api/v1/auth/signup', userController.createUser);
router.post('/api/v1/auth/signin', userController.LoginUser);
router.get('/api/v1/users/:id', userController.getUser);

module.exports = router;