import mongoose from 'mongoose';

const RecipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  listIngredients: {
    type: Array,
    required: true,
  },
  method: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
});

export default RecipeSchema;
