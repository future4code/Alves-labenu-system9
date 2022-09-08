import { Usuario } from "./Usuario";

export class Estudante extends Usuario {
    idUsuario:string;
    name: string;
     email: string;
     dataNasc: Date;
    turmaId:string;
    hobbyId:string;

constructor(
    idUsuario:string,
    name: string,
    email: string,
    dataNasc: Date,
   turmaId:string,
   hobbyId:string) {
    super(idUsuario, name, email, dataNasc, turmaId)
    this.idUsuario = idUsuario;
    this.name = name;
    this.email = email;
    this.dataNasc = dataNasc;
    this.turmaId = turmaId;
    this.hobbyId = hobbyId
   }
}