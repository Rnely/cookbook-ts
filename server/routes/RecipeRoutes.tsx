import express from 'express';
import {
  getRecipes,
  getRecipeById,
  saveRecipe,
  updateRecipe,
  deleteRecipe,
  updateRecipeRating,
} from '../controllers/RecipeController';

const router = express.Router();

router.get('/cookbook/recipes', getRecipes);
router.get('/cookbook/recipes/:id', getRecipeById);
router.post('/cookbook/recipes', saveRecipe);
router.patch('/cookbook/recipes/:id', updateRecipe);
router.patch('/cookbook/recipes/:id/rating', updateRecipeRating);
router.delete('/cookbook/recipes/:id', deleteRecipe);

export default router;
