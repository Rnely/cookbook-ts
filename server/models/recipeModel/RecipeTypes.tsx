import { Document, Model } from 'mongoose';

export interface IRecipe {
  user: String;
  title: String;
  listIngredients: Array<String>;
  method: String;
  time: Number;
}

export interface IRecipeDocument extends IRecipe, Document {}
export interface IRecipeModel extends Model<IRecipeDocument> {}
