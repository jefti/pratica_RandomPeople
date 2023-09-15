import { getRandomPerson } from "../controller/person.controller";
import express from "express"

const router = express.Router();

router.get("/person",getRandomPerson);

export default router;