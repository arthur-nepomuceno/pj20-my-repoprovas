import { Router } from "express";
import userRouter from "./userRouter";

const routers = Router();

routers.use(userRouter)

export default routers