import express from 'express';
import {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from '../controllers/UserController';

const router = express.Router();

router.get('/cookbook/users', getUsers);
router.get('/cookbook/users/:id', getUserById);
router.patch('/cookbook/users/:id', updateUser);
router.delete('/cookbook/users/:id', deleteUser);

export default router;
