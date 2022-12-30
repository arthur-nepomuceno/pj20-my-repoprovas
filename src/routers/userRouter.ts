import { Router } from "express";
import { createUser } from "../controllers/userController";
import checkSchema from "../middlewares/checkSchema";
import { userSchema } from "../schemas/userSchema";

const userRouter = Router();

userRouter.post('/signup', checkSchema(userSchema) ,createUser)

export default userRouter