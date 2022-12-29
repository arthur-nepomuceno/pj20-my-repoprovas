import app from "../app";
import supertest from "supertest";

const agent = supertest(app);

describe(`
    END-POINT: post/signin
    TEST: create new user.
`, () => {

    it('Must return status 201 and create a new user.', async () => {
        
        const response = await agent.post('/signin')

        expect(response.statusCode).toBe(201)
    })
})