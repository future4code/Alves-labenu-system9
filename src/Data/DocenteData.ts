import { Docente } from "./../model/Docente";
import { BaseDataBase } from "./BaseDataBase";

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

  async selectDocentesEmail(email: string) {
    const result = await this.getConnetion()
      .select("*")
      .from("Estudante")
      .where({ email });

    return result[0];
  }
  async selectDocentes(): Promise<Docente[]> {
    const result = await this.getConnetion().select("*").from("Docente");

    const tipoDocente = result.map((docente) => {
      return new Docente(
        docente.id,
        docente.name,
        docente.email,
        docente.dataNasc,
        docente.TurmaId
      );
    });
    return tipoDocente;
  }
  async selectDocenteId(id: string): Promise<Docente | undefined> {
    const result = await this.getConnetion()
      .select("*")
      .from("Docente")
      .where({ id });

    if (!result.length) {
      return undefined;
    }

    return new Docente(
      result[0].nome,
      result[0].email,
      result[0].dataNasc,
      result[0].turmaId,
      result[0].id
    );
  }
  async mudarDocenteTurma(id: string, TurmaId: string): Promise<string> {
    await this.getConnetion()
      .update({ turma_id: TurmaId })
      .into("Docente")
      .where({ id: id });

    return `Docente com id ${id} atualizado para turma ${TurmaId}`;
  }
}

export default DocenteData;
