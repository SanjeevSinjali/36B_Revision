import { Request, Response } from "express";
import { data } from "../models/person.model";

export class PersonController {
    getALlPerson(arg0: string, getALlPerson: any) {
        throw new Error("Method not implemented.");
    }
    // 1. GET - get all
    async getAllPerson(req: Request, res: Response) {
        try {
            const someVar: any = {};

            // simulate error
            someVar.name.getAll();

            return res.status(200).json(data);

        } catch (err: any) {
            return res.status(500).json({ message: "Failed to get" });
        }
    }
}