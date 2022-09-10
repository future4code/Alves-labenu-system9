import { Docente } from './../model/Docente';
import BaseDataBase from "./BaseDataBase";

class EstudanteData extends BaseDataBase {

    async insertUser(docente: Docente): Promise<void> {
       
        await this.getConnetion()
            .insert({
                idUsuario:docente.getidUsuario(),
                name: docente.getName(),
                email: docente.getEmail(),
                dataNasc:docente.getDataNasc(),
                turmaId:docente.getTurmaId(),
                hobbyId:docente.getEspecialidade(),
            })
            .into("Estudante")
    }

    async selectEstudantes(){
        const result = await this.getConnetion().select("*").from("Estudante")

        return result
    }
}

export default EstudanteData