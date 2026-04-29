import { PersonArrayRepository } from "../repositories/person.repository";
import { CreatePersonDTO } from "../dtos/person.dto";
import { HttpException } from "../exception/http-exception";

const personRepo = new PersonArrayRepository();

export class PersonService {
    getOnePerson(id:string) {
        if(!id){
            throw new HttpException(400, "ID is required");
        }
        const person = personRepo.getOne(id);
        if(!person){
            throw new HttpException(404, "Person not found");
        }
        //map/transform data if needed
        person.name = person.name.toUpperCase(); // example transformation

        return person;
    }
}