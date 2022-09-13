import { Request, Response } from "express";
import { TurmaData } from "../Data/TurmaData";
import { MissingFields } from "../error/MissingFields";
import { Turma } from "../model/Turma";

export class TurmaEndpoint {
  //CRIAR TURMA
  async create(req: Request, res: Response) {
    try {
      const { nome } = req.body;

      if (!nome) {
        throw new MissingFields();
      }

      const turma = new Turma(nome);
      const turmaData = new TurmaData();

      const response = await turmaData.createTurma(turma);

      res.status(201).send({ message: response });
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  }

  //BUSCAR TURMAS ATIVAS
  async ativa(req: Request, res: Response) {
    try {
      const turmaData = new TurmaData();

      const turmasAtivas = await turmaData.selectAtivas();

      res.status(201).send({ message: turmasAtivas });
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  }

  //DEFINIR MODULO
  async modificaModulo(req: Request, res: Response) {
    try {
      const { id, modulo } = req.body;

      if (!modulo) {
        throw new Error("modulo inexistente");
      }
      if (modulo < 0 || modulo > 6) {
        throw new Error("só existem 6 módulos");
      }

      const turmaData = new TurmaData();

      const moduloRedefinido = await turmaData.createModulo(id, modulo);

      res.status(201).send({ message: moduloRedefinido });
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  }
}
