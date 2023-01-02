import prisma from "../databases/db";

async function findCategoryById(id: number) {
    return prisma.categories.findFirst({
        where: {
            id
        }
    })
}

export {
    findCategoryById
}