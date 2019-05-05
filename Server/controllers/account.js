/* eslint-disable class-methods-use-this */
import accounts from '../model/accountData';

class AccountsController {
  // GET ACCOUNTS --FUNCTION
  getAllAccounts(req, res) {
    return res.status(200).send({
      status: 200,
      message: 'Accounts retrieved successfully',
      accounts,
    });
  }

  // GET SINGLE BANK ACCOUNT --FUNCTION
  getAccount(req, res) {
    const id = parseInt(req.params.id, 10);
    accounts.map((account) => {
      if (account.id === id) {
        return res.status(200).send({
          message: 'Account retrieved successfully',
          account,
        });
      }
    });
    return res.status(404).send({
      error: 'Account does not exist',
    });
  }

  // CREATE NEW BANK ACCOUNT
  createAccount(req, res) {
    const rand = String(Math.random());
    const accountNo = `68${rand.slice(2, 10)}`;

    const account = {
      id: accounts.length + 1,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      accountNumber: parseInt(accountNo),
      createdOn: req.body.createdOn,
      type: req.body.type,
      status: 'Draft',
      openingBalance: parseFloat(req.body.openingBalance),
      accountBalance: parseFloat(req.body.openingBalance),
    };
    const acct = parseInt(accountNo);
    const accExist = accounts.find(acc => acct === acc.accountNumber);
    if (!accExist) {
      accounts.push(account);
      return res.status(201).send({
        status: 201,
        message: 'Account added successfully',
        account,
      });
    }
    return res.status(403).send({
      message: 'This account already exist',
    });
  }

  // DELETE SINGLE BANK ACCOUNT -- FUNCTION
  deleteAccount(req, res) {
    const id = parseInt(req.params.AcctNo, 10);
    let thisAccount;
    let itemIndex;
    accounts.map((account, index) => {
      if (account.accountNumber === id) {
        thisAccount = account;
        itemIndex = index;
      }
    });
    if (!thisAccount) {
      return res.status(404).send({
        error: 'Account not found',
      }); 
    }
    accounts.splice(itemIndex, 1);

    return res.status(200).send({
      message: 'Account deleted successfuly',
    });
  }

  // ACTIVATE & DEACTIVATE ACCOUNT --FUNCTION
  changeStatus(req, res) {
    if (!req.body.status) {
      return res.status(400).send({
        error: 'Status is required',
      });
    }
    const id = parseInt(req.params.AcctNo, 10);

    // eslint-disable-next-line prefer-destructuring
    const status = req.body.status;
    const result = accounts.find(account => id === account.accountNumber);
    if (result) {
      result.status = status;
      const data = result;
      return res.status(200).send({
        status: 200,
        message: `Account successfully updated, status is now ${status}`,
        data,
      });
    }
    return res.status(500).send({ error: 'Something went wrong make sure this account exist' });
  }
}

const accountController = new AccountsController();
export default accountController;
