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

async function findTests() {
    return await prisma.tests.findMany({
        select: {
            name: true,
            pdfUrl: true,
            categories: {
                select: {
                    name: true
                }
            },
            teachersDisciplines: {
                select: {
                    teachers: {
                        select: {
                            name: true
                        }
                    },
                    disciplines: {
                        select: {
                            name: true,
                            terms: {
                                select: {
                                    number: true
                                }
                            }
                        }
                    }
                }
            }
        },
        orderBy: {
            teachersDisciplines: {
                disciplines: {
                    terms: {
                        number: 'asc'
                    }
                }
            }
        }
    });
}

export {
    findCategoryById,
    findTeacherDisciplineById,
    insertTest,
    findTests
}