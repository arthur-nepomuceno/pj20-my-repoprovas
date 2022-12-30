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

async function loginUser(req: Request, res: Response) {
    //receber email e senha pelo req.body
    //verificar se o email existe no banco de dados
    //verificar se a senha fornecida é igual a senha registrada
    //gerar um token a partir dos dados do usuário
    //retornar token
}

export {
    createUser,
    loginUser
}