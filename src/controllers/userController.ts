import { Request, Response } from "express";
import * as userServices from "../services/userServices";
import { NewUser } from "../types/userTypes";
import { createToken } from "../utilities/token";

async function createUser(req: Request, res: Response) {
    const { email, password, confirm }: NewUser = req.body;

    await userServices.checkEmailAvailability(email)
    await userServices.confirmPassword(password, confirm)

    const secret = await userServices.hidePassword(password);
    await userServices.createUser(email, secret);
    const user = await userServices.getUserByEmail(email)

    return res.status(201).send({ id: user.id, email: user.email })
}

async function loginUser(req: Request, res: Response) {
    const { email, password } = req.body;

    await userServices.checkEmailRegister(email);

    await userServices.checkPassword(email, password);

    const { id } = await userServices.getUserByEmail(email);
    const token = await createToken(id, email)

    return res.status(200).send({ token })
}

export {
    createUser,
    loginUser
}