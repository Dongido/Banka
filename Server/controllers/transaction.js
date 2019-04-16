/* eslint-disable linebreak-style */
const fs = require('fs');

const dataA = fs.readFileSync('./model/Account.json');
const accounts = JSON.parse(dataA);

const dataT = fs.readFileSync('./model/Transaction.json');
const transactions = JSON.parse(dataT);

class TransactionsController {
  
  	 /* CREDIT CLIENT ACCOUNT */
  // eslint-disable-next-line class-methods-use-this
  creditTransaction(req, res) {
    if (!req.body.accountNumber) {
      return res.status(400).send({
        error: 'Account Number type is required',
      });
    } if (!req.body.cashier) {
      return res.status(400).send({
        error: 'Cashier is required',
      });
    } if (!req.body.amount) {
      return res.status(400).send({
        error: 'amount is required',
      });
    }
    if (!req.body.accountBalance) {
      return res.status(400).send({
        error: '​ “Account Balance is required',
      });
    }

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
// export default transactController;
module.exports = transactController;
