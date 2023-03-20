require('dotenv').config();

import { Request, Response } from 'express';
import express from 'express';
import bcrypt from 'bcryptjs';
import Joi from '@hapi/joi';
import jwt from 'jsonwebtoken';
import { UserModel as User } from '../models/userModel/UserModel';

const registerSchema = Joi.object({
  name: Joi.string().min(6).required(),
  password: Joi.string().min(6).required(),
  regDate: Joi.string().min(6).required(),
});
const loginSchema = Joi.object({
  name: Joi.string().min(6).required(),
  password: Joi.string().min(6).required(),
});

const router = express.Router();

router.post('/cookbook/register', async (req: Request, res: Response) => {
  const { error } = registerSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const userExists = await User.findOne({ name: req.body.name });

  if (userExists) return res.status(400).send('User already exists');

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    password: hashPassword,
    regDate: req.body.regDate,
  });

  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post('/cookbook/login', async (req: Request, res: Response) => {
  const { error } = loginSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await User.findOne({ name: req.body.name });

  if (!user) return res.status(400).send('Name or password is wrong');

  const validPass = await bcrypt.compare(
    req.body.password,
    user.password.toString(),
  );
  if (!validPass) return res.status(400).send('Name or password is wrong');

  if (!process.env.TOKEN_SECRET) {
    throw new Error('JWT_KEY must be defined');
  }
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header('auth-token', token).send(token);
});

export default router;
