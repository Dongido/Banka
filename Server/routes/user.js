import express from 'express';
import userController from '../controllers/user';
import UserAuth from '../controllers/userAuthenicate';
import ReqValidator from '../controllers/validator';

const router = express.Router();

router.get('/api/v1/users', userController.getAllUsers);
router.get('/api/v1/users/:id', userController.getUser);
router.post('/api/v1/auth/signup', ReqValidator.ValidateUser, userController.createUser);
router.post('/api/v1/auth/signin', UserAuth.verifyToken, userController.LoginUser);
router.put('/api/v1/users/:id', userController.updateUser);
router.delete('/api/v1/users/:id', userController.deleteUser);

export default router;
