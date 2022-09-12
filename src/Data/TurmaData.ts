import { Turma } from "../model/Turma";
import BaseDataBase from "./BaseDataBase";

export class TurmaData extends BaseDataBase {
  async createTurma(turma: Turma): Promise<string> {
    await this.getConnetion().insert({
      id: turma.getId(),
      nome: turma.getNome(),
    }).into("Turma");

    return `Turma ${turma.getNome()} criada com sucesso!`;
  }
  async selectAtivas():Promise<Turma[]> {
    const result = await this.getConnetion()
      .select("*")
      .from("Turma")
      .where("modulo", ">", 0);

      const todasTurmas = result.map((turma)=>{
        return new Turma(turma.nome, turma.turmaId, turma.modulo) 
      })
    return todasTurmas;
  }
}
