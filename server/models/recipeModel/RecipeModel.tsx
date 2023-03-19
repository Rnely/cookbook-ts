import { model } from 'mongoose';
import { IRecipeDocument } from './RecipeTypes';
import RecipeSchema from './RecipeSchema';

export const RecipeModel = model<IRecipeDocument>('recipe', RecipeSchema);
