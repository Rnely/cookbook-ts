import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import RecipeRoutes from './routes/RecipeRoutes';
import AuthRoutes from './routes/AuthRoutes';
import UserRoutes from './routes/UserRoutes';
require('dotenv').config();
const mongoUri = process.env.VITE_MONGO_URI;

const app = express();
mongoose.connect(mongoUri.toString(), {});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));

app.use(cors());
app.use(express.json());
app.use(RecipeRoutes);
app.use(AuthRoutes);
app.use(UserRoutes);

app.listen(5000, () => console.log('Server up and running...'));
