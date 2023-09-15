import express, { Request, Response } from "express";
import { Person } from "protocols/person.protocol";
import { personServices } from "../services/person.services";

export async function getRandomPerson(req: Request, res: Response){
    try{
        const selectPerson: Person = await personServices.selectRandomPerson();
        res.send(selectPerson);
    }catch(error){
        console.log(error);
        res.status(500).send("Internal server error!");
    }

}