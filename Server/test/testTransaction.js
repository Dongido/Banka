/* eslint-disable prefer-destructuring */
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const app = require('../app');

const server = 'http://localhost:5588/api/v1/transactions';

chai.use(chaiHttp);

// Test to credit user account endpoints
describe('POST /Transactions', () => {
  describe('Test to credit user Bank account', () => {
    const accountNumber = 9039289201;
    const creditT = {
      cashier: 'gideon',
      amount: 20000.9,
      accountBalance: 35000.09,
      accountNumber: 9039289201,
    };
    it('Test should CREDIT Bank account', (done) => {
      chai.request(server)
        .post(`/${accountNumber}/credit`)
        .send(creditT)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.accounts.should.have.property('cashier');
          res.body.accounts.should.have.property('accountNumber');
          res.body.accounts.should.have.property('amount');
          res.body.accounts.should.have.property('accountBalance');
          done();
        });
    });

    it('Test should not CREDIT Bank account when Account number mismatch', (done) => {
      chai.request(server)
        .post(`/${accountNumber}/credit`)
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });

  describe('Test to debit user Bank account', () => {
    const accountNumber = 9039289201;
    const creditT = {
      cashier: 'gideon',
      amount: 20000.9,
      accountBalance: 35000.09,
      accountNumber: 9039289201,
    };
    it('Test should DEBIT Bank account', (done) => {
      chai.request(server)
        .post(`/${accountNumber}/debit`)
        .send(creditT)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.accounts.should.have.property('cashier');
          res.body.accounts.should.have.property('accountNumber');
          res.body.accounts.should.have.property('amount');
          res.body.accounts.should.have.property('accountBalance');
          done();
        });
    });

    it('Test should not DEBIT Bank account when Account number mismatch', (done) => {
      chai.request(server)
        .post(`/${accountNumber}/debit`)
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });
});
