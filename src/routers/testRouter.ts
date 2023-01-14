import { Router } from "express"
import { checkSchema } from "../middlewares/checkSchema"
import { testSchema } from "../schemas/testSchema"
import { addTest, getTestsGroupedByDiscipline, getTestsGroupedByTeachers } from "../controllers/testController"

const testRouter = Router()

testRouter.post('/test', checkSchema(testSchema), addTest)
testRouter.get('/tests/disciplines', getTestsGroupedByDiscipline)
testRouter.get('/tests/teachers', getTestsGroupedByTeachers)

export default testRouter