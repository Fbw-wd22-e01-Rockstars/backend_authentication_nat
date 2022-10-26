import userModel from '../models/userModel.js';
import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";

import authRouter from "./routes/auth.js"

//this is the main file that will run the server
//dotenv.config() is used to read the .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }))


const router = express.Router();

//ROUTES
//this is the route that will be used to access the authRouter
app.use("/auth", authRouter )
//this is the route that will be used to access the userRouter
app.use("/users", usersRouter);


//GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      error: {
        message: err.message,
      },
    });
  });

//CONNECT TO MONGODB

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`✨Server running on port: ${PORT}✨`),
    ),
  )
  .catch((error) => console.log(error));






