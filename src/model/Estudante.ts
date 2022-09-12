
export class Estudante extends Usuario {
  constructor(
    id:string,
    name: string,
    email: string,  
      dataNasc: Date,
    turmaId: string,
  ) {
    super(id, name, email, dataNasc, turmaId);
  }
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
  

