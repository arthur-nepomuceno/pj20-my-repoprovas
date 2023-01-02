// import app from "../app";
// import supertest from "supertest";
// import { newUser } from "./factories/userFactory";
// import prisma from "../databases/db";

// const agent = supertest(app);

// beforeEach(async () => {
//     await prisma.$executeRaw`TRUNCATE TABLE users`
// })

// const body = newUser();

// describe(`
//     END-POINT: post/signup
//     TEST: create new user.
// `, () => {

//     it('Must return status 201 and create a new user.', async () => {        
        
//         const response = await agent.post('/signup').send(body);

//         expect(response.statusCode).toBe(201);
//         expect(response.body.email).toBe(body.email)
//     })

//     it('Must return status 409 on trying to register an email that already exists at the database.', async () => {

//         await agent.post('/signup').send(body);

//         const response = await agent.post('/signup').send(body);

//         expect(response.statusCode).toBe(409);
//     })

//     it('Must return status 406 if password and confirmation of password do not match.', async () => {
        
//         const response = await agent.post('/signup').send({
//             email: body.email,
//             password: body.password,
//             confirm: 'intentionally-different-password'
//         })

//         expect(response.statusCode).toBe(406);
//     })
// })

// describe(`
//     END-POINT: post/signin
//     TEST: login user.
// `, () => {

//     it('Must return status 200 for a successful login AND return a token.', async () => {
        
//         await agent.post('/signup').send(body);
        
//         const response = await agent.post('/signin').send({
//             email: body.email,
//             password: body.password
//         });

//         expect(response.statusCode).toBe(200);
//         expect(response.body.token).not.toBeNull();
//     })

//     it('Must return status 401 for an unknown email.', async () => {
//         const response = await agent.post('/signin').send({
//             email: 'unknown_email@email.com',
//             password: 'whatever_password'
//         })

//         expect(response.statusCode).toBe(401);
//     })

//     it('Must return status 401 if password is incorrect.', async () => {
        
//         await agent.post('/signup').send(body);

//         const response = await agent.post('/signin').send({
//             email: body.email,
//             password: 'purposely_wrong_password'
//         })

//         expect(response.statusCode).toBe(401);
//     })
// })

// afterAll( async () => {
//     await prisma.$executeRaw`TRUNCATE TABLE users`;
//     await prisma.$disconnect()
// })