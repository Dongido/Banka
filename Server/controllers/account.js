/* eslint-disable class-methods-use-this */
const fs = require('fs');
const data = fs.readFileSync('./model/Account.json');
const accounts = JSON.parse(data);

class AccountsController {

  // GET ACCOUNTS --FUNCTION
  getAllAccounts(req, res) {
    return res.status(200).send({
      success: 'true',
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
    if (!req.body.type) {
      return res.status(400).send({
        error: 'Account type is required',
      });
    } if (!req.body.firstName) {
      return res.status(400).send({
        error: 'First Name is required',
      });
    } if (!req.body.lastName) {
      return res.status(400).send({
        error: 'Last Name is required',
      });
    }
    if (!req.body.openingBalance) {
      return res.status(400).send({
        error: 'Opening amount is required',
      });
    }

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
    };
    accounts.push(account);
    return res.status(201).send({
      message: 'Account added successfully',
      account,
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
        error: 'Account not found'
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
    const result = accounts.filter(account => id === account.accountNumber);
    if (result) {
      result[0].status = status;
      const output = result[0];
      return res.status(200).send({
        message: `Account successfully updated, status is now ${status}`,
        output,
      });
    }
    return res.status(500).send({ error: 'Something went wrong make sure this account exist' });
  }

}

const accountController = new AccountsController();
// export default accountController;
module.exports = accountController;
