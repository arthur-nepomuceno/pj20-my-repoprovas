import prisma from "../databases/db";
import { NewTest } from "../types/testTypes";

async function findCategoryById(id: number) {
    return prisma.categories.findFirst({
        where: {
            id
        }
    })
}

async function findTeacherDisciplineById(id: number) {
    return prisma.teachersDisciplines.findFirst({
        where: {
            id
        }
    })
}

async function insertTest(test: NewTest) {
    return await prisma.tests.create({
        data: test
    })
}

export {
    findCategoryById,
    findTeacherDisciplineById,
    insertTest
}