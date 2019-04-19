const express = require('express');
const transactController = require('../controllers/transaction');

const routes = express.Router();

routes.post('/api/v1/transactions/:acctNo/credit', transactController.creditTransaction);

module.exports = routes;