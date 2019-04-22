/* eslint-disable class-methods-use-this */

  // GET ACCOUNTS --FUNCTION
  getAllAccounts(req, res) {
    return res.status(200).send({
      success: 'true',
      message: 'Accounts retrieved successfully',
      accounts,
    });
  }


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


  