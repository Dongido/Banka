/* eslint-disable prefer-destructuring */
const server = 'http://localhost:5588/api/v1';

chai.use(chaiHttp);

describe('USER REQUEST', () => {
  describe('GET /', () => {
    it('Test should GET all the Bank accounts', (done) => {
      chai.request(server)
        .get('/accounts')
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
    // Test should get single user record
    it('Test should GET a single Bank account', (done) => {
      const id = 1;
      chai.request(server)
        .get(`/accounts/${id}`)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
    // Test should not get single user record
    it('Test should not GET Bank account', (done) => {
      const id = 10;
      chai.request(server)
        .get(`/accounts/${id}`)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });
  // User Test for POST endpoints
  describe('Test to create new Bank account', () => {
    describe('POST accounts', () => {
      const newAcc = {
        type: 'savings',
        firstName: 'Gideon',
        lastName: 'Ayo',
        openingBalance: 10000,
        accountNumber: 9039289201,
        status: 'Draft',
      };
      it('Test should POST new Bank account', (done) => {
        chai.request(server)
          .post('/accounts')
          .send(newAcc)
          .end((err, res) => {
            res.should.have.status(201);
            res.body.accounts.should.have.property('firstName');
            res.body.accounts.should.have.property('lastName');
            res.body.accounts.should.have.property('type');
            res.body.accounts.should.have.property('openingBalance');
            res.body.accounts.should.have.property('accountNumber');
            res.body.accounts.should.have.property('status');
            done();
          });
      });

      it('Test should not POST a new Bank account with missing payload fields', (done) => {
        const invalidPayload = {
          type: 'savings',
          firstName: 'Gideon'
        };
        chai.request(server)
          .post('/accounts')
          .send(invalidPayload)
          .end((err, res) => {
            res.should.have.status(400);
            done();
          });
      });
    });
  });

  // Test should a specific Bank account
    describe('/DELETE/:Account Number', () => {
        it('it should DELETE a Bank account given the Account number', (done) => {
            const accountNumber = 9039289201;
            chai.request(server)
            .delete(`/accounts/${accountNumber}`)
            .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('message').eql('Account deleted successfuly');
                done();
            });
        });

        it('it should not DELETE a Bank account given the Account number do not exist', (done) => {
            const accountNumber = 9039289201;
            chai.request(server)
            .delete(`/account/${accountNumber}`)
            .end((err, res) => {
                    res.should.have.status(404);
                    res.body.should.have.property('error').eql('Account not found');
                done();
            });
        });
    });

    it('it should UPDATE a Bank account status given the Account Number', (done) => {
        const accountNumber = 9039289201;
        chai.request(server)
        .patch(`/account/${accountNumber}`)
        .send({status: 'active'})
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.have.property('message');
            res.body.book.should.have.property('status');
        done();
        });
    });

    it('it should not UPDATE a Bank account status given the Account number do not match', (done) => {
        const accountNumber = 9039289201;
        chai.request(server)
        .patch(`/account/${accountNumber}`)
        .send({status: 'active'})
        .end((err, res) => {
            res.should.have.status(400);
            res.body.should.have.property('error');
        done();
        });
    });
});
