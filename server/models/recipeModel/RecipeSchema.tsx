import mongoose from 'mongoose';

const RecipeSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  listIngredients: {
    type: Array,
    required: true,
  },
  method: {
    type: Array,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
  diet: {
    type: String,
    required: true,
  },
  avgRating: {
    type: Number,
    required: false,
  },
  userRating: {
    type: Array,
    required: false,
  },
  image: {
    type: String,
    required: true,
  },
});

export default RecipeSchema;
