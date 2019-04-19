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

  // GET SINGLE BANK ACCOUNT -- FUNCTION
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
}

const accountController = new AccountsController();
// export default accountController;
module.exports = accountController;
