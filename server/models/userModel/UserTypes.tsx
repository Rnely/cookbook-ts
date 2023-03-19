import { Document, Model } from 'mongoose';

export interface IUser {
  name: String;
  password: String;
}

export interface IUserDocument extends IUser, Document {}
export interface IUserModel extends Model<IUserDocument> {}
