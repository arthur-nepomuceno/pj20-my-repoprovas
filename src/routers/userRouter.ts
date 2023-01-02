import { Router } from "express";
import { createUser, loginUser } from "../controllers/userController";
import { checkSchema } from "../middlewares/checkSchema";
import { userSchema, loginSchema } from "../schemas/userSchema";

const userRouter = Router();

userRouter.post('/signup', checkSchema(userSchema), createUser)
userRouter.post('/signin', checkSchema(loginSchema), loginUser)

export default userRouter