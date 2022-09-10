
export class Turma{
  private id: string = String(Date.now())
  private nome: string

  constructor(nome: string){
    this.nome = nome
  }

  public getId(){
    return this.id
  }
  
  public getNome(){
    return this.nome
  }
}