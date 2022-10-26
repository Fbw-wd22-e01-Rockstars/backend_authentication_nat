import User from "../models/userModel.js";
import { validationResult } from "express-validator";

export const signIn = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.verifyUser(email, password, next);
  res.status(200).json(user);
  try {
  } catch (error) {
    next(error);
  }
};

export const signUp = async (req, res, next) => {
  const { email, password } = req.body;
  try {
//check if user already exists
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
//create new user
    const user = await User(req.body);
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
