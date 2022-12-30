import prisma from "../databases/db";

async function findUserByEmailAddress(email: string) {
    return await prisma.users.findFirst({
        where: {
            email
        }
    })

}

async function insertUser(email: string, password: string) {

    return prisma.users.create({
        data: {
            email,
            password
        }
    })
}

export {
    findUserByEmailAddress,
    insertUser
}