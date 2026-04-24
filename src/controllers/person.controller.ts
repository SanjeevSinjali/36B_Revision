import { Request, Response } from "express";
import { data } from "../models/person.model";
import { HttpException } from "../exception/http-exception";


export class PersonController {
    getALlPerson(arg0: string, getALlPerson: any) {
        throw new Error("Method not implemented.");
    }
    // 1. GET - get all
    async getAllPerson(req: Request, res: Response) {
        try {
            const someVar: any = {};
            //implement exception handling
            if (!someVar.name) {
                throw new HttpException(400, "Name is required");
            }
            // simulate error
            someVar.name.getAll();
            return res.status(200).json(data);
        } catch (err: Error | unknown) {
            return res.status(500).json({ message: "Failed to get" });
        }
    }
}