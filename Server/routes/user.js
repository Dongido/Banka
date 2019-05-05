import express from 'express';
import userController from '../controllers/user';
import UserAuth from '../controllers/userAuthenicate';
import ReqValidator from '../controllers/validator';

const router = express.Router();

router.get('/api/v1/users', UserAuth.verifyToken, userController.getAllUsers);
router.get('/api/v1/users/:id', UserAuth.verifyToken, userController.getUser);
router.post('/api/v1/auth/signup', ReqValidator.ValidateSignUP, userController.createUser);
router.post('/api/v1/auth/signin', ReqValidator.ValidateSignIn, userController.LoginUser);
router.put('/api/v1/users/:id', UserAuth.verifyToken, userController.updateUser);
router.delete('/api/v1/users/:id', UserAuth.verifyToken, userController.deleteUser);

export default router;
