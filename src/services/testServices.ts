import * as testRepository from "../repositories/testRepository";
import { NewTest } from "../types/testTypes";

async function checkCategoryId(categoryId: number) {
    const response = await testRepository.findCategoryById(categoryId)

    if (!response) throw {
        type: 'invalid_category',
        message: '_The category you are informing does not exist._'
    }

    return;
}

async function checkTeacherDisciplineId(teacherDisciplineId: number) {
    const response = await testRepository.findTeacherDisciplineById(teacherDisciplineId)

    if (!response) throw {
        type: 'invalid_teacher_discipline_combination',
        message: '_The teacher/discipline combination you are informing does not exist._'
    }

    return;
}

async function addTest(test: NewTest) {
    return testRepository.insertTest(test);
}

async function getTestsGroupedByDiscipline() {
    const response = testRepository.findTests()
    return response;
}

export {
    checkCategoryId,
    checkTeacherDisciplineId,
    addTest,
    getTestsGroupedByDiscipline
}