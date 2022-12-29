import { Request, Response } from "express";

export default function errorHandler(error: Error, req: Request, res: Response) {
    console.log(error);

    const status = {
        bad_request: 400,
        unauthorized: 401,
        not_found: 404,
        not_acceptable: 406,
        conflict: 409,
        unprocessable_entity: 422
    }

    //const {type, message} = error;

    res.status(500).send(`Unexpected server error: ${error}.`)
}