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
getHobby(){
    return this.hobbyId
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
setHobby(){
    return this.hobbyId
}


}