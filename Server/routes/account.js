/* eslint-disable semi */
const express = require('express');
const accountController = require('../controllers/account');

const route = express.Router();

route.get('/api/v1/accounts', accountController.getAllAccounts);
route.get('/api/v1/accounts/:id', accountController.getAccount);

module.exports = route;