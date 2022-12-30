import prisma from "../databases/db";
import { User } from "../types/userTypes";

async function findUserByEmailAddress(email: string) {
    return await prisma.users.findFirst({
        where:{
            email
        }
    })

}