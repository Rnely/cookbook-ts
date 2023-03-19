import { model } from 'mongoose';
import { IUserDocument } from './UserTypes';
import UserSchema from './UserSchema';

export const UserModel = model<IUserDocument>('user', UserSchema);
