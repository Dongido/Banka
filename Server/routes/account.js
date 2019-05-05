/* eslint-disable semi */
import express from 'express';
import accountController from '../controllers/account';
import ReqValidator from '../controllers/validator';
import UserAuth from '../controllers/userAuthenicate';

const route = express.Router();

route.get('/api/v1/accounts', UserAuth.verifyToken, accountController.getAllAccounts);
route.get('/api/v1/accounts/:id', UserAuth.verifyToken, accountController.getAccount);
route.post('/api/v1/accounts', UserAuth.verifyToken, ReqValidator.ValidateAccount, accountController.createAccount);
route.delete('/api/v1/account/:AcctNo', UserAuth.verifyToken, accountController.deleteAccount);
route.patch('/api/v1/account/:AcctNo', UserAuth.verifyToken, accountController.changeStatus);

export default route;