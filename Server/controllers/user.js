/* eslint-disable no-else-return */
/* eslint-disable class-methods-use-this */
import jwt from 'jsonwebtoken';
import users from '../model/UserData';

class UsersController {
  // GET ALL USERS -- FUNCTION
  getAllUsers(req, res) {
    jwt.verify(req.token, 'secretkey', (err) => {
      if (err) {
        return res.status(403).send({
          error: 'Oops! Authentication failed',
        });
      } else {
        return res.status(200).send({
          message: 'users retrieved successfully',
          users,
        });
      }
    });
  }

  // GET A USER --FUNCTION
  getUser(req, res) {
    const id = parseInt(req.params.id, 10);
    jwt.verify(req.token, 'secretkey', (err) => {
      if (err) {
        return res.status(403).send({
          error: 'Oops! Authentication failed',
        });
      } else {
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
    const Uemail = req.body.email;
    const userExist = users.find(us => Uemail === us.email);
    const token = jwt.sign(user, 'secretkey', { expiresIn: '2 days' });
    if (!userExist) {
      users.push(user);
      return res.status(201).send({
        message: 'User added successfully',
        status: 201,
        user,
        token,
      });
    }
    return res.status(403).send({
      message: 'This email is already taken',
    });
  }

  // LOGIN USER -- FUNCTION
  LoginUser(req, res) {
    const Uemail = req.body.email;
    const logins = users.find(user => Uemail === user.email);
    if (logins) {
      const Loginuser = {
        id: parseInt(logins.id),
        firstName: logins.firstName,
        lastName: logins.lastName,
        email: req.body.email,
      };
      const token = jwt.sign(Loginuser, 'secretkey', { expiresIn: '2 days' });
      return res.status(200).send({
        message: 'User successfully logged in',
        status: 200,
        Loginuser,
        token,
      });
    }
    res.status(400).send({
      error: 'User do not exist, make sure you enter credentials correctly',
    });
  }

  // UPDATE USER INFO --FUNCTION
  updateUser(req, res) {
    const id = parseInt(req.params.id, 10);
    let thisUser;
    let itemIndex;
    let updatedUser;
    jwt.verify(req.token, 'secretkey', (err) => {
      if (err) {
        return res.status(403).send({
          error: 'Oops! Authentication failed',
        });
      } else {
        users.map((user, index) => {
          if (user.id === id) {
            thisUser = user;
            itemIndex = index;
          }
        });
        if (thisUser) {
          let firstName = thisUser.firstName; let lastName = thisUser.lastName; 
          let password = thisUser.password;
          let address = thisUser.address; const email = thisUser.email;

          if (req.body.firstName) {
            firstName = req.body.firstName;
          } if (req.body.lastName) {
            lastName = req.body.lastName;
          } if (req.body.password) {
            password = req.body.password;
          }
          if (req.body.address) {
            address = req.body.address;
          }
          updatedUser = {
            id: thisUser.id,
            firstName,
            lastName,
            email,
            password,
            address,
          };
          users.splice(itemIndex, 1, updatedUser);
          return res.status(201).send({
            message: 'user updated successfully',
            updatedUser,
          });
        }
        return res.status(403).send({ error: 'Something went wrong make sure this user exist' });
      }
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
