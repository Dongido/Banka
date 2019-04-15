const express = require('express');
const userController = require('../controllers/user');

const router = express.Router();

router.post('/api/v1/auth/signup', userController.createUser);

module.exports = router;