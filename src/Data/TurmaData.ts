import { Turma } from "../model/Turma";

import { BaseDataBase } from "./BaseDataBase";

export class TurmaData extends BaseDataBase{

  async criarTurma(turma: Turma): Promise<string>{

    await this.getConnetion().insert({
      id: turma.getId(),
      nome: turma.getNome()
    }).into("Turma")

    return `Turma ${turma.getNome()} criada com sucesso.`
  }

  async turmasAtivas(){
    const result = await this.getConnetion().select("*")
    .from("Turma")
    .where("modulo", ">", 0)

    return result
  }

  async definirModulo(id: string, modulo:number){
    await this.getConnetion()
    .update({modulo})
    .into("Turma")
    .where({id})

    return "O módulo foi alterado com sucesso"
  }
}

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

