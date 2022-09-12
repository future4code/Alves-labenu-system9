
export class Turma {
  private turmaId: string | undefined = Date.now().toString();
  private name: string | undefined
  private modulo: string | undefined

  constructor(name: string, turmaId?:string, modulo?:string) {
    this.name = name;
    this.turmaId = turmaId;
    this.modulo = modulo;

  }
  public getId() {
    return this.turmaId
  }
  public getNome() {
return this.name
  }
}

