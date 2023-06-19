import express from 'express';
import {
  getRecipes,
  getRecipeById,
  saveRecipe,
  updateRecipe,
  deleteRecipe,
  updateRecipeRating,
  updateRecipeComments,
  updateCommentLikes,
} from '../controllers/RecipeController';
import upload from '../middleware/upload';

const router = express.Router();

router.get('/cookbook/recipes', getRecipes);
router.get('/cookbook/recipes/:id', getRecipeById);
router.post('/cookbook/recipes', upload.single('image'), saveRecipe);
router.patch('/cookbook/recipes/:id', updateRecipe);
router.patch('/cookbook/recipes/:id/rating', updateRecipeRating);
router.patch('/cookbook/recipes/:id/comments', updateRecipeComments);
router.patch('/cookbook/recipes/:id/commentLikes', updateCommentLikes);
router.delete('/cookbook/recipes/:id', deleteRecipe);

export default router;
