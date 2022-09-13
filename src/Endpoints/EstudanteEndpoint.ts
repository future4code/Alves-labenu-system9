import { TurmaData } from "./../Data/TurmaData";
import { Request, Response } from "express";
import { EstudanteData } from "../Data/EstudanteData";
import { Estudante } from "../model/Estudante";
import { EmailJaCadastrado } from "../error/emailJaCacastrado";
import { MissingFields } from "../error/MissingFields";

export class EstudanteEndpoint {
  //CRIAR ALUNO
  async create(req: Request, res: Response) {
    try {
      const { nome, email, dataNasc, turmaId } = req.body;

      if (!nome || !email || !dataNasc || !turmaId) {
        throw new Error(
          "Dados requeridos incompletos, você deve preencher todos os campos"
        );
      }
      const estudanteData = new EstudanteData();

      const turmaData = new TurmaData();

      const verificaEmail = await estudanteData.selectEstudantesEmail(email);

      if (verificaEmail) {
        throw new EmailJaCadastrado();
      }

      const [day, month, year] = dataNasc.split("/");
      const dateOfBirth: Date = new Date(`${year}-${month}-${day}`);

      const id = Date.now().toString();

      const estudante = new Estudante(id, nome, email, dateOfBirth, turmaId);

      const response = await estudanteData.criarEstudante(estudante);

      res.status(201).send({ message: response });
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  }

  //BUSCAR USUARIO
  async search(req: Request, res: Response) {
    try {
      const { nome } = req.body;

      const estudanteData = new EstudanteData();

      const estudantePorNome = await estudanteData.selectEstudantesNome(nome);

      if (!estudantePorNome) {
        throw new MissingFields();
      }

      res.status(201).send({ message: estudantePorNome });
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  }
  async mudarTurma(req: Request, res: Response) {
    try {
      const { email } = req.params;
      const { TurmaId } = req.body;

      const estudanteData = new EstudanteData();

      const verificaEstudanteEmail = await estudanteData.selectEstudantesEmail(
        email
      );

      if (!verificaEstudanteEmail) {
        throw new Error("Usuario não encontrado");
      }

      const turmaData = new TurmaData();

      const verificaIdTurma = await turmaData.buscaTurmaId(TurmaId);

      if (!verificaIdTurma) {
        throw new Error("Turma não encontrada");
      }

      const response = await estudanteData.trocaEstudanteTurma(email, TurmaId);

      res.status(200).send({ message: response });
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  }
}
