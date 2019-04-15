/* eslint-disable semi */
const express = require('express');
const accountController = require('../controllers/account');

const route = express.Router();

route.get('/api/v1/accounts', accountController.getAllAccounts);
route.get('/api/v1/accounts/:id', accountController.getAccount);
route.post('/api/v1/accounts', accountController.createAccount);
route.delete('/api/v1/account/:AcctNo', accountController.deleteAccount);
route.patch('/api/v1/account/:AcctNo', accountController.changeStatus);

module.exports = route;