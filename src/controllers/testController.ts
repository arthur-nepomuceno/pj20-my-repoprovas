import { Request, Response } from "express";
import * as testServices from "../services/testServices"

async function addTest(req: Request, res: Response) {
    const { name, pdfUrl, categoryId, teacherDisciplineId } = req.body

    // verificar se a categoria existe
    await testServices.checkCategoryId(categoryId);
    // verificar se a combição professorDisciplina existe
    // adicionar o teste ao banco de dados

    return res.status(201).send('New test added successfully.');
}

export {
    addTest
}