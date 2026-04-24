import { Request, Response } from "express";
import { data } from "../models/person.model";
import { HttpException } from "../exception/http-exception";
import { ApiResponseHelper } from "../utils/api-response";


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
            //return res.status(200).json(data);
            return ApiResponseHelper.success(res,data); //consistent api response
        } catch (err: Error | unknown | any) {
            // return res.status(500).json({ message: "Failed to get" });
            return ApiResponseHelper.error(
                res,
                err?.message || "Failed to get",
                err.status || 500
            );
        }
    }
}