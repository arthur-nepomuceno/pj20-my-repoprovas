import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config()

async function createToken(id: number, email: string) {
    const key = process.env.JWT_SECRET;
    const token = jsonwebtoken.sign({ id, email }, key);
    return token;
}

async function checkToken(token: string) {
    const key = process.env.JWT_SECRET;
    const check = jsonwebtoken.verify(token, key);
    return check
}

export {
    createToken,
    checkToken
}