/* eslint-disable linebreak-style */
const fs = require('fs');

const dataA = fs.readFileSync('./model/Account.json');
const accounts = JSON.parse(dataA);

const dataT = fs.readFileSync('./model/Transaction.json');
const transactions = JSON.parse(dataT);

class TransactionsController {


}

const transactController = new TransactionsController();
// export default transactController;
module.exports = transactController;
