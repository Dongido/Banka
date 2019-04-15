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

}

const accountController = new AccountsController();
// export default accountController;
module.exports = accountController;
