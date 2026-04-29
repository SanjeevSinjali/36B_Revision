import { Request, Response, Router } from "express";
import { PersonController } from "../controllers/person.controller";
const personController = new PersonController();
const router = Router();

const data = Router();

//same as app.get()
router.get(
    "/",
    personController.getAllPerson
)

router.post(
    "/",
    personController.createPerson
)

export default router;