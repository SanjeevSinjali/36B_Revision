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

    createPerson(CreatePersonDTO: CreatePersonDTO){
        //business logic
        if(CreatePersonDTO.age < 18){
            throw new HttpException(400, "Age must be at least 18");
        }
        const newPerson = personRepo.create({
            id: Date.now(), // example id generation
            ...CreatePersonDTO
        });
        newPerson.age = Number(newPerson.age); //example transformation

        return newPerson;
    }
}