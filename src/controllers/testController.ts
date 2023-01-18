import { Request, Response } from "express";
import * as testServices from "../services/testServices";
import { checkToken } from "../utilities/token"

async function addTest(req: Request, res: Response) {
    const { name, pdfUrl, categoryId, teacherDisciplineId } = req.body
    const token = req.headers.authorization.replace(/Bearer |'/g, '')
    
    await checkToken(token);
    await testServices.checkCategoryId(categoryId);
    await testServices.checkTeacherDisciplineId(teacherDisciplineId);
    await testServices.addTest({
        name,
        pdfUrl,
        categoryId,
        teacherDisciplineId
    })

    return res.status(201).send('New test added successfully.');
}

async function getTestsGroupedByDiscipline(req: Request, res: Response) {
    const token = req.headers.authorization.replace(/Bearer |'/g, '')
    await checkToken(token);

    const tests = await testServices.getTestsGroupedByDiscipline()

    return res.status(200).send(tests);
}

export {
    addTest,
    getTestsGroupedByDiscipline
}