import * as testRepository from "../repositories/testRepository"

async function checkCategoryId(categoryId: number) {
    const response = await testRepository.findCategoryById(categoryId)

    if(!response) throw {
        type: 'invalid_category',
        message: '_The category you are informing does not exist._'
    }

    return;
}

// async function checkTeacherDisciplineId(teacherDisciplineId: number) {
//     const response = await testRepository.findTeacherDisciplineById(teacherDisciplineId)

//     if(!response)
// }

export {
    checkCategoryId
}