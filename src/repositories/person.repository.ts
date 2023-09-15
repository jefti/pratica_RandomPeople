import { Person } from "protocols/person.protocol";
import { connection } from "../database/database";

async function getIdLists() {
    const Select = await connection.query(`SELECT * FROM people;`);
    return Select.rows;
}

export const personRepository = {getIdLists};