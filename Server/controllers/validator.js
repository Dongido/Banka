
class ReqValidators {
  ValidateTransact(req, res, next)
  {
    if (!req.body.accountNumber) {
      return res.status(400).send({
        errror: 'Account Number type is required',
      });
    } if (!req.body.amount) {
      return res.status(400).send({
        errror: 'amount is required',
      });
    }
    if (!req.body.accountBalance) {
      return res.status(400).send({
        errror: '​ “Account Balance is required',
      });
    }
    if (!req.body.cashier) {
      return res.status(400).send({
        error: 'Cashier is required',
      });
    }
    next();
  }

  ValidateUser(req, res, next)
  {
    if (!req.body.email) {
      return res.status(400).send({
        error: 'Email is required',
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
    next();
  }

  ValidateAccount(req, res, next) {
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
    next();
  }

}

const ReqValidator = new ReqValidators();
export default ReqValidator;
