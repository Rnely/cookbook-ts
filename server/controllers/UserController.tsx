import { Request, Response } from 'express';
import { UserModel as User } from '../models/userModel/UserModel';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const updatedUser = await User.updateOne(
      { _id: req.params.id },
      { $set: req.body },
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const addNewDataToUser = async (req: Request, res: Response) => {
  try {
    const updatedDataUser = await User.updateOne(
      { _id: req.params.id },
      { $push: req.body },
    );
    res.status(200).json(updatedDataUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateCollectionWithRecipe = async (
  req: Request,
  res: Response,
) => {
  try {
    const { userId, collectionName, recipeId } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Find the user collection by name
    const collection = user.collections.find((c) => c.name === collectionName);
    if (!collection) {
      return res.status(404).json({ message: 'Collection not found' });
    }

    // Check if the recipe ID already exists in the collection
    if (collection.recipes.includes(recipeId)) {
      return res
        .status(400)
        .json({ message: 'Recipe already exists in the collection' });
    }

    // Add the new recipe ID to the collection
    collection.recipes.push(recipeId);

    // Update the user in the database
    const updatedUser = await User.updateOne(
      { _id: userId, 'collections.name': collectionName },
      { $set: { 'collections.$.recipes': collection.recipes } },
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const deletedUser = await User.deleteOne({ _id: req.params.id });
    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
