import { Usuario } from "./Usuario";

export class Docente extends Usuario {
    idUsuario:string;
    name: string;
    email: string;
    dataNasc: Date;
    turmaId:string;
    especialidade:Especialidade;

constructor(
    idUsuario:string,
    name: string,
    email: string,
    dataNasc: Date,
   turmaId:string,
  especialidade:Especialidade) {
    super(idUsuario, name, email, dataNasc, turmaId)
    this.idUsuario = idUsuario;
    this.name = name;
    this.email = email;
    this.dataNasc = dataNasc;
    this.turmaId = turmaId;
    this.especialidade = especialidade;
   }
   getidUsuario(){
    return this.idUsuario
}
getName(){
    return this.name
}
getEmail(){
    return this.email
}
getDataNasc(){
    return this.dataNasc
}
getTurmaId(){
    return this.turmaId
}
getEspecialidade(){
    return this.especialidade
}

setidUsuario(){
    return this.idUsuario
}
setName(){
    return this.name
}
setEmail(){
    return this.email
}
setDataNasc(){
    return this.dataNasc
}
setTurmaId(){
    return this.turmaId
}
setEspecialidade(){
    return this.especialidade
}
}