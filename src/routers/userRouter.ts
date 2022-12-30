import { Router } from "express";
import { createUser } from "../controllers/usersController";

const userRouter = Router();

userRouter.post('/signup', createUser)

export default userRouter