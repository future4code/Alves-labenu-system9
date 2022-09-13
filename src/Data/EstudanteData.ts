import { Estudante } from "../model/Estudante";
import { BaseDataBase } from "./BaseDataBase";

export class EstudanteData extends BaseDataBase{


  async criarEstudante(estudante: Estudante){

    await this.getConnetion().insert({
      id: estudante.getidUsuario(),
      nome: estudante.getName(), 
      email: estudante.getEmail(), 
      data_nasc: estudante.getDataNasc(), 
      turma_id: estudante.getTurmaId(), 
    }).into("Estudante")

    return `Estudante ${estudante.getName()} criado com sucesso.`
  }

  async selectEstudantesEmail(email: string) {
    const result = await this.getConnetion()
      .select("*")
      .from("Estudante")
      .where({ email });

    return result[0];
  }
  async selectEstudantesNome(nome: string): Promise<Estudante | undefined> {
    const result = await this.getConnetion()
      .select("*")
      .from("Estudante")
      .where({ nome });

      if(!result.length) {
        return undefined
      }
    
      return new Estudante(result[0].nome,
    result[0].email, result[0].turma_id, result[0].data_nasc, result[0].id)
  }
  async trocaEstudanteTurma(id: string, turmaId:string): Promise<string>{
    await this.getConnetion().update({turma_id:turmaId}).into("Estudante").where({id:id})
    return `Estudante ${id} transferido para a turma ${turmaId}`
  }

}

export default EstudanteData;

