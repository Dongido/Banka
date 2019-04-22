import express from 'express'
import transactController from '../controllers/transaction'
import ReqValidator from '../controllers/validator';

const routes = express.Router();

routes.post('/api/v1/transactions/:acctNo/debit', ReqValidator.ValidateTransact, transactController.debitTransaction);
routes.post('/api/v1/transactions/:acctNo/credit', ReqValidator.ValidateTransact, transactController.creditTransaction);

export default routes;