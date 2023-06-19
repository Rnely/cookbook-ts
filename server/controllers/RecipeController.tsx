import { Request, Response } from 'express';
import { RecipeModel as Recipe } from '../models/recipeModel/RecipeModel';
import { v4 as uuidv4 } from 'uuid';

export const getRecipes = async (req: Request, res: Response) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
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

export const updateRecipeComments = async (req: Request, res: Response) => {
  try {
    const { userName, userId, comment } = req.body;

    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    const commentId = uuidv4();

    // Add the user's new comment to the comments array
    recipe.comments.push({
      commentId,
      userName,
      userId,
      comment,
      likes: 0,
      likedBy: [],
    });

    // Update the recipe in the database
    const updatedRecipe = await Recipe.updateOne(
      { _id: req.params.id },
      { $set: { comments: recipe.comments } },
    );

    res.status(200).json(updatedRecipe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateCommentLikes = async (req: Request, res: Response) => {
  try {
    const { commentId, userId, currentUserId } = req.body;

    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    // Find the comment with matching commentId and userId
    const comment = recipe.comments.find(
      (c) => c.commentId === commentId && c.userId === userId,
    );
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    // Check if currentUserId already exists in the likedBy array
    const userIndex = comment.likedBy.indexOf(currentUserId);
    if (userIndex > -1) {
      // User has already liked the comment, remove the like
      comment.likes -= 1;
      comment.likedBy.splice(userIndex, 1);

      // Update the recipe in the database
      const updatedRecipe = await Recipe.updateOne(
        { _id: req.params.id },
        { $set: { comments: recipe.comments } },
      );

      return res
        .status(200)
        .json({ message: 'Removed like from comment', updatedRecipe });
    } else {
      // Increase the likes of the comment by 1
      comment.likes += 1;

      // Add currentUserId to the likedBy array
      comment.likedBy.push(currentUserId);

      // Update the recipe in the database
      const updatedRecipe = await Recipe.updateOne(
        { _id: req.params.id },
        { $set: { comments: recipe.comments } },
      );

      res.status(200).json({ message: 'Added like to comment', updatedRecipe });
    }
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
