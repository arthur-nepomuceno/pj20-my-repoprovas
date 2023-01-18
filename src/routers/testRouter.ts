import { Router } from "express"
import { checkSchema } from "../middlewares/checkSchema"
import { testSchema } from "../schemas/testSchema"
import { addTest, getTestsGroupedByDiscipline } from "../controllers/testController"

const testRouter = Router()

testRouter.post('/test', checkSchema(testSchema), addTest)
testRouter.get('/tests/disciplines', getTestsGroupedByDiscipline)

export default testRouter