import { Person } from "protocols/person.protocol";
import { personRepository } from "../repositories/person.repository";

async function selectRandomPerson (): Promise<Person> {
    const idList = await personRepository.getIdLists();
    const indiceAleatorio = Math.floor(Math.random() * idList.length);
    const resp: Person = idList[indiceAleatorio];
    return resp;
}

export const personServices = {selectRandomPerson};