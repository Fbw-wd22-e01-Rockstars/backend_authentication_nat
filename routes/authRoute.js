import express from "express";
import { signUp, signIn } from "../controllers/authControllers.js";


const router = express.Router();


//localhost:3000/auth/signUp
router.route("/signUp").post(signUp);

router.route("/signIn").post(signIn);

export default router;