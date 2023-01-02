import { Router } from "express"
import userRouter from "./userRouter"
import testRouter from "./testRouter"

const routers = Router()

routers.use(userRouter)
routers.use(testRouter)

export default routers