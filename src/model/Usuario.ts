export class Usuario {
    constructor(
        public idUsuario:string,
        public name: string,
        private email: string,
        private dataNasc: Date,
        private turmaId:string) {

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
}