const express = require('express');
const userController = require('../controllers/user');

const router = express.Router();

router.post('/api/v1/auth/signup', userController.createUser);
router.post('/api/v1/auth/signin', userController.LoginUser);
router.put('/api/v1/users/:id', userController.updateUser);

module.exports = router;