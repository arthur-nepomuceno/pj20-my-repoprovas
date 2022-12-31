import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config()

async function createToken(id: number, email: string) {
    const key = process.env.JWT_SECRET;
    const token = jsonwebtoken.sign({ id, email }, key, { expiresIn: '1 hour' });
    return token;
}

export {
    createToken
}