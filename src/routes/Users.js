import express from 'express';
import { register } from '../controllers/users/Users.js';

export const userRoute = express.Router();

userRoute.post('/register', register);
