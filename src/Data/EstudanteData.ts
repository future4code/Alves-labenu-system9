import { Estudante } from "../model/Estudante";
import { BaseDataBase } from "./BaseDataBase";

export class EstudanteData extends BaseDataBase{

  async criarEstudante(estudante: Estudante){

    await this.getConnetion().insert({
      id: estudante.getId(),
      nome: estudante.getNome(), 
      email: estudante.getEmail(), 
      data_nasc: estudante.getDataNasc(), 
      turma_id: estudante.getTurmaId(), 
    }).into("Estudante")

    return `Estudante ${estudante.getNome()} criado com sucesso.`
  }

  async busca(nome: string){
    const result = await this.getConnetion()
    .select("*")
    .from("Estudante")
    .where({nome})

    return result
  }
}