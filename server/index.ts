import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import RecipeRoutes from './routes/RecipeRoutes';
import AuthRoutes from './routes/AuthRoutes';

const app = express();
mongoose.connect('mongodb://localhost:27017/cookbook', {});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));

app.use(cors());
app.use(express.json());
app.use(RecipeRoutes);
app.use(AuthRoutes);

app.listen(5000, () => console.log('Server up and running...'));
