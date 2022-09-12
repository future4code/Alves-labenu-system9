import { TurmaData } from "./../Data/TurmaData";
import { Request, Response } from "express";
import { MissingFields } from "../error/MissingFields";
import { Turma } from "../model/Turma";

export class TurmaEndpoint {
  async create(req: Request, res: Response) {
    try {
      const { nome } = req.body;

      if (!nome) {
        throw new MissingFields();
      }
      const turma = new Turma(nome);
      const turmaData = new TurmaData();

      const response = await turmaData.createTurma(turma)

      res.status(201).send(response)
    } catch (error: any) {
      res.status(error.statusCode || 500 ).send({ message: error.message || error.sqlMessage });
    }
  }
  async ativa(req:Request, res:Response){
    try {
      const turmadata = new TurmaData()

      const turmasAtivas = await turmadata.selectAtivas();

      res.status(200).send(turmasAtivas)
    } catch (error:any) {
      res.status(error.statusCode || 500 ).send({ message: error.message || error.sqlMessage });
    }
  }
}
