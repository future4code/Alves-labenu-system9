
import { Estudante } from "../model/Estudante";
import BaseDataBase from "./BaseDataBase";

class EstudanteData extends BaseDataBase {

    async insertUser(estudante: Estudante): Promise<void> {
       
        await this.getConnetion()
            .insert({
                idUsuario:estudante.getidUsuario(),
                name: estudante.getName(),
                email: estudante.getEmail(),
                dataNasc:estudante.getDataNasc(),
                turmaId:estudante.getTurmaId(),
                hobbyId:estudante.getHobby(),
            })
            .into("Estudante")
    }

    async selectEstudantes(){
        const result = await this.getConnetion().select("*").from("Estudante")

        return result
    }
}

export default EstudanteData