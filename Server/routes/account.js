/* eslint-disable semi */
import express from 'express';
import accountController from '../controllers/account';
import ReqValidator from '../controllers/validator';

const route = express.Router();

route.get('/api/v1/accounts', accountController.getAllAccounts);
route.get('/api/v1/accounts/:id', accountController.getAccount);
route.post('/api/v1/accounts', ReqValidator.ValidateAccount, accountController.createAccount);
route.delete('/api/v1/account/:AcctNo', accountController.deleteAccount);
route.patch('/api/v1/account/:AcctNo', accountController.changeStatus);

export default route;