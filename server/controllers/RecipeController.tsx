import { Request, Response } from 'express';
import { RecipeModel as Recipe } from '../models/recipeModel/RecipeModel';

export const getRecipes = async (req: Request, res: Response) => {
  try {
    const { page, pageSize, filterRating, recipeDiet, query, pagination } =
      req.query;
    const skipAmount =
      (parseInt(page as string) - 1) * parseInt(pageSize as string);
    const limitAmount = parseInt(pageSize as string);

    const filterCriteria: any = {};

    if (filterRating) {
      filterCriteria.avgRating = { $gte: parseInt(filterRating as string) };
    }

    if (recipeDiet && recipeDiet !== 'Any') {
      filterCriteria.diet = { $in: [recipeDiet as string] };
    }

    if (query) {
      filterCriteria.title = { $regex: query as string, $options: 'i' };
    }

    const totalRecipes = await Recipe.countDocuments(filterCriteria);
    const totalPages = Math.ceil(totalRecipes / limitAmount);

    const recipesQuery = Recipe.find(filterCriteria);

    if (pagination) {
      recipesQuery.skip(skipAmount).limit(limitAmount);
    }
    const recipes = await recipesQuery;

    res.json({ recipes, totalPages });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getRecipeById = async (req: Request, res: Response) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    res.json(recipe);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const saveRecipe = async (req: Request, res: Response) => {
  const recipe = new Recipe(req.body);
  if (req.file) {
    recipe.image = req.file.path;
    recipe.listIngredients = JSON.parse(req.body.listIngredients);
    recipe.method = JSON.parse(req.body.method);
  }
  try {
    const insertedRecipe = await recipe.save();
    res.status(201).json(insertedRecipe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateRecipe = async (req: Request, res: Response) => {
  try {
    const updatedRecipe = await Recipe.updateOne(
      { _id: req.params.id },
      { $set: req.body },
    );
    res.status(200).json(updatedRecipe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateRecipeRating = async (req: Request, res: Response) => {
  try {
    const { userId, rating } = req.body;

    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    // Check if the user has already rated the recipe
    const userRating = recipe.userRating.find((r) => r.user === userId);
    if (userRating) {
      return res
        .status(400)
        .json({ message: 'User has already rated this recipe' });
    }

    // Add the user's new rating to the userRating array
    recipe.userRating.push({ user: userId, rating });

    // Calculate the new average rating for the recipe
    const totalRating = recipe.userRating.reduce(
      (acc, cur) => acc + cur.rating,
      0,
    );
    const avgRating =
      recipe.userRating.length > 0 ? totalRating / recipe.userRating.length : 0;
    const roundedAvgRating = Math.round(avgRating * 2) / 2; // round to nearest .5 or whole number

    // Update the recipe in the database
    const updatedRecipe = await Recipe.updateOne(
      { _id: req.params.id },
      { $set: { userRating: recipe.userRating, avgRating: roundedAvgRating } },
    );

    res.status(200).json(updatedRecipe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteRecipe = async (req: Request, res: Response) => {
  try {
    const deletedRecipe = await Recipe.deleteOne({ _id: req.params.id });
    res.status(200).json(deletedRecipe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
