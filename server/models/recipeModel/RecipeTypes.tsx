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
    commentId: string;
    userName: string;
    userId: string;
    comment: string;
    likes: number;
    likedBy: {
      userId: String;
    }[];
  }[];
}

export interface IRecipeDocument extends IRecipe, Document {}
export interface IRecipeModel extends Model<IRecipeDocument> {}
