import { Request, Response} from "express";
import { data } from "../models/person.model";

// const data = [
//     {id: 1, name: 'John', age: 30},
//     {id: 2, name: 'Jane', age: 25},
//     {id: 3, name: 'Bob', age: 35},
// ]
export class PersonController{
    //1.GET - get all
    async getALlPerson(req: Request, res: Response){
        //later paginated results
        return res.status(202).json(data);
    }
}

