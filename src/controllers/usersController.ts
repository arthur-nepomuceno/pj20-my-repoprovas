import { Request, Response } from "express";
import * as userServices from "../services/userServices";
import { NewUser } from "../types/userTypes"

async function createUser(req: Request, res: Response) {
    const { email, password, confirm }: NewUser = req.body;

    //Serviços:
    //verificar se o email está disponível
    await userServices.confirmPassword(password, confirm)
    //criptografar a senha antes de registrar no banco de dados
    //registrar usuário no banco de dados


    return res.status(201).send('crete user ok')
}

export {
    createUser
}