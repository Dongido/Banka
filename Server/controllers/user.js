/* eslint-disable no-else-return */
/* eslint-disable class-methods-use-this */
const fs = require('fs');

const data = fs.readFileSync('./model/User.json');
const users = JSON.parse(data);

class UsersController {

  // CREATE NEW USER -- FUNCTION
  createUser(req, res) {
    if (!req.body.email) {
      return res.status(400).send({
        error: 'Email is required',
      });
    } else if (!req.body.firstName) {
      return res.status(400).send({
        error: 'First Name is required',
      });
    } else if (!req.body.lastName) {
      return res.status(400).send({
        error: 'Last Name is required',
      });
    }
    const rand = String(Math.random());
    const token = `hk${rand.slice(2, 16)}_bj`;
    const user = {
      id: users.length + 1,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      DOB: req.body.DOB,
      country: req.body.country,
      state: req.body.state,
      city: req.body.city,
      address: req.body.address,
      type: req.body.type,
      token,
      isAdmin: req.body.isAdmin,
    };
    users.push(user);
    return res.status(201).send({
      message: 'User added successfully',
      user,
    });
  }

  // LOGIN USER -- FUNCTION
  LoginUser(req, res) {
    if (!req.body.email) {
      return res.status(400).send({
        error: 'Email is required',
      });
    } else if (!req.body.password) {
      return res.status(400).send({
        error: 'Password is required',
      });
    }
    const Uemail = req.body.email;
    const rand = String(Math.random());
    const token = `hk${ rand.slice(2, 16)}_bj`;

    const logins = users.filter(user => Uemail === user.email);
    console.log(logins);
    if (logins) {
      const Loginuser = {
        id: parseInt(req.body.id),
        token,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
      };
      return res.status(200).send({
        success: 'true',
        message: 'Logged In successfully',
        Loginuser,
      });
    }
    res.status(400).send({
      error: 'User do not exist, make sure you enter credentials correctly',
    });
  }

}

const userController = new UsersController();
module.exports = userController;
