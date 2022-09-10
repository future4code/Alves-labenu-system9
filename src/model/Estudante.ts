export class Estudante {
    private id: string = String(Date.now())
    private nome: string;
    private email: string;
    private dataNasc: Date;
    private turmaId:string;

    constructor(
        nome: string,
        email: string,
        dataNasc: Date,
        turmaId:string,) {
        this.nome = nome;
        this.email = email;
        this.dataNasc = dataNasc;
        this.turmaId = turmaId;
   }

    getId(){
        return this.id
    }

    getNome(){
        return this.nome
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

}