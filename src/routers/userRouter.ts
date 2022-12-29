import { Router } from "express";
import { createUser } from "../controllers/usersController";

const userRouter = Router();

userRouter.post('/signin', createUser)

export default userRouter