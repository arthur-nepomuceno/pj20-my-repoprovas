import { Request, Response } from "express";
import * as userServices from "../services/userServices"

async function createUser(req: Request, res: Response) {

    //Serviços:
    //verificar a confirmação de senha
    //criptografar a senha antes de registrar no banco de dados
    //registrar usuário no banco de dados

    
    return res.status(201).send('crete user ok')
}

export {
    createUser
}