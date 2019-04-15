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
  
}

const accountController = new AccountsController();
// export default accountController;
module.exports = accountController;
