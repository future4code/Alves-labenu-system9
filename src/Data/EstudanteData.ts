import { Estudante } from "../model/Estudante";
import BaseDataBase from "./BaseDataBase";

class EstudanteData extends BaseDataBase {
  async insertUser(estudante: Estudante) {
    await this.getConnetion()
      .insert({
        idUsuario: estudante.getidUsuario(),
        name: estudante.getName(),
        email: estudante.getEmail(),
        dataNasc: estudante.getDataNasc(),
        turmaId: estudante.getTurmaId(),
      })
      .into("Estudante");

    return `Estudante com nome ${estudante.getName()} criado com sucesso`;
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
