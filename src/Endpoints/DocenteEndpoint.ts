import { TurmaData } from "./../Data/TurmaData";
import { Request, response, Response } from "express";
import { MissingFields } from "../error/MissingFields";
import DocenteData from "../Data/DocenteData";
import { Docente } from "../model/Docente";

export class DocenteEndpoint {
  async create(req: Request, res: Response) {
    try {
      const { nome, email, dataNasc, TurmaId } = req.body;
      if (!nome || !email || !dataNasc || TurmaId) {
        throw new MissingFields();
      }

      const turmaData = new TurmaData();
      const docenteData = new DocenteData();

      const verificaEmail = await docenteData.selectDocentesEmail(email);

      if (verificaEmail) {
        throw new Error("Email já cadastrado");
      }

      const [day, month, year] = dataNasc.split("/");
      const dateOfBirth: Date = new Date(`${year}-${month}-${day}`);

      const id = Date.now().toString();

      const docente = new Docente(id, nome, email, dateOfBirth, TurmaId);

      const response = await docenteData.insertUser(docente);
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  }
  async search(req: Request, res: Response) {
    try {
      const docenteData = new DocenteData();

      const todosDocentes = await docenteData.selectDocentes();

      res.status(200).send(todosDocentes);
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  }
  async mudarTurma(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { TurmaId } = req.body;

      const docenteData = new DocenteData();

      const verificaDocente = await docenteData.selectDocenteId(id);

      if (!verificaDocente) {
        throw new Error("Doncente não cadastrado");
      }

      const verificaTurma = await docenteData.mudarDocenteTurma(id, TurmaId);

      if (!verificaTurma) {
        throw new Error("Turma inexistente");
      }

      const response = await docenteData.mudarDocenteTurma(id, TurmaId);

      res.status(200).send({ message: response });
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  }
}
