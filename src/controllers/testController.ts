import { Request, Response } from "express";
import * as testServices from "../services/testServices"

async function addTest(req: Request, res: Response) {
    const { name, pdfUrl, categoryId, teacherDisciplineId } = req.body

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

export {
    addTest
}