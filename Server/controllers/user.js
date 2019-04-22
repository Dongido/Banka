/* eslint-disable no-else-return */
/* eslint-disable class-methods-use-this */
import jwt from 'jsonwebtoken';
import users from '../model/UserData';

class UsersController {
  // GET ALL USERS -- FUNCTION
  getAllUsers(req, res) {
    return res.status(200).send({
      message: 'users retrieved successfully',
      users,
    });
  }

  // GET A USER --FUNCTION
  getUser(req, res) {
    const id = parseInt(req.params.id, 10);
    users.map((user) => {
      if (user.id === id) {
        return res.status(200).send({
          message: 'user retrieved successfully',
          user,
        });
      }
    });
    return res.status(404).send({
      error: 'user does not exist',
    });
  }

  // CREATE NEW USER -- FUNCTION
  createUser(req, res) {
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
    const Uemail = req.body.email;
    const logins = users.filter(user => Uemail === user.email);
    if (logins) {
      const Loginuser = {
        id: parseInt(req.body.id),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
      };
      jwt.sign(Loginuser, 'secretkey', { expiresIn: '2 days' }, (err, token) =>
      {
        res.json({ token });
      });

      jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
          return res.status(403).send({
            error: 'Oops! Authentication failed',
          });
        } else {
          return res.status(200).send({
            success: 'true',
            message: 'Logged In successfully',
            Loginuser,
            authData,
          });
        }
      });
    }
    res.status(400).send({
      error: 'User do not exist, make sure you enter credentials correctly',
    });

  }


   // DELETE A USER RECORD FUNCTION
  deleteUser(req, res) {
    const id = parseInt(req.params.id, 10);
    let thisUser;
    let itemIndex;
    users.map((user, index) => {
      if (user.id === id) {
        thisUser = user;
        itemIndex = index;
      }
    });

    if (!thisUser) {
      return res.status(404).send({
        error: 'user not found',
      });
    }
    users.splice(itemIndex, 1);

    return res.status(200).send({
      message: 'user deleted successfuly',
    });
  }
}

const userController = new UsersController();
export default userController;
