const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/user.js');
const route = require('./routes/account.js');
const routes = require('./routes/transaction.js');

require('dotenv').config();

  const app = express();

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(router);
  app.use(route);
  app.use(routes);

  const port = process.env.PORT || 5588;

  app.listen(port, () => {
    console.log(`server running on port ${port}`)
  });

  module.exports = app;
