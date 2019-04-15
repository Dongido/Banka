/* eslint-disable prefer-destructuring */
const chai = require('chai');
const chaiHttp = require('chai-http');

const should = chai.should();
const app = require('../app')
;
const server = 'http://localhost:5588/api/v1';

chai.use(chaiHttp);

describe('USER REQUEST', () => {
  describe('GET /', () => {
    it('Test should GET all the users', (done) => {
      chai.request(server)
        .get('/users')
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
    // Test should get single user record
    it('Test should GET single the users', (done) => {
      const id = 1;
      chai.request(server)
        .get(`/users/${id}`)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
    // Test should not get single user record
    it('Test should not GET single the users', (done) => {
      const id = 10;
      chai.request(server)
        .get(`/users/${id}`)
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });
  // User Test for POST endpoints
  describe('Test user signup and login', () => {
    describe('POST auth/signup', () => {
      const newUser = {
        email: 'gideon@gmail.com',
        firstName: 'Gideon',
        lastName: 'Ayo',
        password: 'pass',
        DOB: '38-90-1990',
        country: 'nigeria',
        state: 'lagos',
        city: 'ikeja',
        address: '5 yola',
        type: 'client',
        isAdmin: 'false',
      };
      it('Test should create a new user', (done) => {
        chai.request(server)
          .post('auth/signup')
          .send(newUser)
          .end((err, res) => {
            res.should.have.status(201);
            res.body.user.should.have.property('firstName');
            res.body.user.should.have.property('lastName');
            res.body.user.should.have.property('email');
            done();
          });
      });

      it('Test should not POST a new user with missing payload fields', (done) => {
        const invalidPayload = {
          email: 'gideon@gmail.com',
          firstName: 'gideon',
        };
        chai.request(server)
          .post('/auth/signup')
          .send(invalidPayload)
          .end((err, res) => {
            res.should.have.status(400);
            done();
          });
      });
    });

    // Test the POST /auth/signin endpoint
    describe('POST /auth/signin', () => {
      it('Test should log the user in to the app', (done) => {
        const loginCredential = {
          email: 'gideon@gmail.com',
          password: 'pass',
        };
        chai.request(server)
          .post('/auth/signin')
          .send(loginCredential)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.user.should.have.property('token');
            res.body.user.should.have.property('password');
            res.body.user.should.have.property('email');
            done();
          });
      });
      it('Test should not log a user in with missing payload fields', (done) => {
        const loginCredential = {
          email: 'gideon@gmail.com',
        };

        chai.request(server)
          .post('/auth/signin')
          .send(loginCredential)
          .end((err, res) => {
            res.should.have.status(400);
            done();
          });
      });
    });
  });
});
