export class Turma {
    turmaId:string;
    name: string;
    idEstudantes: string;
    idDocentes: string;
    modulo:number;
   

constructor(
    turmaId:string,
    name: string,
    idEstudantes: string,
    idDocentes: string,
    modulo:number) {
    
    this.turmaId= turmaId;
    this.name = name;
    this.idEstudantes = idEstudantes;
    this.idDocentes = idDocentes;
    this.modulo= modulo
    
   }
}