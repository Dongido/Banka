import express from 'express';
import userController from '../controllers/user';
import UserAuth from '../controllers/userAuthenicate';
import ReqValidator from '../controllers/validator';

const router = express.Router();

router.get('/api/v1/users', userController.getAllUsers);

router.delete('/api/v1/users/:id', userController.deleteUser);

export default router;