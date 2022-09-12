import { Docente } from "./../model/Docente";
import BaseDataBase from "./BaseDataBase";

class DocenteData extends BaseDataBase {
  async insertUser(docente: Docente): Promise<void> {
    await this.getConnetion()
      .insert({
        idUsuario: docente.getidUsuario(),
        name: docente.getName(),
        email: docente.getEmail(),
        dataNasc: docente.getDataNasc(),
        turmaId: docente.getTurmaId(),
      })
      .into("Docente");
  }

  async selectDocentes() {
    const result = await this.getConnetion().select("*").from("Estudante");

    return result;
  }
}

export default DocenteData;
