import app from "../app";
import supertest from "supertest";
import { newTest } from "./factories/testFactory";
import prisma from "../databases/db";

const agent = supertest(app)

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE tests RESTART IDENTITY CASCADE`
})

const body = newTest();

describe(`
    END-POINT: post/test
    TEST: add new test.
`, () => {

    it('Must return status 201 on adding a new test to the database.', async () => {

        const response = await agent.post('/test').send(body)

        expect(response.statusCode).toBe(201)
    })

    it('Must return status 422 on trying to add a test of a category that does not exist.', async () => {

        const response = await agent.post('/test').send({
            name: body.name,
            pdfUrl: body.pdfUrl,
            categoryId: 99,
            teacherDisciplineId: body.teacherDisciplineId
        })

        expect(response.statusCode).toBe(422)

    })

    it('Must return status 422 on trying to add a test from teacher/discipline that does not exist.', async () => {

        const response = await agent.post('/test').send({
            name: body.name,
            pdfUrl: body.pdfUrl,
            categoryId: body.categoryId,
            teacherDisciplineId: 99
        })

        expect(response.statusCode).toBe(422);

    })

})

afterAll(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE tests RESTART IDENTITY CASCADE`
    await prisma.$disconnect()
})