import { z } from "zod";
import { PersonSchema } from "../controllers/person.controller";

// DTO - Data transfe object (can be any input/ouput to client)
export const CreatePersonDTO = PersonSchema.omit({ id: true }); 
// for create, id is not required
export type CreatePersonDTO = z.infer<typeof CreatePersonDTO>;