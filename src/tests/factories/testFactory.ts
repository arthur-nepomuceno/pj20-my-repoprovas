import { faker } from "@faker-js/faker";

function newTest() {
    const newTest = {
        name: faker.datatype.string(7),
        pdfUrl: faker.internet.url(),
        categoryId: faker.datatype.number({min: 1, max: 3}),
        teacherDisciplineId: faker.datatype.number({min: 1, max: 6})
    }

    return newTest
}

export {
    newTest
}