import express from 'express';
import transactController from '../controllers/transaction';
import ReqValidator from '../controllers/validator';
import UserAuth from '../controllers/userAuthenicate';

const routes = express.Router();

routes.post('/api/v1/transactions/:acctNo/debit', UserAuth.verifyToken, ReqValidator.ValidateTransact, transactController.debitTransaction);
routes.post('/api/v1/transactions/:acctNo/credit', UserAuth.verifyToken, ReqValidator.ValidateTransact, transactController.creditTransaction);

export default routes;