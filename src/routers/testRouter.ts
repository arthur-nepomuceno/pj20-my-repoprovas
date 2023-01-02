import { Router } from "express"
import { checkSchema } from "../middlewares/checkSchema"
import { testSchema } from "../schemas/testSchema"
import { addTest } from "../controllers/testController"

const testRouter = Router()

testRouter.post('/test', checkSchema(testSchema), addTest)

export default testRouter