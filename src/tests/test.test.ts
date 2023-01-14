import app from "../app";
import supertest from "supertest";
import { newTest } from "./factories/testFactory";
import { newUser } from "./factories/userFactory";
import { LoginUser } from "../types/userTypes";
import prisma from "../databases/db";

const agent = supertest(app)
const test = newTest()
const user = newUser()
async function newToken(user: LoginUser) {
    await agent.post('/signup').send(user);
    const login = await agent.post('/signin').send({
        email: user.email,
        password: user.password
    })

    const { token } = login.body;

    return token
}


beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE tests RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE users`
})

describe(`
    END-POINT: post/test
    TEST: add new test.
`, () => {

    it('Must return status 201 on adding a new test to the database.', async () => {

        const token = await newToken(user);
        const response = await agent.post('/test').set('Authorization', `Bearer ${token}`).send(test)

        expect(response.statusCode).toBe(201)
    })

    it('Must return status 422 on trying to add a test of a category that does not exist.', async () => {

        const token = await newToken(user);
        const response = await agent.post('/test').set('Authorization', `Bearer ${token}`).send({
            name: test.name,
            pdfUrl: test.pdfUrl,
            categoryId: 99,
            teacherDisciplineId: test.teacherDisciplineId
        })

        expect(response.statusCode).toBe(422)

    })

    it('Must return status 422 on trying to add a test from teacher/discipline that does not exist.', async () => {

        const token = await newToken(user);
        const response = await agent.post('/test').set('Authorization', `Bearer ${token}`).send({
            name: test.name,
            pdfUrl: test.pdfUrl,
            categoryId: test.categoryId,
            teacherDisciplineId: 99
        })

        expect(response.statusCode).toBe(422);

    })

})

describe(`
    END-POINT: get/tests/disciplines
    TEST: see tests grouped by disciplines.
`, () => {

    it('Must return status 500 if token is not valid.', async () => {

        const my_fake_token = 'my_fake_token'
        const response = await agent.get('/tests/disciplines').set('Authorization', `Bearer ${my_fake_token}`)

        expect(response.statusCode).toBe(500);
    })

    it('Must return status 200 and return a list of the tests.', async () => {

        await agent.post('/signup').send(user);
        const login = await agent.post('/signin').send({
            email: user.email,
            password: user.password
        })

        const { token } = login.body;

        const response = await agent.get('/tests/disciplines').set('Authorization', `Bearer ${token}`)

        expect(response.statusCode).toBe(200);
        expect(response.body).not.toBeNull();
    })

})

afterAll(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE tests RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE users`
    await prisma.$disconnect()
})