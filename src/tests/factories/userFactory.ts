import { faker } from "@faker-js/faker";

async function newUser() {
    const newUser = {
        email: faker.internet.email(),
        password: 'my-fake-password',
        confirm: 'my-fake-password'
    }

    return newUser;
}

export {
    newUser
}