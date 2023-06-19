import { Document, Model } from 'mongoose';

export interface IRecipe {
  user: String;
  userId: String;
  title: String;
  listIngredients: Array<String>;
  method: Array<String>;
  time: Number;
  diet: String;
  avgRating: Number;
  userRating: {
    user: string;
    rating: number;
  }[];
  image: string;
  comments: {
    userName: string;
    userId: string;
    comment: string;
  }[];
}

export interface IRecipeDocument extends IRecipe, Document {}
export interface IRecipeModel extends Model<IRecipeDocument> {}
