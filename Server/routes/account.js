/* eslint-disable semi */

const route = express.Router();

route.get('/api/v1/accounts', accountController.getAllAccounts);
route.get('/api/v1/accounts/:id', accountController.getAccount);
