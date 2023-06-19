import { Document, Model } from 'mongoose';

export interface IUser {
  name: String;
  password: String;
  regDate: String;
  following: Array<String>;
  collections: {
    name: string;
    private: boolean;
    recipes: Array<String>;
  }[];
}

export interface IUserDocument extends IUser, Document {}
export interface IUserModel extends Model<IUserDocument> {}
