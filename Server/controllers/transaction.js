/* eslint-disable linebreak-style */
import accounts from '../model/accountData'
import transactions from '../model/TransactionData'

class TransactionsController {
	 /* DEBIT CLIENT ACCOUNT */
  // eslint-disable-next-line class-methods-use-this
  debitTransaction(req, res) {
    const acctNo = req.params.acctNo;
    const result = accounts.filter(account => acctNo === account.accountNumber);
    if (result) {
    	const transact = {
		    id: accounts.length + 1,
		    createdOn: req.body.createdOn,
		    type: 'debit',
		    accountNumber: parseInt(req.body.accountNumber),
		    cashier: parseInt(req.body.cashier),
		    amount: parseFloat(req.body.amount),
		    oldBalance: parseFloat(req.body.accountBalance),
		    newBalance: parseFloat(req.body.accountBalance) - parseFloat(req.body.amount),
	   };
	   transactions.push(transact);
	   return res.status(200).send({
	     message: 'Transaction successfully completed',
        transact,
	   });
    }
    return res.status(400).send({ error: 'Account not found' });
  }

  	 /* CREDIT CLIENT ACCOUNT */
  // eslint-disable-next-line class-methods-use-this
  creditTransaction(req, res) {
    const acctNo = req.params.acctNo;

    const result = accounts.filter(account => acctNo === account.accountNumber);
    if (result) {
      const transact = {
        id: accounts.length + 1,
        createdOn: req.body.createdOn,
        type: 'credit',
        accountNumber: parseInt(req.body.accountNumber),
        cashier: parseInt(req.body.cashier),
        amount: parseFloat(req.body.amount),
        oldBalance: parseFloat(req.body.accountBalance),
        newBalance: parseFloat(req.body.accountBalance) + parseFloat(req.body.amount),
      };
      transactions.push(transact);
      return res.status(200).send({
        message: 'Transaction successfully completed',
        transact,
      });
    }
    return res.status(400).send({ error: 'Account not found' });
  }
}

const transactController = new TransactionsController();
export default transactController;
