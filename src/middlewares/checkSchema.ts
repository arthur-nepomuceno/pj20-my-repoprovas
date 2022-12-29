import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";

export default function checkSchema(schema: ObjectSchema){
    
    return (req: Request, res: Response, next: NextFunction) => {
        const body = req.body;
        const check = schema.validate(body);

        if(check.error) {
            return res.status(422).send(check.error.message);
        }

        next();
    }
}