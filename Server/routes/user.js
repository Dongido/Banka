const express = require('express');
const userController = require('../controllers/user');

const router = express.Router();

 router.post('/api/v1/auth/signin', userController.LoginUser);

module.exports = router;