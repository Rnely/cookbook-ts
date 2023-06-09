import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    max: 2048,
    min: 6,
  },
  regDate: {
    type: String,
    required: true,
    max: 2048,
    min: 6,
  },
  following: {
    type: Array,
  },
  collections: {
    type: Array,
  },
});

export default UserSchema;
