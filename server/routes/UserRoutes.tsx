import express from 'express';
import {
  getUsers,
  getUserById,
  updateUser,
  addNewDataToUser,
  deleteUser,
  updateCollectionWithRecipe,
} from '../controllers/UserController';

const router = express.Router();

router.get('/cookbook/users', getUsers);
router.get('/cookbook/users/:id', getUserById);
router.patch('/cookbook/users/:id', updateUser);
router.post('/cookbook/users/:id', addNewDataToUser);
router.patch('/cookbook/users/:id/collections', updateCollectionWithRecipe);
router.delete('/cookbook/users/:id', deleteUser);

export default router;
