import { Request, Response } from "express";
import * as userServices from "../services/userServices";
import { NewUser } from "../types/userTypes"

async function createUser(req: Request, res: Response) {
    const { email, password, confirm }: NewUser = req.body;

    await userServices.checkEmailAvailability(email)
    await userServices.confirmPassword(password, confirm)
    
    const secret = await userServices.hidePassword(password);
    await userServices.createUser(email, secret);
    const user = await userServices.getUserByEmail(email)

    return res.status(201).send({id: user.id, email: user.email})
}

export {
    createUser
}